(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76731b46"],{3217:function(e,t,r){},"6f1b":function(e,t,r){"use strict";r("3217")},b6c2:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",staticStyle:{"margin-bottom":"-18px"},attrs:{inline:!0,model:e.form,size:"mini"}},[r("el-form-item",{attrs:{label:"流水号",prop:"order_code"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"可输入售后单号/订单号",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.order_code,callback:function(t){e.$set(e.form,"order_code",t)},expression:"form.order_code"}})],1),r("el-form-item",{attrs:{label:"账号",prop:"account"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"可输入账号/昵称",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",disabled:e.loading},on:{click:function(t){return e.handleFormSubmit(!0)}}},[e._v("查询")])],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.handleFormReset}},[e._v("重置")])],1),r("el-form-item",[r("el-popover",{attrs:{width:"383",placement:"bottom",trigger:"click"}},[r("div",{staticClass:"more-filter"},[r("el-form-item",{attrs:{label:"我的工单",prop:"my_service"}},[r("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.form.my_service,callback:function(t){e.$set(e.form,"my_service",t)},expression:"form.my_service"}},[e._v("仅显示我的工单")])],1),r("el-form-item",{attrs:{label:"事件过滤",prop:"new_event"}},[r("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.form.new_event,callback:function(t){e.$set(e.form,"new_event",t)},expression:"form.new_event"}},[e._v("仅显示新事件")])],1),r("el-form-item",{attrs:{label:"售后类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeMap,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1),r("el-form-item",{attrs:{label:"创建日期",prop:"time_period"}},[r("el-date-picker",{staticStyle:{width:"315px"},attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form.time_period,callback:function(t){e.$set(e.form,"time_period",t)},expression:"form.time_period"}})],1)],1),r("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[r("span",[e._v("更多筛选")]),r("i",{staticClass:"el-icon-arrow-down cs-pl-5"})])],1)],1)],1)},l=[],i={props:{loading:{default:!1},typeMap:{default:function(){}}},data:function(){return{form:{order_code:void 0,account:void 0,type:void 0,new_event:"0",my_service:"0",begin_time:void 0,end_time:void 0,time_period:null}}},methods:{handleFormSubmit:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={};for(var r in this.form)Object.prototype.hasOwnProperty.call(this.form,r)&&("time_period"!==r?t[r]=this.form[r]:this.form[r]&&2===this.form[r].length&&(t.begin_time=this.form[r][0].toUTCString(),t.end_time=this.form[r][1].toUTCString()));this.$emit("submit",t,e)},handleFormReset:function(){this.form.time_period=null,this.$refs.form.resetFields()}}},n=i,a=(r("6f1b"),r("0c7c")),c=Object(a["a"])(n,o,l,!1,null,"640a6967",null);t["default"]=c.exports}}]);