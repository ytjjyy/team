(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-promotion-banner"],{"215b":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{activityUrl:"/static/banner-activity1.jpg",langLocale:""}},onLoad:function(t){if(this.langLocale=uni.getLocale(),t)switch(t.index){case"1":this.activityUrl="/static/banner-activity1-"+this.langLocale+".jpg";break;case"2":this.activityUrl="/static/banner-activity2-"+this.langLocale+".jpg";break;case"3":this.activityUrl="/static/banner-activity3-"+this.langLocale+".jpg";default:break}},methods:{clickBack:function(){uni.navigateBack({delta:1})}}};a.default=i},"56f5":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container "},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickBack.apply(void 0,arguments)}}},[e("img",{attrs:{src:"/static/back.png"}})]),e("h1",[t._v(t._s(t.$t("locale.title.event")))])],1),e("v-uni-view",{staticClass:"content"},[e("img",{attrs:{src:t.activityUrl}})])],1)},c=[]},"86f3":function(t,a,e){"use strict";e.r(a);var i=e("56f5"),n=e("c505");for(var c in n)"default"!==c&&function(t){e.d(a,t,(function(){return n[t]}))}(c);e("f298");var r,o=e("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"12faa2ee",null,!1,i["a"],r);a["default"]=s.exports},8982:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".container[data-v-12faa2ee]{display:flex;flex-direction:column;min-height:100vh;background:#121923}.header[data-v-12faa2ee]{position:relative;height:13.333vw;display:flex;align-items:center;text-align:center;position:fixed;top:0;left:50%;width:100%;z-index:9999;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:100vw;background:#121923}.header .back[data-v-12faa2ee]{width:13.333vw;height:13.333vw;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;cursor:pointer}.header .back img[data-v-12faa2ee]{width:7.333vw;height:7.333vw}.header h1[data-v-12faa2ee]{color:#b39a6f;width:100%;font-size:3.733vw;font-weight:400}.content[data-v-12faa2ee]{flex:1;width:100%;height:100%;overflow-y:auto;padding-top:13.333vw}.content img[data-v-12faa2ee]{width:95%;margin:%?5?% 2.5%;border-radius:%?20?%}",""]),t.exports=a},c505:function(t,a,e){"use strict";e.r(a);var i=e("215b"),n=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(a,t,(function(){return i[t]}))}(c);a["default"]=n.a},f0cf:function(t,a,e){var i=e("8982");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0c696007",i,!0,{sourceMap:!1,shadowMode:!1})},f298:function(t,a,e){"use strict";var i=e("f0cf"),n=e.n(i);n.a}}]);