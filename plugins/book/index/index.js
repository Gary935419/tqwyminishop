(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/book/index/index"],{"3f34":function(t,e,n){"use strict";n.r(e);var i=n("c1c4"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},bc7c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},c1c4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),o=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,i,o,a,r){try{var s=t[a](r),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(i,o)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function r(t){u(a,i,o,r,s,"next",t)}function s(t){u(a,i,o,r,s,"throw",t)}r(void 0)})}}var p=function(){return n.e("plugins/book/components/app-head-nav-list").then(n.bind(null,"33ff"))},d=function(){return n.e("plugins/book/components/app-product-list").then(n.bind(null,"7fc4"))},f=function(){return n.e("components/page-component/app-quick-navigation/app-quick-navigation").then(n.bind(null,"4d92"))},h=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},g={name:"index",data:function(){return{catList:[],cat_id:0,page:1,goods_list:[],page_count:1,is_show_cat:0}},onLoad:function(t){var e=this;this.requestCats().then(function(){t.cat_id?e.cat_id=t.cat_id:e.cat_id=e.catList[0].id,e.requestList()}),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]})},methods:{requestCats:function(){var t=l(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$showLoading(),t.next=3,this.$request({url:this.$api.book.cats,method:"get"});case 3:e=t.sent,this.$hideLoading(),0===e.code&&(this.catList=e.data.cat,this.is_show_cat=e.data.is_show_cat);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),requestList:function(){var t=l(i.default.mark(function t(e){var n;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.book.list,data:{page:this.page,cat_id:this.cat_id}});case 2:n=t.sent,0===n.code&&(e&&(this.goods_list=[]),this.dataProcessing(n.data));case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),changeStatus:function(t){this.page=1,this.cat_id=t,this.requestList(!0)},dataProcessing:function(t){for(var e=0;e<t.list.length;e+=2)e+1!==t.list.length?this.goods_list.push([t.list[e],t.list[e+1]]):this.goods_list.push([t.list[e]]);this.page_count=t.pagination.page_count},route_go:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.goods_id,"&sign=booking")}):t.getLocation({type:"wgs84",success:function(n){t.navigateTo({url:"/plugins/book/goods/goods?goods_id=".concat(e.goods_id)})},fail:function(e){t.showToast({title:"请开启位置权限",icon:"none",duration:1e3,success:function(){}})}})}},onReachBottom:function(){this.page<this.page_count&&(this.page++,this.requestList())},computed:s({},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,o.mapState)({themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,backO:e+"-m-back-o "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e}}})),onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/book/index/index",title:this.$children[0].navigationBarTitle})},onShareTimeline:function(){return this.$shareTimeline({title:this.$children[0].navigationBarTitle,query:{}})},components:{"app-head-nav-list":p,"app-product-list":d,"app-quick-navigation":f,"app-no-goods":h}};e.default=g}).call(this,n("543d")["default"])},c3a5:function(t,e,n){"use strict";var i=n("eb7b"),o=n.n(i);o.a},c4db:function(t,e,n){"use strict";n.r(e);var i=n("bc7c"),o=n("3f34");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("c3a5");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"0c959e41",null);e["default"]=s.exports},eb7b:function(t,e,n){}},[["67b9","common/runtime","common/vendor"]]]);