(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/express-detail/express-detail"],{"00fc":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];s.d(t,"a",function(){return n}),s.d(t,"b",function(){return r})},3595:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("ee50"));function r(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{expressDetail:null,order:null,express:"",express_no:"",cover_pic:"",customer_name:"",is_show:!1}},methods:{getExpressDetail:function(){var t=this;this.$showLoading(),this.$request({url:this.$api.order.express_detail,data:{express:this.express,customer_name:this.customer_name,express_no:this.express_no}}).then(function(s){t.$hideLoading(),t.is_show=!0,0===s.code?(t.order=s.data.order,t.expressDetail=s.data.express):e.showModal({title:"",content:s.msg,showCancel:!1})}).catch(function(){t.$hideLoading()})},copyText:function(){n.default.copyText(this.order.express_no)}},onLoad:function(e){this.express=e.express,this.express_no=e.express_no,this.customer_name=e.customer_name,this.cover_pic=e.cover_pic,this.getExpressDetail()}};t.default=o}).call(this,s("543d")["default"])},3614:function(e,t,s){"use strict";s.r(t);var n=s("00fc"),r=s("59b3");for(var o in r)"default"!==o&&function(e){s.d(t,e,function(){return r[e]})}(o);s("3c5b");var i=s("2877"),a=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"7eaf2ce4",null);t["default"]=a.exports},"3c5b":function(e,t,s){"use strict";var n=s("421e"),r=s.n(n);r.a},"421e":function(e,t,s){},"59b3":function(e,t,s){"use strict";s.r(t);var n=s("3595"),r=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);t["default"]=r.a}},[["f612","common/runtime","common/vendor"]]]);