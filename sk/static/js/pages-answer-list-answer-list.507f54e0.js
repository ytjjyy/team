(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-answer-list-answer-list"],{"01bb":function(t,a,e){"use strict";e.r(a);var n=e("0cb4"),i=e("ee88");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("244f");var o=e("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"535f7e64",null,!1,n["a"],void 0);a["default"]=r.exports},"0b51":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".avatar[data-v-535f7e64]{width:%?35?%;height:%?35?%}",""]),t.exports=a},"0cb4":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-box",attrs:{"scroll-y":!0,"lower-threshold":"30"},on:{scrolltolower:function(a){arguments[0]=a=t.$handleEvent(a),t.scroll_lower.apply(void 0,arguments)}}},[t.data_list.length>0?e("v-uni-view",{staticClass:"padding-horizontal-main padding-top-main"},t._l(t.data_list,(function(a,n){return e("v-uni-view",{key:n,staticClass:"padding-main border-radius-main bg-white oh spacing-mb"},[e("v-uni-view",{staticClass:"br-b-dashed oh padding-bottom-main"},[e("v-uni-image",{staticClass:"avatar fl br bg-white round",attrs:{src:a.user.avatar,mode:"widthFix","data-index":n},on:{error:function(a){arguments[0]=a=t.$handleEvent(a),t.user_avatar_error.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"fl margin-left-sm cr-base"},[t._v(t._s(a.user.user_name_view))]),e("v-uni-text",{staticClass:"fr cr-base"},[t._v(t._s(a.add_time_time))])],1),e("v-uni-view",{staticClass:"cr-gray margin-top-lg"},[t._v(t._s(a.content))]),null!=(a.reply||null)?e("v-uni-view",{staticClass:"br-t margin-top-main padding-top-main"},[e("v-uni-text",{staticClass:"bg-main cr-white padding-top-xs padding-bottom-xs padding-left padding-right round margin-right-sm"},[t._v("答")]),e("v-uni-text",{staticClass:"cr-gray"},[t._v(t._s(a.reply))])],1):t._e()],1)})),1):e("v-uni-view",[e("component-no-data",{attrs:{propStatus:t.data_list_loding_status}})],1),e("component-bottom-line",{attrs:{propStatus:t.data_bottom_line_status}})],1)],1)},i=[]},"244f":function(t,a,e){"use strict";var n=e("50ce"),i=e.n(n);i.a},"2fa6":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),t.exports=a},3174:function(t,a,e){"use strict";e.r(a);var n=e("ae53"),i=e("8e69");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("361d");var o=e("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"aa9399c8",null,!1,n["a"],void 0);a["default"]=r.exports},"361d":function(t,a,e){"use strict";var n=e("bb0f"),i=e.n(n);i.a},"382f":function(t,a,e){var n=e("2fa6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("c08120bc",n,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[1==t.propStatus?e("v-uni-view",{staticClass:"no-data-box no-data-loading"},[e("v-uni-text",[t._v("加载中...")])],1):2==t.propStatus?e("v-uni-view",{staticClass:"no-data-box"},[e("v-uni-image",{attrs:{src:t.static_dir+"error.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"处理错误"))])],1):0==t.propStatus?e("v-uni-view",{staticClass:"no-data-box"},[e("v-uni-image",{attrs:{src:t.static_dir+"empty.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"没有相关数据"))])],1):t._e()],1)},i=[]},"50ce":function(t,a,e){var n=e("0b51");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("2fdc86f4",n,!0,{sourceMap:!1,shadowMode:!1})},"66fd":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".data-bottom-line[data-v-aa9399c8]{padding:%?40?%;overflow:hidden}.data-bottom-line uni-view[data-v-aa9399c8]{width:33.3%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .right[data-v-aa9399c8]{margin-top:8px;border-bottom:1px solid #e1e1e1}.data-bottom-line .msg[data-v-aa9399c8]{color:#999;text-align:center;font-size:%?24?%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .msg[data-v-aa9399c8]{float:left}.data-bottom-line .right[data-v-aa9399c8]{float:right}",""]),t.exports=a},"870b":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},components:{},props:{propStatus:Boolean,propMsg:String},methods:{}};a.default=n},"8e69":function(t,a,e){"use strict";e.r(a);var n=e("870b"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"97c7":function(t,a,e){"use strict";e.r(a);var n=e("4fed"),i=e("aff5");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("a9750");var o=e("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"9455811c",null,!1,n["a"],void 0);a["default"]=r.exports},a9750:function(t,a,e){"use strict";var n=e("382f"),i=e.n(n);i.a},ae53:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[this.propStatus?a("v-uni-view",{staticClass:"data-bottom-line"},[a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"msg"},[this._v(this._s(this.propMsg||"我是有底线的"))]),a("v-uni-view",{staticClass:"right"})],1):this._e()],1)},i=[]},aff5:function(t,a,e){"use strict";e.r(a);var n=e("eba1"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},bb0f:function(t,a,e){var n=e("66fd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("429ff98b",n,!0,{sourceMap:!1,shadowMode:!1})},de6d:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("14d9");var i=n(e("97c7")),s=n(e("3174")),o=getApp(),r={data:function(){return{data_list:[],data_total:0,data_page_total:0,data_page:1,data_list_loding_status:1,data_bottom_line_status:!1}},components:{componentNoData:i.default,componentBottomLine:s.default},props:{},onLoad:function(){},onShow:function(){this.get_data_list(),o.globalData.page_share_handle()},onPullDownRefresh:function(){this.setData({data_page:1}),this.get_data_list(1)},methods:{get_data_list:function(t){var a=this;if(0==(t||0)&&1==this.data_bottom_line_status)return uni.stopPullDownRefresh(),!1;this.setData({data_list_loding_status:1}),uni.request({url:o.globalData.get_request_url("square","answer"),method:"POST",data:{page:this.data_page},dataType:"json",success:function(t){if(uni.stopPullDownRefresh(),0==t.data.code)if(t.data.data.data.length>0){if(a.data_page<=1)var e=t.data.data.data;else{e=a.data_list||[];var n=t.data.data.data;for(var i in n)e.push(n[i])}a.setData({data_list:e,data_total:t.data.data.total,data_page_total:t.data.data.page_total,data_list_loding_status:3,data_page:a.data_page+1}),a.setData({data_bottom_line_status:a.data_page>1&&a.data_page>a.data_page_total})}else a.setData({data_list_loding_status:0});else a.setData({data_list_loding_status:0}),o.globalData.is_login_check(t.data,a,"get_data_list")&&o.globalData.showToast(t.data.msg)},fail:function(){uni.stopPullDownRefresh(),a.setData({data_list_loding_status:2}),o.globalData.showToast("服务器请求出错")}})},scroll_lower:function(t){this.get_data_list()},user_avatar_error:function(t){var a=t.currentTarget.dataset.index||0,e=this.data_list;for(var n in e)if(n==a){e[n]["user"]["avatar"]=o.globalData.data.default_user_head_src;break}this.setData({data_list:e})}}};a.default=r},eba1:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3");getApp();var n={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};a.default=n},ee88:function(t,a,e){"use strict";e.r(a);var n=e("de6d"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a}}]);