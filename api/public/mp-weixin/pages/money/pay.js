(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/money/pay"],{"0a9d":function(e,t,n){},"270c":function(e,t,n){"use strict";n.r(t);var i=n("4efe"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},2833:function(e,t,n){"use strict";(function(e){n("18f9");i(n("66fd"));var t=i(n("ff37"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"4efe":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("a34a")),r=s(n("f2c2")),o=s(n("031b")),c=s(n("b89f")),u=(n("cf87"),n("cf87")),a=n("26cb");function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n,i,r,o,c){try{var u=e[o](c),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(i,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function c(e){f(o,i,r,c,u,"next",e)}function u(e){f(o,i,r,c,u,"throw",e)}c(void 0)}))}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={data:function(){var e;return e={confirmDisabled:!1,id:"",payType:"weixin",orderInfo:{total:0,user:{money:0}},index:0,jweixin:null,modalName:null},m(e,"jweixin",null),m(e,"user",{}),m(e,"paySuccess","/pages/money/paySuccess"),e},computed:{},onLoad:function(e){if(!e.id)return this.$api.msg("参数有误"),!1;this.id=e.id},onShow:function(){this.loginCheck(),this.getList(),this.getUser()},methods:p(p({},(0,a.mapMutations)(["loginCheck"])),{},{getUser:function(){var e=this;c.default.detail((function(t){e.user=t}))},getList:function(){var t=this;r.default.pay(this.id,(function(n){t.orderInfo=n,2===t.orderInfo.type&&(t.paySuccess=t.paySuccess+"?state=12"),1!==n.state&&4!==n.state&&e.redirectTo({url:t.paySuccess})}))},changePayType:function(e){this.payType=e},showModal:function(e){this.modalName=e},hideModal:function(e){this.modalName=null},goBack:function(){this.hideModal(),this.getList()},getWeixin:function(){this.jweixin=n("68b9");var e=this;JsSdk.buildConfig((function(t){e.jweixin.config(t),e.jweixin.error((function(e){console.log("失败")}))}))},confirm:function(){var t=l(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,this.confirmDisabled=!0,1===this.payType?o.default.balancePay({id:this.id},(function(t){(0,u.authMsg)(["4iOC-HyjJeKK5HiYORcOtrKHvu2Ho1ScVF0aqP3KkzQ"]),n.confirmDisabled=!1,n.user.email||n.user.wechat?e.redirectTo({url:n.paySuccess}):e.showModal({title:"提示",content:"您未打开通知功能，无法及时接收重要通知哦，是否现在去开启？",success:function(t){t.confirm?e.redirectTo({url:"/pages/set/message"}):t.cancel&&e.redirectTo({url:n.paySuccess})}})})):o.default.unifiedPayment({id:this.id,platform:this.payType,trade_type:"JSAPI",type:"goodsIndent"},(function(t){n.confirmDisabled=!1,e.requestPayment({timeStamp:t.msg.timestamp,nonceStr:t.msg.nonceStr,package:t.msg.package,signType:t.msg.signType,paySign:t.msg.paySign,success:function(t){(0,u.authMsg)(["4iOC-HyjJeKK5HiYORcOtrKHvu2Ho1ScVF0aqP3KkzQ"]),n.user.email||n.user.wechat?e.redirectTo({url:n.paySuccess}):e.showModal({title:"提示",content:"您未打开通知功能，无法及时接收重要通知哦，是否现在去开启？",success:function(t){t.confirm?e.redirectTo({url:"/pages/set/message"}):t.cancel&&e.redirectTo({url:n.paySuccess})}})},fail:function(e){n.$api.msg("支付失败，请重新支付"),n.getList()}})}));case 3:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()})};t.default=y}).call(this,n("543d")["default"])},"7b6b":function(e,t,n){"use strict";var i=n("0a9d"),r=n.n(i);r.a},a5f4:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniCountdown:function(){return n.e("uni_modules/uni-countdown/components/uni-countdown/uni-countdown").then(n.bind(null,"b897"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,4!==e.orderInfo.state?e._f("1000")(e.orderInfo.total):null),i=4!==e.orderInfo.state?e._f("1000")(e.orderInfo.user.money):null;e.$mp.data=Object.assign({},{$root:{f0:n,f1:i}})},o=[]},ff37:function(e,t,n){"use strict";n.r(t);var i=n("a5f4"),r=n("270c");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("7b6b");var c,u=n("f0c5"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=a.exports}},[["2833","common/runtime","common/vendor"]]]);