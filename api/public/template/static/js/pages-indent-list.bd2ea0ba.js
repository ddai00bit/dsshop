(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-indent-list"],{1298:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.code=c,e.detail=s,e.foreman=d,e.getList=o,e.indent=r;var a=i(n("c290"));function o(t,e,n){a.default.setGet("groupPurchase",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}function s(t,e,n,i){a.default.setGet("groupPurchase/"+t,e,(function(t){n(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}function d(t,e,n){a.default.setGet("groupPurchaseForeman/"+t,{},(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}function r(t,e,n){a.default.setGet("groupPurchaseIndent/"+t,{},(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}function c(t,e,n){a.default.setPost("groupPurchaseCode",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}},"14d7":function(t,e,n){"use strict";var i=n("699f"),a=n.n(i);a.a},"1ae9":function(t,e,n){var i=n("3a73");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("67a3da69",i,!0,{sourceMap:!1,shadowMode:!1})},"2f6d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 边框颜色 */uni-page-body[data-v-7ff62763], .content[data-v-7ff62763]{background:#f8f8f8;height:100%}.swiper-box[data-v-7ff62763]{height:calc(100vh - 40px)}.list-scroll-content[data-v-7ff62763]{height:100%}.navbar[data-v-7ff62763]{display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-7ff62763]{flex:1;display:flex;justify-content:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-7ff62763]{color:#fa436a}.navbar .nav-item.current[data-v-7ff62763]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-7ff62763]{height:auto}.order-item[data-v-7ff62763]{display:flex;flex-direction:column;padding-left:%?30?%;background:#fff;margin-top:%?16?%\n  /* 多条商品 */\n  /* 单条商品 */}.order-item .i-top[data-v-7ff62763]{display:flex;align-items:center;height:%?80?%;padding-right:%?30?%;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-7ff62763]{flex:1}.order-item .i-top .del-btn[data-v-7ff62763]{padding:%?10?% 0 %?10?% %?36?%;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-7ff62763]:after{content:"";width:0;height:%?30?%;border-left:1px solid #dcdfe6;position:absolute;left:%?20?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box[data-v-7ff62763]{height:%?160?%;padding:%?20?% 0;white-space:nowrap}.order-item .goods-box .goods-item[data-v-7ff62763]{width:%?120?%;height:%?120?%;display:inline-block;margin-right:%?24?%}.order-item .goods-box .goods-img[data-v-7ff62763]{display:block;width:100%;height:100%}.order-item .goods-box-single[data-v-7ff62763]{display:flex;padding:%?20?% 0}.order-item .goods-box-single .goods-img[data-v-7ff62763]{display:block;width:%?120?%;height:%?120?%}.order-item .goods-box-single .right[data-v-7ff62763]{flex:1;display:flex;flex-direction:column;padding:0 %?30?% 0 %?24?%;overflow:hidden}.order-item .goods-box-single .right .title[data-v-7ff62763]{font-size:%?30?%;color:#303133;line-height:1}.order-item .goods-box-single .right .attr-box[data-v-7ff62763]{font-size:%?26?%;color:#909399;padding:%?10?% %?12?%}.order-item .goods-box-single .right .price[data-v-7ff62763]{font-size:%?30?%;color:#303133}.order-item .goods-box-single .right .price[data-v-7ff62763]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .price-box[data-v-7ff62763]{display:flex;justify-content:flex-end;align-items:baseline;padding:%?20?% %?30?%;font-size:%?26?%;color:#909399}.order-item .price-box .num[data-v-7ff62763]{margin:0 %?8?%;color:#303133}.order-item .price-box .price[data-v-7ff62763]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-7ff62763]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .action-box[data-v-7ff62763]{display:flex;justify-content:flex-end;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.order-item .action-btn[data-v-7ff62763]{width:%?160?%;height:%?60?%;margin:0;margin-left:%?24?%;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px;margin-bottom:%?10?%}.order-item .action-btn[data-v-7ff62763]:after{border-radius:100px}.order-item .action-btn.recom[data-v-7ff62763]{background:#fff9f9;color:#fa436a}.order-item .action-btn.recom[data-v-7ff62763]:after{border-color:#f7bcc8}\n/* load-more */.uni-load-more[data-v-7ff62763]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-7ff62763]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-7ff62763]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-7ff62763]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-7ff62763]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-7ff62763 1.56s ease infinite;animation:load-data-v-7ff62763 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-7ff62763]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-7ff62763]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-7ff62763]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-7ff62763]:nth-child(4){top:11px;left:0}.load1[data-v-7ff62763],\n.load2[data-v-7ff62763],\n.load3[data-v-7ff62763]{height:24px;width:24px}.load2[data-v-7ff62763]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-7ff62763]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-7ff62763]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-7ff62763]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-7ff62763]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-7ff62763]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-7ff62763]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-7ff62763]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-7ff62763]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-7ff62763]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-7ff62763]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-7ff62763]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-7ff62763]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-7ff62763]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-7ff62763{0%{opacity:1}100%{opacity:.2}}.search[data-v-7ff62763]{position:fixed;right:0;top:50%;z-index:995;width:40px;height:40px;display:flex;border-radius:5px}.search .cuIcon-search[data-v-7ff62763]{line-height:40px;margin:0 auto;font-size:%?36?%}.cu-modal[data-v-7ff62763]{z-index:300}.add-btn[data-v-7ff62763]{align-items:center;justify-content:center;height:%?80?%;margin:%?60?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-7ff62763]{background:#f8f8f8}',""]),t.exports=e},3290:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf"),n("a434"),n("99af"),n("d3b7"),n("159b");var a=i(n("c964")),o=i(n("f3f3")),s=n("26cb"),d=i(n("09c2")),r=i(n("d138")),c=i(n("7c97")),f=n("9448"),u=i(n("9e39")),l={components:{uniLoadMore:d.default,empty:r.default,ForemanQrCode:u.default},data:function(){return{CustomBar:0,tabCurrentIndex:0,page:1,modalName:"",swiperTab:!1,loadingType:!1,list:[],navList:[{state:0,text:"全部"},{state:1,text:"待付款"},{state:2,text:"待发货"},{state:3,text:"待收货"},{state:5,text:"已完成"}],foremanShow:!1}},onLoad:function(t){t.state&&(this.tabCurrentIndex=t.state),this.getVerifyPlugin()},onShow:function(){this.loginCheck(),this.loadData()},computed:{},methods:(0,o.default)((0,o.default)({},(0,s.mapMutations)(["loginCheck"])),{},{getVerifyPlugin:function(){var t=this;(0,f.verifyPlugin)(["comment","groupPurchase"],(function(e){e.comment&&t.navList.push({state:10,text:"待评价"}),e.groupPurchase&&t.navList.splice(2,0,{state:12,text:"待成团"})}))},loadData:function(){var t=arguments,e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:"add",a=t.length>1?t[1]:void 0,"refresh"===i&&(e.page=1,e.list=[]),"add"!==i){n.next=9;break}if("nomore"!==e.loadingType){n.next=6;break}return n.abrupt("return");case 6:e.loadingType="loading",n.next=10;break;case 9:e.loadingType="more";case 10:return o=e,n.next=13,c.default.getList({limit:5,page:o.page,index:e.tabCurrentIndex,sort:"+created_at"},(function(t){o.list=o.list.concat(t.data),t.last_page>o.page?(o.page++,o.loadingType="more"):o.loadingType="nomore",o.list.forEach((function(t){switch(t.state){case 1:t.class="text-orange";break;case 2:t.class="text-red";break;case 3:t.class="text-green";break;case 4:t.class="text-brown";break}t.goods_list.forEach((function(t){t.good_sku&&(t.specification="",t.good_sku.product_sku.forEach((function(e){t.specification?t.specification+=e.value+";":t.specification=e.value+";"})),t.specification=t.specification.substr(0,t.specification.length-1))}))}))}));case 13:"refresh"===i&&(o.loading=!1,setTimeout((function(){o.loading=!0}),500),1==a?uni.hideLoading():uni.stopPullDownRefresh());case 14:case"end":return n.stop()}}),n)})))()},tabClick:function(t){this.tabCurrentIndex=t,this.loadData("refresh")},deleteOrder:function(t){var e=this;uni.showModal({title:"提示",content:"是否确认删除订单？",success:function(n){n.confirm&&c.default.destroy(e.list[t].id,(function(n){e.list.splice(t,1),e.$api.msg("删除成功"),uni.hideLoading()}))}})},goPay:function(t){uni.navigateTo({url:"/pages/money/pay?id="+t.id})},cancelOrder:function(t){var e=this;uni.showModal({title:"提示",content:"是否确认取消订单？",success:function(n){n.confirm&&c.default.cancel(t.id,(function(t){e.$api.msg("操作成功"),e.refreshOderList()}))}})},goShowOrder:function(t){uni.navigateTo({url:"/pages/indent/detail?id=".concat(t.id)})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},confirmReceipt:function(t){var e=this;uni.showModal({title:"提示",content:"是否确认收货？",success:function(n){n.confirm&&c.default.receipt(t.id,(function(t){e.$api.msg("操作成功"),e.refreshOderList()}))}})},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},goScore:function(t){uni.navigateTo({url:"/pages/comment/score?id=".concat(t.id)})},refreshOderList:function(){this.loadData("refresh")},goForemanScore:function(){this.foremanShow=!0},changeShow:function(t){this.foremanShow=t}})};e.default=l},"3a73":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 边框颜色 */.image[data-v-714482ab]{width:%?300?%;margin:0 auto}',""]),t.exports=e},4684:function(t,e,n){"use strict";var i=n("1ae9"),a=n.n(i);a.a},"57ce":function(t,e,n){"use strict";n.r(e);var i=n("7fda"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"699f":function(t,e,n){var i=n("2f6d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b82b82b6",i,!0,{sourceMap:!1,shadowMode:!1})},"72b3":function(t,e,n){"use strict";n.r(e);var i=n("9be4"),a=n("fcac");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("14d7");var s,d=n("f0c5"),r=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"7ff62763",null,!1,i["a"],s);e["default"]=r.exports},"7c97":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c290")),o={getList:function(t,e,n){a.default.setGetMessage("goodIndent",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},detail:function(t,e,n){a.default.setGetMessage("goodIndent/detail/"+t,{},"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},create:function(t,e,n){a.default.setPostMessage("goodIndent",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},synchronizationInventory:function(t,e,n){a.default.setPostMessage("goodIndent/synchronizationInventory",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},addShoppingCart:function(t,e,n){a.default.setPostMessage("goodIndent/addShoppingCart",t,"",(function(t){e(t)}),(function(t){}))},clearShoppingCart:function(t,e,n){a.default.setPostMessage("goodIndent/clearShoppingCart",t,"",(function(t){e(t)}),(function(t){}))},pay:function(t,e,n){a.default.setGetMessage("goodIndent/pay/"+t,{},"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},receipt:function(t,e,n){a.default.setPostMessage("goodIndent/receipt/"+t,{},"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},cancel:function(t,e,n){a.default.setPostMessage("goodIndent/cancel/"+t,{},"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},destroy:function(t,e,n){a.default.setPostMessage("goodIndent/destroy/"+t,{},"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},quantity:function(t,e){a.default.setGetMessage("goodIndent/quantity",{},"加载中",(function(e){t(e)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},download:function(t,e,n){a.default.setPost("goodIndent/download/"+t,{},(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=o},"7fda":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i=n("1298"),a={name:"Code",props:{sid:{type:Number,default:0},show:{type:Boolean,default:!1}},data:function(){return{modalShow:this.show,img:""}},watch:{show:function(t){this.modalShow=this.show,this.getCode()},modalShow:function(t){this.$emit("changeShow",t)}},methods:{getCode:function(){var t=this;(0,i.code)({id:t.sid},(function(e){t.img=e}))},hideModal:function(){this.modalShow=!1},stopPrevent:function(){},previewImage:function(){uni.previewImage({urls:[this.img],longPressActions:{success:function(t){},fail:function(t){}}})}}};e.default=a},9448:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.verifyPlugin=o;var a=i(n("c290"));function o(t,e,n){a.default.setPost("verifyPlugin/"+t,{},(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}},"9be4":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniLoadMore:n("09c2").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"navbar"},t._l(t.navList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"nav-item",class:{current:t.tabCurrentIndex==e.state},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(e.state)}}},[t._v(t._s(e.text))])})),1),n("v-uni-view",{staticClass:"list-scroll-content"},[t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"order-item"},[n("v-uni-view",{staticClass:"i-top b-b"},[n("v-uni-text",{staticClass:"time"},[t._v(t._s(e.created_at))]),n("v-uni-text",{staticClass:"state",class:e.class},[t._v(t._s(e.state_show))]),4===e.state||5===e.state||6===e.state||7===e.state?n("v-uni-text",{staticClass:"del-btn yticon icon-iconfontshanchu1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteOrder(i)}}}):t._e()],1),n("v-uni-view",[t._l(e.goods_list,(function(i,a){return n("v-uni-view",{key:a},[n("v-uni-view",{staticClass:"goods-box-single",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goShowOrder(e)}}},[n("v-uni-image",{staticClass:"goods-img",attrs:{src:t._f("smallImage")(i.img),mode:"aspectFill","lazy-load":!0}}),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.name))]),n("v-uni-text",{staticClass:"attr-box clamp"},[t._v(t._s(i.specification))]),n("v-uni-text",[n("v-uni-text",{staticClass:"text-red text-price padding-right"},[t._v(t._s(i.price))]),n("v-uni-text",[t._v("x "+t._s(i.number))])],1)],1)],1),12===e.state?n("v-uni-view",{staticClass:"action-box b-t"},[n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goForemanScore()}}},[t._v("邀请拼单")]),n("foreman-qr-code",{attrs:{sid:i.id,show:t.foremanShow},on:{changeShow:function(e){arguments[0]=e=t.$handleEvent(e),t.changeShow.apply(void 0,arguments)}}})],1):t._e()],1)})),e.remark?n("v-uni-view",{staticClass:"price-box"},[t._v(t._s(e.remark))]):t._e(),n("v-uni-view",{staticClass:"price-box"},[t._v("共"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.goods_list.length))]),t._v("件商品\n\t\t\t\t\t订单总额"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(t._f("1000")(e.total)))]),t._v("元")],1)],2),n("v-uni-view",{staticClass:"action-box b-t"},[1===e.state?[n("v-uni-button",{staticClass:"action-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancelOrder(e)}}},[t._v("取消订单")])]:t._e(),1===e.state?[n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPay(e)}}},[t._v("立即支付")])]:t._e(),3===e.state?[n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmReceipt(e)}}},[t._v("确认收货")])]:t._e(),10===e.state?[n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goScore(e)}}},[t._v("立即评价")])]:t._e()],2)],1)})),n("uni-load-more",{attrs:{status:t.loadingType}})],2)],1)},o=[]},"9e39":function(t,e,n){"use strict";n.r(e);var i=n("f6f3"),a=n("57ce");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4684");var s,d=n("f0c5"),r=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"714482ab",null,!1,i["a"],s);e["default"]=r.exports},f6f3:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-modal",class:t.modalShow?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white"},[n("v-uni-view",{staticClass:"action"}),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl bg-white text-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"image"},[t.img?n("v-uni-image",{attrs:{src:t.img,mode:"widthFix","lazy-load":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{},[t._v("点击二维码进行分享")])],1)],1)],1)],1)},o=[]},fcac:function(t,e,n){"use strict";n.r(e);var i=n("3290"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);