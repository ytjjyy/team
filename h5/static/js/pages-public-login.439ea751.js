(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-login"],{"095b":function(n,i,t){"use strict";t.r(i);var e=t("7843"),o=t("8b8d");for(var a in o)"default"!==a&&function(n){t.d(i,n,(function(){return o[n]}))}(a);t("4fb8");var r,l=t("f0c5"),s=Object(l["a"])(o["default"],e["b"],e["c"],!1,null,"09f641d5",null,!1,e["a"],r);i["default"]=s.exports},"4fb8":function(n,i,t){"use strict";var e=t("795d"),o=t.n(e);o.a},5028:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.userRegister=i.userLogin=void 0;var e=uni.$u.http,o=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.post("/pub/account/signin",n,i)};i.userLogin=o;var a=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.post("/pub/account/signup",n,i)};i.userRegister=a},7843:function(n,i,t){"use strict";var e;t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return e}));var o=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("v-uni-view",{staticClass:"container "},[t("v-uni-view",{staticClass:"login"},[t("v-uni-view",{staticClass:"header"},[t("v-uni-view",{staticClass:"back",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.clickBack.apply(void 0,arguments)}}},[t("img",{attrs:{src:"/static/back.png"}})]),t("h1",[n._v(n._s(n.$t("locale.title.login")))])],1),t("v-uni-view",{staticClass:"top-container"},[t("img",{attrs:{src:"/static/logo-"+n.langLocale+".png"}})]),t("v-uni-view",{staticClass:"login-form"},[t("v-uni-view",{staticClass:"input-container"},[t("i",{staticClass:"icon user"}),t("v-uni-view",{staticClass:"textInput"},[t("v-uni-input",{attrs:{type:"text",placeholder:n.$t("locale.login.input1"),autocomplete:"off"},model:{value:n.loginName,callback:function(i){n.loginName=i},expression:"loginName"}}),t("i",{staticClass:"btn-clear",staticStyle:{display:"none"}})],1)],1),t("v-uni-view",{staticClass:"input-container"},[t("i",{staticClass:"icon pwd"}),t("v-uni-view",{staticClass:"textInput"},[t("v-uni-input",{attrs:{type:"password",placeholder:n.$t("locale.login.input2"),autocomplete:"off"},model:{value:n.loginPassword,callback:function(i){n.loginPassword=i},expression:"loginPassword"}}),t("i",{staticClass:"btn-clear",staticStyle:{display:"none"}})],1)],1),t("v-uni-view",{staticClass:"remeber"},[t("i",{class:n.remberFlag?"active":"",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.remberFlag=!n.remberFlag}}}),n._v(n._s(n.$t("locale.login.rember")))]),t("v-uni-view",{staticClass:"btn btn-full",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.clickLogin.apply(void 0,arguments)}}},[n._v(n._s(n.$t("locale.title.login")))]),t("v-uni-view",{staticClass:"login-desc"},[t("a",{staticClass:"forget-pwd",attrs:{href:"https://t.me/OB_kefu01",target:"_blanket"}},[n._v(n._s(n.$t("locale.login.forget")))]),t("a",{on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.clickRegister.apply(void 0,arguments)}}},[n._v(n._s(n.$t("locale.login.register")))])])],1)],1)],1)},a=[]},"795d":function(n,i,t){var e=t("963e");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var o=t("4f06").default;o("5becbba5",e,!0,{sourceMap:!1,shadowMode:!1})},"8b8d":function(n,i,t){"use strict";t.r(i);var e=t("c3e0"),o=t.n(e);for(var a in e)"default"!==a&&function(n){t.d(i,n,(function(){return e[n]}))}(a);i["default"]=o.a},"963e":function(n,i,t){var e=t("24fb");i=e(!1),i.push([n.i,".container[data-v-09f641d5]{position:static;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:100%;background:#121923;max-width:100vw;margin:0 auto}.login[data-v-09f641d5]{height:100vh;width:100%;overflow-y:auto;background:#121923;background:linear-gradient(180deg,rgba(75,88,111,.882353) 1%,rgba(18,25,35,.882353) 35%);color:hsla(0,0%,100%,.6);padding:13.333vw 0}.header[data-v-09f641d5]{position:relative;height:13.333vw;display:flex;align-items:center;text-align:center;position:fixed;top:0;left:50%;width:100%;z-index:9999;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:100vw;background:0 0!important}.header .back[data-v-09f641d5]{width:13.333vw;height:13.333vw;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;cursor:pointer}.header .back img[data-v-09f641d5]{width:7.333vw;height:7.333vw}.header h1[data-v-09f641d5]{color:#b39a6f;width:100%;font-size:3.733vw;font-weight:400}.login .top-container[data-v-09f641d5]{margin-bottom:26.267vw;padding-top:14.667vw;text-align:center}.login .top-container img[data-v-09f641d5]{height:16.133vw}.login-form[data-v-09f641d5]{margin-top:13.333vw}.input-hidden[data-v-09f641d5]{width:0;height:0;line-height:0;overflow:hidden;opacity:0;position:absolute}.input-container[data-v-09f641d5]{display:flex;flex-direction:row;height:11.2vw;align-items:center;opacity:.9;background:#272c36;box-shadow:0 .667vw .267vw 0 rgb(0 0 0/10%);border-radius:3.2vw;padding:0 1.333vw 0 4vw;margin:0 4.667vw 2.667vw}.login-form .icon.user[data-v-09f641d5]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAPFBMVEUAAAC/oH2+oHzEpIG+n3vXvJTCo4G+oHy/oH2+n3y+oHu+oH2+oHu9n3y+oHu/oXy9n3u/o36+n3y9n3vxNxm6AAAAE3RSTlMAM8waqQYQ10q6lIjwwp5hVSl1KD2PyQAAAIlJREFUKM+V0EkSwjAMRFE5kmdnQve/K5QDRAgllfzt23Q1XA1XPJAlMnNcDPHEW+T/rPKnqsnxnlNWhBVlWVhWNgoblU3CJmVJWAIVfYlAF+KbYjCOqZ2qB6uQ5hTgTn7Owx4lQTjwbxTERF324mfdY6OVjRqKR3Slb2ymtT6S7fDcXuisEE57AgM3FesCtWp4AAAAAElFTkSuQmCC) no-repeat;background-size:contain}.login-form .icon[data-v-09f641d5]{width:4.267vw;height:4.267vw;flex-shrink:0;display:inline-block}.textInput[data-v-09f641d5]{position:relative;flex:1;height:100%}.textInput uni-input[data-v-09f641d5]{width:100%;height:100%;outline:none;background:transparent;border:none;margin-left:2.667vw;border-radius:1.067vw;padding:0 10.133vw 0 0;opacity:.8;font-size:3.467vw;color:hsla(0,0%,100%,.8)}.textInput .btn-clear[data-v-09f641d5]{width:4vw;height:4vw;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAABXklEQVRIDa1WS27DIBCFqAfIQbKoKvUsURZdRcpdeoNussoiylkqRTlKbuC+ZzN0jM0wtjISMJj3AUxMYtd1uxDCFwrjFmO8D+m6GnrvYB4S+xLx4BudbXrQoT3D5Df1FzXQ+gThiBIT8bkpFDhwTMBiyO7OiPcEGlxROHOJxSYVcWreNtiOB5IzyioTQ5xbfZe9Cg3g7DvxcLIB98dDII7hxY4MvESvOPUmBi0TjiP0UWS/erxnDXrG9EyLEFvNq4qXQPZHUdkKjTHFCdQz0cScGyZNcYqUv+Qs/KrEXIExe/FvrqJqUBGnIEPzTBMNHKioDXF+UhjuY/o24P9rS1w+48CUJpwov8JBMKI4WoFHXIhebDbwEsSArYfTG3iAWljnLS6vzA8QTih5NcjNk6ENmBsmP+Wd3ONRLb6XKyaTO3nRzDkbiXR6ypsxcAX6b8sVQF6hqyNt+T4JXP4A/OnavmbYxKIAAAAASUVORK5CYII=) no-repeat;background-position:50%;background-size:80% 80%;cursor:pointer;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:1.067vw}.login-form .icon.pwd[data-v-09f641d5]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAPFBMVEUAAAC2k2+8nnu9n3q9nnu9n3u9mHq8nnq8nnq8nnm6nni8nnq9n3m9nnq8nnq7nnq7nnm8n3q7m3i9n3sptMhMAAAAE3RSTlMADMPv2tMalYxPJrt+ZndxYUVAAlNK4AAAAKZJREFUKM+tkd0OwyAIhYvoRK398/3fdce4GlNrsi09Vxw+EZSpimLgxCHS1MmZVGRchzid4gvcMzKyiMlwbxEppMTTRF4QKWpvRMKWBFnE7a3w2n9ir3GuYaqU1ULVMEwwVzNjqu8YoYW8Tgma10FXTlfxWh/XS9EzTDvv9IBFmDhgB8wxYAIjo34w+g9mYMyoDnsf1bFdLP/wL+GGBbCs7WZHG/JvCpgaR4IddioAAAAASUVORK5CYII=) no-repeat;background-size:contain}.login-form .remeber[data-v-09f641d5]{font-size:3.2vw;color:hsla(0,0%,100%,.6);display:flex;align-items:center;margin-top:4.8vw;margin-left:4.667vw}.login-form .remeber i[data-v-09f641d5]{width:4.267vw;height:4.267vw;display:inline-block;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAADeyIu+oHy+oHy+oHzNq4q+oHu+oHu9n3zFpoK9n3u+oHvCo3/Ao329oHy/oXzHqYW+n3y+oHy+oHy+oHy+oHy/oHu/oX2+oH2/oXy/oX7Aon/DpIHEo4O+n3u+oHu+oHy+oHy+oHy/oXy+oHu+n3y9n3uUaaYGAAAAJnRSTlMAA+XX6Af49O0R8d0rJdBNDMqMfXNoW1NEPjgyGxe+lIOknGWsdb3E+bEAAAEkSURBVDjLlZPZuoIwDIRPW0RWZRFlEZez/O//iCcfKkupF+aGaWcSJiR8fRiq79VbMjvdtQ94v8fQQW8OAWNsy8zmu/hBefr5rJf8aQuYMlFiIz3sAL+a83sgqCZ7R6nDz8QnkaSn84w+lxrteJSScWh5zuVu8yoothPb9dmDwxPHUK77rsTWo0QnKHN8VMnbD+gG3xa5vL8MynW0YAZgIHUJQogGEIFYcMQWBpcBhE6B/xQYSN68IniZPLkEDewGUMLdJSjg+hiVuHWY2Giox1kVa8EfaDVug9/afBrNNuIi4rPVggGj5qPV3SLfLFeg8eV8y6YNj7B6bwLAu9Znpfqm0Ih+b3nKWYTpVm0d44n2KuX6L9si1z7e7lqPtEMl3GfxD7ZvH6ooxMsgAAAAAElFTkSuQmCC) no-repeat;background-size:100% 100%;border-radius:50%;margin:0 4vw;position:relative}.login-form .remeber i.active[data-v-09f641d5]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAC9n3zly42/oX2+oHzBpXy+oHu9n3y+oHzQrIm+oHu9oHu9oHy/oXy/on3Aon/BpH/GpIO+oHy+n3u9oHu9n3y+oHy+oHu/oHy/oHy/oHzAoX2/oH7Bon/Eo4O+oHu+n3u9oHzCpYC+n3y+oHu+oXu9n3sDuDAzAAAAJnRSTlMA5gJk+yX17YwH1vHPUjwxKxPi3dLKoJRyZ1tMQiENv7iCG9isep//yi4AAAEASURBVDjLlZNbksIgEEWBYDDvaBLz0OjozPT+l2joQhBoP7xfXZxTRVN1YV9GHB7iI7xWp6MEkPxvuRI4mxTYpPdIaTrwwi8+r1IIIud3fpYQJ3G8LYCIrO3bSiBzzIywUFBfOhmhizBv2E4BqAx5E/PddjxuwxmFO8nZzzadULiRfNZjjsIvxROcCxQKfHSeBhyDWyqttuzR+9wJudnmUEZcsde6g0Aj4NCj8K/HPdPG6nMYUWjBGgEHU4reGBHnwrQBnJGQjbgZIxPTO89twVduuuoVL22ZTU1VrtqAM1SIU+Qu6+DzvIk+3dI5zGdB/ct6P3ApeTleLCYsZN/kCfyLSQsCpU6lAAAAAElFTkSuQmCC) no-repeat;background-size:100% 100%}.login-form .btn[data-v-09f641d5]{height:13.333vw;line-height:13.333vw;width:58.667vw;margin:6.933vw auto 0;display:block;border-radius:10.667vw;font-size:4.267vw;padding:0;text-align:center;background-image:linear-gradient(183deg,#fff1dc,#ffd79d);align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;color:#20272f}.login-desc[data-v-09f641d5]{display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:3.467vw;color:hsla(0,0%,100%,.6);margin-top:2.667vw}.login-desc .forget-pwd[data-v-09f641d5]{color:hsla(0,0%,100%,.6);margin-right:1.333vw}.login-desc a[data-v-09f641d5]{color:#bd9f7b;cursor:pointer}a[data-v-09f641d5]{text-decoration:none}",""]),n.exports=i},c3e0:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=t("5028"),o={data:function(){return{langLocale:"",loginName:"",loginPassword:"",inviteCode:"",remberFlag:!1}},onLoad:function(){console.log("---\x3e OnLoad"),this.langLocale=uni.getLocale(),console.log("langLocale ---\x3e "+this.langLocale),uni.getStorageSync("REMMBER_ME")&&(this.remberFlag=uni.getStorageSync("REMMBER_ME"),this.loginName=uni.getStorageSync("LOGIN_NAME"),this.loginPassword=uni.getStorageSync("LOGIN_PASS"))},methods:{clickRegister:function(){uni.navigateTo({url:"/pages/public/register",animationType:"fade-in",animationDuration:800})},clickBack:function(){uni.redirectTo({url:"/pages/index/index",animationType:"fade-in",animationDuration:800})},clickLogin:function(){var n=this,i=this;0!=this.loginName.length?this.loginPassword.length<6?uni.showToast({icon:"none",title:i.$t("locale.login.message2")}):(uni.showLoading({title:this.$t("locale.loading")}),(0,e.userLogin)({username:this.loginName,password:this.loginPassword,login_code:this.inviteCode}).then((function(i){uni.setStorageSync("USER_TOKEN",i.token),uni.setStorageSync("USER_ROLE_ID",i.role_id),uni.setStorageSync("USER_ID",i.user_id),uni.setStorageSync("USER_NAME",i.username),n.remberFlag?(uni.setStorageSync("REMMBER_ME",n.remberFlag),uni.setStorageSync("LOGIN_NAME",n.loginName),uni.setStorageSync("LOGIN_PASS",n.loginPassword)):(uni.removeStorageSync("REMMBER_ME"),uni.removeStorageSync("LOGIN_NAME"),uni.removeStorageSync("LOGIN_PASS")),uni.navigateTo({url:"/pages/index/index",animationType:"fade-in",animationDuration:800})})).catch((function(){}))):uni.showToast({icon:"none",title:i.$t("locale.login.message1")})}}};i.default=o}}]);