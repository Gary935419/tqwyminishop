(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/community-detail/community-detail"],{"6d8a":function(e,t,i){"use strict";i.r(t);var n=i("e5cf"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},7403:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"792b":function(e,t,i){},c4c4:function(e,t,i){"use strict";i.r(t);var n=i("7403"),o=i("6d8a");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("d666");var d=i("2877"),u=Object(d["a"])(o["default"],n["a"],n["b"],!1,null,"65bbda0f",null);t["default"]=u.exports},d666:function(e,t,i){"use strict";var n=i("792b"),o=i.n(n);o.a},e5cf:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{id:0,detail:{},modelType:1,reasonRefusal:"",model:!1,iphone_x:!1}},onLoad:function(t){var i=this;e.getSystemInfo({success:function(e){(e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.$showLoading({type:"global",text:"加载中..."}),i.id=t.id,i.getDetail()},methods:{getDetail:function(){var t=this;this.$request({url:this.$api.app_admin.review_detail_v2,data:{key:"community",user_id:this.id}}).then(function(i){t.$hideLoading(),e.hideLoading(),0===i.code&&(t.detail=i.data)}).catch(function(){t.$hideLoading(),e.hideLoading()})},refuse:function(){this.modelType=1,this.model=!0},by:function(){this.modelType=2,this.model=!0},confirm:function(){var t=this;2===this.modelType?this.$request({url:this.$api.app_admin.review_switch_v2,method:"post",data:{key:"community",status:1,user_id:this.detail.user_id}}).then(function(i){0===i.code&&(e.showToast({title:"通过申请",duration:1e3}),t.model=!1,setTimeout(function(){e.navigateBack()}))}):1===this.modelType&&this.$request({url:this.$api.app_admin.review_switch_v2,method:"post",data:{key:"community",status:2,reason:this.reasonRefusal,user_id:this.detail.user_id}}).then(function(i){0===i.code?(t.reasonRefusal="",t.model=!1,e.showToast({title:"拒绝申请",icon:"none",duration:1e3}),setTimeout(function(){e.navigateBack()})):e.showToast({title:i.msg,icon:"none",duration:1e3})})},cancel:function(){this.model=!1}}};t.default=i}).call(this,i("543d")["default"])}},[["ceca","common/runtime","common/vendor"]]]);