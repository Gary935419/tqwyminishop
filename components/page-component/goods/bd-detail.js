(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-detail"],{"3e70":function(t,e,n){"use strict";n.r(e);var a=n("44a5"),c=n("41ce");for(var o in c)"default"!==o&&function(t){n.d(e,t,function(){return c[t]})}(o);n("d923");var r=n("2877"),i=Object(r["a"])(c["default"],a["a"],a["b"],!1,null,"a5ae48cc",null);e["default"]=i.exports},"41ce":function(t,e,n){"use strict";n.r(e);var a=n("9c68"),c=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=c.a},"44a5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c})},"9c68":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(n.bind(null,"cb0e"))},c={name:"bd-detail",components:{"app-rich-text":a},props:{detail:{type:String,default:function(){return""}}},created:function(){this.$store.dispatch("gConfig/setImageWidth",48)},computed:{newDetail:function(){var t="正在加载数据，模拟网络延迟2秒😝";return this.detail&&(t=this.detail),t}}};e.default=c},d923:function(t,e,n){"use strict";var a=n("f21e"),c=n.n(a);c.a},f21e:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-detail-create-component',
    {
        'components/page-component/goods/bd-detail-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3e70"))
        })
    },
    [['components/page-component/goods/bd-detail-create-component']]
]);                
