(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{519:function(e,t,a){"use strict";a(33),a(96),a(97);var r=a(587),i=a.n(r),n=a(500);t.a={components:{VueQr:i.a},methods:{onCopy:function(e){Object(n.d)(this.$t("system.copy_success"))},onError:function(e){Object(n.b)(this.$t("system.copy_fail"))},saveQrcode:function(){var e=document.getElementById("qrcode");e.src&&this.download(e.src)},savePage:function(e){this.download(e)},download:function(e){var t=new Blob([""],{type:"application/octet-stream"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download=this.$t("meta.title")+"-"+(new Date).getTime().toString();var i=new MouseEvent("click",(window,null));r.dispatchEvent(i),URL.revokeObjectURL(a),Object(n.d)(this.$t("system.save_success"))}}}},588:function(e,t,a){"use strict";var r=a(50),i=(a(521),a(73),a(162),a(71),a(40),a(61),a(93),a(94),a(503));function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a={created:function(){this.getGameConfig(),this.getGameList()},mixins:[i.a],computed:{games:function(){var e=[],t=this.$store.getters.games,a=[{name:this.$t("home.game.xinyunshuzi.name"),type:2,address:"",odds:"1".concat(this.$t("home.game_rule_desc.pay"),"1.95"),transfer_limit:"10-5000 USDT 100-50000 TRX",no_commission:!0,example:Object.freeze(this.$t("home.game.xinyunshuzi.example")),teach:"/mobile/video?id=g2"},{name:this.$t("home.game.xingyunzhuangxian.name"),type:4,address:"",odds:"1".concat(this.$t("home.game_rule_desc.pay"),"8"),odds_detail:this.$t("home.game.xingyunzhuangxian.odds_detail"),transfer_limit:"".concat(this.$t("home.game_rule_desc.zhuangxie")," 10-5000 USDT ").concat(this.$t("home.game_rule_desc.he")," 10-625 USDT<br />").concat(this.$t("home.game_rule_desc.zhuangxie")," 100-50000 TRX ").concat(this.$t("home.game_rule_desc.he")," 100-6250 TRX"),no_commission:!0,example:Object.freeze(this.$t("home.game.xingyunzhuangxian.example")),teach:"/mobile/video?id=g4"},{name:this.$t("home.game.haxiniuniu.name"),type:3,address:"",odds:"1".concat(this.$t("home.game_rule_desc.pay"),"9.5"),odds_detail:this.$t("home.game.haxiniuniu.odds_detail"),transfer_limit:"10-5000 USDT<br />100-50000 TRX",example:Object.freeze(this.$t("home.game.haxiniuniu.example")),teach:"/mobile/video?id=g3"},{name:this.$t("home.game.xinyunhaxi.name"),type:1,address:"",odds:"1".concat(this.$t("home.game_rule_desc.pay"),"2"),transfer_limit:"10-5000 USDT 100-50000 TRX",example:Object.freeze(this.$t("home.game.xinyunhaxi.example")),teach:"/mobile/video?id=g1"}];return 0===t.length?e=a:a.map((function(a){var r=t.find((function(e){return e.type===a.type}));r&&e.push(o(o({},a),{},{address:r.address}))})),e}},methods:{getGameList:function(){var e=this;this.req("getGameList",{},(function(t){t.body&&e.$store.commit("SET_GAMES",t.body)}))},getGameConfig:function(){var e=this;this.req("getGameConfig",{},(function(t){t.body&&e.$store.commit("SET_GAME_CONFIG",t.body)}))}}}},597:function(e,t,a){"use strict";var r=a(519),i=a(503),n=a(500),o={mixins:[r.a,i.a],props:{title:{type:String,default:""},value:{type:String,default:""},showCopy:{type:Boolean,default:!1},showSettle:{type:Boolean,default:!1},showTitleTip:{type:Boolean,default:!1},showQr:{type:Boolean,default:!0},theme:{type:String,default:"default"}},data:function(){return{showDialog:!1}},computed:{lang:function(){return this.$i18n.locale}},methods:{qrHandle:function(){this.showDialog=!0},sendBetRebate:function(){var e=this;this.req("sendBetRebate",{},(function(t){200===t.code?Object(n.d)(e.$t("system.copy_success")):Object(n.b)(e.$t("rebate.r_error"))}))}}},s=(a(623),a(60)),c=Object(s.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"qr-address-container",class:{big:"big"===e.theme}},[r("div",{staticClass:"qr-address"},[r("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value,expression:"value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],class:["link",{"no-title":!e.title},{}]},[e.title?r("p",{staticStyle:{"font-weight":"bold"}},[e._v("\n        "+e._s(e.title)),e.showTitleTip?r("span",{staticClass:"tips"},[e._v("-"+e._s(e.$t("offical_address_desc")))]):e._e()]):e._e(),e._v(" "),r("div",[e._v(e._s(e.value))])]),e._v(" "),e.showCopy?r("span",{staticClass:"operate-container"},[r("div",{class:["btn-qrcode",{"border-radius":!e.showCopy}],on:{click:e.qrHandle}},[r("img",{attrs:{src:a(622)}})]),e._v(" "),r("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value,expression:"value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"btn-copy border-radius"},[r("img",{attrs:{src:a(600)}})])]):e._e()]),e._v(" "),e.showSettle?r("div",{staticClass:"btn btn-settle",on:{click:e.sendBetRebate}},[e._v("\n    "+e._s(e.$t("rebate.r_collect"))+"\n  ")]):e._e(),e._v(" "),r("van-dialog",{class:"qr-address-dialog "+e.lang,attrs:{showConfirmButton:!1,closeOnClickOverlay:!0,"get-container":"body"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[r("i",{staticClass:"icon-close",on:{click:function(t){e.showDialog=!1}}}),e._v(" "),r("vue-qr",{staticClass:"qrcode",attrs:{id:"qrcode",text:e.value,size:500,margin:40,autoColor:!0}}),e._v(" "),r("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value,expression:"value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"qr-address"},[r("div",{class:["link",{"no-title":!e.title}]},[e.title?r("p",[e._v(e._s(e.title)+"：")]):e._e(),e._v(" "),r("div",[e._v(e._s(e.value))])]),e._v(" "),r("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value,expression:"value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"btn-copy border-radius",on:{click:e.qrHandle}},[r("img",{attrs:{src:a(600)}})])]),e._v(" "),r("div",{staticClass:"btn btn-saveImg",on:{click:e.saveQrcode}},[e._v("\n      "+e._s(e.$t("save_image"))+"\n    ")])],1)],1)}),[],!1,null,"4957ba3c",null);t.a=c.exports},600:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAMAAADCMPhoAAAARVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc6ur3AAAAFnRSTlMAboXAgGl61wiJC9LRtrGpjzdXVCYcrSyeLgAAAJ1JREFUOMvF08kOgzAMRdEMtE7CEDq9///Uqm5YWDVGQhWcDQvuwhbYsTITFDSX9p6wgr5FBqarYgIyB4TqVBXEz8f9qQcecKbLJ0iZlOFyWoI0QDWkFgQghh8RCC3oMTrFiL4FgF+Z/88BhD1BJ7Tg4C2isGeLKJyzRbfY/Fgy8FtBBVkzvPiyjOAGUDEDvm7jr2bWXTDrsph1m+wNX6ghrd7gmfMAAAAASUVORK5CYII="},601:function(e,t,a){var r=a(624);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(48).default)("22de7780",r,!0,{sourceMap:!1})},622:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAMAAAB0iUvHAAAATlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////+QlxstAAAAGnRSTlMAmXw6cVgoNEAkg0ZoLWOJUUwEDxiOXXYfCZUsUJwAAAFiSURBVDjLzZXbboUgEEVnc1NBj4j3///R4pgW4eTYJr2k6wGTnfUAwwwSSWV7ZkbEtg0x5rEKpp8jvaqIHErY7VAiqYeSVUIKPCiisGaxgiDA0BWJlSIWVRYbgICmUMWpdt9Xg4kb6p7UqVWRLVMHHNSlepZHZ6rmbCjV4c9Uz5kr1eqMM3X0Wms/liqNU+R3r6AvLnuAosiKOotrzLQA4oIFPJ3ntHmsaRTIUTufZy3jkSg08kK10Ukwsk7Ihv4DoYt7cQeD9959lHNsiGn2Q2oC0WSfK8BY8AkdFq7dQNQC66oSgGfzfT412rg+oIlQ3JaDeq0+9wAzY0uqxnCjNpKSupuQ1BBCUi94VplTlTgwV7VeAvF8d/zYTe/qUg5MtjM+1q1qzrbZv6o66Bv1vq7meLnt9rma+DnV5KP5WhUQrk44i/aVKlFisnYZ+DeycGtWSqgLeqMTU/NndBOvI70BerUTRpHEO8sAAAAASUVORK5CYII="},623:function(e,t,a){"use strict";a(601)},624:function(e,t,a){var r=a(47),i=a(159),n=a(359),o=r(!1),s=i(n);o.push([e.i,".qr-address-dialog[data-v-4957ba3c]{height:98.667vw;width:calc(100% - 7.467vw);max-width:93.333vw;box-sizing:border-box;background:linear-gradient(180deg, #4b586f 1%, #262c38 91%);box-shadow:0 0.667vw 0.267vw rgba(0,0,0,0.1);padding:4.267vw;text-align:center}.qr-address-dialog[data-v-4957ba3c]  .van-dialog__content{position:relative}.qr-address-dialog .icon-close[data-v-4957ba3c]{display:block;position:absolute;top:0;right:0;height:5.067vw;width:5.067vw;background:url("+s+");background-size:100% 100%}.qr-address-dialog .btn-saveImg[data-v-4957ba3c]{height:13.333vw;width:58.667vw;border-radius:6.667vw;font-size:3.467vw;margin-top:10.133vw}.qr-address-dialog .qrcode[data-v-4957ba3c]{width:33.867vw;height:33.867vw;margin-top:8.667vw}.qr-address-dialog .qr-address[data-v-4957ba3c]{margin-top:7.333vw}.qr-address-container[data-v-4957ba3c]{text-align:center}.qr-address-container .btn-settle[data-v-4957ba3c]{margin-top:4vw}.operate-container[data-v-4957ba3c]{display:flex;flex-direction:row}.qr-address[data-v-4957ba3c]{background:#262b34;border-radius:2.4vw;display:flex;justify-content:space-between;position:relative;font-size:2.933vw;color:rgba(255,255,255,0.5);font-weight:400;min-height:12.8vw;letter-spacing:-1px}.qr-address .link[data-v-4957ba3c]{text-align:left;word-break:break-all;padding:2vw 0.667vw 0 2.4vw;flex:1}.qr-address .link.no-title[data-v-4957ba3c]{display:flex;align-items:center}.qr-address .link p[data-v-4957ba3c]{font-size:3.467vw;line-height:1.5;color:rgba(255,255,255,0.8);letter-spacing:0}.qr-address .link p .tips[data-v-4957ba3c]{font-size:2.933vw;color:rgba(255,255,255,0.6);letter-spacing:-1px;transform:translateY(-0.4vw);font-weight:400}.qr-address .btn-qrcode[data-v-4957ba3c],.qr-address .btn-copy[data-v-4957ba3c]{width:11.333vw;flex-shrink:0;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.15)}.qr-address .btn-qrcode.border-radius[data-v-4957ba3c],.qr-address .btn-copy.border-radius[data-v-4957ba3c]{border-radius:0 2.4vw 2.4vw 0}.qr-address .btn-qrcode img[data-v-4957ba3c],.qr-address .btn-copy img[data-v-4957ba3c]{height:4.267vw}.qr-address .btn-qrcode[data-v-4957ba3c]:active,.qr-address .btn-copy[data-v-4957ba3c]:active{opacity:0.8}.qr-address .btn-copy[data-v-4957ba3c]{background:linear-gradient(183deg, #fff1dc 0%, #ffd79d 100%)}.big[data-v-4957ba3c]{width:100% !important;height:15.067vw !important;background-image:linear-gradient(180deg, #181c23 1%, #262c38 91%) !important;border:0 solid #979797 !important;border-radius:2.4vw !important}.big .qr-address[data-v-4957ba3c]{width:100% !important}.big .link[data-v-4957ba3c]{width:100% !important;text-align:center !important;color:#fff !important}.big .link p[data-v-4957ba3c]{margin-bottom:1.333vw !important;color:#fff !important}@media (orientation: landscape){.qr-address-dialog[data-v-4957ba3c]{height:38.542rem;width:calc(100% - 2.917rem);max-width:36.458rem;box-shadow:0 0.26rem 0.104rem rgba(0,0,0,0.1);padding:1.667rem}.qr-address-dialog .icon-close[data-v-4957ba3c]{height:1.979rem;width:1.979rem}.qr-address-dialog .btn-saveImg[data-v-4957ba3c]{height:5.208rem;width:22.917rem;border-radius:2.604rem;font-size:1.354rem;margin-top:3.958rem}.qr-address-dialog .qrcode[data-v-4957ba3c]{width:13.229rem;height:13.229rem;margin-top:3.385rem}.qr-address-dialog .qr-address[data-v-4957ba3c]{margin-top:2.865rem}.qr-address-container .btn-settle[data-v-4957ba3c]{margin-top:1.563rem}.qr-address[data-v-4957ba3c]{border-radius:0.938rem;font-size:1.146rem;min-height:5rem;letter-spacing:-1px}.qr-address .link[data-v-4957ba3c]{padding:0.781rem 0.26rem 0 0.938rem}.qr-address .link p[data-v-4957ba3c]{font-size:1.354rem}.qr-address .link p .tips[data-v-4957ba3c]{font-size:1.146rem;letter-spacing:-1px;transform:translateY(-0.156rem)}.qr-address .btn-qrcode[data-v-4957ba3c],.qr-address .btn-copy[data-v-4957ba3c]{width:4.427rem}.qr-address .btn-qrcode.border-radius[data-v-4957ba3c],.qr-address .btn-copy.border-radius[data-v-4957ba3c]{border-radius:0 0.938rem 0.938rem 0}.qr-address .btn-qrcode img[data-v-4957ba3c],.qr-address .btn-copy img[data-v-4957ba3c]{height:1.667rem}.big[data-v-4957ba3c]{height:5.885rem !important;border-radius:0.938rem !important}.big .link p[data-v-4957ba3c]{margin-bottom:0.521rem !important}}\n",""]),e.exports=o},738:function(e,t,a){"use strict";a(504);var r={components:{transitionCollapse:a(884).a},props:{lang:{type:String,default:"zh-CN"},gameInfo:{type:Object,default:function(){}},showGameExample:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},homeTabIndex:{type:[String,Number],default:""},isSwiper:{type:Boolean,default:!1}},data:function(){return{imgs:{},swiperOption:{spaceBetween:30,centeredSlides:!0,loop:!0}}},mounted:function(){},methods:{videoUrl:function(e){return this.homeTabIndex?e.teach+"&homeTabIndex="+this.homeTabIndex:e.teach}}},i=(a(937),a(60)),n=Object(i.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"game-rule type"+e.gameInfo.type},[r("div",{staticClass:"gc-rule animated animated-delay-1 fadeInUp"},[r("img",{class:["gc-rule-img"],attrs:{src:a(769)("./"+e.lang+"/game-"+e.gameInfo.type+".jpg")}}),e._v(" "),r("div",{class:["gc-rule-desc",{fadeInUp:e.animated}]},[r("div",{class:["cont",{long:4===e.gameInfo.type}]},[r("span",{staticClass:"cont-item"},[r("div",{staticClass:"ci-title"},[e._v(e._s(e.$t("home.game_rule_desc.odds"))+":")]),e._v(" "),r("div",{staticClass:"mark",domProps:{innerHTML:e._s(e.gameInfo.odds_detail||e.gameInfo.odds)}})]),e._v(" "),r("span",{staticClass:"cont-item"},[r("div",{staticClass:"ci-title"},[e._v("\n            "+e._s(e.$t("home.game_rule_desc.transfer_limit"))+":\n          ")]),e._v(" "),r("div",{staticClass:"mark",domProps:{innerHTML:e._s(e.gameInfo.transfer_limit)}})])]),e._v(" "),r("div",{staticClass:"desc"},[e._v(e._s(e.$t("home.game_rule_desc.rule_transfer")))]),e._v(" "),r("div",{staticClass:"desc"},[e._v("\n        "+e._s(e.$t("home.game_rule_desc.rule_cut"))+"\n        "),e.gameInfo.no_commission?r("span",[e._v(e._s(e.$t("home.game_rule_desc.rule_no_commission")))]):e._e()])])]),e._v(" "),r("transition-collapse",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showGameExample,expression:"showGameExample"}],class:["game-example"]},[r("NuxtLink",{class:["ge-video-container","animated","animated-delay-4",{fadeInUp:e.animated}],attrs:{to:e.videoUrl(e.gameInfo)}},[r("img",{class:["ge-video-img"],attrs:{src:a(769)("./"+e.lang+"/video-"+e.gameInfo.type+".jpg")}})]),e._v(" "),e.isSwiper?r("swiper",{staticClass:"swiper gc-content",attrs:{options:e.swiperOption}},e._l(e.gameInfo.example,(function(t,a){return r("swiper-slide",{key:a},[r("div",{class:["example-container","animated","animated-delay-"+(4+a),{fadeInUp:e.animated}]},e._l(t,(function(t,i){return r("div",{key:i,staticClass:"example-item"},[r("div",{staticClass:"title"},[e._v("\n                "+e._s(e.$t("home.game_example"+((0===a?0:2)+i+1)))+"\n              ")]),e._v(" "),r("div",{staticClass:"cont",domProps:{innerHTML:e._s(t.join(""))}})])})),0)])})),1):e._l(e.gameInfo.example,(function(t,a){return r("div",{key:a,class:["gc-content","animated","animated-delay-"+(4+a),{fadeInUp:e.animated}]},[r("div",{staticClass:"example-container"},e._l(t,(function(t,i){return r("div",{key:i,staticClass:"example-item"},[r("div",{staticClass:"title"},[e._v("\n                "+e._s(e.$t("home.game_example"+((0===a?0:2)+i+1)))+"\n              ")]),e._v(" "),r("div",{staticClass:"cont",domProps:{innerHTML:e._s(t.join(""))}})])})),0)])}))],2)])],1)}),[],!1,null,"278c0e29",null);t.a=n.exports},739:function(e,t,a){"use strict";var r=a(621),i=(a(55),a(54),a(49),a(83)),n={name:"RecordItem",filters:{filterMoney:function(e){return e?Object(i.d)(e):"0.00"}},props:{item:{type:Object,default:function(){}},loading:{type:Boolean,default:!1},showRefreshLoading:{type:Boolean,default:!1}},methods:{getBlockHash:function(e){var t=e.blockHash,a=e.type,r=e.winStatus,n=t.length;if(1===a)return"".concat(t?t.slice(n-5,n-2):"",'<span style="color:').concat(this.getResultColor(r),'">').concat(t?t.slice(n-2,n):"","</span>");if(2===a){var o=Object(i.b)(t).index;return"".concat(t?t.slice(n-5,o):"",'<span style="color:').concat(this.getResultColor(r),'">').concat(t?t.slice(o,o+1):"","</span>").concat(t?t.slice(o+1,n):"")}return'<span style="color:'.concat(this.getResultColor(r),'">').concat(t?t.slice(n-5,n):"","</span>")},getResultColor:function(e){return 2===e?"#00d723":0===e?"#da0000":-1===e||-2===e||1===e?"#e8e8e875":void 0},getResultClass:function(e){return 2===e?"success-color":0===e?"error-color":-1===e||-2===e||1===e?"whitec":void 0},judgeShow:function(e,t){return Object(r.a)(t).includes(e)},getStatus:function(e){return 2===e?this.$t("bet.bet21"):0===e||1===e?this.$t("bet.bet25"):void 0},getResult:function(e){var t="result.".concat(e);return this.$t(t)},getGameName:function(e){return{1:this.$t("bet.bet2"),2:this.$t("bet.bet4"),3:this.$t("bet.bet3"),4:this.$t("bet.bet5")}[e]}}},o=(a(945),a(60)),s=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"record-item"},[e.judgeShow(e.item.winStatus,[-1])?r("div",{staticClass:"wrapper"},[r("img",{attrs:{src:a(943),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.$t("bet.bet27")))])]):e._e(),e._v(" "),r("div",{staticClass:"top"},[r("div",{staticClass:"name"},[r("i"),r("label",[e._v(e._s(e.getGameName(e.item.type)))])]),e._v(" "),r("div",[r("span",[e._v("Block Hash： ")]),e._v(" "),e.loading?r("span",[e._v("-")]):[e.judgeShow(e.item.winStatus,[-1])?r("span",[e._v("-")]):r("span",{attrs:{"data-v-77e0ca74":""}},[r("span",[e._v(e._s(e.item.blockHash?e.item.blockHash.slice(0,5)+"****":""))]),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.getBlockHash(e.item))}})])]],2),e._v(" "),r("div",{staticClass:"bet"},[e.loading?r("span",[e._v(e._s(e.$t("bet.bet17"))+"：-")]):[e.judgeShow(e.item.winStatus,[-1])?r("span",[e._v("\n          "+e._s(e.$t("bet.bet17"))+"：0\n        ")]):r("span",[e._v("\n          "+e._s(e.$t("bet.bet17"))+"："+e._s(Math.floor(e.item.bet))+e._s("usdt-trc20"===e.item.coinSymbol?"usdt":e.item.coinSymbol)+"\n        ")])]],2),e._v(" "),e.loading?r("span",[r("div",{staticClass:"bet-award"},[r("span",[e._v("-")]),e._v(" "),r("span",[e._v(e._s(e.$t("bet.bet19")))])])]):[e.judgeShow(e.item.winStatus,[-1,0,2])?r("div",{staticClass:"bet-award"},[r("span",{class:e.getResultClass(e.item.winStatus)},[e._v(e._s(e._f("filterMoney")(e.item.payout))),r("span",{staticClass:"bet-award-currency"},[e._v(e._s("usdt-trc20"===e.item.coinSymbol?"U":"T"))])]),e._v(" "),r("span",{class:e.getResultClass(e.item.winStatus)},[e._v(e._s(e.$t("bet.bet19")))])]):e.judgeShow(e.item.winStatus,[-2,1])?r("div",{staticClass:"bet-award"},[r("span",{class:e.getResultClass(e.item.winStatus)},[e._v(e._s(e._f("filterMoney")(e.item.refund))),r("span",{staticClass:"bet-award-currency"},[e._v(e._s("usdt-trc20"===e.item.coinSymbol?"U":"T"))])]),e._v(" "),r("span",{class:e.getResultClass(e.item.winStatus)},[e._v(e._s(e.$t("bet.bet19")))])]):e._e()],e._v(" "),r("div",{staticClass:"result"},[r("span",[e._v(e._s(e.$t("bet.bet18"))+"：")]),e._v(" "),e.loading?r("span",[e._v("-")]):[e.judgeShow(e.item.winStatus,[0,1,2])?r("span",[r("span",{class:e.getResultClass(e.item.winStatus)},[e._v("\n            "+e._s(e.getStatus(e.item.winStatus))+"\n          ")]),e._v(" "),r("span",{class:e.getResultClass(e.item.winStatus)},[e._v("\n            "+e._s(e.getResult(e.item.code))+"\n          ")])]):e._e(),e._v(" "),e.judgeShow(e.item.winStatus,[-1])?r("span",{class:e.getResultClass(e.item.winStatus)},[e._v("\n          "+e._s(e.$t("bet.bet28")))]):e._e(),e._v(" "),e.judgeShow(e.item.winStatus,[-2])?r("span",{class:e.getResultClass(e.item.winStatus)},[e._v("\n          "+e._s(e.$t("bet.bet29")))]):e._e()]],2)],2),e._v(" "),r("div",{staticClass:"bottom"},[r("span",[e._v(e._s(e.$t("bet.bet20"))+"：")]),r("span",[e._v(e._s(e.loading?"-":e.item.createdAt))])]),e._v(" "),2!==e.item.winStatus||e.loading?e._e():r("div",{staticClass:"win"},[r("img",{attrs:{src:a(944),alt:""}})])])}),[],!1,null,"55a5b73a",null);t.a=s.exports},746:function(e,t,a){e.exports=a.p+"img/banner.919af13.jpg"},747:function(e,t,a){e.exports=a.p+"img/banner.9d57bc2.jpg"},769:function(e,t,a){var r={"./en/banner.jpg":746,"./en/game-1.jpg":918,"./en/game-2.jpg":919,"./en/game-3.jpg":920,"./en/game-4.jpg":921,"./en/video-1.jpg":922,"./en/video-2.jpg":923,"./en/video-3.jpg":924,"./en/video-4.jpg":925,"./zh-CN/banner.jpg":747,"./zh-CN/game-1.jpg":926,"./zh-CN/game-2.jpg":927,"./zh-CN/game-3.jpg":928,"./zh-CN/game-4.jpg":929,"./zh-CN/game.jpg":930,"./zh-CN/video-1.jpg":931,"./zh-CN/video-2.jpg":932,"./zh-CN/video-3.jpg":933,"./zh-CN/video-4.jpg":934};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=n,e.exports=i,i.id=769},770:function(e,t,a){var r=a(936);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(48).default)("67d309cf",r,!0,{sourceMap:!1})},771:function(e,t,a){var r=a(938);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(48).default)("001448ea",r,!0,{sourceMap:!1})},773:function(e,t,a){var r=a(946);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(48).default)("3030f968",r,!0,{sourceMap:!1})},884:function(e,t,a){"use strict";var r={methods:{beforeEnter:function(e){requestAnimationFrame((function(){e.style.height||(e.style.height="0px"),e.style.display=null}))},enter:function(e){requestAnimationFrame((function(){requestAnimationFrame((function(){e.style.height="".concat(e.scrollHeight,"px")}))}))},afterEnter:function(e){e.style.height=null},beforeLeave:function(e){requestAnimationFrame((function(){e.style.height||(e.style.height="".concat(e.offsetHeight,"px"))}))},leave:function(e){requestAnimationFrame((function(){requestAnimationFrame((function(){e.style.height="0px"}))}))},afterLeave:function(e){e.style.height=null}}},i=(a(935),a(60)),n=Object(i.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{"enter-active-class":"enter-active","leave-active-class":"leave-active"},on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}),[],!1,null,"1144541a",null);t.a=n.exports},918:function(e,t,a){e.exports=a.p+"img/game-1.1e6a521.jpg"},919:function(e,t,a){e.exports=a.p+"img/game-2.8728f0b.jpg"},920:function(e,t,a){e.exports=a.p+"img/game-3.87b09f4.jpg"},921:function(e,t,a){e.exports=a.p+"img/game-4.056762d.jpg"},922:function(e,t,a){e.exports=a.p+"img/video-1.b5a6fc5.jpg"},923:function(e,t,a){e.exports=a.p+"img/video-2.172a61d.jpg"},924:function(e,t,a){e.exports=a.p+"img/video-3.017e29b.jpg"},925:function(e,t,a){e.exports=a.p+"img/video-4.7e7b2ba.jpg"},926:function(e,t,a){e.exports=a.p+"img/game-1.ab0e5d4.jpg"},927:function(e,t,a){e.exports=a.p+"img/game-2.84dd9d1.jpg"},928:function(e,t,a){e.exports=a.p+"img/game-3.ae96ec3.jpg"},929:function(e,t,a){e.exports=a.p+"img/game-4.6d59e34.jpg"},930:function(e,t,a){e.exports=a.p+"img/game.d5c842d.jpg"},931:function(e,t,a){e.exports=a.p+"img/video-1.c401f13.jpg"},932:function(e,t,a){e.exports=a.p+"img/video-2.248b6d7.jpg"},933:function(e,t,a){e.exports=a.p+"img/video-3.abc50b6.jpg"},934:function(e,t,a){e.exports=a.p+"img/video-4.a10065d.jpg"},935:function(e,t,a){"use strict";a(770)},936:function(e,t,a){var r=a(47)(!1);r.push([e.i,".enter-active[data-v-1144541a],.leave-active[data-v-1144541a]{overflow:hidden;transition:height .4s linear}\n",""]),e.exports=r},937:function(e,t,a){"use strict";a(771)},938:function(e,t,a){var r=a(47)(!1);r.push([e.i,".game-rule .example-container[data-v-278c0e29]{display:flex;flex-direction:row;flex:1 1 auto}.game-rule .example-container .example-item[data-v-278c0e29]{background:#121923;border-radius:3.2vw;padding:2.667vw 1.6vw;margin-right:3.733vw;flex:1;flex-shrink:0}.game-rule .example-container .example-item[data-v-278c0e29]:last-child{margin-right:0}.game-rule .example-container .example-item .title[data-v-278c0e29]{font-size:4vw;line-height:5.6vw;margin-bottom:1.6vw;text-align:center;background:linear-gradient(180deg, #eeb081 0%, #fde2d0 99%);-webkit-background-clip:text;color:transparent}.game-rule .example-container .example-item .cont p[data-v-278c0e29]{font-size:2.933vw;color:rgba(255,255,255,0.6);margin-bottom:1.6vw}.game-rule .example-container .example-item .cont p[data-v-278c0e29]:last-child{margin-bottom:0}.game-rule .game-example .gc-content[data-v-278c0e29]{padding:3.2vw 0 0;font-size:2.933vw;color:rgba(255,255,255,0.6);line-height:4vw;font-weight:400}.game-rule .game-example .gc-content[data-v-278c0e29]  p{margin-bottom:1.333vw}.game-rule .ge-video-container[data-v-278c0e29]{display:block;min-height:3.733vw}.game-rule .ge-video-container .ge-video-img[data-v-278c0e29]{width:100%;vertical-align:bottom;border-radius:3.2vw;margin-top:3.2vw}.game-rule .ge-video-container .ge-video-img[data-v-278c0e29]:active{opacity:.3}.game-rule .gc-rule[data-v-278c0e29]{padding-top:3.2vw}.game-rule .gc-rule .gc-rule-img[data-v-278c0e29]{width:100%;vertical-align:bottom;border-radius:2.4vw}.game-rule .gc-rule .opa-100[data-v-278c0e29]{opacity:100}.game-rule .gc-rule .gc-rule-desc[data-v-278c0e29]{margin-top:3.2vw;line-height:4vw;font-size:2.933vw}.game-rule .gc-rule .gc-rule-desc .cont[data-v-278c0e29]{color:rgba(255,255,255,0.6);display:flex;justify-content:space-between}.game-rule .gc-rule .gc-rule-desc .cont.long[data-v-278c0e29]{flex-direction:column;justify-content:center;align-items:center}.game-rule .gc-rule .gc-rule-desc .cont .cont-item[data-v-278c0e29]{display:flex;flex-direction:row}.game-rule .gc-rule .gc-rule-desc .cont .cont-item .ci-title[data-v-278c0e29]{flex-shrink:0}.game-rule .gc-rule .gc-rule-desc .cont .cont-item .mark[data-v-278c0e29]{margin-left:0.667vw}.game-rule .gc-rule .gc-rule-desc .mark[data-v-278c0e29]{color:#d14a09}.game-rule .gc-rule .gc-rule-desc .desc[data-v-278c0e29]{margin-top:0.8vw;color:rgba(255,255,255,0.6);text-align:center}.game-rule .gc-rule .block-suTitle[data-v-278c0e29]{margin-left:1.333vw}@media (orientation: landscape){.game-rule .example-container .example-item[data-v-278c0e29]{border-radius:1.25rem;padding:1.042rem 0.625rem;margin-right:1.458rem}.game-rule .example-container .example-item .title[data-v-278c0e29]{font-size:1.563rem;line-height:2.188rem;margin-bottom:0.625rem}.game-rule .example-container .example-item .cont p[data-v-278c0e29]{font-size:1.146rem;margin-bottom:0.625rem}.game-rule .game-example .gc-content[data-v-278c0e29]{padding:1.25rem 0 0;font-size:1.146rem;line-height:1.563rem}.game-rule .game-example .gc-content[data-v-278c0e29]  p{margin-bottom:0.521rem}.game-rule .ge-video-container[data-v-278c0e29]{min-height:1.458rem}.game-rule .ge-video-container .ge-video-img[data-v-278c0e29]{border-radius:1.25rem;margin-top:1.25rem}.game-rule .gc-rule[data-v-278c0e29]{padding-top:1.25rem}.game-rule .gc-rule .gc-rule-img[data-v-278c0e29]{border-radius:0.938rem}.game-rule .gc-rule .gc-rule-desc[data-v-278c0e29]{margin-top:1.25rem;line-height:1.563rem;font-size:1.146rem}.game-rule .gc-rule .gc-rule-desc .cont .cont-item .mark[data-v-278c0e29]{margin-left:0.26rem}.game-rule .gc-rule .gc-rule-desc .desc[data-v-278c0e29]{margin-top:0.313rem}.game-rule .gc-rule .block-suTitle[data-v-278c0e29]{margin-left:0.521rem}}\n",""]),e.exports=r},943:function(e,t,a){e.exports=a.p+"img/di.31b9306.png"},944:function(e,t,a){e.exports=a.p+"img/WIN.4cab38c.png"},945:function(e,t,a){"use strict";a(773)},946:function(e,t,a){var r=a(47)(!1);r.push([e.i,".record-item[data-v-55a5b73a]{background-image:linear-gradient(180deg, #4b586f 1%, #262c38 91%);box-shadow:0 0.667vw 0.267vw 0 rgba(0,0,0,0.1);border-radius:3.2vw;margin-bottom:4vw;position:relative;height:34.667vw}.record-item .wrapper[data-v-55a5b73a]{position:absolute;left:0;right:0;top:0;height:44vw;z-index:2002;display:flex;flex-direction:column;justify-content:center;align-items:center;background:rgba(0,0,0,0)}.record-item .wrapper img[data-v-55a5b73a]{width:90%}.record-item .wrapper span[data-v-55a5b73a]{color:rgba(255,255,255,0.8);transform:translateY(-9.067vw);font-size:4.267vw}.record-item .top[data-v-55a5b73a]{padding:2.667vw 0;margin:0 4vw;border-bottom:1px solid #666}.record-item .top>div[data-v-55a5b73a]{margin-bottom:1.6vw;display:flex}.record-item .top>div[data-v-55a5b73a]:last-child{margin-bottom:0;flex-wrap:wrap}.record-item .top span[data-v-55a5b73a]{font-size:2.933vw;color:#e8e8e875}.record-item .top .success-color[data-v-55a5b73a]{color:#00d723}.record-item .top .error-color[data-v-55a5b73a]{color:#da0000}.record-item .top .whitec[data-v-55a5b73a]{color:rgba(255,255,255,0.8)}.record-item .bottom[data-v-55a5b73a]{padding:1.6vw 4vw;color:#e8e8e8;font-size:3.733vw}.record-item .bottom span[data-v-55a5b73a]{color:#7f8692;font-size:3.2vw}.record-item .win[data-v-55a5b73a]{position:absolute;left:53.333vw;top:4vw}.record-item .win img[data-v-55a5b73a]{width:13.867vw}.record-item .name[data-v-55a5b73a]{display:flex;align-items:center;margin-bottom:2.667vw}.record-item .name label[data-v-55a5b73a]{font-size:3.733vw;color:rgba(255,255,255,0.8);font-weight:700}.record-item .name>i[data-v-55a5b73a]{display:inline-block;width:0.667vw;height:3.733vw;background-color:#ffcb61;margin-right:2.133vw;border-radius:3.2vw}.record-item .bet[data-v-55a5b73a]{display:flex;justify-content:space-between}.record-item .bet-award[data-v-55a5b73a]{position:absolute;right:2.667vw;top:14vw;display:flex;flex-direction:column;justify-content:space-between;text-align:center}.record-item .bet-award .bet-award-currency[data-v-55a5b73a]{color:inherit;font-size:3.2vw !important;display:inline-block;padding-left:0.533vw}.record-item .bet-award span[data-v-55a5b73a]:nth-child(1){font-size:4vw;margin-bottom:0.8vw}.record-item .bet-award span[data-v-55a5b73a]:nth-child(2){font-size:2.933vw}.record-item .result[data-v-55a5b73a]{margin-bottom:0;flex-wrap:wrap;line-height:4vw}@media (orientation: landscape){.record-item[data-v-55a5b73a]{box-shadow:0 0.26rem 0.104rem 0 rgba(0,0,0,0.1);border-radius:1.25rem;margin-bottom:1.563rem;height:13.542rem}.record-item .wrapper[data-v-55a5b73a]{height:17.188rem}.record-item .wrapper span[data-v-55a5b73a]{transform:translateY(-3.542rem);font-size:1.667rem}.record-item .top[data-v-55a5b73a]{padding:1.042rem 0;margin:0 1.563rem;border-bottom:1px solid #666}.record-item .top>div[data-v-55a5b73a]{margin-bottom:0.625rem}.record-item .top span[data-v-55a5b73a]{font-size:1.146rem}.record-item .bottom[data-v-55a5b73a]{padding:0.625rem 1.563rem;font-size:1.458rem}.record-item .bottom span[data-v-55a5b73a]{font-size:1.25rem}.record-item .win[data-v-55a5b73a]{left:20.833rem;top:1.563rem}.record-item .win img[data-v-55a5b73a]{width:5.417rem}.record-item .name[data-v-55a5b73a]{margin-bottom:1.042rem}.record-item .name label[data-v-55a5b73a]{font-size:1.458rem}.record-item .name>i[data-v-55a5b73a]{width:0.26rem;height:1.458rem;margin-right:0.833rem;border-radius:1.25rem}.record-item .bet-award[data-v-55a5b73a]{right:1.042rem;top:5.469rem}.record-item .bet-award .bet-award-currency[data-v-55a5b73a]{font-size:1.25rem !important;padding-left:0.208rem}.record-item .bet-award span[data-v-55a5b73a]:nth-child(1){font-size:1.563rem;margin-bottom:0.313rem}.record-item .bet-award span[data-v-55a5b73a]:nth-child(2){font-size:1.146rem}.record-item .result[data-v-55a5b73a]{line-height:1.563rem}}\n",""]),e.exports=r}}]);