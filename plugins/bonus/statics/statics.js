(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bonus/statics/statics"],{6593:function(t,e,a){"use strict";a.r(e);var i=a("d75b"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"700f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},b3ee:function(t,e,a){"use strict";var i=a("d981"),o=a.n(i);o.a},d75b:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n(a("a9cc"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var r=null,u={data:function(){return{list:[],setting:{},cWidth:"",cHeight:"",pixelRatio:1,_date:0,show:!0,all_data:[]}},methods:{tablist:function(t){var e=this;this._date=t,this.show=!0;var a,o,n={categories:[],series:[{name:"分红金额",data:[]}]};0==t?(e.list.day_list.forEach(function(t,i){a=e.list.day_list[i].created_at,n.series[0].data.push(t.bonus_price),i%6==0?(a<10?a="0"+a+":00":a+=":00",n.categories.push(a)):n.categories.push("")}),n.categories.push("24:00"),i.showColumn("canvasColumn",n,"line")):1==t?(e.list.day_7_list.forEach(function(t,i){a=e.list.day_7_list[i].created_at.slice(5),n.series[0].data.push(t.bonus_price),n.categories.push(a)}),o=[15,15,4,-30],i.showColumn("canvasColumn",n,"column",o)):2==t&&(e.list.month_12_list.forEach(function(t,i){a=e.list.month_12_list[i].created_at.slice(5)+"月",n.series[0].data.push(t.bonus_price),n.categories.push(a)}),o=[15,15,4,-30],i.showColumn("canvasColumn",n,"column",o)),this.$forceUpdate()},touchIt:function(t){r.showToolTip(t,{format:function(t,e){return t.color="rgba(0,0,0,0)","object"===s(t.data)?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}})},getSetting:function(){var e=this;e.$request({url:e.$api.bonus.setting}).then(function(a){0===a.code?(e.setting=a.data.list,e.setting.form&&e.setting.form.orders?t.setNavigationBarTitle({title:e.setting.form.statistic_bonus}):t.setNavigationBarTitle({title:"分红统计"})):t.showToast({title:a.msg,icon:"none",duration:1e3})}).catch(function(){e.$hideLoading()})},getList:function(){var e=this;t.showLoading({mask:!0,title:"加载中..."}),e.$request({url:e.$api.bonus.data}).then(function(a){if(t.hideLoading(),0==a.code){e.list=a.data.list,e.all_data=a.data.all_data;var o,n={categories:[],series:[{name:"分红金额",data:[]}]};a.data.list.day_list.forEach(function(t,e){o=a.data.list.day_list[e].created_at,n.series[0].data.push(t.bonus_price),e%6==0?(o<10?o="0"+o+":00":o+=":00",n.categories.push(o)):n.categories.push("")}),n.categories.push("24:00"),i.showColumn("canvasColumn",n,"line")}else t.showToast({title:a.msg,icon:"none",duration:1e3})}).catch(function(e){t.hideLoading()})},showColumn:function(t,e,a,n){r=new o.default({$this:i,canvasId:t,type:a||"column",legend:{show:!1},fontSize:9,background:"#FFFFFF",colors:["#ff4544"],pixelRatio:i.pixelRatio,padding:n||[15,15,4,0],categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{gridType:"dash",data:{disabled:!0}},dataLabel:!1,dataPointShape:!1,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{tooltip:{bgColor:"#000000",bgOpacity:.7}}})},changeData:function(){r.updateData({series:i.serverData.ColumnB.series,categories:i.serverData.ColumnB.categories})}},onLoad:function(){i=this,this.cWidth=t.upx2px(650),this.cHeight=t.upx2px(440),this.getList(),this.getSetting()}};e.default=u}).call(this,a("543d")["default"])},d981:function(t,e,a){},e279:function(t,e,a){"use strict";a.r(e);var i=a("700f"),o=a("6593");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("b3ee");var s=a("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"015dfe4e",null);e["default"]=r.exports}},[["b131","common/runtime","common/vendor"]]]);