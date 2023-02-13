(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1901112d"],{4814:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增商户")])],1):e._e(),1==e.role_id?a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,2,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),1==e.role_id?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"商户编号",prop:"id","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id+1e4)+" ")]}}])}),a("el-table-column",{attrs:{label:"商户名称",prop:"title","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"登录IP",prop:"login_ip"}}),a("el-table-column",{attrs:{label:"接口IP",prop:"api_ip"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"创建时间","show-overflow-tooltip":!0,prop:"created_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.created_at))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return 1==e.role_id||3==t.row.status?[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")]),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleChainList(t.row.id,t.row.title,t.row.Chain)}}},[e._v("通道配置")])]:void 0}}],null,!0)})],1),a("el-dialog",{attrs:{title:e.textChainMap[e.dialogStatus],visible:e.dialogChainVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogChainVisible=t}}},[a("el-form",{ref:"formChain",attrs:{model:e.formChain,rules:e.rulesChain,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:e.formChain.status,callback:function(t){e.$set(e.formChain,"status",t)},expression:"formChain.status"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{label:"选择通道",prop:"channel_id"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择通道"},model:{value:e.formChain.channel_id,callback:function(t){e.$set(e.formChain,"channel_id",t)},expression:"formChain.channel_id"}},e._l(e.group,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"通道费率",prop:"rate"}},[a("el-input",{attrs:{placeholder:"请输入通道费率",clearable:!0},model:{value:e.formChain.rate,callback:function(t){e.$set(e.formChain,"rate",t)},expression:"formChain.rate"}})],1),a("el-form-item",{attrs:{label:"最大金额",prop:"max"}},[a("el-input",{attrs:{placeholder:"请输入最大金额",clearable:!0},model:{value:e.formChain.max,callback:function(t){e.$set(e.formChain,"max",t)},expression:"formChain.max"}})],1),a("el-form-item",{attrs:{label:"最小金额",prop:"min"}},[a("el-input",{attrs:{placeholder:"请输入最小金额",clearable:!0},model:{value:e.formChain.min,callback:function(t){e.$set(e.formChain,"min",t)},expression:"formChain.min"}})],1),a("el-form-item",{attrs:{label:"手续费",prop:"fee"}},[a("el-input",{attrs:{placeholder:"请输入单笔手续费",clearable:!0},model:{value:e.formChain.fee,callback:function(t){e.$set(e.formChain,"fee",t)},expression:"formChain.fee"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogChainVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.createChain}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{"close-on-click-modal":!1,width:"65%",size:"mini",title:e.memberTitle,visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{attrs:{size:"mini",data:e.chainData}},[a("el-table-column",{attrs:{label:"通道名称","min-width":"120px",prop:"channel_id"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",placeholder:"请选择通道"},model:{value:t.row.channel_id,callback:function(a){e.$set(t.row,"channel_id",a)},expression:"scope.row.channel_id"}},e._l(e.group,(function(t,i){return a("el-option",{key:i,attrs:{label:e.formatTitle(t),value:t.id}})})),1)]}}])}),a("el-table-column",{attrs:{label:"通道费率","min-width":"110px",prop:"rate"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{attrs:{"controls-position":"right",size:"mini",placeholder:"请输入费率",clearable:!0},model:{value:t.row.rate,callback:function(a){e.$set(t.row,"rate",a)},expression:"scope.row.rate"}})]}}])}),a("el-table-column",{attrs:{label:"手续费","min-width":"110px",prop:"fee"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{attrs:{"controls-position":"right",size:"mini",placeholder:"请输入手续费",clearable:!0},model:{value:t.row.fee,callback:function(a){e.$set(t.row,"fee",a)},expression:"scope.row.fee"}})]}}])}),a("el-table-column",{attrs:{label:"最小值","min-width":"110px",prop:"min"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{attrs:{"controls-position":"right",size:"mini",placeholder:"请输入最小值",clearable:!0},model:{value:t.row.min,callback:function(a){e.$set(t.row,"min",a)},expression:"scope.row.min"}})]}}])}),a("el-table-column",{attrs:{label:"最大值","min-width":"110px",prop:"max"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{attrs:{"controls-position":"right",size:"mini",placeholder:"请输入最大值",clearable:!0},model:{value:t.row.max,callback:function(a){e.$set(t.row,"max",a)},expression:"scope.row.max"}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDeleteChain(t.$index)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:e.dialogLoading,size:"small"},on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{loading:e.dialogLoading,size:"small"},on:{click:e.handleChainPush}},[e._v("新增")]),a("el-button",{attrs:{loading:e.dialogLoading,type:"primary",size:"small"},on:{click:e.saveChain}},[e._v("保存")])],1)],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[1==e.role_id?a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1):e._e(),a("el-form-item",{attrs:{label:"商户名称",prop:"title"}},[a("el-input",{attrs:{disabled:"create"!==e.dialogStatus,placeholder:"请输入商户名称",clearable:!0},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"商户密钥",prop:"secret"}},[a("el-input",{attrs:{placeholder:"请输入商户密钥",clearable:!0},model:{value:e.form.secret,callback:function(t){e.$set(e.form,"secret",t)},expression:"form.secret"}})],1),"create"===e.dialogStatus?a("el-form-item",{attrs:{label:"登录账号",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入商户登录账号",clearable:!0},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1):e._e(),"create"===e.dialogStatus?a("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"请输入商户登录密码",clearable:!0},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),a("el-form-item",{attrs:{label:"登录IP",prop:"login_ip"}},[a("el-input",{attrs:{placeholder:"请输入登录IP",clearable:!0},model:{value:e.form.login_ip,callback:function(t){e.$set(e.form,"login_ip",t)},expression:"form.login_ip"}})],1),a("el-form-item",{attrs:{label:"接口IP",prop:"api_ip"}},[a("el-input",{attrs:{placeholder:"请输入接口IP",clearable:!0},model:{value:e.form.api_ip,callback:function(t){e.$set(e.form,"api_ip",t)},expression:"form.api_ip"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:e.buildSecret}},[e._v("生成密钥")]),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1)],1)},o=[],l=a("5530"),n=(a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),a("159b"),a("a434"),a("b680"),a("d221")),r=(a("5a0c"),a("ca00")),s=(a("a285"),a("5ef3"),{components:{csUpload:function(){return a.e("chunk-ffdb9d28").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-5089710b").then(a.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){return{role_id:0,memberTitle:"",chainData:[],channelList:[],dialogTableVisible:!1,currentTableData:[],multipleSelection:[],auth:{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0},dialogChainVisible:!1,dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑商户",create:"新增商户"},textChainMap:{update:"编辑通道",create:"新增通道"},statusMap:{2:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},3:{text:"审核中",type:"info"}},sexMap:{0:"保密",1:"男",2:"女"},legalizeMap:{0:{text:"未认证",type:"warning"},1:{text:"已认证",type:""}},form:{title:void 0,status:1,phone:void 0,password:void 0,login_ip:void 0,api_ip:void 0,secret:r["a"].guid()},formChain:{max:void 0,min:void 0,fee:void 0,rate:void 0,status:1,channel_id:void 0},rulesChain:{channel_id:[{required:!0,message:"必选项",trigger:"change"}],rate:[{required:!0,message:"请输入正确的数字",trigger:"blur"},{validator:r["a"].checkNumber,trigger:"blur"}],max:[{required:!0,validator:r["a"].checkNumber,trigger:"blur"}],min:[{required:!0,validator:r["a"].checkNumber,trigger:"blur"}],fee:[{required:!0,validator:r["a"].checkNumber,trigger:"blur"}]},rules:{password:[{required:!0,message:"必填项",trigger:"blur"}],title:[{required:!0,message:"必填项",trigger:"blur"},{min:4,max:20,message:"长度在 4 到 20 个字符",trigger:"blur"}],secret:[{required:!0,message:"必填项",trigger:"blur"}],phone:[{max:15,required:!0,message:"必填项",trigger:"blur"}],login_ip:[{max:512,required:!0,message:"长度不能大于 512 个字符",trigger:"blur"}],api_ip:[{max:512,required:!0,message:"长度不能大于 512 个字符",trigger:"blur"}]},toPayment:{},financeLoading:!1,financeVisible:!1,financeForm:{client_id:void 0,money:void 0,points:void 0,to_payment:void 0,source_no:void 0,cause:void 0},financeRules:{to_payment:[{required:!0,message:"至少选择一项",trigger:"change"}],source_no:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],cause:[{required:!0,message:"操作原因不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},filters:{getPreviewUrl:function(e){return e?r["a"].getImageCodeUrl(e,"head_pic"):""},getNumber:function(e){return r["a"].getNumber(e)},formatDate:function(e){return r["a"].formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){this.role_id=parseInt(r["a"].cookies.get("role_id"))},methods:{formatTitle:function(e){return 1==this.role_id?e.title:2==this.role_id?"".concat(e.title,"-费率:").concat(r["a"].getNumber(e.rate)):void 0},buildSecret:function(){this.form.secret=r["a"].guid()},_validationAuth:function(){this.auth.add=this.$permission("/member/user/client/add")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.id)})):t.push(this.currentTableData[e].id),t},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,i=e.order,o={order_type:void 0,order_field:void 0};t&&i&&(o.order_type="ascending"===i?"asc":"desc",o.order_field=a),this.$emit("sort",o)},handleStatus:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this._getIdList(e);if(0!==o.length){if(!i){var r=this.currentTableData[e],s=r.status?0:1;if(r.status>1)return;if(0===s&&!this.auth.disable)return;if(1===s&&!this.auth.enable)return;return this.$set(this.currentTableData,e,Object(l["a"])(Object(l["a"])({},r),{},{status:2})),void c(o,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(o,a,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(e,t,a){Object(n["L"])(e,t).then((function(){a.currentTableData.forEach((function(i,o){-1!==e.indexOf(i.id)&&a.$set(a.currentTableData,o,Object(l["a"])(Object(l["a"])({},i),{},{status:t}))})),a.$message.success("操作成功")}))}},handleDeleteChain:function(e){this.chainData.splice(e,1)},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(n["g"])({keys:a}).then((function(){r["a"].deleteDataList(t.currentTableData,a,"id"),t.currentTableData.length<=0&&t.$emit("refresh",!0),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleChainPush:function(e,t,a){this.chainData.push({member_id:this.formChain.member_id})},getChannelRate:function(e){var t=0;return this._props.group.forEach((function(a){parseInt(a.id)==parseInt(e)&&(t=a.rate)})),parseFloat(t)},saveChain:function(){var e=this,t=!0,a="";2==this.role_id&&this.chainData.forEach((function(i){var o=parseFloat(i.rate),l=e.getChannelRate(i.channel_id);console.log(o),console.log(l),o<l&&(t=!1,a="商户费率:".concat(parseFloat(o).toFixed(2),"%,必须大于代理费率:").concat(parseFloat(l).toFixed(2),"%"))})),t?(this.dialogLoading=!0,Object(n["J"])({member_id:this.formChain.member_id,chain:this.chainData}).then((function(){e.dialogTableVisible=!1,e.$message.success("操作成功"),e.$emit("refresh"),e.dialogLoading=!1})).catch((function(){e.dialogLoading=!1}))):this.$message.error(a)},handleChainList:function(e,t,a){this.chainData=[],this.chainData=a,this.memberTitle="".concat(t,"-通道配置"),this.formChain={member_id:e,rate:void 0,max:void 0,min:void 0,fee:void 0,status:1,channel_id:void 0},this.dialogTableVisible=!0},handleChainCreate:function(e){var t=this;this.formChain={member_id:e,rate:void 0,max:void 0,min:void 0,fee:void 0,status:1,channel_id:void 0},this.$nextTick((function(){t.$refs.formChain&&t.$refs.formChain.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogChainVisible=!0}))},handleCreate:function(){var e=this;this.form={title:void 0,status:1,phone:void 0,password:void 0,login_ip:void 0,api_ip:void 0,secret:r["a"].guid()},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},createChain:function(){var e=this;this.$refs.formChain.validate((function(t){t&&(e.dialogLoading=!0,Object(n["J"])(e.formChain).then((function(){e.dialogChainVisible=!1,e.$message.success("操作成功"),e.$emit("refresh"),e.dialogLoading=!1})).catch((function(){e.dialogLoading=!1})))}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,2==e.role_id&&(e.form.status="3"),Object(n["K"])(e.form).then((function(){e.dialogFormVisible=!1,e.$message.success("操作成功"),e.$emit("refresh"),e.dialogLoading=!1})).catch((function(){e.dialogLoading=!1})))}))},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e];this.form=a,this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,2==e.role_id&&(e.form.status="3"),Object(n["K"])(e.form).then((function(t){e.$emit("refresh"),e.dialogFormVisible=!1,e.$message.success("操作成功"),e.dialogLoading=!1})).catch((function(){e.dialogLoading=!1})))}))}}}),c=s,u=(a("c54f"),a("0c7c")),d=Object(u["a"])(c,i,o,!1,null,"0ea36140",null);t["default"]=d.exports},"5ef3":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return u}));var i=a("5530"),o=a("bc07"),l="/v1/payment";function n(e){return Object(o["a"])({url:l,method:"post",data:Object(i["a"])({method:"get.payment.list"},e)})}function r(e){return Object(o["a"])({url:l,method:"post",data:Object(i["a"])({method:"set.payment.item"},e)})}function s(e,t){return Object(o["a"])({url:l,method:"post",data:{method:"set.payment.sort",payment_id:e,sort:t}})}function c(e,t){return Object(o["a"])({url:l,method:"post",data:{method:"set.payment.status",payment_id:e,status:t}})}function u(e){return Object(o["a"])({url:l,method:"post",data:Object(i["a"])({method:"set.payment.finance"},e)})}},a285:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("bc07"),o="/v1/user_money";function l(e){return Object(i["a"])({url:o,method:"post",data:{method:"get.user.money.info",client_id:e}})}},b651:function(e,t,a){},c54f:function(e,t,a){"use strict";a("b651")}}]);