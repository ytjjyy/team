(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesC-goods-assembleList"],{"0150":function(t,e,i){"use strict";i.r(e);var n=i("b2a01"),a=i("9841");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1f06");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0dd66314",null,!1,n["a"],void 0);e["default"]=s.exports},"08d1":function(t,e,i){var n=i("50d38");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("016afb06",n,!0,{sourceMap:!1,shadowMode:!1})},"0f1e":function(t,e,i){"use strict";i.r(e);var n=i("6594"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1f06":function(t,e,i){"use strict";var n=i("08d1"),a=i.n(n);a.a},"1f55":function(t,e,i){"use strict";var n=i("ab5b"),a=i.n(n);a.a},"1fe6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-progress",style:{borderRadius:t.round?"100rpx":0,height:t.height+"rpx",backgroundColor:t.inactiveColor}},[i("v-uni-view",{staticClass:"u-active",class:[t.type?"u-type-"+t.type+"-bg":"",t.striped?"u-striped":"",t.striped&&t.stripedActive?"u-striped-active":""],style:[t.progressStyle]},[t.$slots.default||t.$slots.$default?t._t("default"):t.showPercent?[t._v(t._s(t.percent+"%"))]:t._e()],2)],1)},a=[]},2466:function(t,e,i){"use strict";i.r(e);var n=i("1fe6"),a=i("8d17");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5661");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6ee601eb",null,!1,n["a"],void 0);e["default"]=s.exports},"36b6":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ade3")),o=n(i("2909"));i("3c65"),i("14d9");var r=0,s=(0,a.default)({data:function(){return{loadingType:0,toId:"item000",pageShow:!1,categoryList:[],currIndex:0,list:[],page:0,isLoadMore:!1,isLoading:!1,isMore:!1,bannerSrc:"",background:{backgroundImage:"linear-gradient(180deg,#6b04e3,#8F17EC)"},loadStatus:"loadmore",iconType:"flower",loadText:{loadmore:this.$t("上拉加载更多"),loading:this.$t("努力加载中"),nomore:this.$t("没有更多数据了")},offsetTop:0}},onReachBottom:function(){},onShow:function(){this.setOffestTop()},onLoad:function(t){r=0,this.getAssembleCate(),this.getAssembleList(1),this.getBannerImage(t.id)},methods:{setOffestTop:function(){},getBannerImage:function(t){var e=this;this.$http.getAdByTag({tag:"mobile_pintuan_banner"}).then((function(t){200==t.status&&(e.bannerSrc=t.data[0].ad_pic)}))},changeTab:function(t){var e=this;this.currIndex=t,this.toId="item".concat(t),r=0,this.list=[],this.status="",this.isLoadMore=!1,this.$nextTick((function(){e.getAssembleList()}))},getAssembleCate:function(){var t=this;this.$http.getAssembleCate().then((function(e){if(200===e.status){var i=e.data;i.unshift({id:"",cate_name:t.$t("推荐")}),t.categoryList=i}}))},getAssembleList:function(t){var e=this;0===r&&this.$loading(),this.$http.getAssembleList({page:r+1,cate_id:t?"":this.categoryList[this.currIndex].id}).then((function(t){if(200===t.status){var i;if(r+=1,!t.data.length)return e.loadStatus="nomore",!1;(i=e.list).push.apply(i,(0,o.default)(t.data)),e.status="more",e.pageShow=!0}}))}}},"onReachBottom",(function(){var t=this;this.loadStatus="loading",setTimeout((function(){t.getAssembleList()}),1e3)}));e.default=s},"4a60":function(t,e,i){"use strict";var n=i("5cef"),a=i.n(n);a.a},"4e9a":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("11e8").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},o=[]},"50d38":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n  * @Description: WoShop\n  * @Author: Parker\n  * @Copyright: 武汉一一零七科技有限公司©版权所有\n  * @Link: www.wo-shop.net\n  * @Contact: QQ:2487937004\n  * =======================================================================================\n  * 这里是uni-app内置的常用样式变量\n  * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n  * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n  *\n */\n/**\n  * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n  *\n  * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:webfont;font-display:swap;src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot);\n  /* IE9*/src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff2) format("woff2"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff) format("woff"),url(//at.alicdn.com/t/webfont_li5p20ilokm.ttf) format("truetype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.svg#Alibaba-PuHuiTi-Regular) format("svg")\n  /* iOS 4.1- */}.textEllipsis[data-v-0dd66314]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.liveStatus[data-v-0dd66314]{position:absolute;top:%?8?%;left:%?10?%;z-index:99;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;border-radius:100px;padding-right:%?16?%}.liveAn[data-v-0dd66314]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;background-image:linear-gradient(90deg,#ffa468,#fa3f3f);width:%?28?%;height:%?24?%;border-radius:100px;padding:%?4?% %?8?%;margin-right:%?8?%;border-top-right-radius:%?20?%}.seeNum[data-v-0dd66314]{font-size:%?24?%;color:#fff;line-height:%?24?%}uni-page-body[data-v-0dd66314]{background-color:#6b04e3}body.?%PAGE?%[data-v-0dd66314]{background-color:#6b04e3}.list[data-v-0dd66314]{background-color:#6b04e3}.list-nav[data-v-0dd66314]{height:%?88?%;line-height:%?88?%;font-size:0;white-space:nowrap;background:#6905e3}.list-nav span.active[data-v-0dd66314]{font-weight:800;color:#fff}.list-nav span.active[data-v-0dd66314]::after{background:#fff}.list-nav span[data-v-0dd66314]{display:inline-block;position:relative;margin-right:%?33?%;font-size:%?30?%;color:#dbc9f1}.list-nav span[data-v-0dd66314]::after{position:absolute;bottom:0;left:50%;width:%?42?%;height:%?8?%;background:transparent;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:100px;content:""}.list-nav span[data-v-0dd66314]:first-child{margin-left:%?30?%}.list-nav span[data-v-0dd66314]:last-child{margin-right:%?30?%}.search[data-v-0dd66314]{display:flex;align-items:center;height:64uxp;margin:%?100?% %?24?% %?12?%;padding-left:%?46?%;background:#f1f1f1;border-radius:%?32?%}.search i[data-v-0dd66314]{padding-right:%?16?%}.goodsList[data-v-0dd66314]{width:100%}.goodsList .item[data-v-0dd66314]{margin:%?20?%;border-radius:%?18?%;display:flex;height:%?244?%;padding:%?15?%;background-color:#fff;position:relative}.goodsList .itemindex[data-v-0dd66314]{position:absolute;top:%?20?%;left:%?20?%;background-color:rgba(0,0,0,.3);width:%?40?%;height:%?40?%;line-height:%?40?%;display:inline-block;z-index:99;text-align:center;color:#fff;border-radius:%?5?%}.goodsList .item .item-right[data-v-0dd66314]{flex:1;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between}.goodsList .item .item-right .item-right__bottom[data-v-0dd66314]{display:flex;justify-content:space-between;margin-top:%?10?%}.goodsList .item .item-right .item-right__bottom .pinBtn[data-v-0dd66314]{text-align:center;background-image:linear-gradient(45deg,#f507b3,#f809b4);font-weight:bolder;border-radius:%?12?%;color:#fff;font-size:%?28?%;padding:%?8?% %?30?%;line-height:%?28?%}.goodsList .item .item-right .item-right__bottom .pinBtn > p[data-v-0dd66314]{line-height:1}.goodsList .item .item-right .item-right__bottom .pinBtn .hasPinText[data-v-0dd66314]{font-size:%?20?%;font-weight:400;color:#ffdef6;margin-top:%?6?%}.goodsList .item .item-right .item-right__bottom--left[data-v-0dd66314]{align-items:flex-end}.goodsList .item .item-right .item-right__bottom--left span[data-v-0dd66314]{padding-right:%?12?%;color:#f7544e;font-size:%?30?%}.goodsList .item .item-right .item-right__bottom--left i[data-v-0dd66314]{color:#999;font-size:%?24?%;text-decoration:line-through}.goodsList .item .item-right h2[data-v-0dd66314]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.3;margin-bottom:%?16?%;color:#333;font-size:%?28?%}.goodsList .item .item-right > span[data-v-0dd66314]{display:block;margin-bottom:%?29?%;color:#999;font-size:%?24?%}',""]),t.exports=e},5661:function(t,e,i){"use strict";var n=i("f47a"),a=i.n(n);a.a},"5cef":function(t,e,i){var n=i("9bde");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("54402cfc",n,!0,{sourceMap:!1,shadowMode:!1})},6594:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=n},"728f":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-line-progress",props:{round:{type:Boolean,default:!0},type:{type:String,default:""},activeColor:{type:String,default:"#19be6b"},inactiveColor:{type:String,default:"#ececec"},percent:{type:Number,default:0},showPercent:{type:Boolean,default:!0},height:{type:[Number,String],default:28},striped:{type:Boolean,default:!1},stripedActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{progressStyle:function(){var t={};return t.width=this.percent+"%",this.activeColor&&(t.backgroundColor=this.activeColor),t}},methods:{}};e.default=n},"85bb":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-sticky-wrap",class:[t.elClass],style:{height:t.fixed?t.height+"px":"auto",backgroundColor:t.bgColor}},[i("v-uni-view",{staticClass:"u-sticky",style:{position:t.fixed?"fixed":"static",top:t.stickyTop+"px",left:t.left+"px",width:"auto"==t.width?"auto":t.width+"px",zIndex:t.uZIndex}},[t._t("default")],2)],1)],1)},a=[]},"893d":function(t,e,i){"use strict";i.r(e);var n=i("b265"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"896e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n  * @Description: WoShop\n  * @Author: Parker\n  * @Copyright: 武汉一一零七科技有限公司©版权所有\n  * @Link: www.wo-shop.net\n  * @Contact: QQ:2487937004\n  * =======================================================================================\n  * 这里是uni-app内置的常用样式变量\n  * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n  * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n  *\n */\n/**\n  * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n  *\n  * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:webfont;font-display:swap;src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot);\n  /* IE9*/src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff2) format("woff2"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff) format("woff"),url(//at.alicdn.com/t/webfont_li5p20ilokm.ttf) format("truetype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.svg#Alibaba-PuHuiTi-Regular) format("svg")\n  /* iOS 4.1- */}.textEllipsis[data-v-6ee601eb]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.liveStatus[data-v-6ee601eb]{position:absolute;top:%?8?%;left:%?10?%;z-index:99;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;border-radius:100px;padding-right:%?16?%}.liveAn[data-v-6ee601eb]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;background-image:linear-gradient(90deg,#ffa468,#fa3f3f);width:%?28?%;height:%?24?%;border-radius:100px;padding:%?4?% %?8?%;margin-right:%?8?%;border-top-right-radius:%?20?%}.seeNum[data-v-6ee601eb]{font-size:%?24?%;color:#fff;line-height:%?24?%}.u-progress[data-v-6ee601eb]{overflow:hidden;height:15px;display:inline-flex;align-items:center;width:100%;border-radius:%?100?%}.u-active[data-v-6ee601eb]{width:0;height:100%;align-items:center;display:flex;flex-direction:row;justify-items:flex-end;justify-content:space-around;font-size:%?20?%;color:#fff;transition:all .4s ease}.u-striped[data-v-6ee601eb]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:39px 39px}.u-striped-active[data-v-6ee601eb]{-webkit-animation:progress-stripes-data-v-6ee601eb 2s linear infinite;animation:progress-stripes-data-v-6ee601eb 2s linear infinite}@-webkit-keyframes progress-stripes-data-v-6ee601eb{0%{background-position:0 0}100%{background-position:39px 0}}@keyframes progress-stripes-data-v-6ee601eb{0%{background-position:0 0}100%{background-position:39px 0}}',""]),t.exports=e},"8d17":function(t,e,i){"use strict";i.r(e);var n=i("728f"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"933c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n  * @Description: WoShop\n  * @Author: Parker\n  * @Copyright: 武汉一一零七科技有限公司©版权所有\n  * @Link: www.wo-shop.net\n  * @Contact: QQ:2487937004\n  * =======================================================================================\n  * 这里是uni-app内置的常用样式变量\n  * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n  * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n  *\n */\n/**\n  * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n  *\n  * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:webfont;font-display:swap;src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot);\n  /* IE9*/src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff2) format("woff2"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff) format("woff"),url(//at.alicdn.com/t/webfont_li5p20ilokm.ttf) format("truetype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.svg#Alibaba-PuHuiTi-Regular) format("svg")\n  /* iOS 4.1- */}.textEllipsis[data-v-7da789c4]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.liveStatus[data-v-7da789c4]{position:absolute;top:%?8?%;left:%?10?%;z-index:99;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;border-radius:100px;padding-right:%?16?%}.liveAn[data-v-7da789c4]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;background-image:linear-gradient(90deg,#ffa468,#fa3f3f);width:%?28?%;height:%?24?%;border-radius:100px;padding:%?4?% %?8?%;margin-right:%?8?%;border-top-right-radius:%?20?%}.seeNum[data-v-7da789c4]{font-size:%?24?%;color:#fff;line-height:%?24?%}.u-image[data-v-7da789c4]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-7da789c4]{width:100%;height:100%}.u-image__loading[data-v-7da789c4], .u-image__error[data-v-7da789c4]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"97a6":function(t,e,i){"use strict";i.r(e);var n=i("85bb"),a=i("893d");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4a60");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"adf85ec2",null,!1,n["a"],void 0);e["default"]=s.exports},9841:function(t,e,i){"use strict";i.r(e);var n=i("36b6"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"9bde":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n  * @Description: WoShop\n  * @Author: Parker\n  * @Copyright: 武汉一一零七科技有限公司©版权所有\n  * @Link: www.wo-shop.net\n  * @Contact: QQ:2487937004\n  * =======================================================================================\n  * 这里是uni-app内置的常用样式变量\n  * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n  * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n  *\n */\n/**\n  * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n  *\n  * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:webfont;font-display:swap;src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot);\n  /* IE9*/src:url(//at.alicdn.com/t/webfont_li5p20ilokm.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff2) format("woff2"),url(//at.alicdn.com/t/webfont_li5p20ilokm.woff) format("woff"),url(//at.alicdn.com/t/webfont_li5p20ilokm.ttf) format("truetype"),url(//at.alicdn.com/t/webfont_li5p20ilokm.svg#Alibaba-PuHuiTi-Regular) format("svg")\n  /* iOS 4.1- */}.textEllipsis[data-v-adf85ec2]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.liveStatus[data-v-adf85ec2]{position:absolute;top:%?8?%;left:%?10?%;z-index:99;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;border-radius:100px;padding-right:%?16?%}.liveAn[data-v-adf85ec2]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:row;background-image:linear-gradient(90deg,#ffa468,#fa3f3f);width:%?28?%;height:%?24?%;border-radius:100px;padding:%?4?% %?8?%;margin-right:%?8?%;border-top-right-radius:%?20?%}.seeNum[data-v-adf85ec2]{font-size:%?24?%;color:#fff;line-height:%?24?%}.u-sticky[data-v-adf85ec2]{z-index:9999999999}',""]),t.exports=e},a238:function(t,e,i){"use strict";i.r(e);var n=i("4e9a"),a=i("0f1e");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1f55");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7da789c4",null,!1,n["a"],void 0);e["default"]=s.exports},ab5b:function(t,e,i){var n=i("933c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("22990f49",n,!0,{sourceMap:!1,shadowMode:!1})},b265:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("2c3e");var n={name:"u-sticky",props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data:function(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop:function(t){this.initObserver()},enable:function(t){0==t?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var t=this;this.enable&&(this.stickyTop=0!=this.offsetTop?uni.upx2px(this.offsetTop)+this.h5NavHeight:this.h5NavHeight,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))})))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=this.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(function(e){t.enable&&t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<this.stickyTop;e?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=n},b2a01:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uImage:i("a238").default,uSticky:i("97a6").default,uLoading:i("d5a1").default,uLineProgress:i("2466").default,uLoadmore:i("abd4").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("u-image",{attrs:{width:"100%",height:"520",src:t.bannerSrc}}),i("u-sticky",{attrs:{"offset-top":t.offsetTop,"h5-nav-height":"44"}},[i("v-uni-scroll-view",{staticClass:"list-nav",attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-into-view":t.toId}},t._l(t.categoryList,(function(e,n){return i("span",{key:n,class:[n===t.currIndex?"active":""],attrs:{id:"item"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(n)}}},[t._v(t._s(e.cate_name))])})),0)],1),i("div",{staticClass:"goodsList"},[t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"item",attrs:{"hover-class":"bg-hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getnav("/pagesC/goods/goodsDetails?id="+e.goods_id)}}},[i("u-image",{staticStyle:{"margin-right":"20px"},attrs:{src:e.thumb_url,width:"220",height:"220","border-radius":"12"}},[i("u-loading",{attrs:{slot:"loading"},slot:"loading"})],1),i("div",{staticClass:"item-right"},[i("h2",[t._v(t._s(e.goods_name))]),t._e(),i("div",{staticClass:"item-right__bottom"},[i("div",{staticClass:"item-right__bottom--left flex"},[i("span",{staticClass:"goodsPrice"},[t._v("¥"+t._s(e.price))]),i("i",[t._v("¥"+t._s(e.shop_price))])]),i("div",{staticClass:"pinBtn"},[i("p",[t._v(t._s(t.$t("去拼团")))]),i("p",{staticClass:"hasPinText"},[t._v(t._s(t.$t("已拼"))+t._s(e.sold)+"件")])])])],1)],1)})),i("u-loadmore",{attrs:{status:t.loadStatus,"icon-type":t.iconType,"load-text":t.loadText}})],2)],1)},o=[]},f47a:function(t,e,i){var n=i("896e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("78f36e06",n,!0,{sourceMap:!1,shadowMode:!1})}}]);