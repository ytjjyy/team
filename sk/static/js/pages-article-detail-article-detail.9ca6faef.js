(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-detail-article-detail"],{2554:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("97c7")),s=n(e("3174")),l=getApp(),o={data:function(){return{data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,params:null,data:null,last_next:null,share_info:{}}},components:{componentNoData:i.default,componentBottomLine:s.default},props:{},onLoad:function(t){this.setData({params:t}),this.get_data()},onPullDownRefresh:function(){this.get_data()},methods:{get_data:function(){var t=this;uni.showLoading({title:"加载中..."}),uni.request({url:l.globalData.get_request_url("detail","article"),method:"POST",data:{id:this.params.id||0},dataType:"json",success:function(a){uni.hideLoading(),uni.stopPullDownRefresh();var e=a.data.data;if(0==a.data.code&&null!=(e.data||null)){var n=e.data;t.setData({data_bottom_line_status:!0,data_list_loding_status:3,data:n,last_next:e.last_next||null}),t.setData({share_info:{title:t.data.seo_title||t.data.title,desc:t.data.seo_desc,path:"/pages/article-detail/article-detail",query:"id="+t.data.id}}),uni.setNavigationBarTitle({title:n.title})}else t.setData({data_list_loding_status:0,data_list_loding_msg:a.data.msg}),l.globalData.showToast(a.data.msg);l.globalData.page_share_handle(t.share_info)},fail:function(){uni.hideLoading(),uni.stopPullDownRefresh(),t.setData({data_list_loding_status:2}),l.globalData.showToast("服务器请求出错")}})}}};a.default=o},3174:function(t,a,e){"use strict";e.r(a);var n=e("ae53"),i=e("8e69");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("361d");var l=e("f0c5"),o=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"aa9399c8",null,!1,n["a"],void 0);a["default"]=o.exports},"361d":function(t,a,e){"use strict";var n=e("bb0f"),i=e.n(n);i.a},"48b1":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".last-next-data uni-navigator[data-v-494ff8d7]{width:calc(100% - %?120?%)}",""]),t.exports=a},"4cb4":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var n={mpHtml:e("f50c").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[null!=(t.data||null)?e("v-uni-view",{staticClass:"padding-main"},[e("v-uni-view",{staticClass:"padding-main border-radius-main bg-white spacing-mb"},[e("v-uni-view",{staticClass:"fw-b text-size-xl"},[t._v(t._s(t.data.title))]),e("v-uni-view",{staticClass:"cr-grey margin-top-lg oh br-t padding-top-main"},[e("v-uni-view",{staticClass:"fl"},[e("v-uni-text",[t._v("时间：")]),e("v-uni-text",[t._v(t._s(t.data.add_time))])],1),e("v-uni-view",{staticClass:"fr"},[e("v-uni-text",{staticClass:"margin-left-xxxl"},[t._v("浏览：")]),e("v-uni-text",[t._v(t._s(t.data.access_count))])],1)],1)],1),e("v-uni-view",{staticClass:"padding-main border-radius-main bg-white oh web-html-content spacing-mb"},[e("mp-html",{attrs:{content:t.data.content}})],1),null!=(t.last_next||null)?e("v-uni-view",{staticClass:"last-next-data spacing-mb"},[null!=(t.last_next.last||null)?e("v-uni-view",[e("v-uni-text",{staticClass:"cr-gray va-m"},[t._v("上一篇：")]),e("v-uni-navigator",{staticClass:"dis-inline-block va-m cr-blue",attrs:{url:t.last_next.last.url,"open-type":"redirect","hover-class":"none"}},[t._v(t._s(t.last_next.last.title))])],1):t._e(),null!=(t.last_next.next||null)?e("v-uni-view",{staticClass:"margin-top-sm"},[e("v-uni-text",{staticClass:"cr-gray va-m"},[t._v("下一篇：")]),e("v-uni-navigator",{staticClass:"dis-inline-block va-m cr-blue",attrs:{url:t.last_next.next.url,"open-type":"redirect","hover-class":"none"}},[t._v(t._s(t.last_next.next.title))])],1):t._e()],1):t._e()],1):e("v-uni-view",[e("component-no-data",{attrs:{propStatus:t.data_list_loding_status,propMsg:t.data_list_loding_msg}})],1)],1)},s=[]},"66fd":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".data-bottom-line[data-v-aa9399c8]{padding:%?40?%;overflow:hidden}.data-bottom-line uni-view[data-v-aa9399c8]{width:33.3%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .right[data-v-aa9399c8]{margin-top:8px;border-bottom:1px solid #e1e1e1}.data-bottom-line .msg[data-v-aa9399c8]{color:#999;text-align:center;font-size:%?24?%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .msg[data-v-aa9399c8]{float:left}.data-bottom-line .right[data-v-aa9399c8]{float:right}",""]),t.exports=a},"870b":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},components:{},props:{propStatus:Boolean,propMsg:String},methods:{}};a.default=n},"8b01":function(t,a,e){"use strict";e.r(a);var n=e("4cb4"),i=e("9bdb");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("cd20");var l=e("f0c5"),o=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"494ff8d7",null,!1,n["a"],void 0);a["default"]=o.exports},"8e69":function(t,a,e){"use strict";e.r(a);var n=e("870b"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"9bdb":function(t,a,e){"use strict";e.r(a);var n=e("2554"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},ae53:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[this.propStatus?a("v-uni-view",{staticClass:"data-bottom-line"},[a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"msg"},[this._v(this._s(this.propMsg||"我是有底线的"))]),a("v-uni-view",{staticClass:"right"})],1):this._e()],1)},i=[]},bb0f:function(t,a,e){var n=e("66fd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("429ff98b",n,!0,{sourceMap:!1,shadowMode:!1})},ca89:function(t,a,e){var n=e("48b1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("ee70f73c",n,!0,{sourceMap:!1,shadowMode:!1})},cd20:function(t,a,e){"use strict";var n=e("ca89"),i=e.n(n);i.a}}]);