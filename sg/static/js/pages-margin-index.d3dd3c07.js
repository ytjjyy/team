(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-margin-index"],{"0e26":function(t,a,i){"use strict";var n;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"container"},[i("cu-custom",{attrs:{bgColor:"bg-gradual-orange",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("保证金"+t._s(0==t.TabCur?"充值":"提现"))])],2),i("v-uni-view",{staticClass:"tabs_box"},[i("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"flex text-center"},t._l(2,(function(a,n){return i("v-uni-view",{key:n,staticClass:"cu-item flex-sub",class:n==t.TabCur?"text-orange cur":"",attrs:{"data-id":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(t.TabList[n]))])})),1)],1)],1),i("v-uni-view",{staticClass:"main_wrap"},[i("v-uni-view",{staticClass:"content_box"},[i("v-uni-view",{staticClass:"info_title_box"},[i("v-uni-view",{staticClass:"info_title"},[i("v-uni-label",{staticClass:"text-orange text-bold text-xxl"},[t._v(t._s(t.frozen))]),i("v-uni-label",{staticClass:"text-grey text-df"},[t._v("保证金")])],1),i("v-uni-view",{staticClass:"info_title"},[i("v-uni-label",{staticClass:"text-orange text-bold text-xxl"},[t._v(t._s(t.balance))]),i("v-uni-label",{staticClass:"text-grey text-df"},[t._v("余额")])],1)],1),1==t.TabCur?i("v-uni-view",{staticClass:"info_balance"},[i("v-uni-label",[t._v("保证金将提现至余额")])],1):t._e(),i("v-uni-view",{staticClass:"info_input"},[i("v-uni-view",{staticClass:"left-label"},[i("v-uni-label",[t._v(t._s(0==t.TabCur?"充值数量":"提现数量"))])],1),i("v-uni-view",{staticClass:"login-text"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入数量"},model:{value:t.amount,callback:function(a){t.amount=a},expression:"amount"}})],1)],1),i("v-uni-view",{staticClass:"info_tips text-red"},[i("v-uni-label",[t._v("请保持保证金大于 200，方可开启接单。")])],1),i("v-uni-view",{staticClass:"info_btn"},[i("v-uni-button",{staticClass:"cu-btn submit_btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)],1)},o=[]},"49df":function(t,a,i){"use strict";i.r(a);var n=i("0e26"),e=i("9af0");for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("ae13");var s,l=i("f0c5"),r=Object(l["a"])(e["default"],n["b"],n["c"],!1,null,"2057c803",null,!1,n["a"],s);a["default"]=r.exports},"4a87":function(t,a,i){"use strict";var n=i("4ea4");i("acd8"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;n(i("85c3"));var e={data:function(){return{roleId:"",TabCur:0,TabList:["充值","提现"],amount:"",balance:"0.00",frozen:"0.00"}},onShow:function(){try{var t=uni.getStorageSync("token"),a=uni.getStorageSync("role_id");t&&a?this.roleId=a:uni.reLaunch({url:"../public/login"})}catch(i){}this.loadData()},onPullDownRefresh:function(){this.loadData(),uni.stopPullDownRefresh()},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.amount="",this.loadData()},loadData:function(){var t=this;uni.showLoading({title:"数据加载中...",mask:!0}),this.$u.api.userInfo({role_id:this.roleId}).then((function(a){t.balance=parseFloat(a.data.balance).toFixed(2),t.frozen=parseFloat(a.data.frozen).toFixed(2)})).catch((function(t){uni.showToast({icon:"none",title:t.message?t.message:"获取用户信息异常,请稍后重试",duration:2e3})}))},clickSubmit:function(){var t=this;""!=this.amount.length?parseFloat(this.amount)<=0?uni.showToast({icon:"none",title:"数量必须大于0"}):0==this.TabCur&&parseFloat(this.amount)>parseFloat(this.balance)?uni.showToast({icon:"none",title:"用户余额不足"}):1==this.TabCur&&parseFloat(this.amount)>parseFloat(this.frozen)?uni.showToast({icon:"none",title:"保证金余额不足"}):(uni.showLoading({title:"数据提交中...",mask:!0}),this.$u.api.marginTrans({role_id:this.roleId,amount:parseFloat(this.amount).toFixed(2),cmd:0==this.TabCur?1:2}).then((function(a){uni.showToast({icon:"none",title:0==t.TabCur?"保证金充值提交成功":"保证金提现提交成功",duration:2e3,complete:function(){setTimeout((function(){t.loadData()}),1e3)}})})).catch((function(t){uni.showToast({icon:"none",title:t.message?t.message:"提交失败，请稍后重试",duration:2e3})})),this.amount=""):uni.showToast({icon:"none",title:"请输入数量"})}}};a.default=e},7056:function(t,a,i){var n=i("9125");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("40644d93",n,!0,{sourceMap:!1,shadowMode:!1})},9125:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,'.tabs_box[data-v-2057c803]{position:fixed;left:0;right:0}.main_wrap[data-v-2057c803]{padding:%?100?% %?10?%}.content_box[data-v-2057c803]{padding:%?60?% %?30?%;background:#fff;margin:%?20?% 0;border-radius:%?15?%;box-shadow:%?1?% %?6?% %?16?% rgba(0,0,0,.1)}.info_balance[data-v-2057c803]{height:%?80?%;border-radius:%?8?%;border:%?2?% solid #b7eb8f;display:flex;align-items:center;margin-bottom:%?30?%;padding-left:%?30?%;background:#f6ffed}.info_title_box[data-v-2057c803]{display:flex;flex-direction:row;align-items:center;padding-bottom:%?30?%}.info_title[data-v-2057c803]{flex:1;display:flex;flex-direction:column;align-items:center}.info_title_box uni-label[data-v-2057c803]{margin-bottom:%?10?%}.info_input[data-v-2057c803]{display:flex;align-items:center;font-size:%?26?%;line-height:%?68?%;height:%?80?%;background-color:hsla(0,0%,100%,.3);margin-bottom:%?30?%;border:%?2?% solid #ccc;border-radius:%?8?%;color:#666;background-color:#fff;padding:0 %?30?%}.info_input .left-label[data-v-2057c803]{display:flex;justify-content:left;align-items:center;padding-right:%?30?%;border-right:%?2?% solid #ccc}.info_input .login-text[data-v-2057c803]{display:flex;flex:1;align-items:center;margin-left:%?15?%;margin-right:%?15?%}.login-text uni-input[data-v-2057c803]{width:100%;font-size:%?26?%}.info_tips[data-v-2057c803]{display:flex;flex-direction:column;font-size:%?26?%;margin-bottom:%?30?%}.info_input .text-price[data-v-2057c803]::before{content:"¥";font-size:100%;margin-right:%?10?%}.info_btn[data-v-2057c803]{display:flex;justify-content:center}.submit_btn[data-v-2057c803]{color:#fff;width:50%;background-image:-webkit-linear-gradient(left,#f63,#f63);background-image:linear-gradient(90deg,#f63,#f63);box-shadow:0 %?5?% %?15?% 0 rgba(255,90,123,.65);border-radius:%?15?%;font-size:%?32?%;line-height:%?80?%;height:%?80?%;margin-top:%?20?%}',""]),t.exports=a},"9af0":function(t,a,i){"use strict";i.r(a);var n=i("4a87"),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},ae13:function(t,a,i){"use strict";var n=i("7056"),e=i.n(n);e.a}}]);