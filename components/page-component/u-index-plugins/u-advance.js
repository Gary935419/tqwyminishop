(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/u-index-plugins/u-advance"],{"00f3":function(t,e,n){},"5fc6":function(t,e,n){"use strict";n.r(e);var i=n("eecc"),o=n("8c1c");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("d63e");var r=n("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"8433374e",null);e["default"]=a.exports},"8c1c":function(t,e,n){"use strict";n.r(e);var i=n("e1d0"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},d63e:function(t,e,n){"use strict";var i=n("00f3"),o=n.n(i);o.a},e1d0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return n.e("components/page-component/u-index-plugins/u-index-plugins").then(n.bind(null,"03c5"))},u=function(){return n.e("components/page-component/u-goods-list/u-ordinary-list").then(n.bind(null,"24ba"))},c={name:"u-advance",props:{index:Number,page_id:Number,is_required:Boolean,theme:{type:Object},appImg:{type:Object,default:function(){return{plugins_out:""}}},appSetting:{type:Object,default:function(){return{is_show_stock:1,sell_out_pic:"",is_use_stock:1}}}},data:function(){return{newData:{},tempList:[],goodsList:[],time:0,style:"1",goods_num:20}},computed:s({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),components:{uIndexPlugins:a,uOrdinaryList:u},methods:{router:function(t){console.log(t),this.$emit("router",t)},isShowMemPrice:function(t){return 1===t.is_level&&1!==t.is_negotiable?1:0},isShowVip:function(t){return t.vip_card_appoint&&t.vip_card_appoint.discount>0&&1!==t.is_negotiable?1:0},isShowStock:function(t){return 1===this.appSetting.is_show_stock&&0===t.goods_stock?1:0},loadData:function(){var t=this,e={type:0===this.page_id?"mall":"diy",key:"advance",page_id:this.page_id,index:this.index};this.goods_num&&(e.goods_num=this.goods_num),this.$request({url:this.$api.index.extra,data:e}).then(function(e){if(0===e.code&&e.data&&(t.newData=e.data.list,0===t.page_id)){var n=t.$storage.getStorageSync("INDEX_MALL");n.home_pages[t.index].list=t.newData,t.$storage.setStorageSync("INDEX_MALL",n)}})},cloneData:function(t){return JSON.parse(JSON.stringify(t))},splitData:function(){var t=this;if(this.tempList.length){var e=this.tempList[0];this.goodsList.push(e),this.tempList.splice(0,1),this.tempList.length&&(this.time=setTimeout(function(){t.splitData()},200))}}},mounted:function(){var t=this.$storage.getStorageSync("INDEX_MALL");this.style=t.home_pages[this.index].style,this.goods_num=t.home_pages[this.index].goods_num,this.is_required?this.loadData():this.newData=t.home_pages[this.index].list},watch:{newData:{handler:function(t){this.$validation.empty(t)||(this.tempList=this.cloneData(t),this.splitData())},immediate:!0}},destroyed:function(){clearTimeout(this.time)}};e.default=c},eecc:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.goodsList,function(e,n){var i=t.isShowStock(e),o=t.isShowMemPrice(e),s=t.isShowVip(e);return{$orig:t.__get_orig(e),m0:i,m1:o,m2:s}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/u-index-plugins/u-advance-create-component',
    {
        'components/page-component/u-index-plugins/u-advance-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5fc6"))
        })
    },
    [['components/page-component/u-index-plugins/u-advance-create-component']]
]);                
