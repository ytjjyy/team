(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-answer-form-answer-form"],{"2fa6":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),t.exports=a},"382f":function(t,a,i){var e=i("2fa6");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("c08120bc",e,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[1==t.propStatus?i("v-uni-view",{staticClass:"no-data-box no-data-loading"},[i("v-uni-text",[t._v("加载中...")])],1):2==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"error.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"处理错误"))])],1):0==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"empty.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"没有相关数据"))])],1):t._e()],1)},n=[]},"6f6a":function(t,a,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("97c7")),s=getApp(),o={data:function(){return{data_list_loding_status:1,data_list_loding_msg:"处理错误",form_submit_loading:!1}},components:{componentNoData:n.default},props:{},onLoad:function(){},onShow:function(){this.init(),s.globalData.page_share_handle()},methods:{init:function(){var t=s.globalData.get_user_info(this,"init");if(0!=t){if(s.globalData.user_is_need_login(t))return uni.redirectTo({url:"/pages/login/login?event_callback=init"}),!1;this.setData({data_list_loding_status:0})}else this.setData({data_list_loding_status:2,data_list_loding_msg:"用户未登录"})},formSubmit:function(t){var a=this;s.globalData.fields_check(t.detail.value,[{fields:"name",msg:"请填写联系人"},{fields:"tel",msg:"请填写联系电话"},{fields:"content",msg:"请填写内容"}])&&(uni.showLoading({title:"提交中..."}),this.setData({form_submit_loading:!0}),uni.request({url:s.globalData.get_request_url("add","answer"),method:"POST",data:t.detail.value,dataType:"json",success:function(t){uni.hideLoading(),0==t.data.code?(s.globalData.showToast(t.data.msg,"success"),setTimeout((function(){uni.redirectTo({url:"/pages/user-answer-list/user-answer-list"})}),2e3)):(a.setData({form_submit_loading:!1}),s.globalData.is_login_check(t.data)?s.globalData.showToast(t.data.msg):s.globalData.showToast("提交失败，请重试！"))},fail:function(){uni.hideLoading(),a.setData({form_submit_loading:!1}),s.globalData.showToast("服务器请求出错")}}))}}};a.default=o},"97c7":function(t,a,i){"use strict";i.r(a);var e=i("4fed"),n=i("aff5");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("a9750");var o=i("f0c5"),r=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"9455811c",null,!1,e["a"],void 0);a["default"]=r.exports},a42a:function(t,a,i){"use strict";i.r(a);var e=i("6f6a"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},a9750:function(t,a,i){"use strict";var e=i("382f"),n=i.n(e);n.a},aff5:function(t,a,i){"use strict";i.r(a);var e=i("eba1"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},eba1:function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");getApp();var e={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};a.default=e},efd7:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[0==t.data_list_loding_status?i("v-uni-form",{staticClass:"form-container",on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"padding-main oh"},[i("v-uni-view",{staticClass:"form-gorup"},[i("v-uni-view",{staticClass:"form-gorup-title"},[t._v("联系人"),i("v-uni-text",{staticClass:"form-group-tips-must"},[t._v("*")])],1),i("v-uni-input",{staticClass:"cr-base",attrs:{type:"text",name:"name",maxlength:"30",placeholder:"联系人格式 1~30 个字符之间","placeholder-class":"cr-grey"}})],1),i("v-uni-view",{staticClass:"form-gorup"},[i("v-uni-view",{staticClass:"form-gorup-title"},[t._v("联系电话"),i("v-uni-text",{staticClass:"form-group-tips-must"},[t._v("*")])],1),i("v-uni-input",{staticClass:"cr-base",attrs:{type:"text",name:"tel",maxlength:"30","placeholder-class":"cr-grey",placeholder:"座机 或 手机"}})],1),i("v-uni-view",{staticClass:"form-gorup"},[i("v-uni-view",{staticClass:"form-gorup-title"},[t._v("描述"),i("v-uni-text",{staticClass:"form-group-tips-must"},[t._v("*")])],1),i("v-uni-textarea",{staticClass:"cr-base",attrs:{name:"content",maxlength:"160","auto-height":!0,"placeholder-class":"cr-grey",placeholder:"请详细描述问题，我们将尽快为您解答！"}})],1),i("v-uni-view",{staticClass:"form-gorup form-gorup-submit"},[i("v-uni-button",{staticClass:"bg-main br-main cr-white round text-size",attrs:{type:"default","form-type":"submit","hover-class":"none",loading:t.form_submit_loading,disabled:t.form_submit_loading}},[t._v("提交")])],1)],1)],1):i("v-uni-view",[i("component-no-data",{attrs:{propStatus:t.data_list_loding_status}})],1)],1)},n=[]},ff24:function(t,a,i){"use strict";i.r(a);var e=i("efd7"),n=i("a42a");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);var o=i("f0c5"),r=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"4a8863c8",null,!1,e["a"],void 0);a["default"]=r.exports}}]);