(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/community/me/me"],{2671:function(t,n,e){"use strict";var o=e("9cd7"),i=e.n(o);i.a},"31e7":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},"5eb1":function(t,n,e){"use strict";e.r(n);var o=e("6dcd"),i=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=i.a},"6dcd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(e,!0).forEach(function(n){u(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a=function(){return e.e("plugins/community/components/app-menu").then(e.bind(null,"93b2"))},c=function(){return e.e("plugins/community/components/app-head").then(e.bind(null,"d0d3"))},l={data:function(){return{middleman:{},setting:{},apply_at:""}},components:{"app-menu":a,"app-head":c},computed:r({},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,o.mapState)({stock:function(t){return t.mallConfig.__wxapp_img.stock},bonusImg:function(t){return t.mallConfig.__wxapp_img.bonus},userInfo:function(t){return t.user.info}})),onShow:function(t){this.getStatus()},methods:{toProfit:function(){t.navigateTo({url:"/plugins/community/profit/profit"})},toCash:function(){t.navigateTo({url:"/plugins/community/profit-cash/profit-cash"})},toClerk:function(){t.navigateTo({url:"/plugins/community/clerk/clerk"})},toAddress:function(){t.navigateTo({url:"/plugins/community/apply/apply?id="+this.middleman.id})},getStatus:function(){var n=this,e=this;e.$request({url:e.$api.community.index}).then(function(e){0==e.code?(n.setting=e.data.setting,e.data.middleman.id>0?(n.middleman=e.data.middleman,n.apply_at=n.middleman.apply_at.substring(0,10)):(t.showToast({title:"您还不是团长，现在前往申请页面",icon:"none",duration:1e3}),setTimeout(function(){t.redirectTo({url:"/plugins/community/apply/apply"})},1e3))):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})}}};n.default=l}).call(this,e("543d")["default"])},"9cd7":function(t,n,e){},a54e:function(t,n,e){"use strict";e.r(n);var o=e("31e7"),i=e("5eb1");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("2671");var u=e("2877"),a=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,"4a5cbfca",null);n["default"]=a.exports}},[["3e91","common/runtime","common/vendor"]]]);