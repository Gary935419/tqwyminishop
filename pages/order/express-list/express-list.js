(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/express-list/express-list"],{1366:function(e,t,r){},5314:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=(e._self._c,e.__map(e.order.detailExpress,function(t,r){var n=e.getPageUrl(t,t.expressRelation[0].orderDetail.goods_info.goods_attr.cover_pic);return{$orig:e.__get_orig(t),m0:n}}));e.$mp.data=Object.assign({},{$root:{l0:r}})},o=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},"6fe7":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{is_show:!1,orderId:null,order:[]}},methods:{getOrderDetail:function(){var t=this;this.$showLoading(),this.$request({url:this.$api.order.order_express_list,data:{order_id:this.orderId}}).then(function(r){t.$hideLoading(),t.is_show=!0,0===r.code?t.order=r.data.order:e.showModal({title:"",content:r.msg,showCancel:!1})}).catch(function(){t.$hideLoading()})},getPageUrl:function(e,t){return e&&1==e.send_type&&2!=this.order.send_type?"/pages/order/express-detail/express-detail?express=".concat(e.express,"&customer_name=").concat(e.customer_name,"&express_no=").concat(e.express_no,"&cover_pic=").concat(t):""}},onLoad:function(e){this.orderId=e.order_id,this.getOrderDetail()}};t.default=r}).call(this,r("543d")["default"])},"87b8":function(e,t,r){"use strict";r.r(t);var n=r("5314"),o=r("b3db");for(var s in o)"default"!==s&&function(e){r.d(t,e,function(){return o[e]})}(s);r("fd82");var i=r("2877"),a=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"9709b77e",null);t["default"]=a.exports},b3db:function(e,t,r){"use strict";r.r(t);var n=r("6fe7"),o=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},fd82:function(e,t,r){"use strict";var n=r("1366"),o=r.n(n);o.a}},[["3e8b0","common/runtime","common/vendor"]]]);