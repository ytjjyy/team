(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-register"],{"0ccd":function(t,i,e){t.exports=e.p+"static/img/logo.3b6cb7c0.png"},"1de5":function(t,i,e){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2d42":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{username:"",password1:"",password2:"",inviteCode:"",isRotate:!1,show_pwd1:!1,show_pwd2:!1,deviceInfo:"",inviteFlag:!1}},onLoad:function(t){t.code&&(this.inviteCode=t.code,this.inviteFlag=!0);try{var i=uni.getSystemInfoSync();this.deviceInfo=i.model+"|"+i.language}catch(e){}},methods:{startRegister:function(){if(!this.isRotate)if(""!=this.username.length)if(""!=this.password1.length)if(""!=this.password2.length)if(this.password1.length<6)uni.showToast({icon:"none",title:"密码最少6位"});else if(this.password1==this.password2){var t=/^[0-9a-zA-Z_]{1,}$/;t.test(this.username)?(this.isRotate=!0,this.$u.api.userSignUp({username:this.username,password:this.password1,code:this.inviteCode}).then((function(t){uni.showToast({icon:"none",title:"注册成功",duration:2e3,complete:function(){setTimeout((function(){uni.redirectTo({url:"./download"})}),1e3)}})})).catch((function(t){uni.showToast({icon:"none",title:t.message?t.message:"注册失败，请稍后重试",duration:2e3})})),this.isRotate=!1):uni.showToast({icon:"none",title:"用户名仅支持字母、数字、下划线"})}else uni.showToast({icon:"none",title:"两次密码不一致"});else uni.showToast({icon:"none",title:"确认密码不能为空"});else uni.showToast({icon:"none",title:"用户密码不能为空"});else uni.showToast({icon:"none",title:"用户名不能为空"})}}};i.default=a},"4a87":function(t,i,e){var a=e("75fb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("40822d3a",a,!0,{sourceMap:!1,shadowMode:!1})},"66ea":function(t,i,e){"use strict";e.r(i);var a=e("2d42"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"75fb":function(t,i,e){var a=e("24fb"),n=e("1de5"),o=e("cc5b");i=a(!1);var s=n(o);i.push([t.i,".login_bg[data-v-0fbedaab]{width:100%;height:100vh;background-color:#f63;background-image:url("+s+");background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:100%;overflow-y:auto}.login_box[data-v-0fbedaab],\r\n.login_box .logo[data-v-0fbedaab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login_box[data-v-0fbedaab]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;margin:%?200?% %?45?% %?200?%;padding:%?25?% %?45?%;border-radius:%?25?%;box-shadow:0 %?5?% %?15?% rgba(0,0,0,.5);position:relative}.logo[data-v-0fbedaab]{margin-bottom:%?50?%}.logo uni-image[data-v-0fbedaab]{margin-top:-50%;width:%?200?%;height:%?200?%;background-color:#fff;border-radius:50%;border:%?18?% solid #fff}.login_tab_control[data-v-0fbedaab]{width:100%;margin-bottom:%?36?%}.segmented-control[data-v-0fbedaab]{height:%?80?%}.login_form[data-v-0fbedaab]{width:100%}.login_btn[data-v-0fbedaab]{display:block;color:#fff;width:100%;background-image:-webkit-linear-gradient(left,#f63,#f63);background-image:linear-gradient(90deg,#f63,#f63);box-shadow:0 %?15?% %?30?% 0 rgba(255,90,123,.65);border-radius:%?45?%;font-size:%?32?%;line-height:%?80?%;height:%?80?%;margin-top:%?58?%;margin-bottom:%?58?%}uni-button[disabled][data-v-0fbedaab]{opacity:.5;color:#fff}.login_input[data-v-0fbedaab]{background-color:hsla(0,0%,100%,.3);margin-bottom:%?36?%;border:%?2?% solid #ccc;border-radius:%?8?%;color:#666;font-size:%?30?%;line-height:%?58?%;height:%?88?%;background-color:#fff;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:%?18?% %?28?%}.login_input .left-icon[data-v-0fbedaab]{display:flex;justify-content:left;align-items:center;width:%?58?%;border-right:%?2?% solid #ccc}.left-icon uni-image[data-v-0fbedaab]{width:%?32?%;height:%?32?%;margin-right:%?5?%}.login_input .right-icon[data-v-0fbedaab]{display:flex;justify-content:center;align-items:center;width:%?58?%}.right-icon uni-image[data-v-0fbedaab]{width:%?32?%;height:%?32?%}.login_input .phone-zone[data-v-0fbedaab]{display:flex;justify-content:center;align-items:center;width:%?88?%;margin-left:%?5?%}.login_input .login-text[data-v-0fbedaab]{display:flex;flex:1;align-items:center;margin-left:%?15?%;margin-right:%?15?%}.login_input .right-button[data-v-0fbedaab]{display:flex;align-items:center;color:#888;padding:0 %?30?%}.active_button[data-v-0fbedaab]{color:#0089ff}.login-text uni-input[data-v-0fbedaab]{flex:1;font-size:%?28?%}.login_text_box[data-v-0fbedaab],\r\n.protocol[data-v-0fbedaab]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:%?30?%;text-align:center;height:%?40?%;line-height:%?40?%;margin-bottom:%?58?%}.login_text_box uni-text[data-v-0fbedaab]{color:#888;margin-right:%?10?%}.login_text_box uni-navigator[data-v-0fbedaab],\r\n.protocol uni-navigator[data-v-0fbedaab]{color:#f63;margin-left:%?10?%;margin-right:%?10?%}.protocol uni-text[data-v-0fbedaab]{margin-left:%?10?%;margin-right:%?5?%}.download_app[data-v-0fbedaab]{position:fixed;z-index:9999999999;background-color:#f63;border:1px solid #fff;box-shadow:%?2?% %?3?% %?6?% hsla(0,0%,100%,.6);padding:%?20?% %?38?%;color:#fff;border-radius:%?50?%;bottom:%?128?%;left:25%}",""]),t.exports=i},"804e":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={uIcon:e("974f").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"login_bg"},[a("v-uni-view",{staticClass:"login_box"},[a("v-uni-view",{staticClass:"logo"},[a("v-uni-image",{attrs:{src:e("0ccd")}})],1),a("v-uni-view",{staticClass:"login_form"},[a("v-uni-view",{staticClass:"login_input"},[a("v-uni-view",{staticClass:"left-icon"},[a("u-icon",{attrs:{name:"account",size:"32"}})],1),a("v-uni-view",{staticClass:"login-text"},[a("v-uni-input",{attrs:{type:"text",placeholder:"用户账号"},model:{value:t.username,callback:function(i){t.username=i},expression:"username"}})],1)],1),a("v-uni-view",{staticClass:"login_input"},[a("v-uni-view",{staticClass:"left-icon"},[a("u-icon",{attrs:{name:"fingerprint",size:"32"}})],1),a("v-uni-view",{staticClass:"login-text"},[a("v-uni-input",{attrs:{password:!t.show_pwd1,placeholder:"密码"},model:{value:t.password1,callback:function(i){t.password1=i},expression:"password1"}})],1),a("v-uni-view",{staticClass:"right-icon"},[a("u-icon",{attrs:{name:t.show_pwd1?"eye-fill":"eye",size:"32"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show_pwd1=!t.show_pwd1}}})],1)],1),a("v-uni-view",{staticClass:"login_input"},[a("v-uni-view",{staticClass:"left-icon"},[a("u-icon",{attrs:{name:"fingerprint",size:"32"}})],1),a("v-uni-view",{staticClass:"login-text"},[a("v-uni-input",{attrs:{password:!t.show_pwd2,placeholder:"确认密码"},model:{value:t.password2,callback:function(i){t.password2=i},expression:"password2"}})],1),a("v-uni-view",{staticClass:"right-icon"},[a("u-icon",{attrs:{name:t.show_pwd2?"eye-fill":"eye",size:"32"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show_pwd2=!t.show_pwd2}}})],1)],1),a("v-uni-view",{staticClass:"login_input"},[a("v-uni-view",{staticClass:"left-icon"},[a("u-icon",{attrs:{name:"man-add",size:"32"}})],1),a("v-uni-view",{staticClass:"login-text"},[a("v-uni-input",{attrs:{type:"text",placeholder:"邀请码",disabled:t.inviteFlag},model:{value:t.inviteCode,callback:function(i){t.inviteCode=i},expression:"inviteCode"}})],1)],1),a("v-uni-button",{staticClass:"login_btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.startRegister.apply(void 0,arguments)}}},[t._v("注 册")]),a("v-uni-view",{staticClass:"login_text_box"},[a("v-uni-text",[t._v("已有账号？")]),a("v-uni-navigator",{attrs:{url:"login","open-type":"navigate"}},[t._v("立即登录")])],1)],1)],1)],1)},o=[]},a7e9:function(t,i,e){"use strict";var a=e("4a87"),n=e.n(a);n.a},cc5b:function(t,i,e){t.exports=e.p+"static/img/login_bg.31c01b5c.png"},ef05:function(t,i,e){"use strict";e.r(i);var a=e("804e"),n=e("66ea");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("a7e9");var s,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0fbedaab",null,!1,a["a"],s);i["default"]=l.exports}}]);