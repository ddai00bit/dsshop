(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/notice"],{"501a":function(t,e,n){"use strict";(function(t){n("18f9");o(n("66fd"));var e=o(n("53f3"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"53f3":function(t,e,n){"use strict";n.r(e);var o=n("73ca"),a=n("b36c");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("8e8d");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=c.exports},"6a70":function(t,e,n){},"73ca":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"25ed"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,0!==t.data.length?t.__map(t.data,(function(e,n){var o=t.__get_orig(e),a=2===e.data.type?t._f("1000")(e.data.price/100):null;return{$orig:o,f0:a}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},"77d6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("96fe")),a=n("26cb");function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("25ed"))}.bind(null,n)).catch(n.oe)},f={components:{uniLoadMore:l},data:function(){return{data:[],page:1,loadingType:"more"}},onLoad:function(t){this.loadData()},onShow:function(){this.loginCheck()},methods:u(u({},(0,a.mapMutations)(["loginCheck"])),{},{loadData:function(e){var n=this;o.default.getList({limit:8,page:this.page,sort:"-created_at"},(function(o){n.data=n.data.concat(o.data),o.last_page>n.page?(n.page++,n.loadingType="more"):n.loadingType="noMore","pull"===e&&setTimeout((function(){t.stopPullDownRefresh()}),1e3)}))},setCopy:function(e){t.setClipboardData({data:e,success:function(){}})},goNavigator:function(e){t.navigateTo({url:e.replace("order/showOrder","indent/detail")})},onPullDownRefresh:function(){this.data=[],this.page=1,this.loadData("pull")},onReachBottom:function(){"noMore"!==this.loadingType&&this.loadData()}})};e.default=f}).call(this,n("543d")["default"])},"8e8d":function(t,e,n){"use strict";var o=n("6a70"),a=n.n(o);a.a},b36c:function(t,e,n){"use strict";n.r(e);var o=n("77d6"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a}},[["501a","common/runtime","common/vendor"]]]);