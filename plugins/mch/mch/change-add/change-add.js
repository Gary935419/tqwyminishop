(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/change-add/change-add"],{"39a2":function(t,e,i){},"5df5":function(t,e,i){"use strict";var n=i("39a2"),r=i.n(n);r.a},8372:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},d41d:function(t,e,i){"use strict";i.r(e);var n=i("efc7"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},efc7:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach(function(e){a(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=function(){return i.e("components/page-component/app-area-picker/app-area-picker").then(i.bind(null,"8e44"))},d={data:function(){return{ids:[0],id:"",list:[],name:"",mobile:"",province_id:0,city_id:0,district_id:0,mch_id:0,detail:"",order_no:"",province:"",city:"",district:"",order:{}}},components:{"app-area-picker":c},computed:o({},(0,n.mapState)({theme:function(t){return t.mallConfig.theme},userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{areaEvent:function(t){t&&(this.province=t.province.name,this.city=t.city.name,this.district=t.district.name)},getDistrict:function(){var e=this;e.$showLoading({text:"加载中..."}),e.$request({url:e.$api.default.district}).then(function(i){0==i.code?(e.list=i.data.list,e.getList()):(e.$hideLoading(),t.showToast({title:i.msg,icon:"none",duration:1e3}))}).catch(function(t){e.$hideLoading()})},getList:function(){var e=this;e.$request({url:e.$api.mch.order_list,data:{status:"-1",mch_id:e.mch_id,keyword:e.order_no}}).then(function(i){if(e.$hideLoading(),0==i.code){if(e.order=i.data.list[0],e.name=i.data.list[0].name,e.mobile=i.data.list[0].mobile,!i.data.list[0].address)return t.setNavigationBarTitle({title:"添加收货地址"}),!1;var n=i.data.list[0].address.trim().split(" ");e.detail=n[n.length-1];var r=e.list;e.ids=[],r.forEach(function(t){if(t.name==n[0]){e.ids[0]=t.id;var i=t;i.list.forEach(function(t){if(t.name==n[1]){e.ids[1]=t.id;var i=t;i.list.forEach(function(t){t.name==n[2]&&(e.ids[2]=t.id)})}})}})}else t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},saveAddress:function(e){var i=this;i.province?(t.showLoading({title:"提交中..."}),i.$request({url:i.$api.mch.update_address,method:"POST",data:{order_id:i.order.id,mch_id:i.mch_id,name:i.name,mobile:i.mobile,province:i.province,city:i.city,district:i.district,address:i.detail}}).then(function(e){t.hideLoading(),0==e.code?(t.showToast({title:e.msg,duration:1e3,icon:"success",mask:!1}),setTimeout(function(){t.navigateBack()},500)):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){t.hideLoading(),t.showToast({title:e,icon:"none",duration:1e3})})):t.showToast({title:"地区不能为空",icon:"none",duration:1e3})}},onLoad:function(t){var e=this;t.order_no&&(e.order_no=t.order_no,e.mch_id=t.mch_id,e.getDistrict())}};e.default=d}).call(this,i("543d")["default"])},f639:function(t,e,i){"use strict";i.r(e);var n=i("8372"),r=i("d41d");for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);i("5df5");var a=i("2877"),c=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"591cb4fc",null);e["default"]=c.exports}},[["840c","common/runtime","common/vendor"]]]);