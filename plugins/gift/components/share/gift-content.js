(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/share/gift-content"],{"077c":function(t,n,i){},1326:function(t,n,i){"use strict";i.r(n);var a=i("41d8"),e=i("feb7");for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);i("b2f4");var s=i("2877"),c=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"e8866126",null);n["default"]=c.exports},"41d8":function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},e=[];i.d(n,"a",function(){return a}),i.d(n,"b",function(){return e})},"845e":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"gift-content",props:["theme","avatar","nickname","bless_word","is_big_gift","cover_pic","name","refund_time","big_gift_pic","bless_music","is_play"],data:function(){return{animationData1:"",animationData2:"",animationStatus:!1}},methods:{share:function(){this.$emit("share")},animationFun:function(n){if(this.animationStatus){var i=t.createAnimation({duration:1e3});i.opacity(0).scale(1.5,1.5).step(),this[n]=i.export()}},animationEnd:function(n){var i=t.createAnimation({duration:0});i.opacity(1).scale(1,1).step(),this[n]=i.export()},recodeEnd:function(){var n=t.createAnimation({duration:0});n.opacity(1).scale(1,1).step();var i=t.createAnimation({duration:0});i.opacity(1).scale(1,1).step(),this.animationData1=n.export(),this.animationData2=i.export(),this.animationStatus=!1},recodeClick:function(){var t=this;this.animationStatus=!0,this.animationFun("animationData1"),setTimeout(function(){t.animationFun("animationData2")},500),setTimeout(function(){t.animationRest()},1e3)},animationRest:function(){var t=this;this.animationEnd("animationData1"),setTimeout(function(){t.animationEnd("animationData2")},500),setTimeout(function(){t.animationStatus&&t.recodeClick()},100)},start:function(){this.recodeClick()},end:function(){this.recodeEnd()},play:function(){this.is_play?this.$emit("play",!1):(this.start(),this.$emit("play",!0,this.bless_music))}},watch:{is_play:{handler:function(t){t||this.end()}}}};n.default=i}).call(this,i("543d")["default"])},b2f4:function(t,n,i){"use strict";var a=i("077c"),e=i.n(a);e.a},feb7:function(t,n,i){"use strict";i.r(n);var a=i("845e"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);n["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/share/gift-content-create-component',
    {
        'plugins/gift/components/share/gift-content-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1326"))
        })
    },
    [['plugins/gift/components/share/gift-content-create-component']]
]);                
