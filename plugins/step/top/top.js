(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/step/top/top"],{1010:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){return n.e("components/page-component/app-ad/app-ad").then(n.bind(null,"ba36"))},s={data:function(){return{list:[],over:!1,ad_data:{},user:{},loading:!1,more:!1,_num:1,setting:null,adHeight:0,coupon_url:this.$api.step.receive}},components:{appAd:u},computed:o({},(0,i.mapState)({stepImg:function(t){return t.mallConfig.plugin.step}})),filters:{getObje:function(t,e){return{id:t.id}}},methods:{getHeight:function(){var e=this,n=this;setTimeout(function(){var i=t.createSelectorQuery().in(e);i.select("#ad").boundingClientRect(function(t){n.adHeight=t.height}).exec()})},change:function(e){var n,i=this;t.showLoading({mask:!0,text:"加载中..."}),i.list=[],i.user={},i._num=e,1==e?n=i.$api.step.step_convert:2==e&&(n=i.$api.step.ranking),i.getList(n)},getSetting:function(){var e=this;e.$request({url:e.$api.step.setting}).then(function(n){e.$hideLoading(),0==n.code?e.setting=n.data:t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},getList:function(e){var n=this;n.$request({url:e,data:{status:n._num}}).then(function(e){if(n.$hideLoading(),t.hideLoading(),0==e.code){if(n.list=e.data.list,n.user=e.data.user,n.ad_data=e.data.ad_data,n.list.length>0){for(var i=0;i<n.list.length;i++)n.list[i].raking=i+1;n.list[0].img="./../image/top1.png",n.list.length>1&&(n.list[1].img="./../image/top2.png"),n.list.length>2&&(n.list[2].img="./../image/top3.png")}n.getHeight()}else t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){n.$hideLoading(),t.hideLoading()})}},onLoad:function(){var t=this,e=t.$api.step.step_convert;t._num=1,t.$showLoading({type:"global",text:"加载中..."}),t.getSetting(),t.getList(e)}};e.default=s}).call(this,n("543d")["default"])},1734:function(t,e,n){"use strict";n.r(e);var i=n("ae56"),a=n("2067");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("4308");var r=n("2877"),u=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"67835a9e",null);e["default"]=u.exports},2067:function(t,e,n){"use strict";n.r(e);var i=n("1010"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},4308:function(t,e,n){"use strict";var i=n("8430"),a=n.n(i);a.a},8430:function(t,e,n){},ae56:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("getObje")(t.ad_data,t.ad_data));t.$mp.data=Object.assign({},{$root:{f0:n}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}},[["2ff6","common/runtime","common/vendor"]]]);