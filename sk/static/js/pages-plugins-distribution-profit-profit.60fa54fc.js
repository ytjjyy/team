(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-distribution-profit-profit"],{"0211":function(t,a,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("14d9");var e=n(i("97c7")),s=n(i("3174")),o=getApp(),l={data:function(){return{data_list:[],data_total:0,data_page_total:0,data_page:1,data_list_loding_status:1,data_bottom_line_status:!1,params:null,nav_status_list:[{name:"全部",value:"-1"},{name:"待生效",value:"0"},{name:"待结算",value:"1"},{name:"已结算",value:"2"},{name:"已失效",value:"3"}],nav_status_index:0,content_list:[{name:"订单金额",field:"total_price",unit:"元"},{name:"退款金额",field:"refund_price",unit:"元"},{name:"收益金额",field:"profit_price",unit:"元"},{name:"当前级别",field:"level_name"}]}},components:{componentNoData:e.default,componentBottomLine:s.default},props:{},onLoad:function(t){var a=0;if(null!=(t.status||null))for(var i in this.nav_status_list)if(this.nav_status_list[i]["value"]==t.status){a=i;break}this.setData({params:t,nav_status_index:a}),this.init()},onShow:function(){o.globalData.page_share_handle()},onPullDownRefresh:function(){this.setData({data_page:1}),this.get_data_list(1)},methods:{init:function(){var t=o.globalData.get_user_info(this,"init");if(0!=t){if(o.globalData.user_is_need_login(t))return uni.redirectTo({url:"/pages/login/login?event_callback=init"}),!1;this.get_data_list()}else this.setData({data_list_loding_status:0,data_bottom_line_status:!1})},get_data_list:function(t){var a=this;if(0==(t||0)&&1==this.data_bottom_line_status)return uni.stopPullDownRefresh(),!1;uni.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1});var i=null==(this.nav_status_list[this.nav_status_index]||null)?-1:this.nav_status_list[this.nav_status_index]["value"];uni.request({url:o.globalData.get_request_url("index","profit","distribution"),method:"POST",data:{page:this.data_page,status:i,is_more:1},dataType:"json",success:function(t){if(uni.hideLoading(),uni.stopPullDownRefresh(),0==t.data.code)if(t.data.data.data.length>0){if(a.data_page<=1)var i=t.data.data.data;else{i=a.data_list||[];var n=t.data.data.data;for(var e in n)i.push(n[e])}a.setData({data_list:i,data_total:t.data.data.total,data_page_total:t.data.data.page_total,data_list_loding_status:3,data_page:a.data_page+1}),a.setData({data_bottom_line_status:a.data_page>1&&a.data_page>a.data_page_total})}else a.setData({data_list_loding_status:0,data_list:[],data_bottom_line_status:!1});else a.setData({data_list_loding_status:0}),o.globalData.is_login_check(t.data,a,"get_data_list")&&o.globalData.showToast(t.data.msg)},fail:function(){uni.hideLoading(),uni.stopPullDownRefresh(),a.setData({data_list_loding_status:2}),o.globalData.showToast("服务器请求出错")}})},scroll_lower:function(t){this.get_data_list()},nav_event:function(t){this.setData({nav_status_index:t.currentTarget.dataset.index||0,data_page:1}),this.get_data_list(1)}}};a.default=l},"050b":function(t,a,i){"use strict";i.r(a);var n=i("073b"),e=i("c266");for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);i("e1a8");var o=i("f0c5"),l=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"573c09c2",null,!1,n["a"],void 0);a["default"]=l.exports},"073b":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"nav-base bg-white"},[t._l(t.nav_status_list,(function(a,n){return[i("v-uni-view",{key:n+"_0",class:"item fl tc cr-gray "+(t.nav_status_index==n?"cr-main":""),attrs:{"data-index":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nav_event.apply(void 0,arguments)}}},[t._v(t._s(a.name))])]}))],2),i("v-uni-scroll-view",{staticClass:"scroll-box scroll-box-ece-nav",attrs:{"scroll-y":!0,"lower-threshold":"30"},on:{scrolltolower:function(a){arguments[0]=a=t.$handleEvent(a),t.scroll_lower.apply(void 0,arguments)}}},[t.data_list.length>0?i("v-uni-view",{staticClass:"data-list padding-horizontal-main padding-top-main"},t._l(t.data_list,(function(a,n){return i("v-uni-view",{key:n,staticClass:"item padding-main border-radius-main oh bg-white spacing-mb"},[i("v-uni-view",{staticClass:"base oh br-b padding-bottom-main"},[i("v-uni-text",{staticClass:"cr-base"},[t._v(t._s(a.add_time_time))]),i("v-uni-text",{staticClass:"fr cr-main"},[t._v(t._s(a.status_name))])],1),i("v-uni-view",{staticClass:"content margin-top"},[i("v-uni-navigator",{attrs:{url:"/pages/plugins/distribution/profit-detail/profit-detail?id="+a.id,"hover-class":"none"}},[t._l(t.content_list,(function(n,e){return[i("v-uni-view",{staticClass:"single-text margin-top-xs"},[i("v-uni-text",{staticClass:"cr-gray margin-right-xl"},[t._v(t._s(n.name))]),i("v-uni-text",{staticClass:"cr-base"},[t._v(t._s(a[n.field]))]),null!=(n.unit||null)?i("v-uni-text",{staticClass:"cr-gray"},[t._v(t._s(n.unit))]):t._e()],1)]}))],2)],1)],1)})),1):i("v-uni-view",[i("component-no-data",{attrs:{propStatus:t.data_list_loding_status}})],1),i("component-bottom-line",{attrs:{propStatus:t.data_bottom_line_status}})],1)],1)},e=[]},"1e8a":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,"/*\r\n* 导航\r\n*/.nav-base .item[data-v-573c09c2]{width:20%}",""]),t.exports=a},"2fa6":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),t.exports=a},3174:function(t,a,i){"use strict";i.r(a);var n=i("ae53"),e=i("8e69");for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);i("361d");var o=i("f0c5"),l=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"aa9399c8",null,!1,n["a"],void 0);a["default"]=l.exports},"361d":function(t,a,i){"use strict";var n=i("bb0f"),e=i.n(n);e.a},"382f":function(t,a,i){var n=i("2fa6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("c08120bc",n,!0,{sourceMap:!1,shadowMode:!1})},"3ec4":function(t,a,i){var n=i("1e8a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("811782fc",n,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[1==t.propStatus?i("v-uni-view",{staticClass:"no-data-box no-data-loading"},[i("v-uni-text",[t._v("加载中...")])],1):2==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"error.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"处理错误"))])],1):0==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"empty.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"没有相关数据"))])],1):t._e()],1)},e=[]},"66fd":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".data-bottom-line[data-v-aa9399c8]{padding:%?40?%;overflow:hidden}.data-bottom-line uni-view[data-v-aa9399c8]{width:33.3%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .right[data-v-aa9399c8]{margin-top:8px;border-bottom:1px solid #e1e1e1}.data-bottom-line .msg[data-v-aa9399c8]{color:#999;text-align:center;font-size:%?24?%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .msg[data-v-aa9399c8]{float:left}.data-bottom-line .right[data-v-aa9399c8]{float:right}",""]),t.exports=a},"870b":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},components:{},props:{propStatus:Boolean,propMsg:String},methods:{}};a.default=n},"8e69":function(t,a,i){"use strict";i.r(a);var n=i("870b"),e=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);a["default"]=e.a},"97c7":function(t,a,i){"use strict";i.r(a);var n=i("4fed"),e=i("aff5");for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);i("a9750");var o=i("f0c5"),l=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"9455811c",null,!1,n["a"],void 0);a["default"]=l.exports},a9750:function(t,a,i){"use strict";var n=i("382f"),e=i.n(n);e.a},ae53:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[this.propStatus?a("v-uni-view",{staticClass:"data-bottom-line"},[a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"msg"},[this._v(this._s(this.propMsg||"我是有底线的"))]),a("v-uni-view",{staticClass:"right"})],1):this._e()],1)},e=[]},aff5:function(t,a,i){"use strict";i.r(a);var n=i("eba1"),e=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);a["default"]=e.a},bb0f:function(t,a,i){var n=i("66fd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("429ff98b",n,!0,{sourceMap:!1,shadowMode:!1})},c266:function(t,a,i){"use strict";i.r(a);var n=i("0211"),e=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);a["default"]=e.a},e1a8:function(t,a,i){"use strict";var n=i("3ec4"),e=i.n(n);e.a},eba1:function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");getApp();var n={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};a.default=n}}]);