(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/index/generate-package"],{"20da":function(t,e,n){"use strict";n.r(e);var a=n("b25c"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},8158:function(t,e,n){"use strict";n.r(e);var a=n("8746"),r=n("20da");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("cb94");var c=n("2877"),o=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,"5a27a796",null);e["default"]=o.exports},8746:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"8b51":function(t,e,n){},b25c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("8de3"),r={name:"generate-package",props:{theme:String,totalPrice:String,template_message_captain:Array},computed:{newPrice:function(){return 0===Number(this.totalPrice)?"0.00":this.totalPrice}},methods:{generatePackage:function(e){var n=this;(0,a.push)(e.detail.formId),this.$storage.getStorageSync("GIFT_CART"),this.$storage.getStorageSync("GIFT_CART")&&Array.isArray(this.$storage.getStorageSync("GIFT_CART"))&&this.$storage.getStorageSync("GIFT_CART").length>0?this.$subscribe(this.template_message_captain).then(function(t){n.$emit("click")}).catch(function(t){n.$emit("click")}):t.showToast({mask:!0,title:"请选择礼物",icon:"none"})}}};e.default=r}).call(this,n("543d")["default"])},cb94:function(t,e,n){"use strict";var a=n("8b51"),r=n.n(a);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/index/generate-package-create-component',
    {
        'plugins/gift/components/index/generate-package-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8158"))
        })
    },
    [['plugins/gift/components/index/generate-package-create-component']]
]);                
