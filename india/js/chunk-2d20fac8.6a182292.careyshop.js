(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fac8"],{b543:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增应用")])],1):t._e(),t.auth.enable||t.auth.disable?a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1):t._e(),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"名称",prop:"app_name","min-width":"180"}}),a("el-table-column",{attrs:{label:"钥匙",prop:"app_key","min-width":"100"}}),a("el-table-column",{attrs:{label:"密钥",prop:"app_secret","min-width":"220"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e(),t.auth.replace?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleReplace(e.$index)}}},[t._v("重置密钥")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"app_name"}},[a("el-input",{attrs:{placeholder:"请输入应用名称",clearable:!0},model:{value:t.form.app_name,callback:function(e){t.$set(t.form,"app_name",e)},expression:"form.app_name"}})],1),a("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},i=[],l=(a("99af"),a("4160"),a("c975"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("159b"),a("5530")),s=a("2111"),o=a("ca00"),r={props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,replace:!1,enable:!1,disable:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑应用",create:"新增应用"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},form:{app_name:void 0,captcha:void 0,status:void 0},rules:{app_name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:30,message:"长度不能大于 30 个字符",trigger:"blur"}],status:[{type:"enum",enum:["0","1"],message:"值的范围必须为 0 或 1",trigger:"change"}]}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/setting/app/app/add"),this.auth.set=this.$permission("/setting/app/app/set"),this.auth.del=this.$permission("/setting/app/app/del"),this.auth.replace=this.$permission("/setting/app/app/replace"),this.auth.enable=this.$permission("/setting/app/app/enable"),this.auth.disable=this.$permission("/setting/app/app/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.app_id)})):e.push(this.currentTableData[t].app_id),e},handleSelectionChange:function(t){this.multipleSelection=t},handleCreate:function(){var t=this;this.form={app_name:void 0,captcha:"0",status:"1"},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["a"])(t.form).then((function(e){t.currentTableData.unshift(e.data),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this._getIdList(t);if(0!==i.length){if(!n){var o=this.currentTableData[t],r=o.status?0:1;if(o.status>1)return;if(0===r&&!this.auth.disable)return;if(1===r&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(l["a"])(Object(l["a"])({},o),{},{status:2})),void c(i,r,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(i,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(t,e,a){Object(s["f"])(t,e).then((function(){a.currentTableData.forEach((function(n,i){-1!==t.indexOf(n.app_id)&&a.$set(a.currentTableData,i,Object(l["a"])(Object(l["a"])({},n),{},{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["b"])(a).then((function(){o["a"].deleteDataList(e.currentTableData,a,"app_id"),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleUpdate:function(t){var e=this;this.currentIndex=t;var a=this.currentTableData[t];this.form=Object(l["a"])(Object(l["a"])({},a),{},{captcha:a.captcha.toString(),status:a.status.toString()}),this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["e"])(t.form).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(l["a"])(Object(l["a"])({},t.currentTableData[t.currentIndex]),e.data)),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleReplace:function(t){var e=this,a=this.currentTableData[t];this.$confirm("确定要重置 ".concat(a.app_name," 的密钥吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["d"])(a.app_id).then((function(n){e.$set(e.currentTableData,t,Object(l["a"])(Object(l["a"])({},a),n.data)),e.$notify({title:"重置密钥",dangerouslyUseHTMLString:!0,message:"".concat(a.app_name," 的密钥已重置为：</br>").concat(n.data.app_secret),type:"success",position:"bottom-right",duration:0})}))})).catch((function(){}))}}},c=r,u=a("2877"),d=Object(u["a"])(c,n,i,!1,null,null,null);e["default"]=d.exports}}]);