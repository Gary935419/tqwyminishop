(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pick/detail/detail"],{"1e78":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),o=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,o,a,r){try{var c=t[a](r),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,o)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)})}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){d(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/page-component/app-quick-navigation/app-quick-navigation").then(n.bind(null,"4d92"))},p=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},f=function(){return n.e("components/page-component/app-goods-recommend/app-goods-recommend").then(n.bind(null,"8e97"))},h=function(){return n.e("components/page-component/goods/u-attr").then(n.bind(null,"b4bc"))},m=function(){return n.e("components/page-component/goods/bd-info").then(n.bind(null,"0e01"))},b=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/bd-coupon")]).then(n.bind(null,"11b2"))},g=function(){return n.e("components/page-component/goods/bd-xbc").then(n.bind(null,"8639"))},v=function(){return n.e("components/page-component/goods/bd-kb").then(n.bind(null,"4c29"))},_=function(){return n.e("components/page-component/goods/bd-hc").then(n.bind(null,"de37"))},k=function(){return n.e("components/page-component/goods/bd-detail").then(n.bind(null,"3e70"))},y=function(){return n.e("components/page-component/goods/bd-comments").then(n.bind(null,"9470"))},w=function(){return n.e("components/basic-component/app-close/app-close").then(n.bind(null,"f0dd"))},O=function(){return n.e("components/page-component/goods/bd-service").then(n.bind(null,"861b"))},x={name:"detail",data:function(){return{showClose:!1,is_open:0,detail:null,attrShow:0,selectAttr:{},isVip:!1,discount:null,is_vip_card_user:0,shareData:{},recommend_list:[],activity:{},shareUrl:"",activity_status:1,poster_config:this.$api.pick.poster_config,poster_generate:this.$api.pick.poster_generate,flash_sale:null}},computed:u({},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,o.mapState)({themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,backP:e+"-m-back-p "+e,backO:e+"-m-back-o "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e,border:e+"-m-border "+e,mBtn:e+"-m-gradient-btn "+e,sBtn:e+"-s-gradient-btn "+e}}})),components:{"app-quick-navigation":l,appGoodsBanner:p,"app-goods-recommend":f,uAttr:h,bdInfo:m,bdCoupon:b,bdXbc:g,bdKb:v,bdHc:_,bdDetail:k,bdComments:y,appClose:w,bdService:O},methods:{getMall:function(t){this.is_open=t.is_open},getDetail:function(){var e=c(i.default.mark(function e(n){var o,a,r,c;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({url:this.$api.pick.goods,method:"get",data:{id:n}});case 2:o=e.sent,0===o.code?(a=o.data.detail,r=a.vip_card_appoint,c=a.plugin_extra,this.detail=o.data.detail,this.flash_sale=c.flash_sale,this.activity=o.data.activity,this.recommend_list=o.data.list,this.shareUrl="".concat(this.$api.pick.poster,"&goods_id=").concat(this.detail.id),this.activity_status=o.data.activity_status,(r.discount||"0.00"===r.discount)&&(this.isVip=!0,this.discount=r.discount),this.is_vip_card_user=r.is_vip_card_user):t.showToast({title:o.msg,icon:"none"});case 4:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),setCoupon:function(t){this.$set(this.detail.goods_coupon_center[t],"is_receive",1)},onAttr:function(t){this.selectAttr=t},quickShare:function(t){this.shareData=t},clickAttr:function(e){1===this.activity_status&&(1===e?this.attrShow=!0:t.navigateTo({url:"/plugins/pick/pond/pond?rule_num=".concat(this.activity.rule_num,"&pick_activity_id=").concat(this.activity.id)}))},add:function(){var e=c(i.default.mark(function e(n){var o,a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=n.goods_list[0],e.next=3,this.$request({url:this.$api.pick.add,data:{goods_id:o.id,attr:o.goods_attr_id,num:o.num,pick_activity_id:this.activity.id}});case 3:a=e.sent,0===a.code&&t.navigateBack();case 5:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),back:function(){t.navigateTo({url:"/pages/index/index"})},goBack:function(){t.navigateTo({url:"/plugins/pick/index/index"})},favorite:function(){var e=this.$api.user.favorite_add,n=!0;this.detail.favorite&&(e=this.$api.user.favorite_remove,n=!1),this.detail.favorite=n,this.$request({url:e,data:{goods_id:this.detail.id}}).then(function(e){0===e.code||t.showModal({title:"提示",content:e.msg,showCancel:!1})}).catch(function(){})}},onShow:function(){var t=this;this.showClose=!1,setTimeout(function(){t.showClose=!0})},onLoad:function(t){wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),this.getDetail(t.goods_id)},onShareTimeline:function(){return this.$shareTimeline({title:this.detail.app_share_title?this.detail.app_share_title:this.detail.name,query:{goods_id:this.detail.goods_id}})}};e.default=x}).call(this,n("543d")["default"])},"4ab7":function(t,e,n){"use strict";n.r(e);var i=n("596d"),o=n("b4d6");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("8216");var r=n("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"17fb5986",null);e["default"]=c.exports},"4f12":function(t,e,n){},"596d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},8216:function(t,e,n){"use strict";var i=n("4f12"),o=n.n(i);o.a},ae58:function(t,e){t.exports=require("../siteinfo.js")},b4d6:function(t,e,n){"use strict";n.r(e);var i=n("1e78"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}},[["5a77","common/runtime","common/vendor"]]]);