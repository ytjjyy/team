(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48dafc5a"],{"449b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cs-p"},[n("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[n("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"编号",prop:"id","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作人",prop:"user.username"}}),n("el-table-column",{attrs:{label:"操作IP",prop:"ip"}}),n("el-table-column",{attrs:{label:"引用ID",prop:"refer_id"}}),n("el-table-column",{attrs:{label:"备注",prop:"desc"}}),n("el-table-column",{attrs:{label:"创建时间",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatDate")(e.row.created_at))+" ")]}}])})],1)],1)},i=[],r=(n("99af"),n("4160"),n("c975"),n("d3b7"),n("159b"),n("ade3")),s=n("5530"),o=n("b85c"),c=n("d221"),u=n("6e85"),l=n.n(u),d=n("ca00"),h=n("a285"),m=n("5ef3"),f={components:{csUpload:function(){return n.e("chunk-7aed0762").then(n.bind(null,"8422"))},csStorage:function(){return n.e("chunk-497c3ecd").then(n.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑商户",create:"新增商户"},statusMap:{2:{text:"已撤回",type:"danger"},1:{text:"已处理",type:""},3:{text:"待处理",type:"success"}},sexMap:{0:"保密",1:"男",2:"女"},typeMap:{1:{text:"充值",type:"warning"},2:{text:"提现",type:""},1010:{text:"收入-管理员操作",type:""},1020:{text:"支出-管理员操作",type:""},1e3:{text:"收入",type:""},1001:{text:"支出",type:""},1050:{text:"收入-代理",type:""},1051:{text:"收入-佣金",type:""},1021:{text:"支出-充值手续费",type:""},1002:{text:"退款",type:""}},toPayment:{},financeLoading:!1,financeVisible:!1,financeForm:{client_id:void 0,money:void 0,points:void 0,to_payment:void 0,source_no:void 0,cause:void 0},financeRules:{to_payment:[{required:!0,message:"至少选择一项",trigger:"change"}],source_no:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],cause:[{required:!0,message:"操作原因不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},filters:{getPreviewUrl:function(t){return t?d["a"].getImageCodeUrl(t,"head_pic"):""},getNumber:function(t){return d["a"].getNumberPoint(t,5)},formatDate:function(t){return d["a"].formatDate(t,"YYYY-MM-DD HH:mm:ss")},formatUser:function(t){return 3==t.role_id?"商户-".concat(t.username):4==t.role_id?"卡商-".concat(t.username):"".concat(t.username)}},mounted:function(){},methods:{_validationAuth:function(){this.auth.add=this.$permission("/member/user/client/add"),this.auth.set=this.$permission("/member/user/client/set"),this.auth.del=this.$permission("/member/user/client/del"),this.auth.enable=this.$permission("/member/user/client/enable"),this.auth.disable=this.$permission("/member/user/client/disable"),this.auth.more=this.$permission("/member/user/client/more"),this.auth.reset=this.$permission("/member/user/client/reset"),this.auth.withdraw=this.$permission("/member/user/client/withdraw"),this.auth.address=this.$permission("/member/user/client/address"),this.auth.money=this.$permission("/member/user/client/money"),this.auth.finance=this.$permission("/member/user/client/finance")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.id)})):e.push(this.currentTableData[t].id),e},handleCommand:function(t){switch(t){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(t){if(t.length){var e=t[0].response;e&&200===e.status&&0===e.data[0].type&&(this.form.head_pic=e.data[0].url)}},_getStorageFileList:function(t){if(t.length){var e,n=Object(o["a"])(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;if(0===a.type){this.form.head_pic=a.url;break}}}catch(i){n.e(i)}finally{n.f()}}},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,n=t.prop,a=t.order,i={order_type:void 0,order_field:void 0};e&&a&&(i.order_type="ascending"===a?"asc":"desc",i.order_field=n),this.$emit("sort",i)},handleStatus:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this._getIdList(t);if(0!==i.length){if(!a){var r=this.currentTableData[t],o=r.status?0:1;if(r.status>1)return;if(0===o&&!this.auth.disable)return;if(1===o&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(s["a"])(Object(s["a"])({},r),{},{status:2})),void u(i,o,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){u(i,n,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function u(t,e,n){Object(c["N"])(t,e).then((function(){n.currentTableData.forEach((function(a,i){-1!==t.indexOf(a.id)&&n.$set(n.currentTableData,i,Object(s["a"])(Object(s["a"])({},a),{},{status:e}))})),n.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,n=this._getIdList(t);0!==n.length?(console.log(n),this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(c["h"])({keys:n}).then((function(){d["a"].deleteDataList(e.currentTableData,n,"id"),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){}))):this.$message.error("请选择要操作的数据")},handleCreate:function(){var t,e=this;this.form=(t={title:void 0,rate:void 0,max:void 0,min:void 0,fee:void 0},Object(r["a"])(t,"rate",void 0),Object(r["a"])(t,"status",1),Object(r["a"])(t,"phone",void 0),Object(r["a"])(t,"login_ip",void 0),Object(r["a"])(t,"api_ip",void 0),Object(r["a"])(t,"secret",d["a"].guid()),t),this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,t.form.birthday||delete t.form.birthday,Object(c["M"])(t.form).then((function(){t.dialogFormVisible=!1,t.$message.success("操作成功"),t.$emit("refresh")})).catch((function(){t.dialogLoading=!1})))}))},handleUpdate:function(t){var e=this;this.currentIndex=t;var n=this.currentTableData[t];this.form=n,this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(c["M"])(t.form).then((function(e){t.$emit("refresh"),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleReset:function(t){var e=this,n=this.currentTableData[t];this.$confirm("确定要重置 ".concat(n.username," 的密码吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){var t=d["a"].randomLenNum(6);setUserPassword(n.user_id,t,t).then((function(){e.$notify({title:"重置密码",dangerouslyUseHTMLString:!0,message:"".concat(n.username," 的密码已重置为：</br>").concat(t),type:"success",position:"bottom-right",duration:0})}))})).catch((function(){}))},handleWithdraw:function(t){this.$router.push({name:"member-user-withdraw",params:{client_id:t}})},handleAddress:function(t){this.$router.push({name:"member-user-address",params:{client_id:t}})},handleMoney:function(t){var e=this;Object(h["a"])(this.currentTableData[t].user_id).then((function(n){n.data&&e.$notify({title:"账户资金",dangerouslyUseHTMLString:!0,message:"\n              <p>".concat(e.currentTableData[t].username," 的账户资金</p>\n              <p>查询时间：").concat(l()().format("YYYY-MM-DD HH:mm:ss"),"</p></br>\n              <p>累计消费：").concat(d["a"].getNumber(n.data.total_money),"</p>\n              <p>可用余额：").concat(d["a"].getNumber(n.data.balance),"</p>\n              <p>锁定余额：").concat(d["a"].getNumber(n.data.lock_balance),"</p>\n              <p>商户积分：").concat(n.data.points||0,"</p>\n              <p>锁定积分：").concat(n.data.lock_points||0,"</p>\n            "),type:"success",position:"bottom-right",duration:0})}))},getPaymentSelect:function(){var t=this;this.toPayment.length||Object(m["a"])({type:"deposit",is_select:1}).then((function(e){t.toPayment=e.data||{}}))},handleFinance:function(t){var e=this;this.financeForm={client_id:t,money:0,points:0,to_payment:void 0,source_no:void 0,cause:void 0},this.$nextTick((function(){e.$refs.finance&&e.$refs.finance.clearValidate(),e.financeLoading=!1,e.financeVisible=!0}))},finance:function(){var t=this;this.$refs.finance.validate((function(e){e&&(t.financeLoading=!0,Object(m["b"])(t.financeForm).then((function(){t.financeVisible=!1,t.$message.success("操作成功")})).catch((function(){t.financeLoading=!1})))}))}}},p=f,b=(n("63a7"),n("2877")),g=Object(b["a"])(p,a,i,!1,null,"0928fe6b",null);e["default"]=g.exports},"5ef3":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return l}));var a=n("5530"),i=n("bc07"),r="/v1/payment";function s(t){return Object(i["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.payment.list"},t)})}function o(t){return Object(i["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.payment.item"},t)})}function c(t,e){return Object(i["a"])({url:r,method:"post",data:{method:"set.payment.sort",payment_id:t,sort:e}})}function u(t,e){return Object(i["a"])({url:r,method:"post",data:{method:"set.payment.status",payment_id:t,status:e}})}function l(t){return Object(i["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.payment.finance"},t)})}},"63a7":function(t,e,n){"use strict";n("a107")},a107:function(t,e,n){},a285:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("bc07"),i="/v1/user_money";function r(t){return Object(a["a"])({url:i,method:"post",data:{method:"get.user.money.info",client_id:t}})}}}]);