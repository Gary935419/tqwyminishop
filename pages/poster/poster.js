(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/poster/poster"],{"142a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"34bd":function(t,e,n){"use strict";n.r(e);var i=n("9e0d"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"63c0":function(t,e,n){},7286:function(t,e,n){"use strict";n.r(e);var i=n("142a"),r=n("34bd");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("a839");var a=n("2877"),c=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,"da3e9138",null);e["default"]=c.exports},"9e0d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=n("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function c(t){a(o,i,r,c,s,"next",t)}function s(t){a(o,i,r,c,s,"throw",t)}c(void 0)})}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){f(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{card_id:0,coupon_id:0,rpx:1,show:!1,info:{},canvas:null,dpr:2}},computed:u({},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,r.mapState)({poster_img:function(t){return t.mallConfig.__wxapp_img.poster}})),methods:{imgLoad:function(t){return new Promise(function(e,n){t.onload=function(){e(t)},t.onerror=function(){n(2)}})},createdImg:function(){var t=c(i.default.mark(function t(e,n,r,o,a,c,s,u){var f,d,l=arguments;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return f=l.length>8&&void 0!==l[8]&&l[8],d=e.createImage(),d.src=r,t.next=5,this.imgLoad(d).then(function(t){n.beginPath(),f&&(n.arc(c/2+o,s/2+a,c/2,0,2*Math.PI,!1),n.strokeStyle=u,n.stroke(),n.clip()),n.drawImage(d,o,a,c,s),n.restore(),n.closePath(),n.save()});case 5:case"end":return t.stop()}},t,this)}));function e(e,n,i,r,o,a,c,s){return t.apply(this,arguments)}return e}(),createdText:function(t,e,n,i,r,o,a,c){e.beginPath(),e.textAlign=a,e.font=o,e.fillStyle=c,e.fillText(n,i,r),e.stroke(),e.closePath(),e.save()},createdEllipse:function(t,e,n,i,r,o,a){var c=o/2,s=Math.abs(r-o);e.beginPath(),e.moveTo(n+c,i),e.lineTo(n+c+s,i),e.arcTo(n+r,i,n+r,i+c,c),e.arcTo(n+r,i+o,n+c+s,i+o,c),e.lineTo(n+c,i+o),e.arcTo(n,i+o,n,i+c,c),e.arcTo(n,i,n+c,i,c),e.strokeStyle="rgba(0, 0, 0, 0)",e.stroke(),e.clip(),e.fillStyle=a,e.fill(),e.restore(),e.closePath(),e.save()},created:function(){var t=c(i.default.mark(function t(e,n,r){var o,a,c,s,u,f,d,l,h,p;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o="#353535",a="sans-serif",t.next=4,this.createdImg(e,n,this.info.poster_bg,0,0,750*r,1334*r,"white",!1);case 4:return t.next=6,this.createdImg(e,n,this.info.avatar,310*r,66*r,130*r,130*r,"white",!0);case 6:if(this.createdText(e,n,this.info.nickname,376*r,252*r,28*r+"px "+a,"center","white"),!(this.card_id>0)){t.next=15;break}return t.next=10,this.createdImg(e,n,this.info.pic_url,76*r,394*r,120*r,120*r,"white",!0);case 10:c=this.info.name,s=33*r+"px "+a,c.length>20?(this.createdText(e,n,c.substring(0,10),220*r,439*r,s,"left",o),this.createdText(e,n,c.substring(11,20)+"...",220*r,490*r,s,"left",o)):c.length>10?(this.createdText(e,n,c.substring(0,10),220*r,439*r,s,"left",o),this.createdText(e,n,c.substring(11,c.length),220*r,490*r,s,"left",o)):this.createdText(e,n,c,220*r,465*r,s,"left",o),t.next=27;break;case 15:1===this.info.type?(this.createdText(e,n,this.info.discount,100*r,470*r,58*r+"px "+a,"left","white"),this.createdText(e,n,"折",185*r,470*r,33*r+"px "+a,"left","white")):(u=129,f=(this.info.sub_price+"").length,f>1&&(u-=15*(f-1)),this.createdText(e,n,"￥",u*r,470*r,33*r+"px "+a,"left","white"),this.createdText(e,n,this.info.sub_price,(u+30)*r,470*r,58*r+"px "+a,"left","white")),d="无门槛使用",this.info.min_price>0&&(d="满"+this.info.min_price+"可用"),this.createdText(e,n,d,286*r,439*r,33*r+"px "+a,"left",o),this.createdText(e,n,this.info.appoint_type,286*r,490*r,28*r+"px "+a,"left",o),l="",l=1==this.info.expire_type?"有效期：领取后".concat(this.info.expire_day,"天内有效"):"有效期：".concat(this.info.begin_time,"-").concat(this.info.end_time),h=parseInt(24*r),n.font=h+"px "+a,p=n.measureText(l).width,this.createdEllipse(e,n,(750*r-p)/2-h,882*r,p+48*r,60*r,"rgba(0, 0, 0, 0.2)"),this.createdText(e,n,l,375*r,920*r,h+"px "+a,"center","white");case 27:return t.next=29,this.createdImg(e,n,this.info.qrcode,255*r,964*r,240*r,240*r,"white",!0);case 29:return n.draw(),t.abrupt("return",null);case 31:case"end":return t.stop()}},t,this)}));function e(e,n,i){return t.apply(this,arguments)}return e}(),submitSave:function(){var e=this;e.$showLoading({text:"正在保存图片"}),t.canvasToTempFilePath({canvas:e.canvas,success:function(n){t.getImageInfo({src:n.tempFilePath,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(){t.showToast({title:"保存成功"})},fail:function(e){e.errMsg&&t.showModal({title:"提示",content:"您好,请先授权保存到相册权限",showCancel:!1,success:function(e){e.confirm&&t.openSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:n.path,success:function(){t.showToast({title:"保存成功"})}}):t.showModal({title:"提示",content:"授权失败，请稍后重新获取",showCancel:!1})}})}})},complete:function(t){e.$hideLoading()}})},fail:function(e){t.showModal({title:"图片下载失败",content:e.errMsg,showCancel:!1})},complete:function(t){e.$hideLoading()}})}})},getList:function(){var e,n,i=this;i.card_id>0&&(e=i.$api.poster.card,n={cardId:i.card_id}),i.coupon_id>0&&(e=i.$api.poster.coupon,n={coupon_id:i.coupon_id}),i.$request({url:e,data:n}).then(function(e){0==e.code?(i.info=e.data,i.$hideLoading(),setTimeout(function(){var e=t.createSelectorQuery();e.select("#poster").fields({node:!0,size:!0}).exec(function(e){var n=t.getSystemInfoSync().pixelRatio;i.canvas=e[0].node;var r=i.canvas.getContext("2d");i.canvas.width=e[0].width*n,i.canvas.height=e[0].height*n,r.scale(n,n),i.created(i.canvas,r,.4)})},100)):(i.$hideLoading(),t.showToast({title:e.msg,icon:"none",duration:1e3}))}).catch(function(t){i.$hideLoading()})}},onLoad:function(e){var n=this;this.dpr=t.getSystemInfoSync().pixelRatio,e.card_id>0&&(n.card_id=e.card_id),e.coupon_id>0&&(n.coupon_id=e.coupon_id),t.getSystemInfo({success:function(t){n.rpx=t.windowWidth/375}}),n.$showLoading({text:"生成中"}),n.getList()}};e.default=d}).call(this,n("543d")["default"])},a839:function(t,e,n){"use strict";var i=n("63c0"),r=n.n(i);r.a}},[["c582","common/runtime","common/vendor"]]]);