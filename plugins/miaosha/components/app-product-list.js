(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/miaosha/components/app-product-list"],{3196:function(t,e,n){"use strict";n.r(e);var r=n("f097"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},4485:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"697d":function(t,e,n){"use strict";n.r(e);var r=n("4485"),o=n("3196");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("7bb2");var a=n("2877"),u=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"9bc5905e",null);e["default"]=u.exports},"7bb2":function(t,e,n){"use strict";var r=n("85b06"),o=n.n(r);o.a},"85b06":function(t,e,n){},f097:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"app-product-list",data:function(){return{is_vip:!0}},computed:i({},(0,r.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting}}),{},(0,r.mapGetters)("mallConfig",{getVideo:"getVideo"})),props:{list:{type:Array,default:function(){return[]}},status:{type:Number},empty:Boolean,botHeight:Number,theme:{type:String,default:function(){return"a"}},themeObject:Object},methods:{route_go:function(e){e.goods.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.goods_id,"&sign=miaosha")}):t.navigateTo({url:"/plugins/miaosha/goods/goods?id=".concat(e.goods_id)})}}};e.default=u}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/miaosha/components/app-product-list-create-component',
    {
        'plugins/miaosha/components/app-product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("697d"))
        })
    },
    [['plugins/miaosha/components/app-product-list-create-component']]
]);                
