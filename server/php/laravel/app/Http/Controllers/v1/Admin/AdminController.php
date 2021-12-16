<?php

namespace App\Http\Controllers\v1\Admin;

use App\Code;
use App\Http\Requests\v1\SubmitAdminRequest;
use App\Models\v1\Admin;
use App\Models\v1\AdminLog;
use App\Models\v1\AuthGroup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\v1\AdminAuthGroup;
use Illuminate\Support\Facades\Storage;

/**
 * @group admin
 * 管理员管理
 * Class AdminController
 * @package App\Http\Controllers\v1\Admin
 */
class AdminController extends Controller
{
    /**
     * AdminList
     * 管理员列表
     * @param Request $request
     * @queryParam  title string 管理员账号
     * @queryParam  authGroup string 管理组ID
     * @queryParam  limit int 每页显示条数
     * @queryParam  sort string 排序
     * @queryParam  page string 页码
     * @return string
     */
    public function list(Request $request)
    {
        $q = Admin::query();
        $limit = $request->limit;
        if ($request->has('sort')) {
            $sortFormatConversion = sortFormatConversion($request->sort);
            $q->orderBy($sortFormatConversion[0], $sortFormatConversion[1]);
        }
        if ($request->has('state')) {
            if ($request->state) {
                $q->where('state', $request->state);
            }
        }
        if ($request->has('portrait')) {
            if ($request->portrait) {
                $q->where('portrait', '!=', NULL);
            } else {
                $q->where('portrait', NULL);
            }
        }
        $q->queryTitle($request->title);
        $paginate = $q->with('AuthGroup')->paginate($limit);
        return resReturn(1, $paginate);
    }

    /**
     * AdminCreate
     * 创建管理员
     * @param SubmitAdminRequest $request
     * @queryParam  user_id int __('migrations.admin.user_id')
     * @queryParam  name string __('migrations.admin.name')
     * @queryParam  real_name string __('migrations.admin.real_name')
     * @queryParam  email string __('migrations.admin.email')
     * @queryParam  cellphone int __('migrations.admin.cellphone')
     * @queryParam  password string __('migrations.admin.password')
     * @queryParam  portrait int __('migrations.admin.portrait')
     * @queryParam  state int __('migrations.admin.state')
     * @return string
     */
    public function create(SubmitAdminRequest $request)
    {
        $Admin = new Admin;
        $Admin->name = $request->name;
        $Admin->real_name = $request->real_name ?? '';
        $Admin->email = $request->email ?? '';
        $Admin->cellphone = $request->cellphone ?? '';
        $Admin->portrait = $request->portrait ?? '';
        $Admin->password = bcrypt($request->password);
        $Admin->state = $request->state == Admin::ADMIN_STATA_NORMAL ? Admin::ADMIN_STATA_NORMAL : Admin::ADMIN_STATA_FORBID;
        $Admin->save();
        if ($request->has('auth_group')) {
            foreach ($request->auth_group as $authGroup) {
                $AdminAuthGroup = new AdminAuthGroup();
                $AdminAuthGroup->admin_id = $Admin->id;
                $AdminAuthGroup->auth_group_id = $authGroup;
                $AdminAuthGroup->save();
            }
        }
        return resReturn(1, '添加成功');
    }

    /**
     * AdminEdit
     * 保存管理员
     * @param $id
     * @param SubmitAdminRequest $request
     * @queryParam  id int 管理员ID
     * @queryParam  name string 管理员账号
     * @queryParam  email string 邮箱地址
     * @queryParam  cellphone int 手机号
     * @queryParam  portrait string 头像地址
     * @queryParam  password string 密码
     * @return string
     */
    public function edit($id, SubmitAdminRequest $request)
    {
        $Admin = Admin::find($id);
        $Admin->real_name = $request->real_name ?? '';
        $Admin->email = $request->email ?? '';
        $Admin->cellphone = $request->cellphone ?? '';
        $Admin->portrait = $request->portrait ?? '';
        $Admin->state = $request->state == Admin::ADMIN_STATA_NORMAL ? Admin::ADMIN_STATA_NORMAL : Admin::ADMIN_STATA_FORBID;
        $Admin->save();
        if ($request->has('auth_group')) {
            AdminAuthGroup::where('admin_id', $Admin->id)->delete();
            foreach ($request->auth_group as $authGroup) {
                $AdminAuthGroup = new AdminAuthGroup();
                $AdminAuthGroup->admin_id = $Admin->id;
                $AdminAuthGroup->auth_group_id = $authGroup;
                $AdminAuthGroup->save();
            }
        }
        return resReturn(1, '修改成功');
    }

    /**
     * AdminPasswork
     * 修改管理员密码
     * @param $id
     * @param Request $request
     * @queryParam  id int 管理员ID
     * @queryParam  password string 新密码
     * @return string
     */
    public function password($id, Request $request)
    {
        if ($request->has('password')) {
            return resReturn(0, '请输入密码', Code::CODE_PARAMETER_WRONG);
        }
        $Admin = Admin::find($id);
        $Admin->password = bcrypt($request->password);
        $Admin->save();
        return resReturn(1, '修改成功');
    }

    /**
     * AdminDestroy
     * 删除管理员
     * @param $id
     * @queryParam  id int 管理员ID
     * @return string
     */
    public function destroy($id)
    {
        if (!$id) {
            return resReturn(0, '参数错误', Code::CODE_PARAMETER_WRONG);
        }
        $Admin = Admin::find($id);
        Storage::delete('public/image/avatar/' . $Admin->portrait);    //删除头像
        $Admin->delete();
        return resReturn(1, '删除成功');
    }

    /**
     * Display a listing of the auth group.
     *
     * @param  $request
     * @return \Illuminate\Http\Response
     */
    public function getAuthGroupList(Request $request)
    {
        $q = AuthGroup::query();
        $res = $q->get();
        return resReturn(1, $res);
    }

    /**
     * Display a listing of the Syslog.
     *
     * @param  $request
     * @return \Illuminate\Http\Response
     */
    public function log(Request $request)
    {
        AdminLog::$withoutAppends = false;
        $q = AdminLog::query();
        if ($request->name) {
            $q->where('name', $request->name);
        }
        $limit = $request->limit;
        $q->orderBy('id', 'DESC');
        $paginate = $q->paginate($limit);
        return resReturn(1, $paginate);
    }
}
