(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-logout-logout"],{4793:function(t,a,e){"use strict";e.r(a);var n=e("512f"),i=e("99d0");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("e3c9");var s=e("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6bbbcfc9",null,!1,n["a"],void 0);a["default"]=l.exports},"512f":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={mpHtml:e("f50c").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"scroll-box bg-white"},[e("v-uni-view",{staticClass:"page-bottom-fixed"},[3==t.data_list_loding_status?[e("v-uni-view",{staticClass:"padding-main"},[e("v-uni-view",{},[e("mp-html",{attrs:{content:t.agreement_data.value}})],1),e("v-uni-view",{staticClass:"bottom-fixed padding-main oh bg-white"},[e("v-uni-button",{staticClass:"bg-gray br-gray cr-base round text-size fl",attrs:{type:"default",size:"mini","hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.logout_submit_event.apply(void 0,arguments)}}},[t._v("确认注销")]),e("v-uni-button",{staticClass:"bg-main br-main cr-white round text-size fr",attrs:{type:"default",size:"mini","hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.logout_cancel_event.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)]:t._e(),e("component-no-data",{attrs:{propStatus:t.data_list_loding_status,propMsg:t.data_list_loding_msg}})],2)],1)},o=[]},"5ea1":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".bottom-fixed uni-button[data-v-6bbbcfc9]{width:calc(50% - %?10?%)}",""]),t.exports=a},"99d0":function(t,a,e){"use strict";e.r(a);var n=e("b8fb"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"9f48":function(t,a,e){var n=e("5ea1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("58e3ca4a",n,!0,{sourceMap:!1,shadowMode:!1})},b8fb:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("97c7")),o=getApp(),s={data:function(){return{data_list_loding_status:1,data_list_loding_msg:"",agreement_data:{}}},components:{componentNoData:i.default},onShow:function(){this.init()},methods:{init:function(){var t=o.globalData.get_user_info(this,"init");if(0!=t){if(o.globalData.user_is_need_login(t))return uni.redirectTo({url:"/pages/login/login?event_callback=init"}),this.setData({data_list_loding_status:0,data_list_loding_msg:"请先绑定手机"}),!1;this.get_data()}else this.setData({data_list_loding_status:0,data_list_loding_msg:"请先登录"})},get_data:function(){var t=this;uni.request({url:o.globalData.get_request_url("index","agreement"),method:"POST",data:{document:"userlogout"},dataType:"json",success:function(a){0==a.data.code?t.setData({data_list_loding_status:3,agreement_data:a.data.data||{}}):t.setData({data_list_loding_status:0,data_list_loding_msg:a.msg})},fail:function(){t.setData({data_list_loding_status:2,data_list_loding_msg:"服务器请求出错"}),o.globalData.showToast("服务器请求出错")}})},logout_submit_event:function(t){if(0!=t&&1!=t)return o.globalData.alert({msg:"账号注销后不可恢复、确定继续吗？",is_show_cancel:1,object:this,method:"logout_submit_event"}),!1;1==t&&(uni.showLoading({title:"处理中..."}),uni.request({url:o.globalData.get_request_url("logout","safety"),method:"POST",data:{},dataType:"json",success:function(t){uni.hideLoading(),0==t.data.code?(o.globalData.remove_user_cache_event(),o.globalData.showToast(t.data.msg,"success"),setTimeout((function(){uni.switchTab({url:o.globalData.data.tabbar_pages[0]})}),1500)):o.globalData.is_login_check(t.data)?o.globalData.showToast(t.data.msg):o.globalData.showToast("提交失败，请重试！")},fail:function(){uni.hideLoading(),o.globalData.showToast("服务器请求出错")}}))},logout_cancel_event:function(){o.globalData.page_back_prev_event()}}};a.default=s},e3c9:function(t,a,e){"use strict";var n=e("9f48"),i=e.n(n);i.a}}]);