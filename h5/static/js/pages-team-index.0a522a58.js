(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-index"],{"09cf":function(t,e,n){"use strict";n.r(e);var a=n("1fd4"),i=n("16c7");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b615");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5d8d227c",null,!1,a["a"],void 0);e["default"]=s.exports},"16c7":function(t,e,n){"use strict";n.r(e);var a=n("48c3"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"1fd4":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uLoadmore:n("1de3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("cu-custom",{attrs:{bgColor:"bg-gradual-orange",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("下级管理")])],2),n("v-uni-view",{staticClass:"main_wrap"},[t._l(t.dataList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"item_box",style:[{animation:"show "+(.2*(a+1)+1)+"s 1"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickTeam(e.userId)}}},[n("v-uni-view",{staticClass:"channel_user_box"},[n("v-uni-view",{staticClass:"channel_label"},[t._v("账号："+t._s(e.userName))])],1),t._l(e.channelList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"channel_info_box"},[n("v-uni-view",{staticClass:"channel_label"},[t._v("通道名称："+t._s(e.channelName))]),n("v-uni-view",{staticClass:"channel_label"},[t._v("通道费率："+t._s(e.channelRate))]),n("v-uni-view",{staticClass:"channel_label"},[t._v("更新时间："+t._s(e.channelUpdate))])],1)})),e.noChain?n("v-uni-view",{staticClass:"no_chain text-orange"},[t._v("未配置费率，点击新增")]):t._e()],2)})),n("v-uni-view",{staticClass:"load_more"},[n("u-loadmore",{attrs:{status:t.status,"load-text":t.loadText,"bg-color":"#f1f1f1"},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore.apply(void 0,arguments)}}})],1)],2)],1)},r=[]},"48c3":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("acd8"),n("e25e"),n("14d9");var i=a(n("85c3")),r={data:function(){return{agentId:"",roleId:"",status:"loadmore",dataList:[],total:5,currentPage:1,pageSize:5,loadText:{loadmore:"点击或上拉加载更多",loading:"努力加载中",nomore:"没有更多数据"}}},onShow:function(){try{var t=uni.getStorageSync("token"),e=uni.getStorageSync("role_id"),n=uni.getStorageSync("user_id");t&&e&&n?(this.roleId=e,this.agentId=n):uni.reLaunch({url:"../public/login"})}catch(a){}this.resetLoad(),this.loadmore()},onPullDownRefresh:function(){this.resetLoad(),this.loadmore(),uni.stopPullDownRefresh()},onReachBottom:function(){this.loadmore()},methods:{loadmore:function(){this.status="loading",this.loadDataList()},resetLoad:function(){this.status="loadmore",this.dataList=[],this.currentPage=1,this.pageSize=5},loadDataList:function(){var t=this;uni.showLoading({title:"数据加载中...",mask:!0}),this.$u.api.getTeamList({role_id:this.roleId,currentPage:this.currentPage,pageSize:this.pageSize}).then((function(e){var n=e.data.channel,a=new Map;if(n.forEach((function(t){a.set(t.id,t.name)})),t.dataList.length<=0&&(t.total=e.data.pagination.total),null!=e.data.result){var r=e.data.result;r.forEach((function(e){var n={};if(n.userId=e.user.id,n.userName=e.user.username,n.userStatus=e.user.status,n.noChain=!0,null!=e.chain){n.noChain=!1;var r=[],o=e.chain;o.forEach((function(t){var e={};e.channelId=t.channel_id,e.channelName=a.get(t.channel_id),e.channelRate=t.rate,e.channelFee=parseFloat(t.fee).toFixed(2),e.channelMax=parseInt(t.max),e.channelMin=parseInt(t.min),e.channelUpdate=(0,i.default)(t.updated_at).format("YYYY-MM-DD HH:mm:ss"),r.push(e)})),n.channelList=r}t.dataList.push(n)})),t.currentPage+=1,t.total=t.total-e.data.result.length,t.status="loadmore"}else t.status="nomore"})).catch((function(t){uni.showToast({icon:"none",title:t.message?t.message:"获取下级列表异常,请稍后重试",duration:2e3})}))},clickTeam:function(t){uni.navigateTo({url:"./teamEdit?userId="+t,animationType:"pop-in",animationDuration:200})}}};e.default=r},"4ec9":function(t,e,n){n("6f48")},"4fad":function(t,e,n){var a=n("d039"),i=n("861d"),r=n("c6b6"),o=n("d86b"),s=Object.isExtensible,c=a((function(){s(1)}));t.exports=c||o?function(t){return!!i(t)&&((!o||"ArrayBuffer"!=r(t))&&(!s||s(t)))}:s},6566:function(t,e,n){"use strict";var a=n("9bf2").f,i=n("7c73"),r=n("6964"),o=n("0366"),s=n("19aa"),c=n("7234"),u=n("2266"),d=n("c6d2"),l=n("4754"),f=n("2626"),v=n("83ab"),h=n("f183").fastKey,p=n("69f3"),g=p.set,m=p.getterFor;t.exports={getConstructor:function(t,e,n,d){var l=t((function(t,a){s(t,f),g(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),v||(t.size=0),c(a)||u(a,t[d],{that:t,AS_ENTRIES:n})})),f=l.prototype,p=m(e),b=function(t,e,n){var a,i,r=p(t),o=x(t,e);return o?o.value=n:(r.last=o={index:i=h(e,!0),key:e,value:n,previous:a=r.last,next:void 0,removed:!1},r.first||(r.first=o),a&&(a.next=o),v?r.size++:t.size++,"F"!==i&&(r.index[i]=o)),t},x=function(t,e){var n,a=p(t),i=h(e);if("F"!==i)return a.index[i];for(n=a.first;n;n=n.next)if(n.key==e)return n};return r(f,{clear:function(){var t=p(this),e=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,v?t.size=0:this.size=0},delete:function(t){var e=p(this),n=x(this,t);if(n){var a=n.next,i=n.previous;delete e.index[n.index],n.removed=!0,i&&(i.next=a),a&&(a.previous=i),e.first==n&&(e.first=a),e.last==n&&(e.last=i),v?e.size--:this.size--}return!!n},forEach:function(t){var e,n=p(this),a=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!x(this,t)}}),r(f,n?{get:function(t){var e=x(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),v&&a(f,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var a=e+" Iterator",i=m(e),r=m(a);d(t,e,(function(t,e){g(this,{type:a,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?l("keys"==e?n.key:"values"==e?n.value:[n.key,n.value],!1):(t.target=void 0,l(void 0,!0))}),n?"entries":"values",!n,!0),f(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),i=n("da84"),r=n("e330"),o=n("94ca"),s=n("cb2d"),c=n("f183"),u=n("2266"),d=n("19aa"),l=n("1626"),f=n("7234"),v=n("861d"),h=n("d039"),p=n("1c7e"),g=n("d44e"),m=n("7156");t.exports=function(t,e,n){var b=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),_=b?"set":"add",w=i[t],y=w&&w.prototype,k=w,z={},S=function(t){var e=r(y[t]);s(y,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!v(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return x&&!v(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!v(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},C=o(t,!l(w)||!(x||y.forEach&&!h((function(){(new w).entries().next()}))));if(C)k=n.getConstructor(e,t,b,_),c.enable();else if(o(t,!0)){var E=new k,I=E[_](x?{}:-0,1)!=E,L=h((function(){E.has(1)})),j=p((function(t){new w(t)})),D=!x&&h((function(){var t=new w,e=5;while(e--)t[_](e,e);return!t.has(-0)}));j||(k=e((function(t,e){d(t,y);var n=m(new w,t,k);return f(e)||u(e,n[_],{that:n,AS_ENTRIES:b}),n})),k.prototype=y,y.constructor=k),(L||D)&&(S("delete"),S("has"),b&&S("get")),(D||I)&&S(_),x&&y.clear&&delete y.clear}return z[t]=k,a({global:!0,constructor:!0,forced:k!=w},z),g(k,t),x||n.setStrong(k,t,b),k}},"6f48":function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"73ac":function(t,e,n){var a=n("925b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("ec8c1b1e",a,!0,{sourceMap:!1,shadowMode:!1})},"925b":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".main_wrap[data-v-5d8d227c]{margin:%?20?% %?10?%;font-size:%?26?%}.item_box[data-v-5d8d227c]{display:flex;flex-direction:column;background-color:#fff;border-radius:%?15?%;padding:%?30?%;box-shadow:%?1?% %?6?% %?16?% rgba(0,0,0,.1);margin-bottom:%?15?%}.item_content[data-v-5d8d227c]{display:flex;flex-direction:row}.item_label[data-v-5d8d227c]{flex:1;width:100%;display:flex;align-items:center;margin:%?5?%}.item_label uni-text[data-v-5d8d227c]{width:70%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.item_edit[data-v-5d8d227c]{display:flex;flex-direction:row;align-items:center;margin-top:%?30?%}.item_btn[data-v-5d8d227c]{width:%?120?%;height:%?58?%;display:flex;align-items:center;justify-content:center;font-size:%?26?%}.channel_user_box[data-v-5d8d227c]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 %?20?%;margin-bottom:%?10?%;font-size:%?28?%}.channel_info_box[data-v-5d8d227c]{border-radius:5px;background:rgba(0,102,204,.6);box-shadow:%?4?% %?4?% %?10?% rgba(0,102,204,.3);padding:%?20?%;display:flex;flex-direction:column;justify-content:center;color:#fff;margin-bottom:%?10?%;font-size:%?28?%}.channel_label[data-v-5d8d227c]{margin-bottom:%?5?%}.no_chain[data-v-5d8d227c]{display:flex;align-items:center;justify-content:center;font-size:%?30?%}.load_more[data-v-5d8d227c]{padding:%?50?% 0 %?80?%}",""]),t.exports=e},b615:function(t,e,n){"use strict";var a=n("73ac"),i=n.n(a);i.a},bb2f:function(t,e,n){var a=n("d039");t.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},f183:function(t,e,n){var a=n("23e7"),i=n("e330"),r=n("d012"),o=n("861d"),s=n("1a2d"),c=n("9bf2").f,u=n("241c"),d=n("057f"),l=n("4fad"),f=n("90e3"),v=n("bb2f"),h=!1,p=f("meta"),g=0,m=function(t){c(t,p,{value:{objectID:"O"+g++,weakData:{}}})},b=t.exports={enable:function(){b.enable=function(){},h=!0;var t=u.f,e=i([].splice),n={};n[p]=1,t(n).length&&(u.f=function(n){for(var a=t(n),i=0,r=a.length;i<r;i++)if(a[i]===p){e(a,i,1);break}return a},a({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:d.f}))},fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,p)){if(!l(t))return"F";if(!e)return"E";m(t)}return t[p].objectID},getWeakData:function(t,e){if(!s(t,p)){if(!l(t))return!0;if(!e)return!1;m(t)}return t[p].weakData},onFreeze:function(t){return v&&h&&l(t)&&!s(t,p)&&m(t),t}};r[p]=!0}}]);