(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-register"],{"0067":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{username:"",password1:"",password2:"",inviteCode:"",isRotate:!1,show_pwd1:!1,show_pwd2:!1,deviceInfo:"",inviteFlag:!1}},onLoad:function(t){t.code&&(this.inviteCode=t.code,this.inviteFlag=!0);try{var i=uni.getSystemInfoSync();this.deviceInfo=i.model+"|"+i.language}catch(e){}},methods:{startRegister:function(){this.isRotate||(""!=this.username.length?""!=this.password1.length?""!=this.password2.length?this.password1.length<6?uni.showToast({icon:"none",title:"密码最少6位"}):this.password1==this.password2?(this.isRotate=!0,this.$u.api.userSignUp({username:this.username,password:this.password1,code:this.inviteCode}).then((function(t){uni.showToast({icon:"none",title:"注册成功",duration:2e3,complete:function(){setTimeout((function(){uni.reLaunch({url:"./login"})}),1e3)}})})).catch((function(t){uni.showToast({icon:"none",title:t.message?t.message:"注册失败，请稍后重试",duration:2e3})})),this.isRotate=!1):uni.showToast({icon:"none",title:"两次密码不一致"}):uni.showToast({icon:"none",title:"确认密码不能为空"}):uni.showToast({icon:"none",title:"用户密码不能为空"}):uni.showToast({icon:"none",title:"用户名不能为空"}))}}};i.default=n},"156b":function(t,i,e){t.exports=e.p+"static/img/logo.3b6cb7c0.png"},"1de5":function(t,i,e){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},3113:function(t,i,e){"use strict";e.r(i);var n=e("b7cb"),o=e("4d80");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("dbb41");var s,r=e("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"14e031d0",null,!1,n["a"],s);i["default"]=l.exports},"3c5f":function(t,i,e){var n=e("24fb"),o=e("1de5"),a=e("e6e5");i=n(!1);var s=o(a);i.push([t.i,".login_bg[data-v-14e031d0]{width:100%;height:100vh;background-color:#f63;background-image:url("+s+");background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:100%;overflow-y:auto}.login_box[data-v-14e031d0],\r\n.login_box .logo[data-v-14e031d0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login_box[data-v-14e031d0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;margin:%?200?% %?45?% %?200?%;padding:%?25?% %?45?%;border-radius:%?25?%;box-shadow:0 %?5?% %?15?% rgba(0,0,0,.5);position:relative}.logo[data-v-14e031d0]{margin-bottom:%?50?%}.logo uni-image[data-v-14e031d0]{margin-top:-50%;width:%?200?%;height:%?200?%;background-color:#fff;border-radius:50%;border:%?18?% solid #fff}.login_tab_control[data-v-14e031d0]{width:100%;margin-bottom:%?36?%}.segmented-control[data-v-14e031d0]{height:%?80?%}.login_form[data-v-14e031d0]{width:100%;margin-bottom:%?20?%}.login_btn[data-v-14e031d0]{display:block;color:#fff;width:100%;background-image:-webkit-linear-gradient(left,#f63,#f63);background-image:linear-gradient(90deg,#f63,#f63);box-shadow:0 %?15?% %?30?% 0 rgba(255,90,123,.65);border-radius:%?45?%;font-size:%?32?%;line-height:%?80?%;height:%?80?%;margin-top:%?58?%;margin-bottom:%?58?%}uni-button[disabled][data-v-14e031d0]{opacity:.5;color:#fff}.login_input[data-v-14e031d0]{background-color:hsla(0,0%,100%,.3);margin-bottom:%?36?%;border:%?2?% solid #ccc;border-radius:%?8?%;color:#666;font-size:%?30?%;line-height:%?58?%;height:%?88?%;background-color:#fff;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:%?18?% %?28?%}.login_input .left-icon[data-v-14e031d0]{display:flex;justify-content:left;align-items:center;width:%?58?%;border-right:%?2?% solid #ccc}.left-icon uni-image[data-v-14e031d0]{width:%?32?%;height:%?32?%;margin-right:%?5?%}.login_input .right-icon[data-v-14e031d0]{display:flex;justify-content:center;align-items:center;width:%?58?%}.right-icon uni-image[data-v-14e031d0]{width:%?32?%;height:%?32?%}.login_input .phone-zone[data-v-14e031d0]{display:flex;justify-content:center;align-items:center;width:%?88?%;margin-left:%?5?%}.login_input .login-text[data-v-14e031d0]{display:flex;flex:1;align-items:center;margin-left:%?15?%;margin-right:%?15?%}.login_input .right-button[data-v-14e031d0]{display:flex;align-items:center;color:#888;padding:0 %?30?%}.active_button[data-v-14e031d0]{color:#0089ff}.login-text uni-input[data-v-14e031d0]{flex:1;font-size:%?28?%}.login_text_box[data-v-14e031d0],\r\n.protocol[data-v-14e031d0]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:%?30?%;text-align:center;height:%?40?%;line-height:%?40?%;margin-bottom:%?58?%}.login_text_box uni-text[data-v-14e031d0]{color:#888;margin-right:%?10?%}.login_text_box uni-navigator[data-v-14e031d0],\r\n.protocol uni-navigator[data-v-14e031d0]{color:#f63;margin-left:%?10?%;margin-right:%?10?%}.protocol uni-text[data-v-14e031d0]{margin-left:%?10?%;margin-right:%?5?%}.download_app[data-v-14e031d0]{position:fixed;z-index:9999999999;background-color:#ec185a;padding:%?20?% %?38?%;color:#fff;border-radius:%?50?%;bottom:%?58?%;left:25%;opacity:.88}",""]),t.exports=i},"4d80":function(t,i,e){"use strict";e.r(i);var n=e("0067"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"572b":function(t,i,e){var n=e("3c5f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("80c4b50e",n,!0,{sourceMap:!1,shadowMode:!1})},b7cb:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={uIcon:e("63ca").default},o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"login_bg"},[n("v-uni-view",{staticClass:"login_box"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{attrs:{src:e("156b")}})],1),n("v-uni-view",{staticClass:"login_form"},[n("v-uni-view",{staticClass:"login_input"},[n("v-uni-view",{staticClass:"left-icon"},[n("u-icon",{attrs:{name:"account",size:"32"}})],1),n("v-uni-view",{staticClass:"login-text"},[n("v-uni-input",{attrs:{type:"text",placeholder:"用户账号"},model:{value:t.username,callback:function(i){t.username=i},expression:"username"}})],1)],1),n("v-uni-view",{staticClass:"login_input"},[n("v-uni-view",{staticClass:"left-icon"},[n("u-icon",{attrs:{name:"fingerprint",size:"32"}})],1),n("v-uni-view",{staticClass:"login-text"},[n("v-uni-input",{attrs:{password:!t.show_pwd1,placeholder:"密码"},model:{value:t.password1,callback:function(i){t.password1=i},expression:"password1"}})],1),n("v-uni-view",{staticClass:"right-icon"},[n("u-icon",{attrs:{name:t.show_pwd1?"eye-fill":"eye",size:"32"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show_pwd1=!t.show_pwd1}}})],1)],1),n("v-uni-view",{staticClass:"login_input"},[n("v-uni-view",{staticClass:"left-icon"},[n("u-icon",{attrs:{name:"fingerprint",size:"32"}})],1),n("v-uni-view",{staticClass:"login-text"},[n("v-uni-input",{attrs:{password:!t.show_pwd2,placeholder:"确认密码"},model:{value:t.password2,callback:function(i){t.password2=i},expression:"password2"}})],1),n("v-uni-view",{staticClass:"right-icon"},[n("u-icon",{attrs:{name:t.show_pwd2?"eye-fill":"eye",size:"32"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show_pwd2=!t.show_pwd2}}})],1)],1),n("v-uni-view",{staticClass:"login_input"},[n("v-uni-view",{staticClass:"left-icon"},[n("u-icon",{attrs:{name:"man-add",size:"32"}})],1),n("v-uni-view",{staticClass:"login-text"},[n("v-uni-input",{attrs:{type:"text",placeholder:"邀请码",disabled:t.inviteFlag},model:{value:t.inviteCode,callback:function(i){t.inviteCode=i},expression:"inviteCode"}})],1)],1),n("v-uni-button",{staticClass:"login_btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.startRegister.apply(void 0,arguments)}}},[t._v("注 册")]),n("v-uni-view",{staticClass:"login_text_box"},[n("v-uni-text",[t._v("已有账号？")]),n("v-uni-navigator",{attrs:{url:"login","open-type":"navigate"}},[t._v("立即登录")])],1)],1)],1)],1)},a=[]},dbb41:function(t,i,e){"use strict";var n=e("572b"),o=e.n(n);o.a},e6e5:function(t,i,e){t.exports=e.p+"static/img/login_bg.31c01b5c.png"}}]);