(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/send/send"],{"0cd2":function(e,t,n){},4422:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},5671:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={data:function(){return{express_no:"",express:"",customer_name:"",code:"",words:"",list:[],dialog:!1,id:"",value:0,is_send:0,mch_id:0,order_refund_id:0}},computed:s({},(0,i.mapState)({userInfo:function(e){return e.user.info}})),methods:{bindChange:function(e){var t=e.detail.value[0];this.express=this.list[t].name},toPick:function(){var e=this;e.customer_name="",e.list.forEach(function(t,n){e.list[n].name==e.express&&(e.value=n)}),e.dialog=!e.dialog},getExpressNo:function(){var t=this;e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.order_print,data:{express:t.express,code:t.code,mch_id:t.mch_id,order_id:t.id}}).then(function(n){e.hideLoading(),0==n.code?t.express_no=n.data.Order.LogisticCode:e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading()})},getExpress:function(){var t=this;t.$showLoading({text:"加载中..."}),t.$request({url:t.$api.mch.express_list}).then(function(n){0==n.code?(t.list=n.data.list,t.is_send>0&&t.id>0?t.getList():(t.$hideLoading(),t.express=t.list[0].name)):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},getList:function(){var t=this;t.$request({url:t.$api.mch.order_detail,data:{id:t.id,mch_id:t.mch_id}}).then(function(n){t.$hideLoading(),0==n.code?(t.express=n.data.detail.detailExpress[0].express,t.express_no=n.data.detail.detailExpress[0].express_no,t.customer_name=n.data.detail.detailExpress[0].customer_name,t.code="",t.words=n.data.detail.detailExpress[0].words,n.data.detail.detailExpress[0].code>0&&(t.code=n.data.detail.detailExpress[0].code)):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},saveAddress:function(t){var n=this;n.express_no?(e.showLoading({title:"提交中..."}),n.id>0?n.$request({url:n.$api.mch.order_send,method:"POST",data:{is_express:1,order_id:n.id,express_no:n.express_no,mch_id:n.mch_id,express:n.express,code:n.code,customer_name:n.customer_name,words:n.words}}).then(function(t){if(e.hideLoading(),0==t.code){var i=t.msg;2==n.is_send&&(i="修改成功"),e.showToast({title:i,duration:1e3,type:"success",mask:!1}),setTimeout(function(){e.navigateBack()},500)}else e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}):n.$request({url:n.$api.mch.refund_handle,method:"POST",data:{is_express:1,type:2,is_agree:1,mch_id:n.mch_id,order_refund_id:n.order_refund_id,express_no:n.express_no,express:n.express,merchant_remark:n.words}}).then(function(t){if(e.hideLoading(),0==t.code){var n=t.msg;e.showToast({title:n,duration:1e3,type:"success",mask:!1}),setTimeout(function(){e.navigateBack()},500)}else e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})):e.showToast({title:"快递单号不得为空",icon:"none",duration:1e3})}},onLoad:function(e){var t=this;e.id>0&&(t.id=e.id),t.mch_id=e.mch_id,e.order_refund_id>0&&(t.order_refund_id=e.order_refund_id),t.getExpress(),e.is_send>0&&(t.is_send=e.is_send)}};t.default=d}).call(this,n("543d")["default"])},"6e4e":function(e,t,n){"use strict";var i=n("0cd2"),o=n.n(i);o.a},fd12:function(e,t,n){"use strict";n.r(t);var i=n("4422"),o=n("fdc6");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("6e4e");var r=n("2877"),d=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"7a783a6c",null);t["default"]=d.exports},fdc6:function(e,t,n){"use strict";n.r(t);var i=n("5671"),o=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=o.a}},[["ff35","common/runtime","common/vendor"]]]);