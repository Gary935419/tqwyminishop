(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/app-goods-banner"],{"12b6":function(e,t,n){"use strict";n.r(t);var r=n("26a3"),o=n("f689");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("922a");var a=n("2877"),u=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"2f991856",null);t["default"]=u.exports},"26a3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},3869:function(e,t,n){},"922a":function(e,t,n){"use strict";var r=n("3869"),o=n.n(r);o.a},e5686:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-video/app-video")]).then(n.bind(null,"d824"))},c={components:{"app-video":u},props:{picList:{type:Array,default:function(){return[]}},share:{type:Number},isCart:{type:Boolean,default:function(){return!0}},videoUrl:{type:String},goods_id:{type:Number},sign:{type:String}},data:function(){return{autoplay:!0}},methods:{bannerChange:function(){this.$event.trigger(this.$const.EVENT_VIDEO_END)},videoStart:function(e){this.autoplay=!e},preventD:function(){},clickImage:function(t){var n=[];this.picList.forEach(function(e){n.push(e.pic_url)}),e.previewImage({current:t,urls:n})},routeJumpT:function(){e.navigateTo({url:"/pages/goods/video?goods_id=".concat(this.goods_id,"&sign=").concat(this.sign)})}},computed:i({},(0,r.mapState)({mallConfig:function(e){return e.mallConfig},isScanQrCode:function(e){return e.page.isScanQrCode}}),{},(0,r.mapGetters)("mallConfig",{getVideo:"getVideo"}))};t.default=c}).call(this,n("543d")["default"])},f689:function(e,t,n){"use strict";n.r(t);var r=n("e5686"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/app-goods-banner-create-component',
    {
        'components/page-component/goods/app-goods-banner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("12b6"))
        })
    },
    [['components/page-component/goods/app-goods-banner-create-component']]
]);                
