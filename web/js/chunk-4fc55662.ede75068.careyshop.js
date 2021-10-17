(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fc55662"],{"4f58":function(e,t,a){},5163:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增卡片")])],1):e._e(),e.auth.enable||e.auth.disable?a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,2,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),e.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e()],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"编号",prop:"id","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.card.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"姓名",prop:"card.name"}}),a("el-table-column",{attrs:{label:"设备标识",prop:"card.device_id"}}),a("el-table-column",{attrs:{label:"卡商账号",prop:"user.username"}}),a("el-table-column",{attrs:{label:"业务类型",prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"mini",effect:"dark",type:e.serviceMap[t.row.card.type].type}},[e._v(" "+e._s(e.serviceMap[t.row.card.type].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"余额",prop:"balance"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.card.balance))+" ")]}}])}),a("el-table-column",{attrs:{label:"电话",prop:"card.mobile"}}),a("el-table-column",{attrs:{label:"卡号",prop:"card.code"}}),a("el-table-column",{attrs:{label:"银行",prop:"bank.name"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.card.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"}},[e._v(" "+e._s(e.statusMap[t.row.card.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"创建时间","show-overflow-tooltip":!0,prop:"created_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.card.created_at))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e(),e.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:2}},[e._v("禁用")]),a("el-radio",{attrs:{label:3}},[e._v("冻结")]),a("el-radio",{attrs:{label:4}},[e._v("风控")]),a("el-radio",{attrs:{label:5}},[e._v("挂失")]),a("el-radio",{attrs:{label:6}},[e._v("锁定")])],1)],1),a("el-form-item",{attrs:{label:"业务类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.serviceType,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"开户银行",prop:"bank_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.bank_id,callback:function(t){e.$set(e.form,"bank_id",t)},expression:"form.bank_id"}},e._l(e.group,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"卡片余额",prop:"balance"}},[a("el-input-number",{attrs:{max:5e5,min:1,"controls-position":"right",placeholder:"请输入卡片余额",clearable:!0},model:{value:e.form.balance,callback:function(t){e.$set(e.form,"balance",t)},expression:"form.balance"}})],1),a("el-form-item",{attrs:{label:"持卡姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"请输入卡手机号码",clearable:!0},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),a("el-form-item",{attrs:{label:"银行卡号",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入卡号",clearable:!0},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),a("el-form-item",{attrs:{label:"登录密码",prop:"login_pwd"}},[a("el-input",{attrs:{placeholder:"请输入登录密码",clearable:!0},model:{value:e.form.login_pwd,callback:function(t){e.$set(e.form,"login_pwd",t)},expression:"form.login_pwd"}})],1),a("el-form-item",{attrs:{label:"支付密码",prop:"tran_pwd"}},[a("el-input",{attrs:{placeholder:"请输入支付密码",clearable:!0},model:{value:e.form.tran_pwd,callback:function(t){e.$set(e.form,"tran_pwd",t)},expression:"form.tran_pwd"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{title:"卡片分配",visible:e.dialogBindVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogBindVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"选择商户",prop:"bank_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.bank_id,callback:function(t){e.$set(e.form,"bank_id",t)},expression:"form.bank_id"}},e._l(e.member,(function(e){return a("el-option",{key:e.user.id,attrs:{label:e.member.name,value:e.user.id}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogBindVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.bind}},[e._v("确定")])],1)],1)],1)},r=[],l=(a("99af"),a("4160"),a("c975"),a("d3b7"),a("159b"),a("5530")),i=a("b85c"),o=a("d221"),s=(a("6e85"),a("ca00")),c=(a("a285"),a("5ef3"),{components:{csUpload:function(){return a.e("chunk-7aed0762").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-497c3ecd").then(a.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){return{member:[],currentTableData:[],multipleSelection:[],serviceType:[],card_id:0,role_id:0,dialogBindVisible:!1,auth:{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑卡片",create:"新增卡片"},serviceMap:{2:{text:"代付业务",type:""},3:{text:"代收业务",type:"warning"},4:{text:"收付业务",type:"success"}},statusMap:{3:{text:"冻结",type:"danger"},4:{text:"风控",type:"danger"},5:{text:"挂失",type:"danger"},6:{text:"锁定",type:"danger"},2:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},0:{text:"...",type:"info"}},form:{type:2,status:1,max:1e3,mobile:void 0,min:1,name:void 0,code:void 0,balance:0,bank_id:void 0,login_pwd:void 0,tran_pwd:void 0},rules:{name:[{required:!0,message:"必填项",trigger:"blur"}],code:[{required:!0,message:"必填项",trigger:"blur"}],login_pwd:[{required:!0,message:"必填项",trigger:"blur"}],mobile:[{required:!0,message:"必填项",trigger:"blur"}],max:[{required:!0,message:"必填项",trigger:"blur"}],balance:[{required:!0,message:"必填项",trigger:"blur"}],min:[{required:!0,message:"必填项",trigger:"blur"}],tran_pwd:[{required:!0,message:"必填项",trigger:"blur"}],bank_id:[{required:!0,message:"必选项",trigger:"change"}],type:[{required:!0,message:"必选项",trigger:"change"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},filters:{getPreviewUrl:function(e){return e?s["a"].getImageCodeUrl(e,"head_pic"):""},getNumber:function(e){return s["a"].getNumber(e)},formatDate:function(e){return s["a"].formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){var e=this;this.role_id=parseInt(s["a"].cookies.get("role_id")),this.serviceType.push({id:2,name:"代付业务"}),this.serviceType.push({id:3,name:"代收业务"}),this.serviceType.push({id:4,name:"收付业务"}),1!=this.role_id&&4!=this.role_id||Object(o["x"])({group_id:3,currentPage:1,pageSize:500}).then((function(t){e.member=t.data.result||[]})).finally((function(){}))},methods:{_validationAuth:function(){},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.card.id)})):t.push(this.currentTableData[e].card.id),t},handleCommand:function(e){switch(e){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&0===t.data[0].type&&(this.form.head_pic=t.data[0].url)}},_getStorageFileList:function(e){if(e.length){var t,a=Object(i["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(0===n.type){this.form.head_pic=n.url;break}}}catch(r){a.e(r)}finally{a.f()}}},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,n=e.order,r={order_type:void 0,order_field:void 0};t&&n&&(r.order_type="ascending"===n?"asc":"desc",r.order_field=a),this.$emit("sort",r)},handleStatus:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this._getIdList(e);function r(e,t,a){Object(o["R"])(e,t).then((function(){a.currentTableData.forEach((function(n,r){-1!==e.indexOf(n.card.id)&&a.$set(a.currentTableData,r,Object(l["a"])(Object(l["a"])({},n),{},{status:t}))})),a.$message.success("操作成功"),a.$emit("refresh")}))}0!==n.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){r(n,a,t)})).finally((function(){})):this.$message.error("请选择要操作的数据")},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["j"])({keys:a}).then((function(){t.$emit("refresh",!0),t.$message.success("操作成功")}))})).finally((function(){})):this.$message.error("请选择要操作的数据")},handleCreate:function(){var e=this;this.form={type:2,status:1,name:void 0,code:void 0,bank_id:void 0,balance:0,max:1e4,min:1,login_pwd:void 0,tran_pwd:void 0},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},bind:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["b"])({id:e.card_id,refer_id:e.form.bank_id}).then((function(){e.dialogBindVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).finally((function(){e.dialogLoading=!1})))}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["S"])(e.form).then((function(){e.dialogFormVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).finally((function(){e.dialogLoading=!1})))}))},handleBind:function(e){this.card_id=e,this.dialogBindVisible=!0},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e].card;this.form=a,this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["S"])(e.form).then((function(t){e.$emit("refresh"),e.dialogFormVisible=!1,e.$message.success("操作成功")})).finally((function(){e.dialogLoading=!1})))}))},handleReset:function(e){var t=this,a=this.currentTableData[e];this.$confirm("确定要重置 ".concat(a.username," 的密码吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){var e=s["a"].randomLenNum(6);setUserPassword(a.user_id,e,e).then((function(){t.$notify({title:"重置密码",dangerouslyUseHTMLString:!0,message:"".concat(a.username," 的密码已重置为：</br>").concat(e),type:"success",position:"bottom-right",duration:0})}))})).finally((function(){}))},handleWithdraw:function(e){this.$router.push({name:"member-user-withdraw",params:{client_id:e}})},handleAddress:function(e){this.$router.push({name:"member-user-address",params:{client_id:e}})}}}),d=c,u=(a("5736"),a("2877")),m=Object(u["a"])(d,n,r,!1,null,"98dfa08a",null);t["default"]=m.exports},5736:function(e,t,a){"use strict";a("4f58")},"5ef3":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a("5530"),r=a("bc07"),l="/v1/payment";function i(e){return Object(r["a"])({url:l,method:"post",data:Object(n["a"])({method:"get.payment.list"},e)})}function o(e){return Object(r["a"])({url:l,method:"post",data:Object(n["a"])({method:"set.payment.item"},e)})}function s(e,t){return Object(r["a"])({url:l,method:"post",data:{method:"set.payment.sort",payment_id:e,sort:t}})}function c(e,t){return Object(r["a"])({url:l,method:"post",data:{method:"set.payment.status",payment_id:e,status:t}})}function d(e){return Object(r["a"])({url:l,method:"post",data:Object(n["a"])({method:"set.payment.finance"},e)})}},a285:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("bc07"),r="/v1/user_money";function l(e){return Object(n["a"])({url:r,method:"post",data:{method:"get.user.money.info",client_id:e}})}}}]);