(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6adb3996"],{"2ee3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,group:t.group,level:t.level,"to-ksan":t.toKsan},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,group:t.group},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],u=(n("d3b7"),n("5530")),o=n("d221"),d=n("ca00"),c={name:"member-user-client",components:{PageHeader:function(){return n.e("chunk-2d0d2ac9").then(n.bind(null,"5a07"))},PageMain:function(){return n.e("chunk-d933b55a").then(n.bind(null,"24cf"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,table:[],group:[],level:[],toKsan:[],page:{current:1,size:50,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this,e=parseInt(d["a"].cookies.get("role_id"));1==e&&Object(o["w"])({pageSize:500,group_id:4}).then((function(e){t.toKsan=e.data.result||[]})),this.handleSubmit()},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(o["u"])(Object(u["a"])(Object(u["a"])({},t),{},{currentPage:this.page.current,pageSize:this.page.size})).then((function(t){e.table=t.data.result||[],e.page.total=t.data.pagination.total})).finally((function(){e.loading=!1}))}}},i=c,s=n("2877"),f=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=f.exports},d221:function(t,e,n){"use strict";n.d(e,"X",(function(){return u})),n.d(e,"x",(function(){return o})),n.d(e,"F",(function(){return d})),n.d(e,"r",(function(){return c})),n.d(e,"H",(function(){return i})),n.d(e,"N",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"k",(function(){return l})),n.d(e,"f",(function(){return b})),n.d(e,"h",(function(){return h})),n.d(e,"I",(function(){return p})),n.d(e,"O",(function(){return j})),n.d(e,"z",(function(){return O})),n.d(e,"C",(function(){return m})),n.d(e,"A",(function(){return v})),n.d(e,"q",(function(){return g})),n.d(e,"y",(function(){return k})),n.d(e,"o",(function(){return y})),n.d(e,"p",(function(){return w})),n.d(e,"Y",(function(){return _})),n.d(e,"n",(function(){return S})),n.d(e,"a",(function(){return z})),n.d(e,"S",(function(){return P})),n.d(e,"D",(function(){return $})),n.d(e,"T",(function(){return x})),n.d(e,"K",(function(){return F})),n.d(e,"L",(function(){return K})),n.d(e,"J",(function(){return T})),n.d(e,"Q",(function(){return C})),n.d(e,"b",(function(){return J})),n.d(e,"W",(function(){return R})),n.d(e,"M",(function(){return E})),n.d(e,"E",(function(){return H})),n.d(e,"P",(function(){return I})),n.d(e,"R",(function(){return M})),n.d(e,"v",(function(){return q})),n.d(e,"V",(function(){return A})),n.d(e,"m",(function(){return B})),n.d(e,"l",(function(){return D})),n.d(e,"U",(function(){return G})),n.d(e,"j",(function(){return L})),n.d(e,"g",(function(){return N})),n.d(e,"e",(function(){return Q})),n.d(e,"G",(function(){return U})),n.d(e,"i",(function(){return V})),n.d(e,"B",(function(){return W})),n.d(e,"d",(function(){return X})),n.d(e,"w",(function(){return Y})),n.d(e,"u",(function(){return Z})),n.d(e,"s",(function(){return tt})),n.d(e,"t",(function(){return et}));var r=n("5530"),a=n("bc07");function u(t){return Object(a["a"])({url:"/dev/version/post",method:"post",data:Object(r["a"])({},t)})}function o(t){return Object(a["a"])({url:"/dev/version/fetch",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(a["a"])({url:"/dev/channel/status",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(a["a"])({url:"/dev/channel/fetch",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(a["a"])({url:"/dev/device/post",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(a["a"])({url:"/dev/alipay/post",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(a["a"])({url:"/dev/system/delete",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(a["a"])({url:"/dev/system/fetch",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(a["a"])({url:"/dev/device/delete",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(a["a"])({url:"/dev/alipay/delete",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(a["a"])({url:"/dev/device/status",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(a["a"])({url:"/dev/alipay/status",method:"post",data:Object(r["a"])({},t)})}function O(t){return Object(a["a"])({url:"/dev/recharge/post",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(a["a"])({url:"/dev/withdrawal/post",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(a["a"])({url:"/dev/recharge/status",method:"post",data:Object(r["a"])({},t)})}function g(t){return Object(a["a"])({url:"/dev/recharge/fetch",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(a["a"])({url:"/dev/withdrawal/fetch",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(a["a"])({url:"/dev/bank/fetch",method:"post",data:Object(r["a"])({},t)})}function w(t){return Object(a["a"])({url:"/dev/card/fetch",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(a["a"])({url:"/dev/analysis/stat",method:"post",data:Object(r["a"])({},t)})}function S(t){return Object(a["a"])({url:"/dev/balance/fetch",method:"post",data:Object(r["a"])({},t)})}function z(t){return Object(a["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function P(t){return Object(a["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function $(t){return Object(a["a"])({url:"/dev/withdrawal/status",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(a["a"])({url:"/dev/user/member",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function F(t){return Object(a["a"])({url:"/dev/chain/post",method:"post",data:Object(r["a"])({},t)})}function K(t){return Object(a["a"])({url:"/dev/member/post",method:"post",data:Object(r["a"])({},t)})}function T(t){return Object(a["a"])({url:"/dev/card/member",method:"post",data:Object(r["a"])({},t)})}function C(t){return Object(a["a"])({url:"/dev/card/post",method:"post",data:Object(r["a"])({},t)})}function J(t){return Object(a["a"])({url:"/dev/card/bind",method:"post",data:Object(r["a"])({},t)})}function R(t,e){return Object(a["a"])({url:"/dev/user/status",method:"post",data:{keys:t,status:e}})}function E(t,e){return Object(a["a"])({url:"/dev/member/status",method:"post",data:{keys:t,status:e}})}function H(t,e){return Object(a["a"])({url:"/dev/bank/status",method:"post",data:{keys:t,status:e}})}function I(t,e){return Object(a["a"])({url:"/dev/card/status",method:"post",data:{keys:t,status:e}})}function M(t){return Object(a["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function q(t){return Object(a["a"])({url:"/dev/agency/top",method:"post",data:Object(r["a"])({},t)})}function A(t){return Object(a["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function B(t){return Object(a["a"])({url:"/dev/agency/fetch",method:"post",data:Object(r["a"])({},t)})}function D(t){return Object(a["a"])({url:"/dev/agent/limit",method:"post",data:Object(r["a"])({},t)})}function G(t){return Object(a["a"])({url:"/dev/agent/post",method:"post",data:Object(r["a"])({},t)})}function L(t){return Object(a["a"])({url:"/dev/user/delete",method:"post",data:Object(r["a"])({},t)})}function N(t){return Object(a["a"])({url:"/dev/member/delete",method:"post",data:Object(r["a"])({},t)})}function Q(t){return Object(a["a"])({url:"/dev/channel/delete",method:"post",data:Object(r["a"])({},t)})}function U(t){return Object(a["a"])({url:"/dev/channel/post",method:"post",data:Object(r["a"])({},t)})}function V(t){return Object(a["a"])({url:"/dev/card/delete",method:"post",data:Object(r["a"])({},t)})}function W(t){return Object(a["a"])({url:"/dev/bank/post",method:"post",data:Object(r["a"])({},t)})}function X(t){return Object(a["a"])({url:"/dev/bank/delete",method:"post",data:Object(r["a"])({},t)})}function Y(t){return Object(a["a"])({url:"/dev/user/fetch",method:"post",data:Object(r["a"])({},t)})}function Z(t){return Object(a["a"])({url:"/dev/alipay/fetch",method:"post",data:Object(r["a"])({},t)})}function tt(t){return Object(a["a"])({url:"/dev/device/fetch",method:"post",data:Object(r["a"])({},t)})}function et(t){return Object(a["a"])({url:"/dev/member/fetch",method:"post",data:Object(r["a"])({},t)})}}}]);