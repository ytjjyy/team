(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ebf8fd5"],{1972:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-main",{ref:"rule",attrs:{loading:t.loading,"tree-data":t.tree,module:t.module,group:t.group,whitelist:t.whitelist},on:{refresh:t.handleRefresh}})],1)},u=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),n("a308")),o=n("c784"),c=(n("ca7e"),n("ca00")),d={name:"setting-auth-rule",components:{PageHeader:function(){return n.e("chunk-2d0cbaf4").then(n.bind(null,"4b5e"))},PageMain:function(){return n.e("chunk-e2a61ea0").then(n.bind(null,"8063"))}},data:function(){return{loading:!1,tree:[],module:{},group:{},whitelist:[]}},mounted:function(){var t=this;Promise.all([Object(a["d"])(),Object(o["c"])()]).then((function(e){console.log(e),t.tree=c["a"].formatDataToTree(e[0].data.result||[]),t.group=e[1].data.result||[]})).then((function(){}))},methods:{handleRefresh:function(){var t=this;this.$nextTick((function(){t.handleSubmit({})}))},handleSubmit:function(t){var e=this;this.loading=!0,Object(a["d"])(t).then((function(t){e.tree=[],e.tree=c["a"].formatDataToTree(t.data.result),e.$refs.rule&&(e.$refs.rule.filterText="",e.$refs.rule.resetForm(),e.$refs.rule.resetElements())})).finally((function(){e.loading=!1}))}}},i=d,l=n("0c7c"),s=Object(l["a"])(i,r,u,!1,null,null,null);e["default"]=s.exports},c784:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return s}));var r=n("5530"),u=n("bc07"),a="/dev/role/fetch";function o(t){return Object(u["a"])({url:"/dev/role/post",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(u["a"])({url:"/dev/role/post",method:"post",data:Object(r["a"])({method:"set.auth.group.item"},t)})}function d(t){return Object(u["a"])({url:"/dev/role/delete",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(u["a"])({url:a,method:"post",data:Object(r["a"])({},t)})}function l(t,e){return Object(u["a"])({url:a,method:"post",data:{method:"set.auth.group.status",group_id:t,status:e}})}function s(t,e){return Object(u["a"])({url:a,method:"post",data:{method:"set.auth.group.sort",group_id:t,sort:e}})}},ca7e:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return s}));var r=n("5530"),u=n("bc07"),a="/v1/auth_rule";function o(t){return Object(u["a"])({url:"/dev/role/grant",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(u["a"])({url:a,method:"post",data:Object(r["a"])({method:"set.auth.rule.item"},t)})}function d(t){return Object(u["a"])({url:a,method:"post",data:{method:"del.auth.rule.list",rule_id:t}})}function i(t){return Object(u["a"])({url:"/dev/role/menu",method:"post",data:Object(r["a"])({},t)})}function l(t,e){return Object(u["a"])({url:a,method:"post",data:{method:"set.auth.rule.status",rule_id:t,status:e}})}function s(t){return Object(u["a"])({url:a,method:"post",data:{method:"set.auth.rule.index",rule_id:t}})}}}]);