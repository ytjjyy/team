(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-message-chatList"],{"2b92":function(t,e,a){"use strict";a.r(e);var i=a("bfcf"),n=a("4ff3");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("f9d8");var r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"98a1d13a",null,!1,i["a"],void 0);e["default"]=o.exports},"372e":function(t,e,a){var i=a("8254");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("84583c10",i,!0,{sourceMap:!1,shadowMode:!1})},"4ff3":function(t,e,a){"use strict";a.r(e);var i=a("8b18"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},8254:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".item[data-v-98a1d13a]{display:flex;align-items:center;width:100%;height:%?136?%;padding:0 %?24?%;color:#999;font-size:%?24?%;border-bottom:%?1?% solid #eee}.item .avatar[data-v-98a1d13a]{position:relative;width:%?100?%;height:%?100?%;margin-right:%?24?%;border-radius:%?10?%}.item .avatar span[data-v-98a1d13a]{display:block;position:absolute;top:0;right:0;z-index:1;background:red;color:#fff;font-size:%?20?%;border-radius:50%;padding:.1rem .2rem;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.item uni-image[data-v-98a1d13a]{width:%?100?%;height:%?100?%;border-radius:%?10?%}.item .item-middle[data-v-98a1d13a]{flex:1;margin-right:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item .item-middle uni-view[data-v-98a1d13a]{margin-bottom:%?13?%;font-size:%?30?%;color:#333}.item .item-middle uni-text[data-v-98a1d13a]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-more[data-v-98a1d13a]{height:%?100?%;line-height:%?100?%;text-align:center;color:#999}",""]),t.exports=e},"8b18":function(t,e,a){"use strict";(function(t,i){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e9c4"),a("d81d");var n=a("11e5"),s={data:function(){return{options:[{text:this.$t("删除"),style:{backgroundColor:"#fe3c30"}}],pageShow:!1,chatList:[]}},onShow:function(){var e=this;t.log(n),n.sendSocketMessage({data:JSON.stringify({type:"chatlist",data:{fromid:uni.getStorageSync("token")}})}),n.onSocketMessageCallback=function(t){var a=JSON.parse(t.data);"chatlist"===a.type&&(e.chatList=a.data.map((function(t){return t.fromid===uni.getStorageSync("token")?(t.userid=t.toid,t.username=t.to_username,t.userAvatar=t.to_headimgurl):(t.userid=t.fromid,t.username=t.from_username,t.userAvatar=t.from_headimgurl),t.msgtime=i.fomartTime(t.msgtime),t})))}},onLoad:function(){},methods:{toChat:function(t){this.getnav("/pagesB/message/chat?toId=".concat(this.chatList[t].userid))}}};e.default=s}).call(this,a("5a52")["default"],a("f5a5"))},bfcf:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"message"},[t._l(t.chatList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item",attrs:{"hover-class":"click-active-bgc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toChat(i)}}},[a("div",{staticClass:"avatar"},[a("v-uni-image",{attrs:{src:e.userAvatar}}),"1"!==e.is_read&&0!=e.msgcount?a("span",[t._v(t._s(e.msgcount))]):t._e()],1),a("v-uni-view",{staticClass:"item-middle"},[a("v-uni-view",[t._v(t._s(e.username))]),a("v-uni-text",[t._v(t._s("img"===e.msgtype?"["+t.$t("图片")+"]":e.msg))])],1),a("v-uni-view",{staticClass:"item-right"},[a("v-uni-text",[t._v(t._s(e.msgtime))])],1)],1)})),t.chatList.length?t._e():a("div",{staticClass:"no-more"},[t._v(t._s(t.$t("没有更多了")))])],2)},n=[]},f9d8:function(t,e,a){"use strict";var i=a("372e"),n=a.n(i);n.a}}]);