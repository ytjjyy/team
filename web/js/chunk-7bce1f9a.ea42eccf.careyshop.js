(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bce1f9a"],{2219:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,group:t.group,level:t.level},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,group:t.group},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],u=(n("4160"),n("d3b7"),n("159b"),n("5530")),o=n("d221"),c=(n("c784"),n("2f46"),n("ca00")),d=n("0592"),i={name:"member-user-client",components:{PageHeader:function(){return n.e("chunk-2d0d2f6f").then(n.bind(null,"5b6b"))},PageMain:function(){return n.e("chunk-0aeab94c").then(n.bind(null,"4814"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,table:[],group:[],level:[],page:{current:1,size:50,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;this.handleSubmit();var e=parseInt(c["a"].cookies.get("role_id"));if(2==e){var n=[];Object(d["b"])().then((function(e){e.chainData.forEach((function(t){n.push({id:t.channel.id,title:t.channel.title,rate:t.rate,fee:t.fee})})),t.group=n}))}else Object(o["s"])({}).then((function(e){t.group=e.list||[]}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(o["u"])(Object(u["a"])(Object(u["a"])({},t),{},{currentPage:this.page.current,pageSize:this.page.size})).then((function(t){e.table=t.list||[],e.page.total=t.pagination.total})).finally((function(){e.loading=!1}))}}},s=i,f=n("2877"),l=Object(f["a"])(s,r,a,!1,null,null,null);e["default"]=l.exports},"2f46":function(t,e,n){"use strict";n("5530"),n("bc07")},c784:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return f}));var r=n("5530"),a=n("bc07"),u="/dev/role/fetch";function o(t){return Object(a["a"])({url:"/dev/role/post",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(a["a"])({url:"/dev/role/post",method:"post",data:Object(r["a"])({method:"set.auth.group.item"},t)})}function d(t){return Object(a["a"])({url:"/dev/role/delete",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(a["a"])({url:u,method:"post",data:Object(r["a"])({},t)})}function s(t,e){return Object(a["a"])({url:u,method:"post",data:{method:"set.auth.group.status",group_id:t,status:e}})}function f(t,e){return Object(a["a"])({url:u,method:"post",data:{method:"set.auth.group.sort",group_id:t,sort:e}})}},d221:function(t,e,n){"use strict";n.d(e,"Y",(function(){return u})),n.d(e,"y",(function(){return o})),n.d(e,"G",(function(){return c})),n.d(e,"s",(function(){return d})),n.d(e,"I",(function(){return i})),n.d(e,"O",(function(){return s})),n.d(e,"d",(function(){return f})),n.d(e,"l",(function(){return l})),n.d(e,"g",(function(){return b})),n.d(e,"i",(function(){return h})),n.d(e,"J",(function(){return p})),n.d(e,"P",(function(){return j})),n.d(e,"A",(function(){return O})),n.d(e,"D",(function(){return m})),n.d(e,"B",(function(){return v})),n.d(e,"r",(function(){return g})),n.d(e,"z",(function(){return k})),n.d(e,"p",(function(){return y})),n.d(e,"q",(function(){return w})),n.d(e,"Z",(function(){return _})),n.d(e,"o",(function(){return S})),n.d(e,"a",(function(){return P})),n.d(e,"T",(function(){return $})),n.d(e,"E",(function(){return z})),n.d(e,"U",(function(){return x})),n.d(e,"L",(function(){return F})),n.d(e,"M",(function(){return T})),n.d(e,"K",(function(){return C})),n.d(e,"R",(function(){return E})),n.d(e,"c",(function(){return J})),n.d(e,"X",(function(){return R})),n.d(e,"N",(function(){return D})),n.d(e,"F",(function(){return H})),n.d(e,"Q",(function(){return I})),n.d(e,"S",(function(){return M})),n.d(e,"w",(function(){return q})),n.d(e,"W",(function(){return A})),n.d(e,"n",(function(){return B})),n.d(e,"b",(function(){return G})),n.d(e,"m",(function(){return K})),n.d(e,"V",(function(){return L})),n.d(e,"k",(function(){return N})),n.d(e,"h",(function(){return Q})),n.d(e,"f",(function(){return U})),n.d(e,"H",(function(){return V})),n.d(e,"j",(function(){return W})),n.d(e,"C",(function(){return X})),n.d(e,"e",(function(){return Y})),n.d(e,"x",(function(){return Z})),n.d(e,"v",(function(){return tt})),n.d(e,"t",(function(){return et})),n.d(e,"u",(function(){return nt}));var r=n("5530"),a=n("bc07");function u(t){return Object(a["a"])({url:"/dev/version/post",method:"post",data:Object(r["a"])({},t)})}function o(t){return Object(a["a"])({url:"/dev/version/fetch",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(a["a"])({url:"/dev/channel/status",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(a["a"])({url:"/dev/channel/fetch",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(a["a"])({url:"/dev/device/post",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(a["a"])({url:"/dev/alipay/post",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(a["a"])({url:"/dev/log/delete",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(a["a"])({url:"/dev/log/fetch",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(a["a"])({url:"/dev/device/delete",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(a["a"])({url:"/dev/alipay/delete",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(a["a"])({url:"/dev/device/status",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(a["a"])({url:"/dev/alipay/status",method:"post",data:Object(r["a"])({},t)})}function O(t){return Object(a["a"])({url:"/dev/recharge/post",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(a["a"])({url:"/dev/withdrawal/post",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(a["a"])({url:"/dev/recharge/status",method:"post",data:Object(r["a"])({},t)})}function g(t){return Object(a["a"])({url:"/dev/recharge/fetch",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(a["a"])({url:"/dev/withdrawal/fetch",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(a["a"])({url:"/dev/bank/fetch",method:"post",data:Object(r["a"])({},t)})}function w(t){return Object(a["a"])({url:"/dev/card/fetch",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(a["a"])({url:"/dev/analysis/stat",method:"post",data:Object(r["a"])({},t)})}function S(t){return Object(a["a"])({url:"/dev/balance/fetch",method:"post",data:Object(r["a"])({},t)})}function P(t){return Object(a["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function $(t){return Object(a["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function z(t){return Object(a["a"])({url:"/dev/withdrawal/status",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(a["a"])({url:"/dev/user/member",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function F(t){return Object(a["a"])({url:"/dev/chain/post",method:"post",data:Object(r["a"])({},t)})}function T(t){return Object(a["a"])({url:"/dev/member/post",method:"post",data:Object(r["a"])({},t)})}function C(t){return Object(a["a"])({url:"/dev/card/member",method:"post",data:Object(r["a"])({},t)})}function E(t){return Object(a["a"])({url:"/dev/card/post",method:"post",data:Object(r["a"])({},t)})}function J(t){return Object(a["a"])({url:"/dev/card/bind",method:"post",data:Object(r["a"])({},t)})}function R(t,e){return Object(a["a"])({url:"/dev/user/status",method:"post",data:{keys:t,status:e}})}function D(t,e){return Object(a["a"])({url:"/dev/member/status",method:"post",data:{keys:t,status:e}})}function H(t,e){return Object(a["a"])({url:"/dev/bank/status",method:"post",data:{keys:t,status:e}})}function I(t,e){return Object(a["a"])({url:"/dev/card/status",method:"post",data:{keys:t,status:e}})}function M(t){return Object(a["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function q(t){return Object(a["a"])({url:"/dev/agency/top",method:"post",data:Object(r["a"])({},t)})}function A(t){return Object(a["a"])({url:"/dev/user/reset",method:"post",data:Object(r["a"])({},t)})}function B(t){return Object(a["a"])({url:"/dev/agency/fetch",method:"post",data:Object(r["a"])({},t)})}function G(t){return Object(a["a"])({url:"/dev/agent/fetch",method:"post",data:Object(r["a"])({},t)})}function K(t){return Object(a["a"])({url:"/dev/agent/limit",method:"post",data:Object(r["a"])({},t)})}function L(t){return Object(a["a"])({url:"/dev/agent/post",method:"post",data:Object(r["a"])({},t)})}function N(t){return Object(a["a"])({url:"/dev/user/delete",method:"post",data:Object(r["a"])({},t)})}function Q(t){return Object(a["a"])({url:"/dev/member/delete",method:"post",data:Object(r["a"])({},t)})}function U(t){return Object(a["a"])({url:"/dev/channel/delete",method:"post",data:Object(r["a"])({},t)})}function V(t){return Object(a["a"])({url:"/dev/channel/post",method:"post",data:Object(r["a"])({},t)})}function W(t){return Object(a["a"])({url:"/dev/card/delete",method:"post",data:Object(r["a"])({},t)})}function X(t){return Object(a["a"])({url:"/dev/bank/post",method:"post",data:Object(r["a"])({},t)})}function Y(t){return Object(a["a"])({url:"/dev/bank/delete",method:"post",data:Object(r["a"])({},t)})}function Z(t){return Object(a["a"])({url:"/dev/user/fetch",method:"post",data:Object(r["a"])({},t)})}function tt(t){return Object(a["a"])({url:"/dev/alipay/fetch",method:"post",data:Object(r["a"])({},t)})}function et(t){return Object(a["a"])({url:"/dev/device/fetch",method:"post",data:Object(r["a"])({},t)})}function nt(t){return Object(a["a"])({url:"/dev/member/fetch",method:"post",data:Object(r["a"])({},t)})}}}]);