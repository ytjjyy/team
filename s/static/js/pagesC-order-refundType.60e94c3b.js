(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesC-order-refundType"],{"168b":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"index_class"},[n("v-uni-view",{staticClass:"refun-type"},[n("v-uni-image",{attrs:{src:t.orgoods.thumb_url}}),n("v-uni-view",{staticClass:"refun-text"},[n("v-uni-view",[t._v(t._s(t.orgoods.goods_name))]),n("v-uni-text",[t._v(t._s(t.orgoods.goods_attr_str))]),n("v-uni-text",{staticClass:"color"},[t._v("￥"+t._s(t.orgoods.price)+" x "+t._s(t.orgoods.goods_num))])],1)],1),t._l(t.type,(function(e,o){return n("v-uni-view",{key:o,staticClass:"comp-list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getnav("/pagesC/order/refundDate?th_cate="+e.id+"&orgoods_id="+t.orgoods.id+"&order_num="+t.orgoods.ordernumber)}}},[n("v-uni-view",[n("v-uni-view",{staticClass:"comp-title"},[t._v(t._s(e.cate_name))]),n("v-uni-text",[t._v(t._s(e.desc))])],1),n("i",{staticClass:"iconfont icon_e60c"})],1)}))],2)},i=[]},"32ab":function(t,e,n){"use strict";n.r(e);var o=n("168b"),i=n("613f1");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var a=n("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"38752d08",null,!1,o["a"],void 0);e["default"]=r.exports},"415a":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="",i={onLoad:function(e){e&&(o=e,this.getthtypeShop(o)),t.log(e)},data:function(){return{orgoods:"",type:[]}},methods:{getthtypeShop:function(t){var e=this;this.$http.getthtypeShop(t).then((function(t){200==t.status&&(e.orgoods=t.data.orgoods,e.type=t.data.type)}))}}};e.default=i}).call(this,n("5a52")["default"])},"613f1":function(t,e,n){"use strict";n.r(e);var o=n("415a"),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a}}]);