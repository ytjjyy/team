(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b34ec46"],{"4dce":function(t,e,a){"use strict";a("ca19")},"81d5":function(t,e,a){"use strict";var s=a("7b0b"),i=a("23cb"),o=a("50c4");t.exports=function(t){var e=s(this),a=o(e.length),r=arguments.length,c=i(r>1?arguments[1]:void 0,a),n=r>2?arguments[2]:void 0,d=void 0===n?a:i(n,a);while(d>c)e[c++]=t;return e}},aff5:function(t,e,a){var s=a("23e7");s({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},ca19:function(t,e,a){},cb29:function(t,e,a){var s=a("23e7"),i=a("81d5"),o=a("44d2");s({target:"Array",proto:!0},{fill:i}),o("fill")},e044:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",{attrs:{"is-back":t.isBack}},[a("div",{staticClass:"cs-p"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"gallery"},[a("page-media",{ref:"goodsMedia",attrs:{image:t.goodsData.attachment,video:t.goodsData.video}})],1),a("div",{staticClass:"itemInfo"},[a("div",{staticClass:"goods-name cs-pb-5"},[a("b",[t._v(t._s(t.goodsData.name))])]),a("div",{staticClass:"product-name"},[a("span",[t._v(t._s(t.goodsData.product_name))])]),a("div",{staticClass:"summary-first"},[a("div",{staticClass:"summary-price-wrap cs-pt-10"},[a("div",{staticClass:"summary-price"},[a("div",{staticClass:"dt"},[t._v("市场价")]),a("div",{staticClass:"dd"},[a("span",{staticStyle:{"text-decoration":"line-through"}},[a("span",[t._v("￥")]),a("span",[t._v(t._s(t._f("getNumber")(t.goodsData.market_price)))])])])]),a("div",{staticClass:"summary-price"},[a("div",{staticClass:"dt",staticStyle:{"line-height":"28px"}},[t._v("本店价")]),a("div",{staticClass:"dd"},[a("span",{staticClass:"price"},[a("span",[t._v("￥")]),a("span",{staticStyle:{"font-size":"22px"}},[a("b",[t._v(t._s(t.currentPrice))])])])])]),a("div",{staticClass:"summary-price price-bg"},[a("div",{staticClass:"dt"},[t._v("总库存")]),a("div",{staticClass:"dd"},[a("span",[t._v(t._s(t.currentStore))])])]),a("div",{staticClass:"summary-info"},[a("div",{staticClass:"content"},[a("p",[t._v("评价数")]),a("span",[t._v(t._s(t.goodsData.comment_sum))])]),a("div",{staticClass:"content"},[a("p",[t._v("累计销量")]),a("span",[t._v(t._s(t.goodsData.sales_sum))])])])])]),t._l(t.specConfig,(function(e,s){return a("div",{key:s,staticClass:"cs-pt-5"},[a("div",{staticStyle:{display:"inline-block"}},[a("div",{staticClass:"dt"},[t._v(t._s(e.name))]),a("div",{staticClass:"dd"},t._l(e.spec_item,(function(i,o){return a("div",{key:o,staticClass:"goods-spec",class:{active:e.active===i.spec_item_id,disabled:i.disabled},on:{click:function(e){return t.selectSpec(s,o)}}},[i.color?[a("span",{staticClass:"item-info",style:{"background-color":i.color}})]:t._e(),i.image.length?[a("el-image",{staticClass:"item-info",attrs:{src:t._f("getPreviewUrl")(i.image[0]["source"],36,36),fit:"contain"}})]:t._e(),a("span",{staticClass:"item-name"},[t._v(t._s(i.item_name))])],2)})),0)])])}))],2)]),a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"详情描述",name:"content"}},[t.attrImportant.length?a("div",{staticClass:"parameter cs-mb-15"},[a("ul",{staticClass:"parameter-list"},t._l(t.attrImportant,(function(e,s){return a("li",{key:s,attrs:{title:e.attr_value}},[a("span",[t._v(t._s(e.attr_name+"："+e.attr_value))])])})),0),a("p",{staticClass:"more-par cs-pr",staticStyle:{margin:"0"}},[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.activeName="attr"}}},[t._v("详细参数 >>")])],1)]):t._e(),a("div",{staticClass:"mce-content-body",domProps:{innerHTML:t._s(t.goodsData.content)}})]),a("el-tab-pane",{attrs:{label:"商品属性",name:"attr"}},[a("el-table",{attrs:{data:t.attrConfig,"row-key":"goods_attribute_id","tree-props":{children:"get_attribute"},"show-header":!1,"default-expand-all":""}},[a("el-table-column",{attrs:{prop:"attr_name",width:"160","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:{"attr-label":!e.row.is_parent}},[t._v(t._s(e.row.attr_name))])]}}])}),a("el-table-column",{attrs:{align:"center",width:"35"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.description?a("el-tooltip",{attrs:{content:e.row.description,placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline"})]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"attr_value"}})],1)],1)],1)],1)],1)])},i=[],o=(a("a4d3"),a("e01a"),a("99af"),a("cb29"),a("4160"),a("c975"),a("a15b"),a("a9e3"),a("aff5"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("b85c")),r=a("ca00"),c=a("60bb"),n=(a("5530"),a("bc07")),d="/v1/goods_attribute";function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(n["a"])({url:d,method:"post",data:{method:"get.goods.attribute.data",goods_type_id:t,attribute_all:e}})}var p="/v1/goods";function u(t){return Object(n["a"])({url:p,method:"post",data:{method:"get.goods.item",goods_id:t}})}function _(t){return Object(n["a"])({url:p,method:"post",data:{method:"get.goods.attr.list",goods_id:t}})}function m(t){return Object(n["a"])({url:p,method:"post",data:{method:"get.goods.spec.menu",goods_id:t}})}var g={props:{goods_id:{type:[String,Number],required:!0},isBack:{type:Boolean,required:!1,default:!0}},data:function(){return{activeName:"content",currentPrice:0,rangePrice:"",currentStore:0,goodsData:{},attrConfig:[],attrImportant:[],specCombo:{},specConfig:[]}},filters:{getNumber:function(t){return r["a"].getNumber(t)},getPreviewUrl:function(t,e,a){return r["a"].getImageStyleUrl(t,"&size[]=".concat(e,"&size[]=").concat(a))}},watch:{goods_id:{handler:function(){this.getGoodsData()},immediate:!0}},components:{PageMedia:function(){return a.e("chunk-59380150").then(a.bind(null,"0460"))}},methods:{resetGoodsData:function(){this.activeName="content",this.currentPrice=0,this.rangePrice="",this.currentStore=0,this.goodsData={},this.attrConfig=[],this.attrImportant=[],this.specCombo={},this.specConfig=[]},getGoodsOtherInfo:function(){var t=this;Promise.all([m(this.goods_id),_(this.goods_id),l(this.goodsData.goods_type_id,1)]).then((function(e){if(t.specCombo=e[0].data?e[0].data.spec_combo:{},t.specConfig=e[0].data?e[0].data.spec_config:[],1===Object(c["size"])(t.specConfig)&&t.specConfig[0].spec_item.forEach((function(e){var a=t.specCombo[e.spec_item_id];(!a||a.store_qty<=0)&&(e.disabled=!0)})),Object(c["size"])(t.specCombo)>0){var a=Number.MAX_SAFE_INTEGER,s=0;for(var i in t.specCombo)Object.prototype.hasOwnProperty.call(t.specCombo,i)&&(a=Math.min(a,t.specCombo[i].price),s=Math.max(s,t.specCombo[i].price));a=r["a"].getNumber(a),s=r["a"].getNumber(s),t.rangePrice="".concat(a," - ").concat(s),t.currentPrice=t.rangePrice}var n,d={},l=Object(o["a"])(e[1].data||[]);try{for(l.s();!(n=l.n()).done;){var p=n.value;if(p.attr_value){if(void 0===d[p.parent_id]){var u=e[2].data[p.parent_id];if(!u)continue;var _=t.attrConfig.push({goods_attribute_id:u.goods_attribute_id,attr_name:u.attr_name,is_parent:!0,get_attribute:[]});d[p.parent_id]=_-1}var m=e[2].data[p.goods_attribute_id];1===m.is_important&&t.attrImportant.push({goods_attribute_id:m.goods_attribute_id,attr_name:m.attr_name,attr_value:p.attr_value}),t.attrConfig[d[p.parent_id]].get_attribute.push({goods_attribute_id:m.goods_attribute_id,description:m.description,attr_name:m.attr_name,attr_value:p.attr_value})}}}catch(g){l.e(g)}finally{l.f()}}))},getGoodsData:function(){var t=this;this.resetGoodsData(),u(this.goods_id).then((function(e){t.goodsData=e.data||{},t.currentPrice=r["a"].getNumber(t.goodsData.shop_price),t.currentStore=t.goodsData.store_qty,t.getGoodsOtherInfo()}))},selectSpec:function(t,e){var a=this,s=this.specConfig[t],i=this.specConfig[t].spec_item[e];if(!i.disabled){var n=new Array(this.specConfig.length).fill(0),d=s.active!==i.spec_item_id?i.spec_item_id:0;if(this.$set(s,"active",d),this.specConfig.forEach((function(t,e){t.active&&(n[e]=t.active.toString())})),i.image.length>0&&this.$nextTick((function(){a.$refs.goodsMedia.updateImage(d?i.image:[])})),this.specConfig.length>1){var l=[];for(var p in n)if(Object.prototype.hasOwnProperty.call(n,p)&&n[p]){var u=[],_=[];for(var m in this.specCombo){var g=m.split("_");g[p]===n[p]&&(this.specCombo[m].store_qty>0?_=_.concat(g):u=u.concat(g))}u.length&&(l=l.concat(Object(c["difference"])(u,_)))}l=Object(c["uniq"])(l),this.specConfig.forEach((function(t){var e,a=Object(o["a"])(t.spec_item);try{for(a.s();!(e=a.n()).done;){var s=e.value;t.active!==s.spec_item_id?-1!==l.indexOf(s.spec_item_id.toString())?s.disabled=!0:s.disabled=!1:s.disabled=!1}}catch(i){a.e(i)}finally{a.f()}}))}var v=n.join("_");Object.prototype.hasOwnProperty.call(this.specCombo,v)?(this.currentStore=this.specCombo[v].store_qty,this.currentPrice=r["a"].getNumber(this.specCombo[v].price)):(this.currentStore=this.goodsData.store_qty,this.currentPrice=this.rangePrice)}}}},v=g,f=(a("4dce"),a("2877")),b=Object(f["a"])(v,s,i,!1,null,"4234f046",null);e["default"]=b.exports}}]);