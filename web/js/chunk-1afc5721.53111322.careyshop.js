(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1afc5721"],{"2f46":function(t,e,n){"use strict";n("5530"),n("bc07")},3851:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,group:t.group},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,member:t.member,group:t.group,channel:t.channel},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},u=[],a=(n("d3b7"),n("5530")),o=n("d221"),c=(n("c784"),n("2f46"),{name:"member-user-client",components:{PageHeader:function(){return n.e("chunk-2d0dacf4").then(n.bind(null,"6cd5"))},PageMain:function(){return n.e("chunk-9d456fec").then(n.bind(null,"115f"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,table:[],group:[],channel:[],member:[],page:{current:1,size:50,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(o["w"])(Object(a["a"])(Object(a["a"])({},t),{},{group_id:4,currentPage:this.page.current,pageSize:this.page.size})).then((function(t){e.table=t.data.result||[],e.page.total=t.data.pagination.total})).finally((function(){e.loading=!1}))}}}),d=c,i=n("2877"),s=Object(i["a"])(d,r,u,!1,null,null,null);e["default"]=s.exports},c784:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return f}));var r=n("5530"),u=n("bc07"),a="/dev/role/fetch";function o(t){return Object(u["a"])({url:"/dev/role/post",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(u["a"])({url:"/dev/role/post",method:"post",data:Object(r["a"])({method:"set.auth.group.item"},t)})}function d(t){return Object(u["a"])({url:"/dev/role/delete",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(u["a"])({url:a,method:"post",data:Object(r["a"])({},t)})}function s(t,e){return Object(u["a"])({url:a,method:"post",data:{method:"set.auth.group.status",group_id:t,status:e}})}function f(t,e){return Object(u["a"])({url:a,method:"post",data:{method:"set.auth.group.sort",group_id:t,sort:e}})}},d221:function(t,e,n){"use strict";n.d(e,"V",(function(){return a})),n.d(e,"x",(function(){return o})),n.d(e,"D",(function(){return c})),n.d(e,"q",(function(){return d})),n.d(e,"F",(function(){return i})),n.d(e,"L",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"j",(function(){return b})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return h})),n.d(e,"G",(function(){return p})),n.d(e,"M",(function(){return j})),n.d(e,"y",(function(){return O})),n.d(e,"B",(function(){return m})),n.d(e,"z",(function(){return v})),n.d(e,"p",(function(){return g})),n.d(e,"r",(function(){return k})),n.d(e,"n",(function(){return _})),n.d(e,"o",(function(){return y})),n.d(e,"m",(function(){return S})),n.d(e,"a",(function(){return w})),n.d(e,"Q",(function(){return P})),n.d(e,"R",(function(){return $})),n.d(e,"I",(function(){return z})),n.d(e,"J",(function(){return q})),n.d(e,"H",(function(){return x})),n.d(e,"O",(function(){return F})),n.d(e,"U",(function(){return T})),n.d(e,"K",(function(){return C})),n.d(e,"C",(function(){return J})),n.d(e,"N",(function(){return R})),n.d(e,"P",(function(){return E})),n.d(e,"v",(function(){return H})),n.d(e,"T",(function(){return M})),n.d(e,"l",(function(){return A})),n.d(e,"k",(function(){return B})),n.d(e,"S",(function(){return D})),n.d(e,"i",(function(){return G})),n.d(e,"f",(function(){return I})),n.d(e,"d",(function(){return K})),n.d(e,"E",(function(){return L})),n.d(e,"h",(function(){return N})),n.d(e,"A",(function(){return Q})),n.d(e,"c",(function(){return U})),n.d(e,"w",(function(){return V})),n.d(e,"u",(function(){return W})),n.d(e,"s",(function(){return X})),n.d(e,"t",(function(){return Y}));var r=n("5530"),u=n("bc07");function a(t){return Object(u["a"])({url:"/dev/version/post",method:"post",data:Object(r["a"])({},t)})}function o(t){return Object(u["a"])({url:"/dev/version/fetch",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(u["a"])({url:"/dev/channel/status",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(u["a"])({url:"/dev/channel/fetch",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(u["a"])({url:"/dev/device/post",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(u["a"])({url:"/dev/qrcode/post",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(u["a"])({url:"/dev/log/delete",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(u["a"])({url:"/dev/log/fetch",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(u["a"])({url:"/dev/device/delete",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(u["a"])({url:"/dev/qrcode/delete",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(u["a"])({url:"/dev/device/status",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(u["a"])({url:"/dev/qrcode/status",method:"post",data:Object(r["a"])({},t)})}function O(t){return Object(u["a"])({url:"/dev/balance/post",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(u["a"])({url:"/dev/bill/post",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(u["a"])({url:"/dev/balance/change",method:"post",data:Object(r["a"])({},t)})}function g(t){return Object(u["a"])({url:"/dev/balance/cash",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(u["a"])({url:"/dev/balance/deposit",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(u["a"])({url:"/dev/bank/fetch",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(u["a"])({url:"/dev/card/fetch",method:"post",data:Object(r["a"])({},t)})}function S(t){return Object(u["a"])({url:"/dev/balance/fetch",method:"post",data:Object(r["a"])({},t)})}function w(t){return Object(u["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function P(t){return Object(u["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function $(t){return Object(u["a"])({url:"/dev/user/member",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function z(t){return Object(u["a"])({url:"/dev/chain/post",method:"post",data:Object(r["a"])({},t)})}function q(t){return Object(u["a"])({url:"/dev/member/post",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(u["a"])({url:"/dev/card/member",method:"post",data:Object(r["a"])({},t)})}function F(t){return Object(u["a"])({url:"/dev/card/post",method:"post",data:Object(r["a"])({},t)})}function T(t,e){return Object(u["a"])({url:"/dev/user/status",method:"post",data:{keys:t,status:e}})}function C(t,e){return Object(u["a"])({url:"/dev/member/status",method:"post",data:{keys:t,status:e}})}function J(t,e){return Object(u["a"])({url:"/dev/bank/status",method:"post",data:{keys:t,status:e}})}function R(t,e){return Object(u["a"])({url:"/dev/card/status",method:"post",data:{keys:t,status:e}})}function E(t){return Object(u["a"])({url:"/dev/user/default",method:"post",data:Object(r["a"])({},t)})}function H(t){return Object(u["a"])({url:"/dev/agency/top",method:"post",data:Object(r["a"])({},t)})}function M(t){return Object(u["a"])({url:"/dev/user/refer",method:"post",data:Object(r["a"])({},t)})}function A(t){return Object(u["a"])({url:"/dev/agency/fetch",method:"post",data:Object(r["a"])({},t)})}function B(t){return Object(u["a"])({url:"/dev/agency/limit",method:"post",data:Object(r["a"])({},t)})}function D(t){return Object(u["a"])({url:"/dev/agency/set",method:"post",data:Object(r["a"])({},t)})}function G(t){return Object(u["a"])({url:"/dev/user/delete",method:"post",data:Object(r["a"])({},t)})}function I(t){return Object(u["a"])({url:"/dev/member/delete",method:"post",data:Object(r["a"])({},t)})}function K(t){return Object(u["a"])({url:"/dev/channel/delete",method:"post",data:Object(r["a"])({},t)})}function L(t){return Object(u["a"])({url:"/dev/channel/post",method:"post",data:Object(r["a"])({},t)})}function N(t){return Object(u["a"])({url:"/dev/card/delete",method:"post",data:Object(r["a"])({},t)})}function Q(t){return Object(u["a"])({url:"/dev/bank/post",method:"post",data:Object(r["a"])({},t)})}function U(t){return Object(u["a"])({url:"/dev/bank/delete",method:"post",data:Object(r["a"])({},t)})}function V(t){return Object(u["a"])({url:"/dev/user/fetch",method:"post",data:Object(r["a"])({},t)})}function W(t){return Object(u["a"])({url:"/dev/qrcode/fetch",method:"post",data:Object(r["a"])({},t)})}function X(t){return Object(u["a"])({url:"/dev/device/fetch",method:"post",data:Object(r["a"])({},t)})}function Y(t){return Object(u["a"])({url:"/dev/member/fetch",method:"post",data:Object(r["a"])({},t)})}}}]);