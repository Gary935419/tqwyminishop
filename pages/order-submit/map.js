(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order-submit/map"],{"1ccc":function(t,n,e){"use strict";e.r(n);var o=e("e0e2"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=r.a},b616:function(t,n,e){"use strict";e.r(n);var o=e("f5c2"),r=e("1ccc");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("bf1a");var a=e("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"82bf4594",null);n["default"]=c.exports},b64c:function(t,n,e){},bf1a:function(t,n,e){"use strict";var o=e("b64c"),r=e.n(o);r.a},e0e2:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(e,!0).forEach(function(n){a(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c={name:"map",data:function(){return{config:null}},onLoad:function(){this.loadData()},computed:i({polygons:function(){var t=[];if(this.config&&this.config.range&&this.config.range.length>0){var n=[];for(var e in this.config.range)n.push({latitude:this.config.range[e].lat,longitude:this.config.range[e].lng});t.push({points:n,strokeColor:"#4d77ff",strokeWidth:2,fillColor:"#4d77ff40"})}return t},markers:function(){var t=[];return this.config&&this.config.range&&this.config.address&&t.push({latitude:this.config.address.latitude,longitude:this.config.address.longitude,callout:{content:this.mall.name,color:"#353535",bgColor:"#ffffff",display:"ALWAYS",fontSize:13,padding:4,borderWidth:2,borderRadius:10,borderColor:"#ffffff"},anchor:{x:.5,y:1},iconPath:"/static/image/location.png",width:20,height:20}),t}},(0,o.mapState)({mall:function(t){return t.mallConfig.mall},iPhoneX:function(t){return t.iPhoneX}})),methods:{loadData:function(){var n=this;this.$request({url:this.$api.order.delivery,method:"post"}).then(function(e){0==e.code?n.config=e.data.config:t.showModal({content:e.msg,showCancel:!1})})},mobile:function(){t.makePhoneCall({phoneNumber:this.config.contact_way})}}};n.default=c}).call(this,e("543d")["default"])},f5c2:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})}},[["219d","common/runtime","common/vendor"]]]);