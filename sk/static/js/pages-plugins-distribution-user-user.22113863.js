(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-distribution-user-user"],{"2fa6":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,".no-data-box[data-v-9455811c]{padding:10% 0;text-align:center}.no-data-box uni-image[data-v-9455811c]{width:%?160?%;margin-bottom:%?30?%}.no-data-box .no-data-tips[data-v-9455811c]{font-size:%?28?%;color:#a6a6a6}.no-data-loading uni-text[data-v-9455811c]{color:#999}",""]),a.exports=t},"382f":function(a,t,e){var i=e("2fa6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("c08120bc",i,!0,{sourceMap:!1,shadowMode:!1})},"4fed":function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[1==a.propStatus?e("v-uni-view",{staticClass:"no-data-box no-data-loading"},[e("v-uni-text",[a._v("加载中...")])],1):2==a.propStatus?e("v-uni-view",{staticClass:"no-data-box"},[e("v-uni-image",{attrs:{src:a.static_dir+"error.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"no-data-tips"},[a._v(a._s(a.propMsg||"处理错误"))])],1):0==a.propStatus?e("v-uni-view",{staticClass:"no-data-box"},[e("v-uni-image",{attrs:{src:a.static_dir+"empty.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"no-data-tips"},[a._v(a._s(a.propMsg||"没有相关数据"))])],1):a._e()],1)},n=[]},"677a":function(a,t,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("97c7")),s=getApp(),l={data:function(){return{data_bottom_line_status:!1,data_list_loding_status:1,data_list_loding_msg:"",data_base:null,user_level:null,extraction:null,superior:null,profit_ladder:null,nav_list:[],avatar:s.globalData.data.default_user_head_src,nickname:"用户名"}},components:{componentNoData:n.default},props:{},onLoad:function(a){},onShow:function(){this.init(),s.globalData.page_share_handle()},onPullDownRefresh:function(){this.get_data()},methods:{init:function(a){var t=this,e=s.globalData.get_user_info(this,"init");0!=e&&(s.globalData.user_is_need_login(e)?uni.showModal({title:"温馨提示",content:"绑定手机号码",confirmText:"确认",cancelText:"暂不",success:function(a){uni.stopPullDownRefresh(),a.confirm&&uni.navigateTo({url:"/pages/login/login?event_callback=init"}),t.set_user_base(e)}}):(this.set_user_base(e),this.get_data()))},set_user_base:function(a){null!=(a.avatar||null)&&this.setData({avatar:a.avatar}),null!=(a.user_name_view||null)&&this.setData({nickname:a.user_name_view})},get_data:function(){var a=this;uni.request({url:s.globalData.get_request_url("index","user","distribution"),method:"POST",data:{},dataType:"json",success:function(t){if(uni.stopPullDownRefresh(),0==t.data.code){var e=t.data.data;a.setData({data_base:e.base||null,user_level:e.user_level||null,extraction:e.extraction||null,superior:e.superior||null,profit_ladder:e.profit_ladder||null,nav_list:e.nav_list||[],data_list_loding_msg:"",data_list_loding_status:0,data_bottom_line_status:!1})}else a.setData({data_bottom_line_status:!1,data_list_loding_status:2,data_list_loding_msg:t.data.msg}),s.globalData.is_login_check(t.data,a,"get_data")&&s.globalData.showToast(t.data.msg)},fail:function(){uni.stopPullDownRefresh(),a.setData({data_bottom_line_status:!1,data_list_loding_status:2,data_list_loding_msg:"服务器请求出错"}),s.globalData.showToast("服务器请求出错")}})},preview_event:function(){s.globalData.data.default_user_head_src!=this.avatar&&uni.previewImage({current:this.avatar,urls:[this.avatar]})},user_avatar_error:function(a){this.setData({avatar:s.globalData.data.default_user_head_src})}}};t.default=l},8976:function(a,t,e){"use strict";e.r(t);var i=e("677a"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(s);t["default"]=n.a},"97c7":function(a,t,e){"use strict";e.r(t);var i=e("4fed"),n=e("aff5");for(var s in n)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(s);e("a9750");var l=e("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"9455811c",null,!1,i["a"],void 0);t["default"]=r.exports},a9750:function(a,t,e){"use strict";var i=e("382f"),n=e.n(i);n.a},aff5:function(a,t,e){"use strict";e.r(t);var i=e("eba1"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(s);t["default"]=n.a},b678:function(a,t,e){"use strict";var i=e("fb2b"),n=e.n(i);n.a},cb8e:function(a,t,e){"use strict";e.r(t);var i=e("e2d6"),n=e("8976");for(var s in n)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(s);e("b678");var l=e("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"090fdf7a",null,!1,i["a"],void 0);t["default"]=r.exports},e2d6:function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[null!=(a.data_base||null)?e("v-uni-view",[e("v-uni-view",{staticClass:"padding-horizontal-main padding-top-main oh"},[e("v-uni-view",{staticClass:"head-box padding-main border-radius-main oh pr spacing-mb"},[e("v-uni-view",{staticClass:"head-item tc fl"},[e("v-uni-view",{staticClass:"avatar bg-white circle"},[e("v-uni-image",{staticClass:"dis-block circle",attrs:{src:a.avatar,mode:"widthFix"},on:{error:function(t){arguments[0]=t=a.$handleEvent(t),a.user_avatar_error.apply(void 0,arguments)},click:function(t){arguments[0]=t=a.$handleEvent(t),a.preview_event.apply(void 0,arguments)}}})],1),e("v-uni-text",{staticClass:"margin-top-sm dis-block cr-white"},[a._v(a._s(a.nickname))])],1),e("v-uni-view",{staticClass:"head-base fr"},[null!=(a.user_level||null)?e("v-uni-view",{staticClass:"single-text tr"},[null!=(a.user_level.images_url||null)?e("v-uni-image",{staticClass:"level-icon va-m margin-right-sm",attrs:{src:a.user_level.images_url,mode:"widthFix"}}):a._e(),null!=(a.user_level.name||null)?e("v-uni-text",{staticClass:"level-name text-size-sm fw-b va-m"},[a._v(a._s(a.user_level.name))]):a._e()],1):a._e(),null!=(a.data_base||null)&&1==(a.data_base.is_enable_self_extraction||0)?[e("v-uni-navigator",{attrs:{url:"/pages/plugins/distribution/extraction/extraction","hover-class":"none"}},[e("v-uni-button",{staticClass:"head-base-submit pa bg-white cr-main round text-size-sm",attrs:{size:"mini",type:"default","hover-class":"none"}},[a._v(a._s(null==(a.extraction||null)?"申请":"")+"取货点")])],1)]:a._e()],2)],1)],1),null!=(a.superior||null)?e("v-uni-view",{staticClass:"superior bg-white border-radius-main margin-horizontal-main margin-bottom-main oh"},[e("v-uni-view",{staticClass:"superior-title cr-white fw-b va-m fl"},[a._v("上级用户")]),e("v-uni-view",{staticClass:"superior-content fl padding-main single-text"},[e("v-uni-image",{staticClass:"circle va-m",attrs:{src:a.superior.avatar,mode:"aspectFit"}}),e("v-uni-text",{staticClass:"cr-gray va-m margin-left-sm"},[a._v(a._s(a.superior.user_name_view))])],1)],1):a._e(),null!=(a.user_level||null)&&null!=(a.data_base.user_center_notice||null)&&a.data_base.user_center_notice.length>0?e("v-uni-view",{staticClass:"padding-horizontal-main padding-bottom-main"},[e("v-uni-view",{staticClass:"notice-content"},a._l(a.data_base.user_center_notice,(function(t,i){return e("v-uni-view",{key:i,staticClass:"item"},[a._v(a._s(t))])})),1)],1):a._e(),a.nav_list.length>0?e("v-uni-view",{staticClass:"nav oh"},[a._l(a.nav_list,(function(t,i){return[e("v-uni-view",{key:i+"_0",staticClass:"item fl tc padding-main border-radius-main bg-white"},[e("v-uni-navigator",{attrs:{url:t.url,"hover-class":"none"}},[e("v-uni-image",{staticClass:"dis-block",attrs:{src:t.icon,mode:"scaleToFill"}}),e("v-uni-view",{staticClass:"tc cr-base margin-top-lg"},[a._v(a._s(t.title))])],1)],1)]}))],2):a._e(),null==(a.user_level||null)&&null!=(a.data_base.non_conformity_desc||null)&&a.data_base.non_conformity_desc.length>0?e("v-uni-view",{staticClass:"padding-horizontal-main padding-bottom-main"},[e("v-uni-view",{staticClass:"notice-content-blue"},a._l(a.data_base.non_conformity_desc,(function(t,i){return e("v-uni-view",{key:i,staticClass:"item"},[a._v(a._s(t))])})),1)],1):a._e(),null!=(a.profit_ladder||null)?e("v-uni-view",{staticClass:"padding-horizontal-main padding-bottom-main"},[e("v-uni-text",{staticClass:"cr-blue"},[a._v(a._s(a.profit_ladder.msg))]),e("v-uni-navigator",{staticClass:"bg-green cr-white dis-inline-block round padding-top-xs padding-bottom-xs padding-horizontal-main",attrs:{url:"/pages/plugins/distribution/poster/poster","hover-class":"none"}},[a._v("去推广")])],1):a._e()],1):e("v-uni-view",[e("component-no-data",{attrs:{propStatus:a.data_list_loding_status,propMsg:a.data_list_loding_msg}})],1)],1)},n=[]},eba1:function(a,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");getApp();var i={data:function(){return{static_dir:"/static/images/common/"}},components:{},props:{propStatus:{type:[Number,String],default:0},propMsg:{type:String,default:"没有相关数据"}},methods:{}};t.default=i},f97d:function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,"/*\n* 头部\n*/.head-box[data-v-090fdf7a]{background-color:#e91e63}.head-item[data-v-090fdf7a]{width:%?260?%}.head-item .avatar[data-v-090fdf7a],\n.head-item .avatar uni-image[data-v-090fdf7a]{width:%?130?%;height:%?130?%!important;margin:0 auto}.head-base[data-v-090fdf7a]{width:calc(100% - %?270?%)}.head-base .level-name[data-v-090fdf7a]{color:#fffbe0}.head-base .level-icon[data-v-090fdf7a]{width:%?35?%;height:%?35?%!important}.head-base .head-base-submit[data-v-090fdf7a]{right:%?20?%;bottom:%?20?%}\n/**\n * 上级用户\n */.superior .superior-title[data-v-090fdf7a]{padding:%?22?% %?20?%;background-color:#9c27b0}.superior .superior-content[data-v-090fdf7a]{width:calc(100% - %?200?%)}.superior .superior-content uni-image[data-v-090fdf7a]{width:%?40?%!important;height:%?40?%!important}\n/*\n* 导航\n*/.nav .item[data-v-090fdf7a]{width:calc(50% - %?70?%);margin-bottom:%?20?%}.nav .item[data-v-090fdf7a]:nth-child(2n){margin-right:%?20?%;margin-left:%?10?%}.nav .item[data-v-090fdf7a]:nth-child(2n+1){margin-left:%?20?%;margin-right:%?10?%}.nav .item uni-image[data-v-090fdf7a]{width:%?80?%;height:%?80?%;margin:0 auto}",""]),a.exports=t},fb2b:function(a,t,e){var i=e("f97d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("5bb5b99c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);