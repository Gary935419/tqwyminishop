(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-goods-recommend/app-goods-recommend"],{"108a2":function(e,t,n){"use strict";var r=n("5bd1"),o=n.n(r);o.a},"5bd1":function(e,t,n){},"76be":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){return n.e("components/page-component/u-goods-list/u-ordinary-list").then(n.bind(null,"24ba"))},u={name:"app-goods-recommend",components:{uOrdinaryList:a},props:{goodsList:Array,theme:String,sureCart:Boolean,activity:Object,is_show_member:{type:Boolean,default:function(){return!0}},sign:String,detail:Object},computed:i({themeObject:function(){return{back:this.theme+"-m-back "+this.theme,theme:this.theme,color:this.theme+"-m-text "+this.theme,sBack:this.theme+"-s-back "+this.theme}}},(0,r.mapState)({isListUnderlinePrice:function(e){return e.mallConfig.mall.setting.is_list_underline_price}}))};t.default=u},"80e1":function(e,t,n){"use strict";n.r(t);var r=n("76be"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=o.a},"8e97":function(e,t,n){"use strict";n.r(t);var r=n("9dcc"),o=n("80e1");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("108a2");var c=n("2877"),a=Object(c["a"])(o["default"],r["a"],r["b"],!1,null,"a009eeac",null);t["default"]=a.exports},"9dcc":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-goods-recommend/app-goods-recommend-create-component',
    {
        'components/page-component/app-goods-recommend/app-goods-recommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8e97"))
        })
    },
    [['components/page-component/app-goods-recommend/app-goods-recommend-create-component']]
]);                
