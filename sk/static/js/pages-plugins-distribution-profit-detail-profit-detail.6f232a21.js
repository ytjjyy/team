(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-distribution-profit-detail-profit-detail"],{"2fa6":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),t.exports=a},3174:function(t,a,i){"use strict";i.r(a);var n=i("ae53"),e=i("8e69");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("361d");var s=i("f0c5"),d=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"aa9399c8",null,!1,n["a"],void 0);a["default"]=d.exports},"361d":function(t,a,i){"use strict";var n=i("bb0f"),e=i.n(n);e.a},"382f":function(t,a,i){var n=i("2fa6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("c08120bc",n,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[1==t.propStatus?i("v-uni-view",{staticClass:"no-data-box no-data-loading"},[i("v-uni-text",[t._v("加载中...")])],1):2==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"error.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"处理错误"))])],1):0==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"empty.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"没有相关数据"))])],1):t._e()],1)},e=[]},"62cf":function(t,a,i){"use strict";i.r(a);var n=i("b113"),e=i("a900");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);var s=i("f0c5"),d=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"640707fc",null,!1,n["a"],void 0);a["default"]=d.exports},"66fd":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".data-bottom-line[data-v-aa9399c8]{padding:%?40?%;overflow:hidden}.data-bottom-line uni-view[data-v-aa9399c8]{width:33.3%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .right[data-v-aa9399c8]{margin-top:8px;border-bottom:1px solid #e1e1e1}.data-bottom-line .msg[data-v-aa9399c8]{color:#999;text-align:center;font-size:%?24?%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .msg[data-v-aa9399c8]{float:left}.data-bottom-line .right[data-v-aa9399c8]{float:right}",""]),t.exports=a},"775f":function(t,a,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("97c7")),o=n(i("3174")),s=getApp(),d={data:function(){return{params:null,data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,detail:null,detail_list:[]}},components:{componentNoData:e.default,componentBottomLine:o.default},props:{},onLoad:function(t){this.setData({params:t}),this.init()},onShow:function(){s.globalData.page_share_handle()},onPullDownRefresh:function(){this.init()},methods:{init:function(){var t=this;uni.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),uni.request({url:s.globalData.get_request_url("detail","profit","distribution"),method:"POST",data:{id:this.params.id},dataType:"json",success:function(a){if(uni.hideLoading(),uni.stopPullDownRefresh(),0==a.data.code){var i=a.data.data;t.setData({detail:i.data,detail_list:[{name:"订单金额",value:i.data.total_price+"元"||!1},{name:"退款金额",value:i.data.refund_price+"元"||!1},{name:"收益金额",value:i.data.profit_price+"元"||!1},{name:"当前级别",value:i.data.level_name||""},{name:"结算状态",value:i.data.status_name||""},{name:"订单状态",value:i.data.order_status_name||""},{name:"订单支付状态",value:i.data.order_pay_status_name||""},{name:"来源终端",value:i.data.order_client_type_name||""},{name:"添加时间",value:i.data.add_time_time||""},{name:"更新时间",value:i.data.upd_time_text||""}],data_list_loding_status:3,data_bottom_line_status:!0,data_list_loding_msg:""})}else t.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:a.data.msg}),s.globalData.is_login_check(a.data,t,"init")&&s.globalData.showToast(a.data.msg)},fail:function(){uni.hideLoading(),uni.stopPullDownRefresh(),t.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:"服务器请求出错"}),s.globalData.showToast("服务器请求出错")}})}}};a.default=d},"870b":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},components:{},props:{propStatus:Boolean,propMsg:String},methods:{}};a.default=n},"8e69":function(t,a,i){"use strict";i.r(a);var n=i("870b"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},"97c7":function(t,a,i){"use strict";i.r(a);var n=i("4fed"),e=i("aff5");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("a9750");var s=i("f0c5"),d=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"9455811c",null,!1,n["a"],void 0);a["default"]=d.exports},a900:function(t,a,i){"use strict";i.r(a);var n=i("775f"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},a9750:function(t,a,i){"use strict";var n=i("382f"),e=i.n(n);e.a},ae53:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[this.propStatus?a("v-uni-view",{staticClass:"data-bottom-line"},[a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"msg"},[this._v(this._s(this.propMsg||"我是有底线的"))]),a("v-uni-view",{staticClass:"right"})],1):this._e()],1)},e=[]},aff5:function(t,a,i){"use strict";i.r(a);var n=i("eba1"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},b113:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[null!=t.detail?i("v-uni-view",[i("v-uni-view",{staticClass:"padding-horizontal-main padding-top-main"},[t.detail_list.length>0?i("v-uni-view",{staticClass:"panel-item padding-main border-radius-main bg-white spacing-mb"},[i("v-uni-view",{staticClass:"panel-content oh"},t._l(t.detail_list,(function(a,n){return i("v-uni-view",{key:n,staticClass:"item br-b oh padding-vertical-main"},[i("v-uni-view",{staticClass:"title fl padding-right-main cr-gray"},[t._v(t._s(a.name))]),i("v-uni-view",{staticClass:"content fl br-l padding-left-main"},[t._v(t._s(a.value))])],1)})),1)],1):t._e()],1),i("component-bottom-line",{attrs:{propStatus:t.data_bottom_line_status}})],1):i("v-uni-view",[i("component-no-data",{attrs:{propStatus:t.data_list_loding_status,propMsg:t.data_list_loding_msg}})],1)],1)},e=[]},bb0f:function(t,a,i){var n=i("66fd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("429ff98b",n,!0,{sourceMap:!1,shadowMode:!1})},eba1:function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");getApp();var n={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};a.default=n}}]);