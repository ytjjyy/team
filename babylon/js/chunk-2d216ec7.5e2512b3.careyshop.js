(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216ec7"],{c510:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-form",{ref:"form",staticStyle:{"margin-bottom":"-18px"},attrs:{inline:!0,model:e.form,size:"mini"}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"可输入应用安装包名称",clearable:!0},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.name,callback:function(n){e.$set(e.form,"name",n)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"系统标识",prop:"user_agent"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"可输入系统标识",clearable:!0},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.user_agent,callback:function(n){e.$set(e.form,"user_agent",n)},expression:"form.user_agent"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search",disabled:e.loading},on:{click:function(n){return e.handleFormSubmit(!0)}}},[e._v("查询")])],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.handleFormReset}},[e._v("重置")])],1)],1)},o=[],l={props:{loading:{default:!1}},data:function(){return{form:{name:void 0,user_agent:void 0}}},methods:{handleFormSubmit:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("submit",this.form,e)},handleFormReset:function(){this.$refs.form.resetFields()}}},i=l,a=t("2877"),m=Object(a["a"])(i,r,o,!1,null,null,null);n["default"]=m.exports}}]);