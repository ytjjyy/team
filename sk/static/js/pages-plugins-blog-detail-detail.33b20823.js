(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-blog-detail-detail"],{"1f58":function(t,a,i){var s=i("e835");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("79906c32",s,!0,{sourceMap:!1,shadowMode:!1})},"233d":function(t,a,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=s(i("97c7")),e=s(i("3174")),l=getApp(),o=l.globalData.get_static_url("common"),r={data:function(){return{common_static_url:o,data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,currency_symbol:l.globalData.data.currency_symbol,params:null,data_base:null,data:null,right_list:[],last_next:null,share_info:{}}},components:{componentNoData:n.default,componentBottomLine:e.default},props:{},onLoad:function(t){this.setData({params:t}),this.init_config(),this.get_data()},onPullDownRefresh:function(){this.get_data()},methods:{init_config:function(t){1==(t||!1)?this.setData({currency_symbol:l.globalData.get_config("currency_symbol")}):l.globalData.is_config(this,"init_config")},get_data:function(){var t=this;uni.showLoading({title:"加载中..."}),uni.request({url:l.globalData.get_request_url("detail","index","blog"),method:"POST",data:{id:this.params.id||0},dataType:"json",success:function(a){uni.hideLoading(),uni.stopPullDownRefresh();var i=a.data.data;if(0==a.data.code&&null!=(i.data||null)){var s=i.data;t.setData({data_bottom_line_status:!0,data_list_loding_status:3,data_base:i.base||null,data:s,right_list:i.right_list||[],last_next:i.last_next||null}),t.setData({share_info:{title:t.data.seo_title||t.data.title,desc:t.data.seo_desc||t.data.describe,path:"/pages/plugins/blog/detail/detail",query:"id="+t.data.id,img:t.data.cover}}),uni.setNavigationBarTitle({title:t.data.title})}else t.setData({data_list_loding_status:0,data_list_loding_msg:a.data.msg}),l.globalData.showToast(a.data.msg);l.globalData.page_share_handle(t.share_info)},fail:function(){uni.hideLoading(),uni.stopPullDownRefresh(),t.setData({data_list_loding_status:2}),l.globalData.showToast("服务器请求出错")}})}}};a.default=r},3174:function(t,a,i){"use strict";i.r(a);var s=i("ae53"),n=i("8e69");for(var e in n)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(e);i("361d");var l=i("f0c5"),o=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,"aa9399c8",null,!1,s["a"],void 0);a["default"]=o.exports},"361d":function(t,a,i){"use strict";var s=i("bb0f"),n=i.n(s);n.a},"66fd":function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,".data-bottom-line[data-v-aa9399c8]{padding:%?40?%;overflow:hidden}.data-bottom-line uni-view[data-v-aa9399c8]{width:33.3%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .right[data-v-aa9399c8]{margin-top:8px;border-bottom:1px solid #e1e1e1}.data-bottom-line .msg[data-v-aa9399c8]{color:#999;text-align:center;font-size:%?24?%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .msg[data-v-aa9399c8]{float:left}.data-bottom-line .right[data-v-aa9399c8]{float:right}",""]),t.exports=a},7120:function(t,a,i){"use strict";i.r(a);var s=i("d37b"),n=i("7fda");for(var e in n)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(e);i("86d8");var l=i("f0c5"),o=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,"645dc79a",null,!1,s["a"],void 0);a["default"]=o.exports},"7fda":function(t,a,i){"use strict";i.r(a);var s=i("233d"),n=i.n(s);for(var e in s)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(e);a["default"]=n.a},"86d8":function(t,a,i){"use strict";var s=i("1f58"),n=i.n(s);n.a},"870b":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{}},components:{},props:{propStatus:Boolean,propMsg:String},methods:{}};a.default=s},"8e69":function(t,a,i){"use strict";i.r(a);var s=i("870b"),n=i.n(s);for(var e in s)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(e);a["default"]=n.a},ae53:function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var s=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[this.propStatus?a("v-uni-view",{staticClass:"data-bottom-line"},[a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"msg"},[this._v(this._s(this.propMsg||"我是有底线的"))]),a("v-uni-view",{staticClass:"right"})],1):this._e()],1)},n=[]},bb0f:function(t,a,i){var s=i("66fd");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("429ff98b",s,!0,{sourceMap:!1,shadowMode:!1})},d37b:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){return s}));var s={mpHtml:i("f50c").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[null!=(t.data||null)?i("v-uni-view",{staticClass:"padding-horizontal-main padding-top-main"},[i("v-uni-view",{staticClass:"padding-main border-radius-main bg-white spacing-mb"},[i("v-uni-view",{staticClass:"title-content pr"},[i("v-uni-view",{staticClass:"fw-b text-size-xl"},[t._v(t._s(t.data.title))])],1),i("v-uni-view",{staticClass:"cr-grey margin-top-lg oh br-t padding-top-main"},[i("v-uni-view",{staticClass:"fl"},[i("v-uni-text",[t._v("时间：")]),i("v-uni-text",[t._v(t._s(t.data.add_time))])],1),i("v-uni-view",{staticClass:"fr"},[i("v-uni-text",{staticClass:"margin-left-xxxl"},[t._v("浏览：")]),i("v-uni-text",[t._v(t._s(t.data.access_count))])],1)],1)],1),i("v-uni-view",{staticClass:"padding-main border-radius-main bg-white oh web-html-content spacing-mb"},[null!=(t.data.video_url||null)&&0==(t.data.is_live_play||0)?i("v-uni-view",[i("v-uni-video",{staticClass:"wh-auto",attrs:{src:t.data.video_url,autoplay:!1,controls:!0}})],1):t._e(),i("mp-html",{attrs:{content:t.data.content}})],1),null!=(t.last_next||null)?i("v-uni-view",{staticClass:"last-next-data spacing-mb"},[null!=(t.last_next.last||null)?i("v-uni-view",[i("v-uni-text",{staticClass:"cr-gray va-m"},[t._v("上一篇：")]),i("v-uni-navigator",{staticClass:"dis-inline-block va-m cr-blue",attrs:{url:t.last_next.last.url,"open-type":"redirect","hover-class":"none"}},[t._v(t._s(t.last_next.last.title))])],1):t._e(),null!=(t.last_next.next||null)?i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"cr-gray va-m"},[t._v("下一篇：")]),i("v-uni-navigator",{staticClass:"dis-inline-block va-m cr-blue",attrs:{url:t.last_next.next.url,"open-type":"redirect","hover-class":"none"}},[t._v(t._s(t.last_next.next.title))])],1):t._e()],1):t._e(),t.right_list.length>0?i("v-uni-view",{staticClass:"plugins-blog-list"},[i("v-uni-view",{staticClass:"spacing-nav-title"},[i("v-uni-text",{staticClass:"text-wrapper"},[t._v("推荐博文")]),i("v-uni-navigator",{staticClass:"arrow-right padding-right-xxxl cr-gray fr",attrs:{url:"/pages/plugins/blog/search/search","hover-class":"none"}},[t._v("更多")])],1),t._l(t.right_list,(function(a,s){return i("v-uni-view",{staticClass:"item oh padding-main border-radius-main bg-white spacing-mb"},[i("v-uni-navigator",{attrs:{url:a.url,"hover-class":"none"}},[i("v-uni-image",{staticClass:"blog-img fl radius",attrs:{src:a.cover,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"base fr"},[i("v-uni-view",{staticClass:"single-text"},[t._v(t._s(a.title))]),i("v-uni-view",{staticClass:"cr-gray margin-top-sm"},[t._v(t._s(a.add_time_date_cn))]),i("v-uni-view",{staticClass:"cr-grey multi-text margin-top-sm"},[t._v(t._s(a.describe))])],1)],1)],1)}))],2):t._e(),null!=(t.data.goods_list||null)&&t.data.goods_list.length>0?i("v-uni-view",{staticClass:"goods-list oh"},[i("v-uni-view",{staticClass:"spacing-nav-title"},[i("v-uni-text",{staticClass:"text-wrapper"},[t._v("相关商品")]),i("v-uni-navigator",{staticClass:"arrow-right padding-right-xxxl cr-gray fr",attrs:{url:"/pages/goods-search/goods-search","hover-class":"none"}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"goods-list oh"},t._l(t.data.goods_list,(function(a,s){return i("v-uni-view",{key:s,staticClass:"item padding-bottom-sm border-radius-main bg-white margin-bottom-main oh"},[i("v-uni-navigator",{attrs:{url:a.goods_url,"hover-class":"none"}},[i("v-uni-image",{staticClass:"goods-img dis-block",attrs:{src:a.images,mode:"aspectFit"}}),i("v-uni-view",{staticClass:"base padding-horizontal-main margin-top-sm"},[i("v-uni-view",{staticClass:"multi-text"},[t._v(t._s(a.title))]),i("v-uni-view",{staticClass:"price margin-top"},[i("v-uni-text",{staticClass:"sales-price"},[t._v(t._s(t.currency_symbol)+t._s(a.min_price))])],1)],1)],1)],1)})),1)],1):t._e()],1):i("v-uni-view",[i("component-no-data",{attrs:{propStatus:t.data_list_loding_status,propMsg:t.data_list_loding_msg}})],1),i("component-bottom-line",{attrs:{propStatus:t.data_bottom_line_status}})],1)},e=[]},e835:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,"/**\n * 标题内容\n */.title-content .blog-title[data-v-645dc79a]{width:calc(100% - %?70?%)}.title-content .blog-share[data-v-645dc79a]{top:calc(50% - %?20?%);right:0;background:transparent;padding:0;margin:0}.title-content .blog-share uni-image[data-v-645dc79a]{width:%?40?%;height:%?40?%}\n/**\n * 商品\n */.goods-list .item[data-v-645dc79a]{width:calc(50% - %?10?%)}.goods-list .item[data-v-645dc79a]:nth-child(2n){float:right}.goods-list .item[data-v-645dc79a]:nth-child(2n+1){float:left}.goods-list .item .goods-img[data-v-645dc79a]{width:100%;height:%?380?%!important}",""]),t.exports=a}}]);