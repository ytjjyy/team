(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1136664a"],{5163:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增")])],1):e._e(),e.auth.enable||e.auth.disable?a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,2,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),e.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e()],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{label:"编号",prop:"id","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.card.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"卡商账号",prop:"user.username"}}),a("el-table-column",{attrs:{label:"姓名",prop:"card.name"}}),a("el-table-column",{attrs:{label:"账号","show-overflow-tooltip":!0,prop:"card.code"}}),a("el-table-column",{attrs:{label:"轮训次数",prop:"card.round_id"}}),a("el-table-column",{attrs:{label:"单日限额",prop:"card.max"}}),a("el-table-column",{attrs:{label:"单日笔数",prop:"card.limit"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.card.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"}},[e._v(" "+e._s(e.statusMap[t.row.card.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"备注",prop:"card.desc"}}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"单日限额",prop:"max"}},[a("el-input-number",{attrs:{max:2e6,min:1,"controls-position":"right",placeholder:"请输入单日收款限额",clearable:!0},model:{value:e.form.max,callback:function(t){e.$set(e.form,"max",t)},expression:"form.max"}})],1),a("el-form-item",{attrs:{label:"单日笔数",prop:"limit"}},[a("el-input",{attrs:{placeholder:"请输入单日收款笔数",clearable:!0},model:{value:e.form.limit,callback:function(t){e.$set(e.form,"limit",t)},expression:"form.limit"}})],1),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"账号",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入账号",clearable:!0},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请填写备注",maxlength:"1000","show-word-limit":""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{title:"分配",visible:e.dialogBindVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogBindVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"选择商户",prop:"bank_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.bank_id,callback:function(t){e.$set(e.form,"bank_id",t)},expression:"form.bank_id"}},e._l(e.member,(function(e){return a("el-option",{key:e.user.id,attrs:{label:e.member.name,value:e.user.id}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogBindVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.bind}},[e._v("确定")])],1)],1),a("el-dialog",{attrs:{title:"查看",visible:e.qrVisible,"close-on-click-modal":!1,width:"250px"},on:{"update:visible":function(t){e.qrVisible=t}}},[a("vue-qr",{attrs:{text:e.text,size:200}})],1)],1)},n=[],l=a("5530"),r=a("b85c"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("99af"),a("d221")),s=(a("5a0c"),a("ca00")),c=(a("a285"),a("5ef3"),a("658f5")),d=a.n(c),u={components:{vueQr:d.a,csUpload:function(){return a.e("chunk-ffdb9d28").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-5089710b").then(a.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){return{uploadUrl:"http://".concat(window.location.host,"/pub/file/upload"),member:[],channel:[],fileList:[],text:"",qrVisible:!1,currentTableData:[],multipleSelection:[],serviceType:[],card_id:0,role_id:0,dialogBindVisible:!1,auth:{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新增"},serviceMap:{2:{text:"代付业务",type:""},3:{text:"代收业务",type:"warning"},4:{text:"收付业务",type:"success"}},serviceRunMap:{1:{text:"支付宝零钱",type:"success"},2:{text:"支付宝转账",type:""},3:{text:"银行卡",type:""},4:{text:"USDT",type:""}},statusMap:{3:{text:"冻结",type:"danger"},4:{text:"风控",type:"danger"},5:{text:"挂失",type:"danger"},6:{text:"锁定",type:"danger"},2:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},0:{text:"...",type:"info"}},form:{type:2,biz:5,limit:15,url:void 0,status:1,mode:1,max:8e4,mobile:void 0,min:1,desc:void 0,name:void 0,code:void 0,balance:0,bank_id:void 0,login_pwd:void 0,tran_pwd:void 0},rules:{name:[{required:!0,message:"必填项",trigger:"blur"}],code:[{required:!0,message:"必填项",trigger:"blur"}],login_pwd:[{required:!0,message:"必填项",trigger:"blur"}],max:[{required:!0,message:"必填项",trigger:"blur"}],balance:[{required:!0,message:"必填项",trigger:"blur"}],min:[{required:!0,message:"必填项",trigger:"blur"}],tran_pwd:[{required:!0,message:"必填项",trigger:"blur"}],bank_id:[{required:!0,message:"必选项",trigger:"change"}],type:[{required:!0,message:"必选项",trigger:"change"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},filters:{getPreviewUrl:function(e){return e?s["a"].getImageCodeUrl(e,"head_pic"):""},getNumber:function(e){return s["a"].getNumber(e)},formatDate:function(e){return s["a"].formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){var e=this;Object(o["r"])({status:1}).then((function(t){e.channel=t.data.result||[]})),this.role_id=parseInt(s["a"].cookies.get("role_id")),this.serviceType.push({id:2,name:"代付业务"}),this.serviceType.push({id:3,name:"代收业务"}),this.serviceType.push({id:4,name:"收付业务"})},methods:{mkqr:function(e){this.text=e,this.qrVisible=!0},_validationAuth:function(){},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.card.id)})):t.push(this.currentTableData[e].card.id),t},handleCommand:function(e){switch(e){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&0===t.data[0].type&&(this.form.head_pic=t.data[0].url)}},_getStorageFileList:function(e){if(e.length){var t,a=Object(r["a"])(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(0===i.type){this.form.head_pic=i.url;break}}}catch(n){a.e(n)}finally{a.f()}}},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,i=e.order,n={order_type:void 0,order_field:void 0};t&&i&&(n.order_type="ascending"===i?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleSuccess:function(e,t){this.form.url=e.data,this.$message.success(e.data)},handleStatus:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this._getIdList(e);function n(e,t,a){Object(o["N"])(e,t).then((function(){a.currentTableData.forEach((function(i,n){-1!==e.indexOf(i.card.id)&&a.$set(a.currentTableData,n,Object(l["a"])(Object(l["a"])({},i),{},{status:t}))})),a.$message.success("操作成功"),a.$emit("refresh")}))}0!==i.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){n(i,a,t)})).finally((function(){})):this.$message.error("请选择要操作的数据")},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["i"])({keys:a}).then((function(){t.$emit("refresh",!0),t.$message.success("操作成功")}))})).finally((function(){})):this.$message.error("请选择要操作的数据")},handleCreate:function(){var e=this;this.form={type:1,status:1,biz:5,mode:1,limit:15,name:void 0,code:void 0,bank_id:void 0,url:void 0,balance:0,max:8e4,min:1,login_pwd:void 0,tran_pwd:void 0},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},bind:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["b"])({id:e.card_id,refer_id:e.form.bank_id}).then((function(){e.dialogBindVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).finally((function(){e.dialogLoading=!1})))}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["O"])(e.form).then((function(){e.dialogFormVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).finally((function(){e.dialogLoading=!1})))}))},handleBind:function(e){this.card_id=e,this.dialogBindVisible=!0},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e].card;this.form=a,this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["O"])(e.form).then((function(t){e.$emit("refresh"),e.dialogFormVisible=!1,e.$message.success("操作成功")})).finally((function(){e.dialogLoading=!1})))}))},handleReset:function(e){var t=this,a=this.currentTableData[e];this.$confirm("确定要重置 ".concat(a.username," 的密码吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){var e=s["a"].randomLenNum(6);setUserPassword(a.user_id,e,e).then((function(){t.$notify({title:"重置密码",dangerouslyUseHTMLString:!0,message:"".concat(a.username," 的密码已重置为：</br>").concat(e),type:"success",position:"bottom-right",duration:0})}))})).finally((function(){}))},handleWithdraw:function(e){this.$router.push({name:"member-user-withdraw",params:{client_id:e}})},handleAddress:function(e){this.$router.push({name:"member-user-address",params:{client_id:e}})}}},m=u,f=(a("b802"),a("0c7c")),p=Object(f["a"])(m,i,n,!1,null,"3f1da55e",null);t["default"]=p.exports},b802:function(e,t,a){"use strict";a("c6f3")},c6f3:function(e,t,a){}}]);