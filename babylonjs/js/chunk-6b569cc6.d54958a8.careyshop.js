(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b569cc6"],{2680:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"i",(function(){return m}));var r=n("5530"),a=n("bc07"),o="/v1/order_service";function i(e,t){return Object(a["a"])({url:o,method:"post",data:{method:"add.order.service.message",service_no:e,message:t}})}function c(e){return Object(a["a"])({url:o,method:"post",data:{method:"get.order.service.item",service_no:e}})}function s(e){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"get.order.service.list"},e)})}function u(e){return Object(a["a"])({url:o,method:"post",data:{method:"set.order.service.agree",service_no:e}})}function d(e,t){return Object(a["a"])({url:o,method:"post",data:{method:"set.order.service.refused",service_no:e,result:t}})}function h(e,t){return Object(a["a"])({url:o,method:"post",data:{method:"set.order.service.sendback",service_no:e,is_return:t}})}function l(e){return Object(a["a"])({url:o,method:"post",data:{method:"set.order.service.after",service_no:e}})}function f(e){return Object(a["a"])({url:o,method:"post",data:{method:"set.order.service.cancel",service_no:e}})}function b(e){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"set.order.service.complete"},e)})}function m(e){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"set.order.service.remark"},e)})}},"34c09":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:e.loading,"type-map":e.typeMap},on:{submit:e.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:e.loading,"type-map":e.typeMap,"table-data":e.table},on:{tabs:e.handleTabs,refresh:e.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:e.loading,current:e.page.current,size:e.page.size,total:e.page.total},on:{change:e.handlePaginationChange},slot:"footer"})],1)},a=[],o=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2680")),c={name:"order-service-list",components:{PageHeader:function(){return n.e("chunk-76731b46").then(n.bind(null,"b6c2"))},PageMain:function(){return n.e("chunk-1b94f356").then(n.bind(null,"4350"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,table:[],status:null,typeMap:{0:"仅退款",1:"退货退款",2:"换货",3:"维修"},page:{current:1,size:0,total:0}}},mounted:function(){var e=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(t){e.page.size=t.get("size").value()||25})).then((function(){e.handleSubmit()}))},beforeRouteEnter:function(e,t,n){"order-service-info"===t.name?n((function(e){e.$refs.header&&e.$refs.header.handleFormSubmit()})):n()},methods:{handleRefresh:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(e){var t=this;this.page=e,this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleTabs:function(e){var t=this;this.status=e<=0?null:e-1,this.$nextTick((function(){t.$refs.header.handleFormSubmit(!0)}))},handleSubmit:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(i["c"])(Object(o["a"])(Object(o["a"])({},e),{},{status:this.status,page_no:this.page.current,page_size:this.page.size})).then((function(e){t.table=e.data.items||[],t.page.total=e.data.total_result})).finally((function(){t.loading=!1}))}}},s=c,u=n("0c7c"),d=Object(u["a"])(s,r,a,!1,null,null,null);t["default"]=d.exports}}]);