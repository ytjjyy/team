(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-register-register"],{"060a":function(e,t,n){var i=n("b1ff");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("4aa1a110",i,!0,{sourceMap:!1,shadowMode:!1})},1045:function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14d9"),n("e9c4");var i={name:"thirdLogin",data:function(){return{isWechatShow:!1}},props:{},created:function(){this.getThirdLogin()},onLoad:function(){},methods:{getCid:function(){var e=plus.push.getClientInfo(),t=e.clientid,n=e.token;t&&n&&(uni.setStorageSync("devicetoken",t),this.devicetoken=uni.getStorageSync("devicetoken"))},getThirdLogin:function(){var e=this;this.$http.getThirdLogin().then((function(t){200==t.status&&(e.isWechatShow=t.data.open)}))},wxLogin:function(){var t=this;uni.login({provider:"weixin",success:function(n){e.log("res:wxLogin ",n),uni.getUserInfo({provider:"weixin",success:function(n){t.$loading(),t.$http.thirdLogin({oauth:"weixin_app",openid:n.userInfo.openId,nick_name:n.userInfo.nickName,iconurl:n.userInfo.avatarUrl,uniongender:n.userInfo.gender,unionid:n.userInfo.unionId,devicetoken:uni.getStorageSync("devicetoken")}).then((function(i){200==i.status&&(t.$hideLoading(),t.$toast(i.mess),uni.setStorageSync("token",i.data.token),uni.setStorageSync("identity",i.data.identity),uni.setStorageSync("role",i.data.role),uni.setStorageSync("role_id",i.data.shop_id),uni.setStorageSync("pid",i.data.shop_id),uni.setStorageSync("serviceShopId",i.data.serviceShopId),t.$store.commit("loginStatus",!0),uni.$emit("accountLogin",{isLogin:!0}),uni.closeSocket({success:function(){e.log("socket关闭成功")},fail:function(t){e.log(t)}}),setTimeout((function(){t.im(),uni.switchTab({url:"/pages/tabBar/home"})}),1500)),400!=i.status&&"unregister"!=i.data.info||(e.log(i),t.$u.route({url:"pagesB/login/bindPhone",params:{oauth:"weixin_app",openid:n.userInfo.openId,nick_name:n.userInfo.nickName,iconurl:n.userInfo.avatarUrl,uniongender:n.userInfo.gender,unionid:n.userInfo.unionId,devicetoken:uni.getStorageSync("devicetoken")}}))})).catch((function(t){e.log(JSON.stringify(t))}))}})},fail:function(t){e.log("login fail:",t)}})}}};t.default=i}).call(this,n("5a52")["default"])},"1bff":function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d81d");var r=i(n("958c")),o=i(n("b2a0")),a=i(n("38e57")),s={components:{agreement:o.default,thirdLogin:a.default},data:function(){return{phone:"",code:"",password:"",agreement:!0,timer:null,isClick:!0,time:60,showTime:!1,parmas:null,providerList:[],isWechatShow:!1,register_client:"",icons:[{wechatSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAtCAMAAAA9SAOJAAAAP1BMVEVHcEwAzhEAzxEAzxEAzxEAzhIAzhEAzhEAzhEAzxEAzAUAzxIA0A8AzxEAzxIAzxIAzxIAzxIAzxEAzxIAzhJTJhCyAAAAFHRSTlMA6kSuyfXe+x8wB9UToHODullkksUumccAAAG+SURBVEjHnVZZloMgEJRFoGURkfufdeLSCAbQTP0kPijppbpwGHKAs5yMciTcOhheQs0i5hCzesOyMt4h2SPTjbGGcZ56LONjC7pzpBKxDUKbp/Von1gbxInHPkg91BnXeQhXntIujuBCrTgK68+2p3T2sskAl1yFZ3HnnobDpu9rGiM130VJjQvb44rF2HeSYq1AKAoO6S3eZJlH3g5zC05nWpOanL/MWvZVGd1vwUqnwQBdKNxSJB2WCJMJDHcImwtAtmnrpNZc7jIKl+Idm/JaakMi8MyWNgnUh0Sek8XqNEmbQ3LU1tUXnWkXmhXyLMBbceyYm4HSBf/ZOYl0xepKyEVfHCeuScD5hCRD6XMpZwgU/0EaUJKrS9XnXSXVrpeNfDpHZZ7hV8VJplqedCaZTyn5qp/5TH11HZLTK8pQmXlwqijR0+xvvDH5fNmG8YGnkcfL6J8s1aIZ7i8Jzh5OoeYHHr3C1Mv5CgCYoE8TKUxkIXyXh5un5W5X0PGPY5Aa6GQoTO8uZT9eT+l6Yy3j+dedz198ZABvd64P6u91XV9+DZnw+YSSUQrmKPis5a+A9k51hOFfCMcV+gcWnnA2pRVdxQAAAABJRU5ErkJggg=="}],logoSrc:this.STATICURL+"images/logo/logoWoshop300.png",delSrc:"data:image/png;base64,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"}},onLoad:function(t){var n=this;this.AppName=this.$AppName,this.getCid(),this.register_client="H5",uni.getProvider({service:"oauth",success:function(e){n.providerList=e.provider.map((function(e){var t="";switch(e){case"weixin":t=n.$t("微信登录");break;case"qq":t=n.$t("QQ登录");break;case"sinaweibo":t=n.$t("新浪微博登录");break;case"xiaomi":t=n.$t("小米登录");break;case"baidu":t=n.$t("百度登录");break;case"alipay":t=n.$t("支付宝登录");break}return{name:t,id:e}}))},fail:function(t){e.log("获取登录通道失败",t)}})},methods:{changeAgree:function(t){this.agreement=t,e.log(this.agreement)},getCid:function(){},formSubmit:function(t){var n=this,i=[{name:"phone",checkType:"phoneno",checkRule:"11",errorMsg:this.$t("手机格式不正确")},{name:"code",checkType:"notnull",checkRule:"",errorMsg:this.$t("请输入验证码")},{name:"pwd",checkType:"string",checkRule:"4,16",errorMsg:this.$t("输入4-16位密码")}],o=t.detail.value,a=r.default.check(o,i);if(a){if(!this.agreement)return this.$toast(this.$t("请勾选协议")),!1;this.$loading(),this.$http.getRegister({phone:this.phone,password:this.password,phonecode:this.code,repwd:this.password,xieyi:1,register_client:this.register_client}).then((function(e){200==e.status&&(n.$toast(e.mess),setTimeout((function(){n.$u.route("/pagesB/login/login")}),1500))})).catch((function(t){e.log(t)}))}else this.$toast(r.default.error)},getThirdLogin:function(){var e=this;this.$http.getThirdLogin().then((function(t){200==t.status&&(e.isWechatShow=t.data.open)}))},getCode:function(){var e=this;if(this.isClick){if(11!=this.phone.length)return this.$toast(this.$t("手机格式不正确"));this.$loading(),this.$http.getSmsCode({phone:this.phone,type:1}).then((function(t){200==t.status&&(e.showTime=!0,e.$toast(t.mess),e.timer=setInterval((function(){e.isClick=!1,e.time=e.time-1,e.time<=0&&(e.isClick=!0,e.time=60,e.showTime=!1,clearInterval(e.timer),e.timer=null)}),1e3))}))}},goTo:function(e){this.$navigateTo(e)}},onUnload:function(){this.isClick=!0,this.time=60,clearInterval(this.timer),this.timer=null}};t.default=s}).call(this,n("5a52")["default"])},"2bd4":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uImage:n("a238").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-form",{staticClass:"form",on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"formContent"},[n("v-uni-view",{staticClass:"header"},[n("u-image",{staticClass:"logoSrc",attrs:{"border-radius":"300",src:e.logoSrc,width:"100",height:"100"}}),n("h2",{staticClass:"mainTit"},[e._v(e._s(e.$t("欢迎注册"))+e._s(e.AppName))]),n("h3",{staticClass:"subTit"},[e._v(e._s(e.$t("开心购物 快乐生活")))])],1),n("v-uni-view",{staticClass:"formItem"},[n("v-uni-view",{staticClass:"area"},[e._v("+86")]),n("v-uni-input",{staticClass:"input phone",attrs:{type:"number",name:"phone",placeholder:e.$t("请输入手机号")},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("v-uni-view",{staticClass:"formItem"},[n("v-uni-input",{staticClass:"input",attrs:{type:"text",name:"code",placeholder:e.$t("请输入验证码")},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e.showTime?n("v-uni-view",{staticClass:"sendCode btn-color"},[e._v(e._s(e.time)+"s"+e._s(e.$t("后重新获取")))]):n("v-uni-view",{staticClass:"sendCode btn-color",attrs:{"hover-class":"text-hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode()}}},[e._v(e._s(e.$t("获取验证码")))])],1),n("v-uni-view",{staticClass:"formItem"},[n("v-uni-input",{staticClass:"input",attrs:{type:"password",name:"pwd",placeholder:e.$t("请输入密码")},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("agreement",{on:{changeAgree:function(t){arguments[0]=t=e.$handleEvent(t),e.changeAgree.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"formButton"},[n("v-uni-button",{staticClass:"button",attrs:{formType:"submit","hover-class":"text-hover"}},[e._v(e._s(e.$t("立即注册")))])],1),n("v-uni-view",{staticClass:"u-flex u-row-center u-m-t-30"},[n("v-uni-view",{style:{color:e.$u.color["tipsColor"]},attrs:{"hover-class":"text-hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.route("/pagesB/login/smsLogin")}}},[e._v(e._s(e.$t("短信验证码登录")))])],1)],1)],1),n("thirdLogin")],1)},o=[]},3026:function(e,t,n){"use strict";n.r(t);var i=n("1bff"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"35b0":function(e,t,n){"use strict";n.r(t);var i=n("1045"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"38e57":function(e,t,n){"use strict";n.r(t);var i=n("85a8"),r=n("35b0");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("6d09");var a=n("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"5e24ddee",null,!1,i["a"],void 0);t["default"]=s.exports},"6d09":function(e,t,n){"use strict";var i=n("060a"),r=n.n(i);r.a},"85a8":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"third-login-wrap"})},r=[]},"94d8":function(e,t,n){var i=n("c712");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("f69fcf48",i,!0,{sourceMap:!1,shadowMode:!1})},"958c":function(e,t,n){n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("00b4"),n("a9e3"),n("c975"),e.exports={error:"",check:function(e,t){for(var n=0;n<t.length;n++){if(!t[n].checkType)return!0;if(!t[n].name)return!0;if(!t[n].errorMsg)return!0;if(!e[t[n].name])return this.error=t[n].errorMsg,!1;switch(t[n].checkType){case"string":var i=new RegExp(".{"+t[n].checkRule+"}");if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"int":i=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[n].checkRule+"}$");if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[n].name]))return this.error=t[n].errorMsg,!1;var r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"betweenD":i=/^-?[1-9][0-9]?$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"betweenF":i=/^-?[0-9][0-9]?.+[0-9]+$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"same":if(e[t[n].name]!=t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"notsame":if(e[t[n].name]==t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"email":i=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"phoneno":i=/^1[0-9]{10,10}$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"zipcode":i=/^[0-9]{6}$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"reg":i=new RegExp(t[n].checkRule);if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"in":if(-1==t[n].checkRule.indexOf(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"notnull":if(null==e[t[n].name]||e[t[n].name].length<1)return this.error=t[n].errorMsg,!1;break}}return!0},isNumber:function(e){return/^-?[1-9][0-9]?.?[0-9]*$/.test(e)}}},"9dcd":function(e,t,n){"use strict";n.r(t);var i=n("2bd4"),r=n("3026");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("c760");var a=n("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"4a52e4b4",null,!1,i["a"],void 0);t["default"]=s.exports},b1ff:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n  * @Description: WoShop\n  * @Author: Parker\n  * @Copyright: 武汉一一零七科技有限公司©版权所有\n  * @Link: www.wo-shop.net\n  * @Contact: QQ:2487937004\n  * =======================================================================================\n  * 这里是uni-app内置的常用样式变量\n  * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n  * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n  *\n */\n/**\n  * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n  *\n  * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:webfont;font-display:swap;src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot);\n  /* IE9*/src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff2) format("woff2"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff) format("woff"),url(//at.alicdn.com/t/webfont_li5p20ilokm.ttf) format("truetype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.svg#Alibaba-PuHuiTi-Regular) format("svg")\n  /* iOS 4.1- */}.textEllipsis[data-v-5e24ddee]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.liveStatus[data-v-5e24ddee]{position:absolute;top:%?8?%;left:%?10?%;z-index:99;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;border-radius:100px;padding-right:%?16?%}.liveAn[data-v-5e24ddee]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;background-image:linear-gradient(90deg,#ffa468,#fa3f3f);width:%?28?%;height:%?24?%;border-radius:100px;padding:%?4?% %?8?%;margin-right:%?8?%;border-top-right-radius:%?20?%}.seeNum[data-v-5e24ddee]{font-size:%?24?%;color:#fff;line-height:%?24?%}.third-login-wrap[data-v-5e24ddee]{position:fixed;bottom:%?100?%;width:100%}.third-login-wrap .third-login-title[data-v-5e24ddee]{text-align:center;font-size:%?24?%;color:#d0d0d0;margin-bottom:%?10?%}',""]),e.exports=t},c712:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n  * @Description: WoShop\n  * @Author: Parker\n  * @Copyright: 武汉一一零七科技有限公司©版权所有\n  * @Link: www.wo-shop.net\n  * @Contact: QQ:2487937004\n  * =======================================================================================\n  * 这里是uni-app内置的常用样式变量\n  * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n  * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n  *\n */\n/**\n  * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n  *\n  * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:webfont;font-display:swap;src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot);\n  /* IE9*/src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff2) format("woff2"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff) format("woff"),url(//at.alicdn.com/t/webfont_li5p20ilokm.ttf) format("truetype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.svg#Alibaba-PuHuiTi-Regular) format("svg")\n  /* iOS 4.1- */}.textEllipsis[data-v-4a52e4b4]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.liveStatus[data-v-4a52e4b4]{position:absolute;top:%?8?%;left:%?10?%;z-index:99;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;border-radius:100px;padding-right:%?16?%}.liveAn[data-v-4a52e4b4]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;background-image:linear-gradient(90deg,#ffa468,#fa3f3f);width:%?28?%;height:%?24?%;border-radius:100px;padding:%?4?% %?8?%;margin-right:%?8?%;border-top-right-radius:%?20?%}.seeNum[data-v-4a52e4b4]{font-size:%?24?%;color:#fff;line-height:%?24?%}.page[data-v-4a52e4b4]{background:#fff;height:100%}.page .form[data-v-4a52e4b4]{width:100%}.page .form .formContent[data-v-4a52e4b4]{padding-top:%?100?%;padding-left:%?70?%;padding-right:%?70?%}.page .form .formContent .backBtn[data-v-4a52e4b4]{position:absolute;right:%?70?%}.page .form .formContent .backBtn uni-image[data-v-4a52e4b4]{width:%?54?%;height:%?54?%}.page .form .formContent .header[data-v-4a52e4b4]{text-align:left;margin-bottom:%?34?%;margin-top:%?100?%}.page .form .formContent .header .logoSrc[data-v-4a52e4b4]{width:%?110?%;height:%?110?%;border-radius:200px;position:relative;box-shadow:0 0 0 %?6?% #ffd0d0,0 0 0 %?14?% #ffefef}.page .form .formContent .header .mainTit[data-v-4a52e4b4]{font-size:%?48?%;color:#333;margin:%?20?% 0}.page .form .formContent .header .subTit[data-v-4a52e4b4]{font-size:%?28?%;color:#666;font-weight:200}.page .form .formContent .formItem[data-v-4a52e4b4]{height:%?104?%;border-bottom:1px solid #eee;display:flex;align-items:center}.page .form .formContent .formItem .area[data-v-4a52e4b4]{font-size:%?30?%;color:#333;padding-right:%?34?%;line-height:1;border-right:%?1?% solid #9b9b9b}.page .form .formContent .formItem .sendCode[data-v-4a52e4b4]{background-color:initial;color:#ec4849}.page .form .formContent .formItem uni-input[data-v-4a52e4b4]{flex:1;font-size:%?30?%;font-weight:400}.page .form .formContent .formItem uni-input.phone[data-v-4a52e4b4]{padding-left:%?33?%}.page .form .formContent .formItem uni-input[data-v-4a52e4b4]::-webkit-input-placeholder{color:#ccc}.page .form .formContent .formButton[data-v-4a52e4b4]{margin-top:%?60?%;position:relative;margin-bottom:%?30?%}.page .form .formContent .formButton uni-button[data-v-4a52e4b4]{height:%?80?%;line-height:%?80?%;border-radius:%?80?%}.page .form .formContent .agreement[data-v-4a52e4b4]{font-size:%?24?%;color:#999;margin-top:%?36?%;padding-left:%?8?%;padding-bottom:%?20?%;display:flex;align-items:center}.page .form .formContent .agreement uni-image[data-v-4a52e4b4]{margin-right:%?4?%;width:%?25?%;height:%?25?%}.page .other-login[data-v-4a52e4b4]{margin-top:%?70?%;text-align:center}.page .other-login .title[data-v-4a52e4b4]{color:#999}.page .other-login .wrap[data-v-4a52e4b4]{display:flex;justify-content:center;margin-top:%?30?%}.page .other-login .wrap .item[data-v-4a52e4b4]{display:flex;flex-direction:column;align-items:center}.page .other-login .wrap .item .icon-otherLogin[data-v-4a52e4b4]{width:%?55?%;height:%?27?%}',""]),e.exports=t},c760:function(e,t,n){"use strict";var i=n("94d8"),r=n.n(i);r.a}}]);