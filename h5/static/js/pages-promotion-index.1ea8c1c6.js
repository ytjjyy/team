(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-promotion-index"],{"395c":function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,".container[data-v-b33b7dca]{display:flex;flex-direction:column;min-height:100vh;background:#121923}.header[data-v-b33b7dca]{position:relative;height:13.333vw;display:flex;align-items:center;text-align:center;position:fixed;top:0;left:50%;width:100%;z-index:9999;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:100vw;background:#121923}.header .back[data-v-b33b7dca]{width:13.333vw;height:13.333vw;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;cursor:pointer}.header .back img[data-v-b33b7dca]{width:7.333vw;height:7.333vw}.header h1[data-v-b33b7dca]{color:#b39a6f;width:100%;font-size:3.733vw;font-weight:400}.content[data-v-b33b7dca]{flex:1;width:100%;height:100%;overflow-y:auto;padding-top:13.333vw}.content img[data-v-b33b7dca]{width:95%;margin:%?5?% 2.5%;border-radius:%?20?%}",""]),t.exports=n},"5a1b":function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"container "},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"back",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickBack.apply(void 0,arguments)}}},[a("img",{attrs:{src:"/static/back.png"}})]),a("h1",[t._v("优惠活动")])],1),a("v-uni-view",{staticClass:"content"},[a("img",{attrs:{src:"/static/banner1.jpg"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickBanner(1)}}}),a("img",{attrs:{src:"/static/banner2.jpg"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickBanner(2)}}}),a("img",{attrs:{src:"/static/banner3.jpg"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickBanner(3)}}})])],1)},c=[]},7724:function(t,n,a){"use strict";a.r(n);var i=a("9c8d"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(n,t,(function(){return i[t]}))}(c);n["default"]=e.a},"9c8d":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{}},methods:{clickBanner:function(t){uni.navigateTo({url:"/pages/promotion/banner?index="+t,animationType:"fade-in",animationDuration:800})},clickBack:function(){uni.navigateBack({delta:1})}}};n.default=i},ab2b:function(t,n,a){"use strict";a.r(n);var i=a("5a1b"),e=a("7724");for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);a("c75d");var r,o=a("f0c5"),d=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"b33b7dca",null,!1,i["a"],r);n["default"]=d.exports},afc4:function(t,n,a){var i=a("395c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("4617108f",i,!0,{sourceMap:!1,shadowMode:!1})},c75d:function(t,n,a){"use strict";var i=a("afc4"),e=a.n(i);e.a}}]);