(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-735c4b95"],{"03db":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-main",{attrs:{loading:t.loading,"table-data":t.table,module:t.module},on:{sort:t.handleSort}})],1)},u=[],a=(n("d3b7"),n("d221")),d={name:"setting-auth-group",components:{PageHeader:function(){return n.e("chunk-2d2380ee").then(n.bind(null,"fe81"))},PageMain:function(){return n.e("chunk-622f45ee").then(n.bind(null,"dddf"))}},data:function(){return{table:[],module:{},loading:!1,order:{order_type:void 0,order_field:void 0}}},mounted:function(){this.handleSubmit()},methods:{handleSubmit:function(t){var e=this;this.loading=!0,Object(a["r"])({}).then((function(t){e.table=t.list||[]})).finally((function(){e.loading=!1}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))}}},o=d,c=n("2877"),i=Object(c["a"])(o,r,u,!1,null,null,null);e["default"]=i.exports},d221:function(t,e,n){"use strict";n.d(e,"X",(function(){return a})),n.d(e,"x",(function(){return d})),n.d(e,"F",(function(){return o})),n.d(e,"r",(function(){return c})),n.d(e,"H",(function(){return i})),n.d(e,"N",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"k",(function(){return b})),n.d(e,"f",(function(){return l})),n.d(e,"h",(function(){return j})),n.d(e,"I",(function(){return O})),n.d(e,"O",(function(){return h})),n.d(e,"z",(function(){return p})),n.d(e,"C",(function(){return m})),n.d(e,"A",(function(){return v})),n.d(e,"q",(function(){return g})),n.d(e,"y",(function(){return y})),n.d(e,"o",(function(){return k})),n.d(e,"p",(function(){return w})),n.d(e,"Y",(function(){return _})),n.d(e,"n",(function(){return S})),n.d(e,"a",(function(){return x})),n.d(e,"S",(function(){return J})),n.d(e,"D",(function(){return P})),n.d(e,"T",(function(){return $})),n.d(e,"K",(function(){return E})),n.d(e,"L",(function(){return F})),n.d(e,"J",(function(){return H})),n.d(e,"Q",(function(){return M})),n.d(e,"b",(function(){return T})),n.d(e,"W",(function(){return q})),n.d(e,"M",(function(){return z})),n.d(e,"E",(function(){return A})),n.d(e,"P",(function(){return B})),n.d(e,"R",(function(){return C})),n.d(e,"v",(function(){return D})),n.d(e,"V",(function(){return G})),n.d(e,"m",(function(){return I})),n.d(e,"l",(function(){return K})),n.d(e,"U",(function(){return L})),n.d(e,"j",(function(){return N})),n.d(e,"g",(function(){return Q})),n.d(e,"e",(function(){return R})),n.d(e,"G",(function(){return U})),n.d(e,"i",(function(){return V})),n.d(e,"B",(function(){return W})),n.d(e,"d",(function(){return X})),n.d(e,"w",(function(){return Y})),n.d(e,"u",(function(){return Z})),n.d(e,"s",(function(){return tt})),n.d(e,"t",(function(){return et}));var r=n("5530"),u=n("bc07");function a(t){return Object(u["a"])({url:"/dev/version/post",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(u["a"])({url:"/dev/version/fetch",method:"post",data:Object(r["a"])({},t)})}function o(t){return Object(u["a"])({url:"/dev/channel/status",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(u["a"])({url:"/dev/channel/fetch",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(u["a"])({url:"/dev/device/post",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(u["a"])({url:"/dev/alipay/post",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(u["a"])({url:"/dev/system/delete",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(u["a"])({url:"/dev/system/fetch",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(u["a"])({url:"/dev/device/delete",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(u["a"])({url:"/dev/alipay/delete",method:"post",data:Object(r["a"])({},t)})}function O(t){return Object(u["a"])({url:"/dev/device/status",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(u["a"])({url:"/dev/alipay/status",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(u["a"])({url:"/dev/recharge/post",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(u["a"])({url:"/dev/withdrawal/post",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(u["a"])({url:"/dev/recharge/status",method:"post",data:Object(r["a"])({},t)})}function g(t){return Object(u["a"])({url:"/dev/recharge/fetch",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(u["a"])({url:"/dev/withdrawal/fetch",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(u["a"])({url:"/dev/bank/fetch",method:"post",data:Object(r["a"])({},t)})}function w(t){return Object(u["a"])({url:"/dev/card/fetch",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(u["a"])({url:"/dev/analysis/stat",method:"post",data:Object(r["a"])({},t)})}function S(t){return Object(u["a"])({url:"/dev/balance/fetch",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(u["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function J(t){return Object(u["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function P(t){return Object(u["a"])({url:"/dev/withdrawal/status",method:"post",data:Object(r["a"])({},t)})}function $(t){return Object(u["a"])({url:"/dev/user/member",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function E(t){return Object(u["a"])({url:"/dev/chain/post",method:"post",data:Object(r["a"])({},t)})}function F(t){return Object(u["a"])({url:"/dev/member/post",method:"post",data:Object(r["a"])({},t)})}function H(t){return Object(u["a"])({url:"/dev/card/member",method:"post",data:Object(r["a"])({},t)})}function M(t){return Object(u["a"])({url:"/dev/card/post",method:"post",data:Object(r["a"])({},t)})}function T(t){return Object(u["a"])({url:"/dev/card/bind",method:"post",data:Object(r["a"])({},t)})}function q(t,e){return Object(u["a"])({url:"/dev/user/status",method:"post",data:{keys:t,status:e}})}function z(t,e){return Object(u["a"])({url:"/dev/member/status",method:"post",data:{keys:t,status:e}})}function A(t,e){return Object(u["a"])({url:"/dev/bank/status",method:"post",data:{keys:t,status:e}})}function B(t,e){return Object(u["a"])({url:"/dev/card/status",method:"post",data:{keys:t,status:e}})}function C(t){return Object(u["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function D(t){return Object(u["a"])({url:"/dev/agency/top",method:"post",data:Object(r["a"])({},t)})}function G(t){return Object(u["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function I(t){return Object(u["a"])({url:"/dev/agency/fetch",method:"post",data:Object(r["a"])({},t)})}function K(t){return Object(u["a"])({url:"/dev/agent/limit",method:"post",data:Object(r["a"])({},t)})}function L(t){return Object(u["a"])({url:"/dev/agent/post",method:"post",data:Object(r["a"])({},t)})}function N(t){return Object(u["a"])({url:"/dev/user/delete",method:"post",data:Object(r["a"])({},t)})}function Q(t){return Object(u["a"])({url:"/dev/member/delete",method:"post",data:Object(r["a"])({},t)})}function R(t){return Object(u["a"])({url:"/dev/channel/delete",method:"post",data:Object(r["a"])({},t)})}function U(t){return Object(u["a"])({url:"/dev/channel/post",method:"post",data:Object(r["a"])({},t)})}function V(t){return Object(u["a"])({url:"/dev/card/delete",method:"post",data:Object(r["a"])({},t)})}function W(t){return Object(u["a"])({url:"/dev/bank/post",method:"post",data:Object(r["a"])({},t)})}function X(t){return Object(u["a"])({url:"/dev/bank/delete",method:"post",data:Object(r["a"])({},t)})}function Y(t){return Object(u["a"])({url:"/dev/user/fetch",method:"post",data:Object(r["a"])({},t)})}function Z(t){return Object(u["a"])({url:"/dev/alipay/fetch",method:"post",data:Object(r["a"])({},t)})}function tt(t){return Object(u["a"])({url:"/dev/device/fetch",method:"post",data:Object(r["a"])({},t)})}function et(t){return Object(u["a"])({url:"/dev/member/fetch",method:"post",data:Object(r["a"])({},t)})}}}]);