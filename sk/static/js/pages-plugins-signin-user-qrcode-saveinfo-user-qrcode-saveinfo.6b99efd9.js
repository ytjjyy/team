(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-signin-user-qrcode-saveinfo-user-qrcode-saveinfo"],{"2fa6":function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),t.exports=a},"382f":function(t,a,i){var s=i("2fa6");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("c08120bc",s,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[1==t.propStatus?i("v-uni-view",{staticClass:"no-data-box no-data-loading"},[i("v-uni-text",[t._v("加载中...")])],1):2==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"error.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"处理错误"))])],1):0==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"empty.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"没有相关数据"))])],1):t._e()],1)},e=[]},"58f3":function(t,a,i){"use strict";i.r(a);var s=i("8212"),e=i("89a8");for(var n in e)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(n);var o=i("f0c5"),u=Object(o["a"])(e["default"],s["b"],s["c"],!1,null,"e12de5c2",null,!1,s["a"],void 0);a["default"]=u.exports},8212:function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"page-bottom-fixed"},[null!=t.data_base?i("v-uni-view",[i("v-uni-form",{staticClass:"form-container",on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"padding-main oh"},[i("v-uni-view",{staticClass:"padding-main border-radius-main bg-white spacing-mb"},[i("v-uni-view",[i("v-uni-text",{staticClass:"cr-base margin-right-sm"},[t._v("邀请人奖励")]),i("v-uni-text",{staticClass:"cr-main fw-b"},[t._v(t._s(t.data.reward_master||t.data_base.reward_master))]),i("v-uni-text",{staticClass:"cr-grey margin-left-sm"},[t._v("积分")])],1),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"cr-base margin-right-sm"},[t._v("受邀人奖励")]),i("v-uni-text",{staticClass:"cr-main fw-b"},[t._v(t._s(t.data.reward_invitee||t.data_base.reward_invitee))]),i("v-uni-text",{staticClass:"cr-grey margin-left-sm"},[t._v("积分")])],1)],1),1==(t.data_base.is_qrcode_must_userinfo||0)?i("v-uni-view",[i("v-uni-view",{staticClass:"form-gorup"},[i("v-uni-view",{staticClass:"form-gorup-title"},[t._v("联系人姓名"),i("v-uni-text",{staticClass:"form-group-tips-must"},[t._v("*")])],1),i("v-uni-input",{staticClass:"cr-base",attrs:{type:"text",name:"name","placeholder-class":"cr-grey",placeholder:"联系人姓名格式 2~30 个字符之间",maxlength:"30",value:t.data.name||""}})],1),i("v-uni-view",{staticClass:"form-gorup"},[i("v-uni-view",{staticClass:"form-gorup-title"},[t._v("联系人电话"),i("v-uni-text",{staticClass:"form-group-tips-must"},[t._v("*")])],1),i("v-uni-input",{staticClass:"cr-base",attrs:{type:"text",name:"tel","placeholder-class":"cr-grey",placeholder:"联系人电话 6~15 个字符",maxlength:"15",value:t.data.tel||""}})],1),i("v-uni-view",{staticClass:"form-gorup"},[i("v-uni-view",{staticClass:"form-gorup-title"},[t._v("联系人地址"),i("v-uni-text",{staticClass:"form-group-tips-must"},[t._v("*")])],1),i("v-uni-input",{staticClass:"cr-base",attrs:{type:"text",name:"address","placeholder-class":"cr-grey",placeholder:"联系人地址、最多230个字符",maxlength:"230",value:t.data.address||""}})],1)],1):t._e(),i("v-uni-view",{staticClass:"form-gorup"},[i("v-uni-view",{staticClass:"form-gorup-title"},[t._v("备注")]),i("v-uni-input",{staticClass:"cr-base",attrs:{type:"text",name:"note","placeholder-class":"cr-grey",placeholder:"备注最多230个字符",maxlength:"60",value:t.data.note||""}})],1),i("v-uni-view",{staticClass:"bottom-fixed padding-main"},[i("v-uni-button",{staticClass:"bg-main br-main cr-white round text-size",attrs:{type:"default","form-type":"submit","hover-class":"none",loading:t.form_submit_loading,disabled:t.form_submit_loading}},[t._v("提交")])],1)],1)],1)],1):i("v-uni-view",[i("component-no-data",{attrs:{propStatus:t.data_list_loding_status,propMsg:t.data_list_loding_msg}})],1)],1)},e=[]},"89a8":function(t,a,i){"use strict";i.r(a);var s=i("d50b"),e=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},"97c7":function(t,a,i){"use strict";i.r(a);var s=i("4fed"),e=i("aff5");for(var n in e)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("a9750");var o=i("f0c5"),u=Object(o["a"])(e["default"],s["b"],s["c"],!1,null,"9455811c",null,!1,s["a"],void 0);a["default"]=u.exports},a9750:function(t,a,i){"use strict";var s=i("382f"),e=i.n(s);e.a},aff5:function(t,a,i){"use strict";i.r(a);var s=i("eba1"),e=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},d50b:function(t,a,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("14d9");var e=s(i("97c7")),n=getApp(),o={data:function(){return{params:null,form_submit_loading:!1,data_list_loding_status:1,data_list_loding_msg:"",data_base:null,data:null}},components:{componentNoData:e.default},props:{},onLoad:function(t){this.setData({params:t}),this.init()},onReady:function(){uni.setNavigationBarTitle({title:"签到码"+(null==(this.params.id||null)?"添加":"编辑")})},onShow:function(){n.globalData.page_share_handle()},onPullDownRefresh:function(){this.init()},methods:{init:function(){var t=this;uni.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),uni.request({url:n.globalData.get_request_url("saveinfo","userqrcode","signin"),method:"POST",data:this.params,dataType:"json",success:function(a){if(uni.hideLoading(),uni.stopPullDownRefresh(),0==a.data.code){var i=a.data.data;t.setData({data_base:i.base||null,data:i.data||null,data_list_loding_status:0})}else t.setData({data_list_loding_status:2,data_list_loding_msg:a.data.msg}),n.globalData.is_login_check(a.data,t,"init")&&n.globalData.showToast(a.data.msg)},fail:function(){uni.hideLoading(),uni.stopPullDownRefresh(),t.setData({data_list_loding_status:2,data_list_loding_msg:"服务器请求出错"}),n.globalData.showToast("服务器请求出错")}})},formSubmit:function(t){var a=this,i=t.detail.value;null!=(this.data||null)&&(i["id"]=this.data.id||0);var s=[];null!=(this.data_base||null)&&1==(this.data_base.is_qrcode_must_userinfo||0)&&(s.push({fields:"name",msg:"请填写联系人姓名格式 2~30 个字符之间"}),s.push({fields:"tel",msg:"请填写联系人电话 6~15 个字符"}),s.push({fields:"address",msg:"请填写联系人地址、最多230个字符"})),n.globalData.fields_check(i,s)&&(uni.showLoading({title:"提交中..."}),this.setData({form_submit_loading:!0}),uni.request({url:n.globalData.get_request_url("save","userqrcode","signin"),method:"POST",data:i,dataType:"json",success:function(t){if(uni.hideLoading(),0==t.data.code){n.globalData.showToast(t.data.msg,"success");var i=null!=(a.params||null)&&1==(a.params.is_team||0);setTimeout((function(){i?uni.redirectTo({url:"/pages/plugins/signin/index-detail/index-detail?id="+t.data.data}):uni.navigateBack()}),2e3)}else a.setData({form_submit_loading:!1}),n.globalData.is_login_check(t.data)?n.globalData.showToast(t.data.msg):n.globalData.showToast("提交失败，请重试！")},fail:function(){uni.hideLoading(),a.setData({form_submit_loading:!1}),n.globalData.showToast("服务器请求出错")}}))}}};a.default=o},eba1:function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");getApp();var s={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};a.default=s}}]);