(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-my-expressLogistics"],{"1c14":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={onLoad:function(t){this.getwuliuinfo(t)},data:function(){return{doodsinfo:"",th_number:"",name:"",thNumber:"",phone:""}},methods:{getwuliuinfo:function(t){var n=this;this.$http.getwuliuinfo(t).then((function(t){200==t.status&&(n.doodsinfo=t.data.orgoods,n.th_number=t.data.th_number)}))},confirm:function(){var t=this;return""==this.name?(this.$toast(this.$t("请填写物流公司名称")),!1):""==this.thNumber?(this.$toast(this.$t("请填写物流单号")),!1):11!=this.phone.length?(this.$toast(this.$t("请正确填写联系电话")),!1):void this.$http.getthfahuo({th_number:this.th_number,ps_name:this.name,ps_num:this.thNumber,telephone:this.phone}).then((function(n){200==n.status&&(t.$toast(n.mess),setTimeout((function(){t.getback()}),1e3))}))}}};n.default=e},8750:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"index_class"},[i("v-uni-view",{staticClass:"refun-type"},[i("v-uni-image",{attrs:{src:t.doodsinfo.thumb_url}}),i("v-uni-view",{staticClass:"refun-text"},[i("v-uni-view",{staticStyle:{color:"#333"}},[t._v(t._s(t.doodsinfo.goods_name))]),i("v-uni-text",[t._v(t._s(t.doodsinfo.goods_attr_str))])],1)],1),i("v-uni-view",{staticClass:"lication-list"},[i("v-uni-view",[t._v(t._s(t.$t("物流公司"))+":")]),i("v-uni-input",{staticStyle:{flex:"1","padding-left":"20upx"},attrs:{type:"text",placeholder:t.$t("请填写物流公司名称")},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),i("v-uni-view",{staticClass:"lication-list",staticStyle:{"margin-bottom":"20upx"}},[i("v-uni-view",[t._v(t._s(t.$t("物流单号"))+":")]),i("v-uni-input",{staticStyle:{flex:"1","padding-left":"20upx"},attrs:{type:"text",placeholder:t.$t("填写物流单号")},model:{value:t.thNumber,callback:function(n){t.thNumber=n},expression:"thNumber"}})],1),i("v-uni-view",{staticClass:"lication-list"},[i("v-uni-view",[t._v(t._s(t.$t("联系电话"))+":")]),i("v-uni-input",{staticStyle:{flex:"1","padding-left":"20upx"},attrs:{type:"number",placeholder:t.$t("填写联系电话")},model:{value:t.phone,callback:function(n){t.phone=n},expression:"phone"}})],1),i("v-uni-view",{staticClass:"person-button",staticStyle:{margin:"0","background-color":"#fff","padding-top":"40upx"}},[i("v-uni-button",{staticClass:"btn",attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("提交")))])],1)],1)},s=[]},"8d0f":function(t,n,i){"use strict";i.r(n);var e=i("8750"),s=i("985d");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return s[t]}))}(a);var o=i("f0c5"),u=Object(o["a"])(s["default"],e["b"],e["c"],!1,null,"27dc250a",null,!1,e["a"],void 0);n["default"]=u.exports},"985d":function(t,n,i){"use strict";i.r(n);var e=i("1c14"),s=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=s.a}}]);