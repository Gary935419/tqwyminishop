(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/app-goods-full-reduce"],{"245f":function(t,e,i){"use strict";i.r(e);var n=i("8423"),u=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=u.a},"3e76":function(t,e,i){"use strict";var n=i("dd09"),u=i.n(n);u.a},6132:function(t,e,i){"use strict";i.r(e);var n=i("a438"),u=i("245f");for(var o in u)"default"!==o&&function(t){i.d(e,t,function(){return u[t]})}(o);i("3e76");var c=i("2877"),r=Object(c["a"])(u["default"],n["a"],n["b"],!1,null,"2aeea7d6",null);e["default"]=r.exports},8423:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"app-goods-full-reduce",props:{theme:String,full_reduce:Object,sign:String},data:function(){return{textWidth:0,resultWidth:0,list:[],opacity:!1}},methods:{route:function(){t.navigateTo({url:"/pages/full_reduce/index/index"})},initSize:function(){for(var e=this,i=[],n=function(n){i.push(new Promise(function(i){var u=t.createSelectorQuery().in(e);u.select("#bd-".concat(n,"-text")).boundingClientRect().exec(function(n){n[0]&&(e.textWidth+=n[0].width+t.upx2px(10)),i()})}))},u=0;u<this.list.length;u++)n(u);Promise.all(i).then(function(){e.resultWidth=e.textWidth})}},watch:{"full_reduce.rule":{immediate:!0,handler:function(t){var e=this;this.list=t,this.textWidth=0,setTimeout(function(){e.initSize()},500)},deep:!0},resultWidth:{handler:function(e){var i=this;e>t.upx2px(552)?(this.list=this.list.slice(0,this.list.length-1),this.textWidth=0,this.$nextTick(function(){i.initSize()})):this.opacity=!0}}},mounted:function(){var t=this;setTimeout(function(){t.list=t.full_reduce.rule,t.textWidth=0,setTimeout(function(){t.initSize()},500)},500)}};e.default=i}).call(this,i("543d")["default"])},a438:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},u=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return u})},dd09:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/app-goods-full-reduce-create-component',
    {
        'components/page-component/goods/app-goods-full-reduce-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6132"))
        })
    },
    [['components/page-component/goods/app-goods-full-reduce-create-component']]
]);                