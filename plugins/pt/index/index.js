(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pt/index/index"],{"0aa3":function(t,e,n){},"3f4a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},5535:function(t,e,n){"use strict";var i=n("0aa3"),a=n.n(i);a.a},"6cd3":function(t,e,n){"use strict";n.r(e);var i=n("3f4a"),a=n("f861");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("5535");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"438f3f96",null);e["default"]=o.exports},f05f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),a=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,i,a,r,s){try{var o=t[r](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(i,a)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function s(t){c(r,i,a,s,o,"next",t)}function o(t){c(r,i,a,s,o,"throw",t)}s(void 0)})}}var l=function(){return n.e("components/page-component/app-image-ad/app-image-ad").then(n.bind(null,"605d"))},f=function(){return n.e("plugins/pt/components/app-product-list").then(n.bind(null,"bbb8"))},d=function(){return n.e("components/page-component/app-quick-navigation/app-quick-navigation").then(n.bind(null,"4d92"))},h={name:"index",data:function(){return{banners:[],setting:{},nav_list:[],page:1,page_count:1,goods_list:[],cat_id:0,imageStyle:0}},onLoad:function(t){wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),t.cat_id&&(this.cat_id=t.cat_id),this.requestSetting(),this.requestCats(t.cat_id)},onReachBottom:function(){this.page<this.page_count&&(this.page++,this.requestList(1))},methods:{changeStatus:function(){var t=p(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.cat_id=e,this.page=1,this.goods_list=[],this.requestList(0);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),requestList:function(){var t=p(i.default.mark(function t(e){var n,a,r,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.pt.goods,data:{page:this.page,cat_id:this.cat_id}});case 2:n=t.sent,0===n.code&&(a=n.data,r=a.pagination,s=a.list,this.goods_list=1===e?this.goods_list.concat(s):s,this.page_count=r.page_count);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),requestSetting:function(){var t=this;this.$request({url:this.$api.pt.index}).then(function(e){if(0===e.code){t.banners=e.data.banners,t.setting=e.data.setting;for(var n=e.data.setting.advertisement,i=[],a=0,r=n.list.length;a<r;a++){var s=n.list[a];s.link={value:s.link_url,open_type:s.open_type},i.push(s)}t.setting.advertisement.list=i,t.imageStyle=Number(n.style)}})},requestCats:function(t){var e=this;this.$request({url:this.$api.pt.cats}).then(function(n){0===n.code&&(e.nav_list=e.nav_list.concat(n.data.list),!t&&(e.cat_id=e.nav_list[0].id),e.requestList(0))})}},computed:o({},(0,a.mapState)({themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e}}})),components:{"app-image-ad":l,"app-product-list":f,"app-quick-navigation":d},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/pt/index/index",title:this.$children[0].navigationBarTitle})},onShareTimeline:function(){return this.$shareTimeline({title:this.$children[0].navigationBarTitle,query:{}})}};e.default=h},f861:function(t,e,n){"use strict";n.r(e);var i=n("f05f"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a}},[["04881","common/runtime","common/vendor"]]]);