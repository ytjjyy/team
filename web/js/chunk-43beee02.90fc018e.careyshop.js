(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43beee02"],{"7f85":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"to-payment":t.toPayment,"to-ksan":t.toKsan,"to-device":t.toDevice,"to-member":t.toMember,code:t.code},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,"motion-data":t.motion,"order-total":t.total},on:{export:t.handleExport,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],o=(n("b0c0"),n("d3b7"),n("5530")),u=n("ca00"),d=n("d221"),c=n("dea0"),i={name:"order-admin-list",components:{PageHeader:function(){return n.e("chunk-49a67304").then(n.bind(null,"e13d"))},PageMain:function(){return n.e("chunk-4c121ea2").then(n.bind(null,"0b6d"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,code:void 0,role_id:void 0,table:[],motion:{},toPayment:[],toKsan:[],toMember:[],toDevice:[],status:-1,total:{},page:{current:1,size:50,total:0}}},mounted:function(){var t=this;this.toPayment.push({name:"全部",code:-1}),this.toPayment.push({name:"处理中",code:1}),this.toPayment.push({name:"订单超时",code:4}),this.toPayment.push({name:"支付成功",code:5}),this.toPayment.push({name:"订单驳回",code:6}),this.toPayment.push({name:"订单关闭",code:7});var e=parseInt(u["a"].cookies.get("role_id"));this.$route.query.id&&(this.code=this.$route.query.id),1==e&&(Object(d["y"])({pageSize:500,group_id:4}).then((function(e){t.toKsan=e.data.result||[]})),Object(d["y"])({pageSize:500,group_id:3}).then((function(e){t.toMember=e.data.result||[]})))},beforeRouteEnter:function(t,e,n){"order-admin-info"===e.name?n((function(t){t.$refs.header&&t.$refs.header.handleFormSubmit()})):n()},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleExport:function(){var t=this;this.$nextTick((function(){t.$refs.header.handleFormSubmit(!1,!0)}))},exportFile:function(t){u["a"].fileDownload("/dev/order/out",{ext:"xlsx",data:Object(o["a"])({type:2},t)})},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&(this.page.current=1),r&&this.exportFile(t),this.loading=!0,(t&&void 0==t.status||t&&t.status<0)&&delete t.status,Object(c["f"])(Object(o["a"])(Object(o["a"])({},t),{},{type:2,currentPage:this.page.current,pageSize:this.page.size})).then((function(t){e.table=t.data.result||[],e.motion=t.data.pagination,e.page.total=t.data.pagination.total})).finally((function(){e.loading=!1}))}}},s=i,f=n("2877"),h=Object(f["a"])(s,r,a,!1,null,null,null);e["default"]=h.exports},d221:function(t,e,n){"use strict";n.d(e,"Z",(function(){return o})),n.d(e,"z",(function(){return u})),n.d(e,"J",(function(){return d})),n.d(e,"s",(function(){return c})),n.d(e,"P",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"l",(function(){return f})),n.d(e,"i",(function(){return h})),n.d(e,"Q",(function(){return b})),n.d(e,"C",(function(){return l})),n.d(e,"G",(function(){return m})),n.d(e,"D",(function(){return p})),n.d(e,"r",(function(){return j})),n.d(e,"A",(function(){return O})),n.d(e,"p",(function(){return v})),n.d(e,"q",(function(){return g})),n.d(e,"c",(function(){return y})),n.d(e,"ab",(function(){return k})),n.d(e,"o",(function(){return _})),n.d(e,"a",(function(){return P})),n.d(e,"U",(function(){return w})),n.d(e,"H",(function(){return x})),n.d(e,"V",(function(){return $})),n.d(e,"M",(function(){return S})),n.d(e,"N",(function(){return z})),n.d(e,"L",(function(){return F})),n.d(e,"S",(function(){return E})),n.d(e,"b",(function(){return M})),n.d(e,"Y",(function(){return q})),n.d(e,"O",(function(){return D})),n.d(e,"I",(function(){return K})),n.d(e,"R",(function(){return R})),n.d(e,"T",(function(){return T})),n.d(e,"x",(function(){return C})),n.d(e,"X",(function(){return J})),n.d(e,"n",(function(){return H})),n.d(e,"m",(function(){return I})),n.d(e,"W",(function(){return A})),n.d(e,"k",(function(){return G})),n.d(e,"g",(function(){return L})),n.d(e,"f",(function(){return N})),n.d(e,"K",(function(){return Q})),n.d(e,"j",(function(){return U})),n.d(e,"E",(function(){return V})),n.d(e,"e",(function(){return W})),n.d(e,"F",(function(){return X})),n.d(e,"h",(function(){return Y})),n.d(e,"v",(function(){return Z})),n.d(e,"y",(function(){return B})),n.d(e,"w",(function(){return tt})),n.d(e,"t",(function(){return et})),n.d(e,"u",(function(){return nt}));var r=n("5530"),a=n("bc07");function o(t){return Object(a["a"])({url:"/dev/version/post",method:"post",data:Object(r["a"])({},t)})}function u(t){return Object(a["a"])({url:"/dev/version/fetch",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(a["a"])({url:"/dev/channel/status",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(a["a"])({url:"/dev/channel/fetch",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(a["a"])({url:"/dev/alipay/post",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(a["a"])({url:"/dev/system/delete",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(a["a"])({url:"/dev/system/fetch",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(a["a"])({url:"/dev/alipay/delete",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(a["a"])({url:"/dev/alipay/status",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(a["a"])({url:"/dev/recharge/post",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(a["a"])({url:"/dev/withdrawal/post",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(a["a"])({url:"/dev/recharge/status",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(a["a"])({url:"/dev/recharge/fetch",method:"post",data:Object(r["a"])({},t)})}function O(t){return Object(a["a"])({url:"/dev/withdrawal/fetch",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(a["a"])({url:"/dev/bank/fetch",method:"post",data:Object(r["a"])({},t)})}function g(t){return Object(a["a"])({url:"/dev/card/fetch",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(a["a"])({url:"/dev/card/stat",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(a["a"])({url:"/dev/analysis/stat",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(a["a"])({url:"/dev/balance/fetch",method:"post",data:Object(r["a"])({},t)})}function P(t){return Object(a["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function w(t){return Object(a["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function x(t){return Object(a["a"])({url:"/dev/withdrawal/status",method:"post",data:Object(r["a"])({},t)})}function $(t){return Object(a["a"])({url:"/dev/user/member",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function S(t){return Object(a["a"])({url:"/dev/chain/post",method:"post",data:Object(r["a"])({},t)})}function z(t){return Object(a["a"])({url:"/dev/member/post",method:"post",data:Object(r["a"])({},t)})}function F(t){return Object(a["a"])({url:"/dev/card/member",method:"post",data:Object(r["a"])({},t)})}function E(t){return Object(a["a"])({url:"/dev/card/post",method:"post",data:Object(r["a"])({},t)})}function M(t){return Object(a["a"])({url:"/dev/card/bind",method:"post",data:Object(r["a"])({},t)})}function q(t,e){return Object(a["a"])({url:"/dev/user/status",method:"post",data:{keys:t,status:e}})}function D(t,e){return Object(a["a"])({url:"/dev/member/status",method:"post",data:{keys:t,status:e}})}function K(t,e){return Object(a["a"])({url:"/dev/bank/status",method:"post",data:{keys:t,status:e}})}function R(t,e){return Object(a["a"])({url:"/dev/card/status",method:"post",data:{keys:t,status:e}})}function T(t){return Object(a["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function C(t){return Object(a["a"])({url:"/dev/agency/top",method:"post",data:Object(r["a"])({},t)})}function J(t){return Object(a["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function H(t){return Object(a["a"])({url:"/dev/agency/fetch",method:"post",data:Object(r["a"])({},t)})}function I(t){return Object(a["a"])({url:"/dev/agent/limit",method:"post",data:Object(r["a"])({},t)})}function A(t){return Object(a["a"])({url:"/dev/agent/post",method:"post",data:Object(r["a"])({},t)})}function G(t){return Object(a["a"])({url:"/dev/user/delete",method:"post",data:Object(r["a"])({},t)})}function L(t){return Object(a["a"])({url:"/dev/member/delete",method:"post",data:Object(r["a"])({},t)})}function N(t){return Object(a["a"])({url:"/dev/channel/delete",method:"post",data:Object(r["a"])({},t)})}function Q(t){return Object(a["a"])({url:"/dev/channel/post",method:"post",data:Object(r["a"])({},t)})}function U(t){return Object(a["a"])({url:"/dev/card/delete",method:"post",data:Object(r["a"])({},t)})}function V(t){return Object(a["a"])({url:"/dev/bank/post",method:"post",data:Object(r["a"])({},t)})}function W(t){return Object(a["a"])({url:"/dev/bank/delete",method:"post",data:Object(r["a"])({},t)})}function X(t){return Object(a["a"])({url:"/dev/product/post",method:"post",data:Object(r["a"])({},t)})}function Y(t){return Object(a["a"])({url:"/dev/product/delete",method:"post",data:Object(r["a"])({},t)})}function Z(t){return Object(a["a"])({url:"/dev/product/fetch",method:"post",data:Object(r["a"])({},t)})}function B(t){return Object(a["a"])({url:"/dev/user/fetch",method:"post",data:Object(r["a"])({},t)})}function tt(t){return Object(a["a"])({url:"/dev/alipay/fetch",method:"post",data:Object(r["a"])({},t)})}function et(t){return Object(a["a"])({url:"/dev/device/fetch",method:"post",data:Object(r["a"])({},t)})}function nt(t){return Object(a["a"])({url:"/dev/member/fetch",method:"post",data:Object(r["a"])({},t)})}},dea0:function(t,e,n){"use strict";n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"a",(function(){return c})),n.d(e,"j",(function(){return i})),n.d(e,"m",(function(){return s})),n.d(e,"o",(function(){return f})),n.d(e,"q",(function(){return h})),n.d(e,"r",(function(){return b})),n.d(e,"p",(function(){return l})),n.d(e,"n",(function(){return m})),n.d(e,"f",(function(){return p})),n.d(e,"s",(function(){return j})),n.d(e,"b",(function(){return O})),n.d(e,"k",(function(){return v})),n.d(e,"c",(function(){return g})),n.d(e,"l",(function(){return y})),n.d(e,"i",(function(){return k})),n.d(e,"e",(function(){return _})),n.d(e,"d",(function(){return P}));var r=n("5530"),a=n("bc07"),o="/v1/order";function u(t){return Object(a["a"])({url:"/dev/order/make",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(a["a"])({url:"/dev/order/pay",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(a["a"])({url:"/dev/order/alipay",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(a["a"])({url:"/dev/order/post",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(a["a"])({url:"/dev/order/cert",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(a["a"])({url:"/dev/order/fail",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(a["a"])({url:"/dev/order/mod",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(a["a"])({url:"/dev/order/finish",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(a["a"])({url:"/dev/order/fresh",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(a["a"])({url:"/dev/order/dist",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(a["a"])({url:"/dev/order/fetch",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"set.order.item"},t)})}function O(t){return Object(a["a"])({url:o,method:"post",data:{method:"cancel.order.item",order_no:t}})}function v(t,e){return Object(a["a"])({url:o,method:"post",data:{method:"recycle.order.item",order_no:t,is_recycle:e}})}function g(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"change.price.order.item"},t)})}function y(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"remark.order.item"},t)})}function k(t,e){return Object(a["a"])({url:o,method:"post",data:{method:"picking.order.list",order_no:t,is_picking:e}})}function _(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"delivery.order.item"},t)})}function P(t){return Object(a["a"])({url:o,method:"post",data:{method:"complete.order.list",order_no:t}})}}}]);