(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/order-detail/order-detail"],{"29de":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.order.detail,function(t,i){var n=e.__map(t.form_data,function(t,i){var n=Array.isArray(t.value);return{$orig:e.__get_orig(t),g0:n}}),o=e.__map(e.order.order_form,function(t,i){var n=Array.isArray(t.value);return{$orig:e.__get_orig(t),g1:n}});return{$orig:e.__get_orig(t),l0:n,l1:o}}));e._isMounted||(e.e0=function(t){e.sendType=0},e.e1=function(t){e.sendType=1}),e.$mp.data=Object.assign({},{$root:{l2:i}})},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"38d2":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2f62");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(i,!0).forEach(function(t){d(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a={data:function(){return{mch_id:0,order:null,cancelRefund:!1,addressId:"0",notRefund:!1,isRefund:!1,openAddress:!1,isReason:!1,beToSend:!1,showForm:!1,noAddress:!1,active:null,show:!1,start:[],end:[],search:!1,keyword:"",list:[],candidate:[],date_start:"",date_end:"",time:0,inSearch:!1,address:[],today:"",yesterday:"",weekday:"",chooseTime:!1,noRefund:!1,cancelOrder:!1,detail:{},changePrice:!1,callPhone:!1,custom:!1,mobile:"",isSend:!1,sendType:0,price:0,express:0,total:0,about:"",reset_time:0,dd:0,hh:0,mm:0,status:1,first:!1,refund_price:0,iphone_x:!1}},computed:s({},(0,n.mapState)({userInfo:function(e){return e.user.info},mchImg:function(e){return e.mallConfig.__wxapp_img.mch}})),methods:{imageFormLoad:function(e,t){this.order.detail[e].form_data[t].loadOver=!1},toChangeAddress:function(t){this.beToSend=!1;var i=this.order.order_no?this.order.order_no:this.detail.order_no;e.navigateTo({url:"/plugins/mch/mch/change-add/change-add?mch_id="+this.mch_id+"&order_no="+i})},copy:function(){e.setClipboardData({data:this.order.address,success:function(t){e.getClipboardData({success:function(t){e.showToast({title:"复制成功"})}})}})},look:function(t){e.previewImage({current:t,urls:[t]})},agree:function(){var t=this;t.detail.refund_price>0?(e.showLoading({title:"处理中..."}),t.$request({url:t.$api.mch.refund_handle,data:{order_refund_id:t.detail.id,type:t.detail.type,is_agree:1,mch_id:t.mch_id,refund_price:t.refund_price,merchant_remark:t.about},method:"post"}).then(function(i){e.hideLoading(),0==i.code?e.showModal({title:"提示",content:i.msg,showCancel:!1,success:function(e){e.confirm&&(t.list=[],t.notRefund=!1,t.openAddress=!1,t.isRefund=!1,t.addressId=0,t.getList())}}):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})):e.showToast({title:"退款金额需大于零",icon:"none",duration:1e3})},getTime:function(){var e=this.reset_time-1,t=0,i=parseInt(e/3600);e>86400&&(t=parseInt(e/86400),i=parseInt((e-86400*t)/3600));var n=e%3600,o=parseInt(n/60);i<10&&(i="0"+i.toString()),o<10&&(o="0"+o.toString()),this.reset_time=e,this.dd=t,this.hh=i,this.mm=o},toSendType:function(){var t=this;1==t.sendType?2==t.status?(e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.refund_handle,data:{is_express:0,merchant_remark:"",type:t.detail.type,mch_id:t.mch_id,is_agree:1,order_refund_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.list=[],t.page=1,t.isSend=!1,t.sendType=0,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})):(e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.order_send,data:{is_express:0,mch_id:t.mch_id,words:"",order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.list=[],t.page=1,t.isSend=!1,t.sendType=0,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})):(t.isSend=!1,2==t.status?e.navigateTo({url:"/plugins/mch/mch/send/send?order_refund_id="+this.detail.id+"&mch_id="+this.mch_id}):e.navigateTo({url:"/plugins/mch/mch/send/send?id="+this.detail.id+"&mch_id="+this.mch_id}))},toExpress:function(t,i){var n=t.id,o=t.refund;n>0?e.navigateTo({url:"/plugins/mch/mch/send/send?id="+n+"&is_send="+i+"&mch_id="+this.mch_id}):o&&e.navigateTo({url:"/plugins/mch/mch/send/send?order_refund_id="+o+"&is_send="+i+"&mch_id="+this.mch_id})},getList:function(){var t=this;t.about="";var i=t.$api.mch.order_detail;2==t.status&&(i=t.$api.mch.refund_detail),t.$request({url:i,data:{id:t.id,mch_id:t.mch_id}}).then(function(i){if(t.$hideLoading(),0==i.code){t.first=!0;var n=i.data.detail;2==t.status?t.address=i.data.address:n.address=n.address.replace(/\s*/g,"");var o=0;for(var s in n.auto_cancel>0?o=n.auto_cancel:n.auto_confirm>0?o=n.auto_confirm:n.auto_sales>0&&(o=n.auto_sales),t.showForm=!1,n.detail)if(null!=n.detail[s].form_data&&n.detail[s].form_data.length>0){var d=!0,a=!1,r=void 0;try{for(var c,h=n.detail[s].form_data[Symbol.iterator]();!(d=(c=h.next()).done);d=!0){var u=c.value;null!=u.value&&(t.showForm=!0)}}catch(l){a=!0,r=l}finally{try{d||null==h.return||h.return()}finally{if(a)throw r}}}t.order=n,t.reset_time=o,setInterval(function(){t.getTime()},1e3)}else e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},toCall:function(e){1==this.status?this.mobile=e.mobile:this.mobile=e.order.mobile,this.callPhone=!this.callPhone},decline:function(t){var i=this;if(1==t&&i.addressId<1)return e.showToast({title:"请选择地址",icon:"none",duration:1e3}),!1;i.cancelRefund&&(t=2),e.showLoading({title:"处理中..."}),i.$request({url:i.$api.mch.refund_handle,data:{order_refund_id:i.detail.id,type:i.detail.type,mch_id:i.mch_id,is_agree:t,address_id:i.addressId,refund_price:i.detail.refund_price,merchant_remark:i.about},method:"post"}).then(function(t){e.hideLoading(),0==t.code?e.showModal({title:"提示",content:t.msg,showCancel:!1,success:function(e){e.confirm&&(i.list=[],i.notRefund=!1,i.cancelOrder=!1,i.openAddress=!1,i.addressId=0,i.getList())}}):e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},call:function(){e.makePhoneCall({phoneNumber:this.mobile}),this.callPhone=!this.callPhone},toRefund:function(e){this.detail=e,this.refund_price=e.refund_price,this.isRefund=!this.isRefund},cancel:function(){this.about="",this.date_start="",this.date_end="",this.isRefund=!1,this.beToSend=!1,this.chooseTime=!1,this.noRefund=!1,this.changePrice=!1,this.cancelOrder=!1,this.callPhone=!1,this.isSend=!1,this.notRefund=!1,this.openAddress=!1,this.isReason=!1,this.noAddress=!1,this.addressId=0},noCancel:function(){var t=this;e.showLoading({title:"处理中..."}),t.$request({url:t.$api.mch.cancel,data:{status:2,remark:t.about,mch_id:t.mch_id,order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.noRefund=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},cancelSubmit:function(){var t=this;e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.cancel,data:{status:1,mch_id:t.mch_id,remark:"",order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:"取消成功",duration:2e3,type:"success",mask:!1}),t.list=[],t.isRefund=!1,t.cancelOrder=!1,t.page=1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},lookAbout:function(e){this.detail=e,this.isReason=!0},chooseAddress:function(e){this.addressId==e?this.addressId="":this.addressId=e},refundHandle:function(e,t,i){1==i&&(this.cancelRefund=!0),1==e?0==this.address.length?this.noAddress=!0:(this.detail=t,this.openAddress=!0):2==e&&(this.detail=t,this.notRefund=!0)},beNotRefund:function(e){this.detail=e,this.noRefund=!this.noRefund},toCancelorder:function(e){this.detail=e,this.cancelOrder=!this.cancelOrder},submitChange:function(){var t=this;e.showLoading({title:"加载中..."}),t.price>-.01&&t.express>-.01?t.$request({url:t.$api.mch.update_total_price,data:{order_id:t.detail.id,mch_id:t.mch_id,total_price:t.price,express_price:t.express},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:2e3,type:"success",mask:!1}),t.changePrice=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}):t.price&&"number"==typeof t.price?t.express&&"number"==typeof t.express||e.showToast({title:"运费必须大于等于0",icon:"none",duration:1e3}):e.showToast({title:"商品总价必须大于等于0",icon:"none",duration:1e3})},toSend:function(e){this.detail=e,1!=e.send_type||e.address?this.isSend=!0:this.beToSend=!0},toChange:function(e){this.detail=e,this.changePrice=!this.changePrice,this.price=e.total_goods_price,this.express=e.express_price,this.total="￥"+e.total_pay_price},priceInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.express).toFixed(2):this.total="数据有误"},expressInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.price).toFixed(2):this.total="数据有误"},toAgreeCancel:function(e){this.detail=e,this.isRefund=!this.isRefund}},onShow:function(){this.first&&this.getList()},onLoad:function(t){var i=this;i.$showLoading({type:"global",text:"加载中..."}),e.getSystemInfo({success:function(e){(e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.id=t.id,i.status=t.status,i.mch_id=t.mch_id,i.getList()}};t.default=a}).call(this,i("543d")["default"])},5289:function(e,t,i){"use strict";var n=i("eca7"),o=i.n(n);o.a},8287:function(e,t,i){"use strict";i.r(t);var n=i("29de"),o=i("a212");for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);i("5289");var d=i("2877"),a=Object(d["a"])(o["default"],n["a"],n["b"],!1,null,"0e5fbbfe",null);t["default"]=a.exports},a212:function(e,t,i){"use strict";i.r(t);var n=i("38d2"),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},eca7:function(e,t,i){}},[["9570","common/runtime","common/vendor"]]]);