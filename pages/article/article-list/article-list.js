(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/article-list/article-list"],{"3a57":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"6f95":function(t,e,n){"use strict";n.r(e);var i=n("ed4f"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"9e5a":function(t,e,n){},bcce:function(t,e,n){"use strict";var i=n("9e5a"),a=n.n(i);a.a},ed4f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{page:2,loading:!1,list:[]}},computed:r({},(0,i.mapState)({title:function(t){return t.mallConfig.bar_title}})),methods:{getList:function(){var t=this,e=this;e.$showLoading({text:"加载中..."}),this.$request({url:e.$api.article.list,method:"get"}).then(function(n){e.$hideLoading(),0==n.code&&(t.list=n.data.list)}).catch(function(t){e.$hideLoading()})},getMore:function(){var e=this;if(e.loading)return!1;e.loading=!0,t.showLoading({title:"加载中..."}),e.$request({url:e.$api.article.list,data:{page:e.page}}).then(function(n){e.loading=!1,t.hideLoading(),0==n.code&&(n.data.list.length>0?(e.list=e.list.concat(n.data.list),e.page++):(t.showToast({title:"没有更多内容",icon:"none",duration:1e3}),e.loading=!0))}).catch(function(n){e.loading=!1,t.hideLoading()})},toDetail:function(e){t.navigateTo({url:"/pages/article/article-detail/article-detail?id="+e})}},onLoad:function(){this.getList()},onReachBottom:function(){this.getMore()},onShareAppMessage:function(){var t=this;for(var e in t.title)if("文章中心"==t.title[e].name)return t.$shareAppMessage({title:t.title[e].new_name,path:"/pages/article/article-list/article-list"})}};e.default=c}).call(this,n("543d")["default"])},fffe:function(t,e,n){"use strict";n.r(e);var i=n("3a57"),a=n("6f95");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("bcce");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"03cde6a0",null);e["default"]=c.exports}},[["a233","common/runtime","common/vendor"]]]);