(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teach-index"],{"5e2c":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".container[data-v-aa1244a2]{display:flex;flex-direction:column;min-height:100vh;background:#121923}.header[data-v-aa1244a2]{position:relative;height:13.333vw;display:flex;align-items:center;text-align:center;position:fixed;top:0;left:50%;width:100%;z-index:9999;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:100vw;background:#121923}.header .back[data-v-aa1244a2]{width:13.333vw;height:13.333vw;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;cursor:pointer}.header .back img[data-v-aa1244a2]{width:7.333vw;height:7.333vw}.header h1[data-v-aa1244a2]{color:#b39a6f;width:100%;font-size:3.733vw;font-weight:400}.content[data-v-aa1244a2]{flex:1;width:100%;height:100%;overflow-y:auto;padding-top:13.333vw}.content img[data-v-aa1244a2]{width:100%}",""]),t.exports=a},"8abe":function(t,a,e){var i=e("5e2c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("210f6308",i,!0,{sourceMap:!1,shadowMode:!1})},"90c6":function(t,a,e){"use strict";e.r(a);var i=e("d4ce"),n=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(a,t,(function(){return i[t]}))}(c);a["default"]=n.a},c83c:function(t,a,e){"use strict";e.r(a);var i=e("dab2"),n=e("90c6");for(var c in n)"default"!==c&&function(t){e.d(a,t,(function(){return n[t]}))}(c);e("ce7f");var r,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"aa1244a2",null,!1,i["a"],r);a["default"]=o.exports},ce7f:function(t,a,e){"use strict";var i=e("8abe"),n=e.n(i);n.a},d4ce:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{teachUrl:""}},onLoad:function(t){if(t)switch(t.index){case"1":this.teachUrl="/static/help_1.jpg";break;case"2":this.teachUrl="/static/help_2.jpg";break;case"3":this.teachUrl="/static/help_3.jpg";break;case"4":this.teachUrl="/static/help_4.jpg";break;case"5":this.teachUrl="/static/help_5.jpg";break;case"6":this.teachUrl="/static/help_6.jpg";break;default:break}},methods:{clickBack:function(){uni.navigateBack({delta:1})}}};a.default=i},dab2:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container "},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickBack.apply(void 0,arguments)}}},[e("img",{attrs:{src:"/static/back.png"}})]),e("h1",[t._v("教程")])],1),e("v-uni-view",{staticClass:"content"},[e("img",{attrs:{src:t.teachUrl}})])],1)},c=[]}}]);