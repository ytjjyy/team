(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22295a"],{cedf:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("cs-container",[t("page-main",{ref:"main",attrs:{loading:e.loading,"tree-data":e.tree,module:e.module},on:{refresh:e.handleRefresh}})],1)},i=[],r=(t("d3b7"),t("3ca3"),t("ddb0"),t("ca00")),u=t("a308"),o={name:"setting-auth-menu",components:{PageHeader:function(){return t.e("chunk-2d0ce85a").then(t.bind(null,"608b"))},PageMain:function(){return t.e("chunk-0ff73066").then(t.bind(null,"38c4"))}},data:function(){return{tree:[],loading:!1,module:void 0}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var e=this;this.$nextTick((function(){e.handleSubmit()}))},handleSubmit:function(e){var n=this;this.loading=!0,Object(u["d"])(e).then((function(e){n.tree=r["a"].formatDataToTree(e.data.result),n.$refs.main&&(n.$refs.main.filterText="",n.$refs.main.resetForm(),n.$refs.main.resetElements())})).finally((function(){n.loading=!1}))}}},c=o,d=t("0c7c"),l=Object(d["a"])(c,a,i,!1,null,null,null);n["default"]=l.exports}}]);