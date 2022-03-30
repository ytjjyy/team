(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3700e79e"],{"1b8f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.enable||e.auth.disable?a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,2,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),e.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"编号",prop:"id","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.device.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"设备别名",prop:"device.name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"接单频率/秒",prop:"device.rate","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"卡商",prop:"user.username","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"设备标识",prop:"device.uuid"}}),a("el-table-column",{attrs:{label:"设备信息",prop:"device.desc"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.device.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"}},[e._v(" "+e._s(e.statusMap[t.row.device.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"创建时间",prop:"created_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.device.created_at))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{label:"设备别名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入设备别名",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"接单频率",prop:"rate"}},[a("el-input-number",{attrs:{max:100,min:5,"controls-position":"right",placeholder:"请输入接单频率,单位（秒）",clearable:!0},model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate",t)},expression:"form.rate"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:e._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:e._getUploadFileList}})],1)],1)},i=[],r=(a("99af"),a("4160"),a("d3b7"),a("159b"),a("5530")),o=a("b85c"),s=a("d221"),l=a("6e85"),c=a.n(l),u=a("ca00"),d=a("a285"),f=a("5ef3"),m={components:{csUpload:function(){return a.e("chunk-7aed0762").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-497c3ecd").then(a.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新增"},statusMap:{2:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},0:{text:"...",type:"info"}},sexMap:{0:"保密",1:"男",2:"女"},legalizeMap:{0:{text:"未认证",type:"warning"},1:{text:"已认证",type:""}},form:{status:1,name:void 0,user_id:void 0,rate:30,uuid:""},rules:{name:[{required:!0,message:"必填项",trigger:"blur"}],max:[{required:!0,validator:u["a"].checkNumber,trigger:"blur"}],min:[{required:!0,validator:u["a"].checkNumber,trigger:"blur"}],fee:[{required:!0,validator:u["a"].checkNumber,trigger:"blur"}],rate:[{required:!0,message:"必填项",trigger:"blur"}],login:[{required:!0,message:"登录密码不能为空",trigger:"blur"}],pwd:[{required:!0,message:"支付密码不能为空",trigger:"blur"}]},toPayment:{},financeLoading:!1,financeVisible:!1,financeForm:{client_id:void 0,money:void 0,points:void 0,to_payment:void 0,source_no:void 0,cause:void 0},financeRules:{to_payment:[{required:!0,message:"至少选择一项",trigger:"change"}],source_no:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],cause:[{required:!0,message:"操作原因不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},filters:{getPreviewUrl:function(e){return e?u["a"].getImageCodeUrl(e,"head_pic"):""},getNumber:function(e){return u["a"].getNumber(e)},formatDate:function(e){return u["a"].formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){},methods:{_validationAuth:function(){},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.device.id)})):t.push(this.currentTableData[e].device.id),t},handleCommand:function(e){switch(e){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&0===t.data[0].type&&(this.form.head_pic=t.data[0].url)}},_getStorageFileList:function(e){if(e.length){var t,a=Object(o["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(0===n.type){this.form.head_pic=n.url;break}}}catch(i){a.e(i)}finally{a.f()}}},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,n=e.order,i={order_type:void 0,order_field:void 0};t&&n&&(i.order_type="ascending"===n?"asc":"desc",i.order_field=a),this.$emit("sort",i)},handleStatus:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this._getIdList(e);if(0!==i.length){if(!n){var o=this.currentTableData[e],l=o.status?0:1;if(o.status>1)return;if(0===l&&!this.auth.disable)return;if(1===l&&!this.auth.enable)return;return this.$set(this.currentTableData,e,Object(r["a"])(Object(r["a"])({},o),{},{status:2})),void c(i,l,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(i,a,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(e,t,a){Object(s["L"])({keys:e,status:t}).then((function(){a.$emit("refresh",!0),a.$message.success("操作成功")}))}},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["h"])({keys:a}).then((function(){t.$emit("refresh",!0),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleCreate:function(){var e=this;this.form={status:1,name:void 0,rate:30},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,e.form.birthday||delete e.form.birthday,Object(s["K"])(e.form).then((function(){e.dialogFormVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).catch((function(){e.dialogLoading=!1})))}))},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e].device;this.form=a,this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(s["K"])(e.form).then((function(t){e.$emit("refresh"),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleReset:function(e){var t=this,a=this.currentTableData[e];this.$confirm("确定要重置 ".concat(a.username," 的密码吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){var e=u["a"].randomLenNum(6);setUserPassword(a.user_id,e,e).then((function(){t.$notify({title:"重置密码",dangerouslyUseHTMLString:!0,message:"".concat(a.username," 的密码已重置为：</br>").concat(e),type:"success",position:"bottom-right",duration:0})}))})).catch((function(){}))},handleWithdraw:function(e){this.$router.push({name:"member-user-withdraw",params:{client_id:e}})},handleAddress:function(e){this.$router.push({name:"member-user-address",params:{client_id:e}})},handleMoney:function(e){var t=this;Object(d["a"])(this.currentTableData[e].user_id).then((function(a){a.data&&t.$notify({title:"账户资金",dangerouslyUseHTMLString:!0,message:"\n              <p>".concat(t.currentTableData[e].username," 的账户资金</p>\n              <p>查询时间：").concat(c()().format("YYYY-MM-DD HH:mm:ss"),"</p></br>\n              <p>累计消费：").concat(u["a"].getNumber(a.data.total_money),"</p>\n              <p>可用余额：").concat(u["a"].getNumber(a.data.balance),"</p>\n              <p>锁定余额：").concat(u["a"].getNumber(a.data.lock_balance),"</p>\n              <p>卡片积分：").concat(a.data.points||0,"</p>\n              <p>锁定积分：").concat(a.data.lock_points||0,"</p>\n            "),type:"success",position:"bottom-right",duration:0})}))},getPaymentSelect:function(){var e=this;this.toPayment.length||Object(f["a"])({type:"deposit",is_select:1}).then((function(t){e.toPayment=t.data||{}}))},handleFinance:function(e){var t=this;this.financeForm={client_id:e,money:0,points:0,to_payment:void 0,source_no:void 0,cause:void 0},this.$nextTick((function(){t.$refs.finance&&t.$refs.finance.clearValidate(),t.financeLoading=!1,t.financeVisible=!0}))},finance:function(){var e=this;this.$refs.finance.validate((function(t){t&&(e.financeLoading=!0,Object(f["b"])(e.financeForm).then((function(){e.financeVisible=!1,e.$message.success("操作成功")})).catch((function(){e.financeLoading=!1})))}))}}},h=m,p=(a("76ff"),a("2877")),g=Object(p["a"])(h,n,i,!1,null,"54f5b78d",null);t["default"]=g.exports},"4fa3":function(e,t,a){},"5ef3":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a("5530"),i=a("bc07"),r="/v1/payment";function o(e){return Object(i["a"])({url:r,method:"post",data:Object(n["a"])({method:"get.payment.list"},e)})}function s(e){return Object(i["a"])({url:r,method:"post",data:Object(n["a"])({method:"set.payment.item"},e)})}function l(e,t){return Object(i["a"])({url:r,method:"post",data:{method:"set.payment.sort",payment_id:e,sort:t}})}function c(e,t){return Object(i["a"])({url:r,method:"post",data:{method:"set.payment.status",payment_id:e,status:t}})}function u(e){return Object(i["a"])({url:r,method:"post",data:Object(n["a"])({method:"set.payment.finance"},e)})}},"76ff":function(e,t,a){"use strict";a("4fa3")},a285:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("bc07"),i="/v1/user_money";function r(e){return Object(n["a"])({url:i,method:"post",data:{method:"get.user.money.info",client_id:e}})}}}]);