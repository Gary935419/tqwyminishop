(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/goods/goods"],{"2d6c":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("2f62");function o(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,n)}return e}function a(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(e,!0).forEach(function(i){s(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function s(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var d=function(){return e.e("components/basic-component/app-tab-nav/app-tab-nav").then(e.bind(null,"7fd0"))},r={data:function(){return{tabList:[{id:1,name:"出售中"},{id:0,name:"下架中"}],activeTab:"1",getFocus:!1,keyword:"",page:1,id:null,more_list:!1,iphone_x:!1,status:null,page_loading:!0,list:[],is_switch:!1,is_delete:!1,toSearch:!1,device:null,first:!1,loading:!1}},components:{"app-tab-nav":d},computed:a({},(0,n.mapState)({userInfo:function(t){return t.user.info},appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{toEdit:function(i){t.navigateTo({url:"/pages/app_admin/add-goods/add-goods?id="+i})},clearSearch:function(){this.keyword="",this.reload()},toAdd:function(){t.navigateTo({url:"/pages/app_admin/add-goods/add-goods"})},toRedirect:function(i){t.redirectTo({url:i})},beSearch:function(){this.getFocus=!1,0==this.keyword.length?this.toSearch=!this.toSearch:this.toSearch=this.toSearch},reload:function(){t.showLoading({mask:!0,title:"加载中..."}),this.list=[],this.page=1,this.id=null,this.getList()},cancel:function(){this.id=null,this.is_delete=!1,this.is_switch=!1},toDelete:function(t){this.is_delete=!0},showMenu:function(t){this.id==t?this.id=null:this.id=t},toSwitch:function(t,i){var e=this;e.id=i,e.status=t,e.is_switch=!0},tabStatus:function(i){if(this.loading)return!1;this.list=[],this.page=1,this.activeTab=i.currentTarget.dataset.id,t.showLoading({mask:!0,title:"加载中..."}),this.getList()},getList:function(){var i=this;if(i.loading)return!1;i.loading=!0;var e={keyword:i.keyword};e.status=i.activeTab,i.$request({url:i.$api.app_admin.goods,data:{page:i.page,search:JSON.stringify(e)}}).then(function(e){i.loading=!1,t.hideLoading(),i.$hideLoading(),0===e.code?(i.list=i.list.concat(e.data.list),i.page++,i.more_list=!1,i.first=!0,e.data.list.length==e.data.pagination.pageSize&&(i.more_list=!0)):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){i.loading=!1,t.hideLoading(),i.$hideLoading()})},goods_destroy:function(){var i=this;t.showLoading({mask:!0,title:"加载中..."}),i.$request({url:i.$api.app_admin.goods_destroy,data:{id:i.id},method:"post"}).then(function(e){t.hideLoading(),0==e.code?(i.page=1,i.list=[],i.id=null,i.is_delete=!1,i.getList()):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(i){t.hideLoading()})},goods_switch:function(){var i=this;i.$request({url:i.$api.app_admin.goods_switch,data:{status:i.status,id:i.id},method:"post"}).then(function(e){0==e.code?(i.page=1,i.id=null,i.list=[],i.is_switch=!1,i.getList()):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){})}},onLoad:function(){var i=this;t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),this.activeTab="1",this.$showLoading({type:"global",text:"加载中..."}),this.getList()},onReachBottom:function(){this.more_list&&this.getList()},onShow:function(){var t=this;t.id=null,t.first&&(this.$showLoading({type:"global",text:"加载中..."}),t.list=[],t.page=1,t.getList())}};i.default=r}).call(this,e("543d")["default"])},"861d":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.id=null},t.e1=function(i){t.getFocus=!0},t.e2=function(i){t.id=null})},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},bda9:function(t,i,e){"use strict";e.r(i);var n=e("2d6c"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},cef1:function(t,i,e){"use strict";var n=e("f346"),o=e.n(n);o.a},d2c1:function(t,i,e){"use strict";e.r(i);var n=e("861d"),o=e("bda9");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("cef1");var s=e("2877"),d=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"1cb7cf18",null);i["default"]=d.exports},f346:function(t,i,e){}},[["2a24","common/runtime","common/vendor"]]]);