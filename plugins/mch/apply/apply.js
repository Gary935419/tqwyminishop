(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/apply/apply"],{1414:function(t,e,a){"use strict";var i=a("5f7a"),n=a.n(i);n.a},3818:function(t,e,a){"use strict";a.r(e);var i=a("5ad0"),n=a("a735");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("1414"),a("500d");var o=a("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"2848eb5d",null);e["default"]=s.exports},"500d":function(t,e,a){"use strict";var i=a("c8aa"),n=a.n(i);n.a},"5ad0":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"5f7a":function(t,e,a){},"7e57":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(a,!0).forEach(function(e){o(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s=function(){return a.e("components/page-component/app-area-picker/app-area-picker").then(a.bind(null,"8e44"))},c=function(){return a.e("components/page-component/app-diy-form/app-diy-form").then(a.bind(null,"7d93"))},u={name:"apply",components:{appAreaPicker:s,appDiyForm:c},computed:r({},(0,i.mapState)({appImg:function(t){return t.mallConfig.plugin.mch.app_image}})),data:function(){return{mch_id:-1,category_list:[],express_list:null,form_data:null,form_status:!1,rulesStatus:!1,area:{province_id:0,city_id:0,district_id:0},setting:null,status:-2,form:{realname:"",mobile:"",wechat:"",username:"",password:"",checkPass:"",address:"",name:"",service_mobile:"",mch_common_cat_str:"",mch_common_cat_id:0},formStatus:{errors:[],hasError:!1},submit_status:!1,template_message_list:null}},onLoad:function(t){this.mch_id=t.mch_id,this.getCategory()},methods:{hangleForm:function(t){this.form.form_data=t},navApplyRules:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.mch.setting),"&keys=").concat(JSON.stringify(["setting","desc"]))})},navHome:function(){t.navigateTo({url:"/pages/index/index"})},loadData:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.mch.mch_status}).then(function(e){t.$hideLoading(),0===e.code&&(t.mch=e.data.mch,t.status=t.mch?t.mch.review_status:-1,t.template_message_list=e.data.template_message_list,t.mch?t.formInfo(t.mch.id):t.getSetting())}).catch(function(e){t.$hideLoading()})},getCategory:function(){var t=this;t.$request({url:t.$api.mch.category,data:{id:t.mch_id}}).then(function(e){0===e.code&&(t.category_list=e.data.list,t.loadData())})},getExpress:function(){var t=this;t.$request({url:t.$api.mch.express_list}).then(function(e){0===e.code&&(t.express_list=e.data.list)})},getSetting:function(){var t=this;t.$request({url:t.$api.mch.setting}).then(function(e){t.$hideLoading(),0===e.code&&(t.setting=e.data.setting,t.form_data=e.data.setting.form_data)})},formInfo:function(t){var e=this;e.getExpress(),e.$request({url:e.$api.mch.detail,data:{id:t,is_review_status:1}}).then(function(t){if(0===t.code){var a=t.data.detail,i="";if(e.category_list.forEach(function(t){t.id==a.mch_common_cat_id&&(i=t.name)}),2===e.status&&e.getSetting(),0===e.status||1===e.status){var n=[];a.form_data&&a.form_data.length&&a.form_data.map(function(t){var e=[];"checkbox"===t.key&&(t.value=t.value?t.value:[],t.value.map(function(t){e.push({label:t})})),"radio"===t.key&&e.push({label:t.value}),n.push({key:t.key,name:t.key_name,default:t.value,is_required:t.required,img_type:t.img_type,list:e})}),e.form_data=n}e.form={mch_id:a.id,realname:a.realname,mobile:a.mobile,wechat:a.wechat,username:a.mchUser.username,password:"000000",checkPass:"000000",address:a.store.address,name:a.store.name,service_mobile:a.store.mobile,mch_common_cat_str:i,mch_common_cat_id:a.mch_common_cat_id},e.area={province_id:a.store.province_id,city_id:a.store.city_id,district_id:a.store.district_id}}})},applyInput:function(t){var e=t.currentTarget.dataset.type;this.form[e]=t.detail.value},categoryChange:function(t){var e=this.category_list[t.detail.value];this.form.mch_common_cat_id=e.id,this.form.mch_common_cat_str=e.name},areaEvent:function(t){t&&(this.area.province_id=t.province.id,this.area.city_id=t.city.id,this.area.district_id=t.district.id)},validateForm:function(t){this.formStatus=t},subscribe:function(t){this.$subscribe(this.template_message_list).then(function(e){t()}).catch(function(e){t()})},formSubmit:function(e){var a=this,i=a.form,n=a.area,r=a.rulesStatus,o=function(){return r?i.realname?i.mobile?i.username?i.password?i.mch_common_cat_id?i.password!==i.checkPass?"密码不一致":i.name?a.formStatus.hasError?a.formStatus.errors[0].msg:!!a.submit_status&&"提交中":"店铺名称不能为空":"类目不能为空":"密码不能为空":"账号不能为空":"联系电话不能为空":"联系人不能为空":"请同意入驻协议"}();o?t.showToast({title:o,icon:"none"}):a.subscribe(function(){a.$showLoading({text:"提交中"}),a.submit_status=!0,a.$request({url:a.$api.mch.apply,data:{id:i.mch_id?i.mch_id:0,realname:i.realname,mobile:i.mobile,wechat:i.wechat,username:i.username,password:i.password,name:i.name,province_id:n.province_id,city_id:n.city_id,district_id:n.district_id,mch_common_cat_id:i.mch_common_cat_id,address:i.address,service_mobile:i.service_mobile,form_data:i.form_data?JSON.stringify(i.form_data):JSON.stringify([]),is_update_apply:2===a.status?1:0},method:"POST"}).then(function(e){a.submit_status=!1,a.$hideLoading(),0===e.code?(a.loadData(),a.form_status=!1):t.showToast({title:e.msg,icon:"none"})}).catch(function(t){a.submit_status=!1})})},rulesTap:function(t){this.rulesStatus=t},closeForm:function(){this.form_status=!1},openForm:function(){this.form_status=!0}}};e.default=u}).call(this,a("543d")["default"])},a735:function(t,e,a){"use strict";a.r(e);var i=a("7e57"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},c8aa:function(t,e,a){}},[["3a3f","common/runtime","common/vendor"]]]);