(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-brand-index-index"],{"01ee":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,"/**\r\n* 分类导航\r\n*/.nav-list[data-v-246c4f46]{height:%?80?%;line-height:%?80?%}\r\n/**\r\n* 数据列表\r\n*/.data-list .item[data-v-246c4f46]{width:calc(50% - %?10?%);margin-bottom:%?20?%}.data-list .item[data-v-246c4f46]:nth-child(2n){float:right}.data-list .item[data-v-246c4f46]:nth-child(2n+1){float:left}.data-list .item uni-image[data-v-246c4f46]{width:100%;height:%?160?%!important}",""]),t.exports=a},"2fa6":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),t.exports=a},3174:function(t,a,n){"use strict";n.r(a);var i=n("ae53"),e=n("8e69");for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(s);n("361d");var o=n("f0c5"),d=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"aa9399c8",null,!1,i["a"],void 0);a["default"]=d.exports},"361d":function(t,a,n){"use strict";var i=n("bb0f"),e=n.n(i);e.a},"382f":function(t,a,n){var i=n("2fa6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("c08120bc",i,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[1==t.propStatus?n("v-uni-view",{staticClass:"no-data-box no-data-loading"},[n("v-uni-text",[t._v("加载中...")])],1):2==t.propStatus?n("v-uni-view",{staticClass:"no-data-box"},[n("v-uni-image",{attrs:{src:t.static_dir+"error.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"处理错误"))])],1):0==t.propStatus?n("v-uni-view",{staticClass:"no-data-box"},[n("v-uni-image",{attrs:{src:t.static_dir+"empty.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"没有相关数据"))])],1):t._e()],1)},e=[]},"66fd":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".data-bottom-line[data-v-aa9399c8]{padding:%?40?%;overflow:hidden}.data-bottom-line uni-view[data-v-aa9399c8]{width:33.3%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .right[data-v-aa9399c8]{margin-top:8px;border-bottom:1px solid #e1e1e1}.data-bottom-line .msg[data-v-aa9399c8]{color:#999;text-align:center;font-size:%?24?%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .msg[data-v-aa9399c8]{float:left}.data-bottom-line .right[data-v-aa9399c8]{float:right}",""]),t.exports=a},"6f19":function(t,a,n){var i=n("01ee");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("328c2e78",i,!0,{sourceMap:!1,shadowMode:!1})},"870b":function(t,a,n){"use strict";n("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{}},components:{},props:{propStatus:Boolean,propMsg:String},methods:{}};a.default=i},"8d51":function(t,a,n){"use strict";var i=n("6f19"),e=n.n(i);e.a},"8e69":function(t,a,n){"use strict";n.r(a);var i=n("870b"),e=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},"97c7":function(t,a,n){"use strict";n.r(a);var i=n("4fed"),e=n("aff5");for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(s);n("a9750");var o=n("f0c5"),d=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"9455811c",null,!1,i["a"],void 0);a["default"]=d.exports},a8b9:function(t,a,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("c975");var e=i(n("97c7")),s=i(n("3174")),o=getApp(),d={data:function(){return{data_bottom_line_status:!1,data_list_loding_status:1,data_list_loding_msg:"",params:null,data_base:null,brand_list:[],brand_category_list:[],nav_active_value:0,share_info:{}}},components:{componentNoData:e.default,componentBottomLine:s.default},props:{},onLoad:function(t){this.setData({params:t})},onShow:function(){this.get_data()},onPullDownRefresh:function(){this.get_data()},methods:{get_data:function(){var t=this;uni.request({url:o.globalData.get_request_url("index","index","brand"),method:"POST",data:{},dataType:"json",success:function(a){if(uni.stopPullDownRefresh(),0==a.data.code){var n=a.data.data,i=n.brand_list||[];t.setData({data_base:n.base||null,brand_list:i,brand_category_list:n.brand_category_list||[],data_list_loding_msg:"",data_list_loding_status:i.length>0?3:0,data_bottom_line_status:i.length>0}),t.setData({share_info:{title:t.data_base.seo_title||t.data_base.application_name,desc:t.data_base.seo_desc,path:"/pages/plugins/brand/index/index"}}),t.nav_active_handle(),o.globalData.page_share_handle(t.share_info)}else t.setData({data_bottom_line_status:!1,data_list_loding_status:2,data_list_loding_msg:a.data.msg})},fail:function(){uni.stopPullDownRefresh(),t.setData({data_bottom_line_status:!1,data_list_loding_status:2,data_list_loding_msg:"服务器请求出错"}),o.globalData.showToast("服务器请求出错")}})},nav_event:function(t){this.setData({nav_active_value:t.currentTarget.dataset.value||0}),this.nav_active_handle()},nav_active_handle:function(){var t=this.nav_active_value,a=this.brand_list,n=0;for(var i in a)if(0==t)a[i]["is_not_show"]=0,n++;else{var e=-1==a[i]["brand_category_ids"].indexOf(t)?1:0;a[i]["is_not_show"]=e,0==e&&n++}this.setData({brand_list:a,data_list_loding_status:n>0?3:0,data_bottom_line_status:n>0})}}};a.default=d},a9750:function(t,a,n){"use strict";var i=n("382f"),e=n.n(i);e.a},ad9c:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[null!=(t.data_base||null)?n("v-uni-view",[null!=(t.brand_category_list||null)&&t.brand_category_list.length>0?n("v-uni-scroll-view",{staticClass:"nav-list scroll-view-horizontal bg-white oh",attrs:{"scroll-x":"true"}},[n("v-uni-view",{class:"item cr-gray dis-inline-block padding-horizontal-main "+(0==t.nav_active_value?"cr-main":""),attrs:{"data-value":"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nav_event.apply(void 0,arguments)}}},[t._v("全部")]),t._l(t.brand_category_list,(function(a,i){return[n("v-uni-view",{key:i+"_0",class:"item cr-gray dis-inline-block padding-horizontal-main "+(t.nav_active_value==a.id?"cr-main":""),attrs:{"data-value":a.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nav_event.apply(void 0,arguments)}}},[t._v(t._s(a.name))])]}))],2):t._e(),null!=(t.brand_list||null)&&t.brand_list.length>0?n("v-uni-view",{staticClass:"data-list padding-horizontal-main padding-top-main oh"},[t._l(t.brand_list,(function(a,i){return[0==(a.is_not_show||0)?n("v-uni-view",{key:i+"_0",staticClass:"item border-radius-main bg-white oh spacing-mb"},[n("v-uni-navigator",{attrs:{url:"/pages/goods-search/goods-search?brand="+a.id,"hover-class":"none"}},[n("v-uni-image",{attrs:{src:a.logo,mode:"aspectFit"}}),n("v-uni-view",{staticClass:"padding-main tc"},[n("v-uni-view",{staticClass:"single-text fw-b cr-base"},[t._v(t._s(a.name))]),n("v-uni-view",{staticClass:"multi-text cr-grey margin-top-sm"},[t._v(t._s(a.describe))])],1)],1)],1):t._e()]}))],2):t._e(),n("component-no-data",{attrs:{propStatus:t.data_list_loding_status}}),n("component-bottom-line",{attrs:{propStatus:t.data_bottom_line_status}})],1):t._e()],1)},e=[]},ae53:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[this.propStatus?a("v-uni-view",{staticClass:"data-bottom-line"},[a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"msg"},[this._v(this._s(this.propMsg||"我是有底线的"))]),a("v-uni-view",{staticClass:"right"})],1):this._e()],1)},e=[]},aff5:function(t,a,n){"use strict";n.r(a);var i=n("eba1"),e=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},bb0f:function(t,a,n){var i=n("66fd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("429ff98b",i,!0,{sourceMap:!1,shadowMode:!1})},cca5:function(t,a,n){"use strict";n.r(a);var i=n("ad9c"),e=n("d3f3");for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(s);n("8d51");var o=n("f0c5"),d=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"246c4f46",null,!1,i["a"],void 0);a["default"]=d.exports},d3f3:function(t,a,n){"use strict";n.r(a);var i=n("a8b9"),e=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},eba1:function(t,a,n){"use strict";n("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("a9e3");getApp();var i={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};a.default=i}}]);