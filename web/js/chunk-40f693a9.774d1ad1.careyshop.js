(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f693a9"],{"06e3":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return h}));var r=n("5530"),d=n("bc07"),a="/v1/delivery";function i(t){return Object(d["a"])({url:a,method:"post",data:Object(r["a"])({method:"add.delivery.item"},t)})}function o(t){return Object(d["a"])({url:a,method:"post",data:Object(r["a"])({method:"set.delivery.item"},t)})}function u(t){return Object(d["a"])({url:a,method:"post",data:{method:"del.delivery.list",delivery_id:t}})}function c(t){return Object(d["a"])({url:a,method:"post",data:Object(r["a"])({method:"get.delivery.list"},t)})}function l(){return Object(d["a"])({url:a,method:"post",data:{method:"get.delivery.select"}})}function s(t,e){return Object(d["a"])({url:a,method:"post",data:{method:"set.delivery.status",delivery_id:t,status:e}})}function h(t,e){return Object(d["a"])({url:a,method:"post",data:{method:"set.delivery.sort",delivery_id:t,sort:e}})}},"52b9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table},on:{sort:t.handleSort}})],1)},d=[],a=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("06e3")),o={name:"setting-logistics-delivery",components:{PageHeader:function(){return n.e("chunk-2d0e9bbf").then(n.bind(null,"8f94"))},PageMain:function(){return n.e("chunk-6b983176").then(n.bind(null,"90c8"))}},data:function(){return{table:[],loading:!1,order:{order_type:void 0,order_field:void 0}}},mounted:function(){this.handleSubmit()},methods:{handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this;this.loading=!0,Object(i["c"])(Object(a["a"])(Object(a["a"])({},t),this.order)).then((function(t){e.table=t.data||[]})).finally((function(){e.loading=!1}))}}},u=o,c=n("0c7c"),l=Object(c["a"])(u,r,d,!1,null,null,null);e["default"]=l.exports}}]);