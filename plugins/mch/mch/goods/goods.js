(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/goods/goods"],{"4bc6":function(t,i,o){"use strict";o.r(i);var e=o("d919"),n=o("bc65");for(var s in n)"default"!==s&&function(t){o.d(i,t,function(){return n[t]})}(s);o("f8c4");var a=o("2877"),c=Object(a["a"])(n["default"],e["a"],e["b"],!1,null,"71639bf4",null);i["default"]=c.exports},bc65:function(t,i,o){"use strict";o.r(i);var e=o("f9b5"),n=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},d919:function(t,i,o){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.id=null},t.e1=function(i){t.id=null})},n=[];o.d(i,"a",function(){return e}),o.d(i,"b",function(){return n})},ebb4:function(t,i,o){},f8c4:function(t,i,o){"use strict";var e=o("ebb4"),n=o.n(e);n.a},f9b5:function(t,i,o){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=o("2f62");function n(t,i){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,e)}return o}function s(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?n(o,!0).forEach(function(i){a(t,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(o).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i))})}return t}function a(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}var c=function(){return o.e("components/basic-component/app-tab-nav/app-tab-nav").then(o.bind(null,"7fd0"))},u={data:function(){return{tabList:[{id:1,name:"出售中"},{id:2,name:"售罄"},{id:3,name:"仓库中"},{id:4,name:"最新"}],activeTab:"1",keyword:"",page:1,id:null,more_list:!1,iphone_x:!1,status:null,page_loading:!0,sort_type:0,sort:1,is_goods_audit:1,go_status:1,is_sold_out:0,list:[],is_switch:!1,is_delete:!1,apply_up:!1,toSearch:!1,device:null,mch_id:0}},components:{"app-tab-nav":c},computed:s({},(0,e.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},adminImg:function(t){return t.mallConfig.__wxapp_img.mch}})),methods:{toEdit:function(i){var o=this;t.navigateTo({url:"/plugins/mch/mch/add-goods/add-goods?id="+i+"&mch_id="+this.mch_id}),setTimeout(function(){o.id=null})},toAdd:function(){t.navigateTo({url:"/plugins/mch/mch/add-goods/add-goods?mch_id="+this.mch_id})},beSearch:function(){0==this.keyword.length?this.toSearch=!this.toSearch:this.toSearch=this.toSearch},reload:function(){this.id=null,this.getList()},cancel:function(){this.id=null,this.is_delete=!1,this.is_switch=!1,this.apply_up=!1},toDelete:function(t){this.is_delete=!0},showMenu:function(t){this.id=t},toSwitch:function(t,i){var o=this;o.id=i,2==t?o.apply_up=!0:(o.status=t,o.is_switch=!0)},tabStatus:function(t){this.activeTab=t.currentTarget.dataset.id,this.getList()},applyStatus:function(){var i=this;i.apply_up=!1,t.showLoading({title:"申请中..."}),i.$request({url:i.$api.mch.apply_status,method:"post",data:{mch_id:i.mch_id,id:i.id}}).then(function(o){t.hideLoading(),0==o.code?(t.showToast({title:o.msg,duration:1e3}),setTimeout(function(){i.reload()},1e3)):t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(i){t.hideLoading()})},getList:function(){var i=this;t.showLoading({title:"加载中..."}),i.list=[],i.page=1,"1"==i.activeTab?(i.go_status=1,i.is_sold_out=0):"2"==i.activeTab?(i.go_status=1,i.is_sold_out=1):"3"==i.activeTab?(i.go_status=0,i.is_sold_out=0):"4"==i.activeTab&&(i.go_status=1,i.is_sold_out=0),i.$request({url:i.$api.mch.goods,data:{page:i.page,mch_id:i.mch_id,sort:i.sort,sort_type:i.sort_type,keyword:i.keyword,status:i.go_status,is_sold_out:i.is_sold_out}}).then(function(o){t.hideLoading(),0==o.code?(i.list=o.data.list,i.page++,i.more_list=!1,10==o.data.list.length&&(i.more_list=!0)):t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(i){t.hideLoading()})},getMore:function(){var i=this;t.showLoading({title:"加载中..."}),"1"==i.activeTab?(i.go_status=1,i.is_sold_out=0):"2"==i.activeTab?(i.go_status=1,i.is_sold_out=1):"3"==i.activeTab?(i.go_status=0,i.is_sold_out=0):"4"==i.activeTab&&(i.go_status=1,i.is_sold_out=0),i.$request({url:i.$api.mch.goods,data:{page:i.page,mch_id:i.mch_id,sort:i.sort,sort_type:i.sort_type,keyword:i.keyword,status:i.go_status,is_sold_out:i.is_sold_out}}).then(function(o){t.hideLoading(),0==o.code?(i.list=i.list.concat(o.data.list),i.page++,i.more_list=!1,10==o.data.list.length&&(i.more_list=!0)):t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(i){t.hideLoading()})},goods_destroy:function(){var i=this;i.is_delete=!1,t.showLoading({title:"加载中..."}),i.$request({url:i.$api.mch.destroy,data:{mch_id:i.mch_id,id:i.id},method:"post"}).then(function(o){t.hideLoading(),0==o.code?(t.showToast({title:o.msg,duration:1e3}),setTimeout(function(){i.reload()},1e3)):t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(t){un})},goods_switch:function(){var i=this;i.is_switch=!1,t.showLoading({title:"加载中..."}),i.$request({url:i.$api.mch.switch_status,data:{mch_id:i.mch_id,id:i.id},method:"post"}).then(function(o){t.hideLoading(),0==o.code?(t.showToast({title:o.msg,duration:1e3}),setTimeout(function(){i.reload()},1e3)):t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(i){t.hideLoading()})},getSetting:function(){var i=this;i.$showLoading({type:"global",text:"加载中..."}),i.$request({url:i.$api.mch.setting}).then(function(o){i.$hideLoading(),0==o.code?i.is_goods_audit=o.data.setting.is_goods_audit:t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(t){i.$hideLoading()})}},onReachBottom:function(){this.more_list&&this.getMore()},onLoad:function(t){var i=this;i.mch_id=t.mch_id,i.go_status=1,i.is_sold_out=0,i.getSetting()},onShow:function(t){var i=this,o=setInterval(function(){i.mch_id>0&&(clearInterval(o),i.getList())},500)}};i.default=u}).call(this,o("543d")["default"])}},[["0ae7","common/runtime","common/vendor"]]]);