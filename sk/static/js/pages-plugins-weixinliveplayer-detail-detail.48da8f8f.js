(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-weixinliveplayer-detail-detail"],{"250c":function(t,a,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("e9c4"),i("99af");var n=e(i("97c7")),s=e(i("3174")),o=getApp(),d=o.globalData.get_static_url("weixinliveplayer",!0),r={data:function(){return{static_url:d+"app/",params:null,data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,detail:null,share_info:{}}},components:{componentNoData:n.default,componentBottomLine:s.default},props:{},onLoad:function(t){this.setData({params:o.globalData.launch_params_handle(t)}),this.init()},onShow:function(){},onPullDownRefresh:function(){this.init()},methods:{init:function(){var t=this;uni.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),uni.request({url:o.globalData.get_request_url("detail","search","weixinliveplayer"),method:"POST",data:{id:this.params.id},dataType:"json",success:function(a){if(uni.hideLoading(),uni.stopPullDownRefresh(),0==a.data.code){var i=a.data.data;t.setData({detail:i.data||null,data_list_loding_status:3,data_bottom_line_status:!0,data_list_loding_msg:""}),null!=(t.detail||null)&&(t.setData({share_info:{title:t.detail.seo_title||t.detail.name,desc:t.detail.seo_desc,path:"/pages/plugins/weixinliveplayer/detail/detail",query:"id="+t.detail.id,img:t.detail.share_img}}),uni.setNavigationBarTitle({title:t.detail.name}))}else t.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:a.data.msg}),o.globalData.showToast(a.data.msg);o.globalData.page_share_handle(t.share_info)},fail:function(){uni.hideLoading(),uni.stopPullDownRefresh(),t.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:"服务器请求出错"}),o.globalData.showToast("服务器请求出错")}})},detail_images_view_event:function(t){var a=t.currentTarget.dataset.value||null;null!=a&&uni.previewImage({current:a,urls:[a]})},player_event:function(t){var a=encodeURIComponent(JSON.stringify({type:"detail"}));uni.navigateTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(this.detail.roomid,"&custom_params=").concat(a)})},share_poster_event:function(){uni.showLoading({title:"生成中..."}),uni.request({url:o.globalData.get_request_url("poster","index","weixinliveplayer"),method:"POST",data:{id:this.detail.id},dataType:"json",success:function(t){uni.hideLoading(),0==t.data.code?uni.previewImage({current:t.data.data,urls:[t.data.data]}):o.globalData.showToast(t.data.msg)},fail:function(){uni.hideLoading(),o.globalData.showToast("服务器请求出错")}})}}};a.default=r},"2fa6":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),t.exports=a},3174:function(t,a,i){"use strict";i.r(a);var e=i("ae53"),n=i("8e69");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("361d");var o=i("f0c5"),d=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"aa9399c8",null,!1,e["a"],void 0);a["default"]=d.exports},"361d":function(t,a,i){"use strict";var e=i("bb0f"),n=i.n(e);n.a},"382f":function(t,a,i){var e=i("2fa6");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("c08120bc",e,!0,{sourceMap:!1,shadowMode:!1})},"4dd7":function(t,a,i){var e=i("9414");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("13ea41f0",e,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[1==t.propStatus?i("v-uni-view",{staticClass:"no-data-box no-data-loading"},[i("v-uni-text",[t._v("加载中...")])],1):2==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"error.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"处理错误"))])],1):0==t.propStatus?i("v-uni-view",{staticClass:"no-data-box"},[i("v-uni-image",{attrs:{src:t.static_dir+"empty.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"no-data-tips"},[t._v(t._s(t.propMsg||"没有相关数据"))])],1):t._e()],1)},n=[]},"66fd":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".data-bottom-line[data-v-aa9399c8]{padding:%?40?%;overflow:hidden}.data-bottom-line uni-view[data-v-aa9399c8]{width:33.3%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .right[data-v-aa9399c8]{margin-top:8px;border-bottom:1px solid #e1e1e1}.data-bottom-line .msg[data-v-aa9399c8]{color:#999;text-align:center;font-size:%?24?%}.data-bottom-line .left[data-v-aa9399c8],\n.data-bottom-line .msg[data-v-aa9399c8]{float:left}.data-bottom-line .right[data-v-aa9399c8]{float:right}",""]),t.exports=a},"870b":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{}},components:{},props:{propStatus:Boolean,propMsg:String},methods:{}};a.default=e},"8e69":function(t,a,i){"use strict";i.r(a);var e=i("870b"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},9414:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/**\r\n* 内容\r\n*/.base .item .item-icon[data-v-633bdb08]{width:%?35?%;height:%?35?%!important}.base .item .status[data-v-633bdb08]{color:#999}.base .item .status-0[data-v-633bdb08]{color:#0e90d2}.base .item .status-1[data-v-633bdb08]{color:#5eb95e}.base .item .status-2[data-v-633bdb08]{color:#f37b1d}\r\n/**\r\n* 导航\r\n*/.nav[data-v-633bdb08]{position:fixed;left:0;bottom:%?20?%;height:%?80?%}.nav uni-button[data-v-633bdb08]{height:100%!important;line-height:%?76?%!important}.nav uni-button uni-image[data-v-633bdb08]{width:%?32?%;height:%?32?%!important}.nav uni-button.share-friend-submit[data-v-633bdb08],\r\n.nav uni-button.share-poster-submit[data-v-633bdb08]{width:calc(30% - %?20?%)}.nav uni-button.share-friend-submit[data-v-633bdb08]{background:#1bad18}.nav uni-button.share-poster-submit[data-v-633bdb08]{background:#6367f0}.nav uni-button.player-submit[data-v-633bdb08]{width:calc(40% - %?40?%);background:#d2364c}",""]),t.exports=a},"97c7":function(t,a,i){"use strict";i.r(a);var e=i("4fed"),n=i("aff5");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("a9750");var o=i("f0c5"),d=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"9455811c",null,!1,e["a"],void 0);a["default"]=d.exports},a9750:function(t,a,i){"use strict";var e=i("382f"),n=i.n(e);n.a},ae53:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[this.propStatus?a("v-uni-view",{staticClass:"data-bottom-line"},[a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"msg"},[this._v(this._s(this.propMsg||"我是有底线的"))]),a("v-uni-view",{staticClass:"right"})],1):this._e()],1)},n=[]},aff5:function(t,a,i){"use strict";i.r(a);var e=i("eba1"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},b760:function(t,a,i){"use strict";var e=i("4dd7"),n=i.n(e);n.a},ba60:function(t,a,i){"use strict";i.r(a);var e=i("d368"),n=i("cd59");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("b760");var o=i("f0c5"),d=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"633bdb08",null,!1,e["a"],void 0);a["default"]=d.exports},bb0f:function(t,a,i){var e=i("66fd");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("429ff98b",e,!0,{sourceMap:!1,shadowMode:!1})},cd59:function(t,a,i){"use strict";i.r(a);var e=i("250c"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},d368:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[null!=t.detail?i("v-uni-view",{staticClass:"page-bottom-fixed"},[null!=(t.detail||null)&&null!=(t.detail.share_img||null)?i("v-uni-image",{staticClass:"banner wh-auto dis-block",attrs:{src:t.detail.share_img,mode:"widthFix","data-value":t.detail.share_img},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.detail_images_view_event.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"text-size fw-b padding-main"},[t._v(t._s(t.detail.name))]),i("v-uni-view",{staticClass:"padding-horizontal-main"},[i("v-uni-view",{staticClass:"base padding-horizontal-main border-radius-main bg-white oh pr"},[i("v-uni-view",{staticClass:"item padding-vertical-main"},[i("v-uni-image",{staticClass:"item-icon va-m margin-right-sm",attrs:{src:t.static_url+"detail-status-icon.png",mode:"widthFix"}}),i("v-uni-text",{staticClass:"cr-gray va-m"},[t._v("直播状态")]),i("v-uni-view",{class:"fr status status-"+t.detail.status},[t._v(t._s(t.detail.status_name))])],1),i("v-uni-view",{staticClass:"item padding-vertical-main br-t oh"},[i("v-uni-view",{staticClass:"fl margin-top-lg"},[i("v-uni-image",{staticClass:"item-icon va-m margin-right-sm",attrs:{src:t.static_url+"detail-time-icon.png",mode:"widthFix"}}),i("v-uni-text",{staticClass:"cr-gray va-m"},[t._v("开播时间")])],1),i("v-uni-view",{staticClass:"fr"},[i("v-uni-view",{staticClass:"cr-green"},[t._v(t._s(t.detail.start_time))]),i("v-uni-view",{staticClass:"cr-red"},[t._v(t._s(t.detail.end_time))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"nav wh-auto oh"},[i("v-uni-button",{staticClass:"share-friend-submit fl cr-white text-size round margin-left-main",attrs:{type:"default","hover-class":"none","open-type":"share"}},[i("v-uni-image",{staticClass:"item-icon va-m margin-right-sm",attrs:{src:t.static_url+"nav-share-friend-icon.png",mode:"widthFix"}}),i("v-uni-text",{staticClass:"va-m"},[t._v("分享")])],1),i("v-uni-button",{staticClass:"share-poster-submit fl cr-white text-size round margin-left-main",attrs:{type:"default","hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.share_poster_event.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"item-icon va-m margin-right-sm",attrs:{src:t.static_url+"nav-share-poster-icon.png",mode:"widthFix"}}),i("v-uni-text",{staticClass:"va-m"},[t._v("海报")])],1),i("v-uni-button",{staticClass:"player-submit fr cr-white text-size round margin-horizontal-main",attrs:{type:"default","hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.player_event.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"item-icon va-m margin-right-sm",attrs:{src:t.static_url+"nav-player-icon.png",mode:"widthFix"}}),i("v-uni-text",{staticClass:"va-m"},[t._v("进入直播")])],1)],1),i("component-bottom-line",{attrs:{propStatus:t.data_bottom_line_status}})],1):i("v-uni-view",[i("component-no-data",{attrs:{propStatus:t.data_list_loding_status,propMsg:t.data_list_loding_msg}})],1)],1)},n=[]},eba1:function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");getApp();var e={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};a.default=e}}]);