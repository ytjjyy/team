(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a22cd9c2"],{"5b61":function(e,t,a){"use strict";a("6a82")},"6a82":function(e,t,a){},a7e6:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[1==e.role_id?a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增账号")]):e._e()],1):e._e(),1==e.role_id?a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,2,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),1==e.role_id?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e()],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"编号",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user.id+1e4)+" ")]}}])}),a("el-table-column",{attrs:{label:"账号",prop:"user.username"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.user.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"}},[e._v(" "+e._s(e.statusMap[t.row.user.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"登录IP","show-overflow-tooltip":!0,prop:"login_ip"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user.login_ip)+" ")]}}])}),a("el-table-column",{attrs:{label:"登录时间","show-overflow-tooltip":!0,prop:"login_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.user.login_at))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(a){return e.handleReset(t.$index,1e4)}}},[e._v("关闭谷歌")]),a("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(a){return e.handleReset(t.$index,10001)}}},[e._v("重置密码")])]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"回调",prop:"exp"}},[a("el-radio-group",{model:{value:e.form.auth,callback:function(t){e.$set(e.form,"auth",t)},expression:"form.auth"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1),"create"===e.dialogStatus?a("el-form-item",{attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{disabled:"create"!==e.dialogStatus,placeholder:"请输入账号",clearable:!0},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1):e._e(),a("div",["create"===e.dialogStatus?a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:!0},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e()],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{"close-on-click-modal":!1,width:"65%",size:"mini",title:e.memberTitle,visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{attrs:{size:"mini",data:e.chainData}},[a("el-table-column",{attrs:{label:"代理通道","min-width":"120px",prop:"channel_id"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",placeholder:"请选择通道"},model:{value:t.row.channel_id,callback:function(a){e.$set(t.row,"channel_id",a)},expression:"scope.row.channel_id"}},e._l(e.channel,(function(t,n){return a("el-option",{key:n,attrs:{label:e.formatTitle(t),value:t.channel.id}})})),1)]}}])}),a("el-table-column",{attrs:{label:"通道费率","min-width":"110px",prop:"rate"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{attrs:{"controls-position":"right",max:10,min:0,size:"mini",step:.01,placeholder:"请输入费率",clearable:!0},model:{value:t.row.rate,callback:function(a){e.$set(t.row,"rate",a)},expression:"scope.row.rate"}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDeleteChain(t.$index)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticStyle:{float:"left"}}),a("div",[a("el-button",{attrs:{loading:e.dialogLoading,size:"small"},on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{loading:e.dialogLoading,size:"small"},on:{click:e.handleChainPush}},[e._v("新增")]),a("el-button",{attrs:{loading:e.dialogLoading,type:"primary",size:"small"},on:{click:e.saveChain}},[e._v("保存")])],1)])],1),a("el-dialog",{attrs:{title:e.title,visible:e.financeVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.financeVisible=t}}},[a("el-form",{ref:"finance",attrs:{model:e.financeForm,rules:e.financeRules,"label-width":"90px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"当前账户"}},[a("el-tag",{staticStyle:{},attrs:{type:"success",effect:"light"}},[e._v(" "+e._s(e.username)+" ")])],1)],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{model:{value:e.financeForm.type,callback:function(t){e.$set(e.financeForm,"type",t)},expression:"financeForm.type"}},[a("el-radio",{attrs:{label:1}},[e._v("操作余额")]),a("el-radio",{attrs:{label:2}},[e._v("操作冻结")])],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"金额",prop:"money"}},[a("el-input-number",{staticStyle:{width:"90%"},attrs:{placeholder:"可输入调整金额","controls-position":"right",precision:2},model:{value:e.financeForm.money,callback:function(t){e.$set(e.financeForm,"money",t)},expression:"financeForm.money"}}),a("el-tooltip",{attrs:{content:"正数增加，负数减少",placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline cs-pl-5"})])],1)],1)],1),a("el-form-item",{attrs:{label:"操作原因",prop:"cause"}},[a("el-input",{attrs:{placeholder:"请输入操作原因",type:"textarea",autosize:{minRows:3},"show-word-limit":!0,maxlength:"255"},model:{value:e.financeForm.cause,callback:function(t){e.$set(e.financeForm,"cause",t)},expression:"financeForm.cause"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.financeVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.financeLoading,size:"small"},on:{click:e.finance}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{title:e.rateTableTitle,visible:e.rateTableVisible,"append-to-body":!0,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.rateTableVisible=t}}},[a("el-table",{attrs:{data:e.chainData}},[a("el-table-column",{attrs:{label:"通道名称",prop:"channel.title"}}),a("el-table-column",{attrs:{label:"通道费率",prop:"rate"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.rate))+"% ")]}}])}),a("el-table-column",{attrs:{label:"手续费",prop:"fee"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.fee))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.modifyAgency(t.row,t.row.user_id,e.username)}}},[e._v("编辑")])]}}])})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.rateTableVisible=!1}}},[e._v("关闭窗口")])],1)],1),a("el-dialog",{attrs:{title:e.agencyTableTitle,visible:e.agencyTableVisible,"append-to-body":!0,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.agencyTableVisible=t}}},[a("el-table",{attrs:{data:e.chainData},on:{"expand-change":e.expandChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{attrs:{data:e.chainList}},[a("el-table-column",{attrs:{label:"通道名称",prop:"channel.title"}}),a("el-table-column",{attrs:{label:"通道费率",prop:"rate"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.rate))+"% ")]}}],null,!0)}),a("el-table-column",{attrs:{label:"手续费",prop:"fee"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.fee))+" ")]}}],null,!0)}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.modifyAgency(n.row,n.row.user_id,t.row.user.username)}}},[e._v("编辑")])]}}],null,!0)})],1)]}}])}),a("el-table-column",{attrs:{label:"账号",prop:"user.username"}}),a("el-table-column",{attrs:{label:"创建时间",prop:"created_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.created_at))+" ")]}}])})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.agencyTableVisible=!1}}},[e._v("关闭窗口")])],1)],1),a("el-dialog",{attrs:{title:e.username,visible:e.ksReferVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.ksReferVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"选择商户",prop:"member_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.member_id,callback:function(t){e.member_id=t},expression:"member_id"}},e._l(e.member,(function(e){return a("el-option",{key:e.user.id,attrs:{label:e.user.username,value:e.user.id}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.ksReferVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.updateKsRefer}},[e._v("确定")])],1)],1)],1)},i=[],r=(a("99af"),a("7db0"),a("4160"),a("a434"),a("b0c0"),a("d3b7"),a("159b"),a("ade3")),l=a("d221"),o=(a("5a0c"),a("ca00")),s={components:{csUpload:function(){return a.e("chunk-7aed0762").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-497c3ecd").then(a.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},channel:{default:function(){return[]}},member:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){var e;return e={title:"",role_id:0,info:"",memberTitle:"",agent_m:void 0,agent_id:void 0,agent:void 0,balance:0,rateTableTitle:"",dialogTableVisible:!1,member_id:[]},Object(r["a"])(e,"role_id",0),Object(r["a"])(e,"ksReferVisible",!1),Object(r["a"])(e,"agencyTableTitle",""),Object(r["a"])(e,"chainData",[]),Object(r["a"])(e,"chainList",[]),Object(r["a"])(e,"username",""),Object(r["a"])(e,"agencyTableVisible",!1),Object(r["a"])(e,"rateVisible",!1),Object(r["a"])(e,"rateTableVisible",!1),Object(r["a"])(e,"currentTableData",[]),Object(r["a"])(e,"multipleSelection",[]),Object(r["a"])(e,"auth",{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0}),Object(r["a"])(e,"limitData",{rateMax:0,rateMin:0,feeMax:0,feeMin:0}),Object(r["a"])(e,"dialogLoading",!1),Object(r["a"])(e,"dialogFormVisible",!1),Object(r["a"])(e,"dialogStatus",""),Object(r["a"])(e,"textMap",{update:"编辑账号",create:"新增账号"}),Object(r["a"])(e,"statusMap",{2:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},3:{text:"审核中",type:"info"}}),Object(r["a"])(e,"sexMap",{0:"保密",1:"男",2:"女"}),Object(r["a"])(e,"legalizeMap",{0:{text:"未认证",type:"warning"},1:{text:"已认证",type:""}}),Object(r["a"])(e,"feeLimit",void 0),Object(r["a"])(e,"rateLimit",void 0),Object(r["a"])(e,"form",{auth:1,username:void 0,level:2,password:void 0,group_id:5,balance:void 0,credit:void 0,status:1}),Object(r["a"])(e,"rules",{username:[{required:!0,message:"账号不能为空",trigger:"blur"},{min:4,max:20,message:"长度在 4 到 20 个字符",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,message:"长度不能少于 6 个字符",trigger:"blur"}],secret:[{required:!0,message:"商户密钥不能为空",trigger:"blur"},{min:6,message:"长度不能少于 6 个字符",trigger:"blur"}],group_id:[{required:!0,message:"至少选择一项",trigger:"change"}],name:[{required:!0,message:"商户别名不能为空",trigger:"blur"}],whitelist:[{required:!1,message:"白单名不能为空",trigger:"blur"}]}),Object(r["a"])(e,"toPayment",{}),Object(r["a"])(e,"financeLoading",!1),Object(r["a"])(e,"financeVisible",!1),Object(r["a"])(e,"financeForm",{cmd:void 0,channel_id:void 0,money:void 0,rate:void 0,type:1,cause:void 0,moneyBak:void 0}),Object(r["a"])(e,"financeRules",{money:[{required:!0,message:"必填项",trigger:"blur"}],type:[{required:!0,message:"必填项",trigger:"blur"}],channel_id:[{required:!0,message:"必选项",trigger:"change"}],rate:[{required:!0,trigger:"blur",message:"必填项"}],source_no:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],cause:[{required:!0,message:"操作原因不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}),e},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},filters:{getPreviewUrl:function(e){return e?o["a"].getImageCodeUrl(e,"head_pic"):""},getNumber:function(e){return o["a"].getNumber(e)},formatUser:function(e){return 3==e.role_id?e.member.title:"暂无"},formatDate:function(e){return o["a"].formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){this.role_id=parseInt(o["a"].cookies.get("role_id"))},methods:{onChange:function(e){this.agent=e,e.user&&(this.agent_id=e.user.id)},getChannel:function(e){var t="";return this._props.channel.forEach((function(a){parseInt(a.channel.id)==parseInt(e)&&(t=a.channel.name)})),t},getBind:function(e,t){var a=this;if(e.length<=0)return[];var n=[];return e.forEach((function(e){var i={};i=a._props.member.find((function(t){return t.user.id===e})),n.push({name:i.user.username,user_id:t,biz_id:e})})),n},updateKsRefer:function(){var e=this,t=this.getBind(this.member_id,this.user_id);Object(l["T"])({cmd:10004,biz:t,bizKey:this.member_id,user_id:this.user_id}).then((function(t){e.$message.success("操作成功"),e.$emit("refresh"),e.member_id=[],e.ksReferVisible=!1}))},buildSecret:function(){this.form.secret=o["a"].guid()},formatTitle:function(e){return 1==this.role_id?e.channel.name:4==this.role_id?"".concat(e.channel.name,"-费率:").concat(e.chain.rate):void 0},handleChainPush:function(e,t,a){this.chainData.push({user_id:this.formChain.user_id})},getChannelRate:function(e,t){var a=0;return this._props.channel.forEach((function(e){parseInt(e.chain.channel_id)==parseInt(t)&&(a=e.chain.rate)})),parseFloat(a)},saveChain:function(){var e=this,t=!0,a="";this._props.member.length>0&&this._props.member[0].chain.user_id>0&&(this.agent_id=this._props.member[0].chain.user_id),this.agent_id>0?this.chainData.forEach((function(n){var i=e.getChannel(n.channel_id),r=parseFloat(n.rate),l=e.getChannelRate(e.agent_id,n.channel_id);l>=0&&l<r&&(t=!1,a="".concat(i,"通道费率:").concat(parseFloat(r),",必须小于代理通道:").concat(parseFloat(l)))})):this.agent_id=0,t?(this.dialogLoading=!0,Object(l["K"])({agent_id:this.agent_id,user_id:this.formChain.user_id,chain:this.chainData}).then((function(){e.dialogTableVisible=!1,e.$message.success("操作成功"),e.$emit("refresh"),e.dialogLoading=!1})).finally((function(){e.dialogLoading=!1}))):this.$message.error(a)},getAgentName:function(e){var t="";return this._props.member.forEach((function(a){parseInt(a.user.id)==parseInt(e)&&(t=a.user.username)})),t},expandChange:function(e){var t=this;Object(l["m"])({user_id:e.user_id}).then((function(e){t.chainList=e.list}))},handleDeleteChain:function(e){this.chainData.splice(e,1)},handleAgencyTable:function(e,t,a,n){var i=this;this.chainData=[],this.chainList=[],1e4==e?(this.agencyTableTitle="".concat(a,"的上级"),Object(l["u"])({user_id:t}).then((function(e){i.chainData=e.result}))):(this.agencyTableTitle="".concat(a,"的下级"),this.chainData=n),this.agencyTableVisible=!0},modifyAgency:function(e,t,a){var n=this;this.financeForm.id=t,e&&(this.financeForm.channel_id=e.channel_id,this.financeForm.rate=e.rate,this.financeForm.money=e.fee),this.username="用户名：".concat(a),this.$nextTick((function(){n.$refs.finance&&n.$refs.finance.clearValidate(),Object(l["l"])({id:t}).then((function(e){var t,a,i,r;n.limitData=e.result,0==e.result.rateMax?(n.limitData.rateMax=1e4,t="最大值：不限"):t="最大值：".concat(e.result.rateMax),a=0==e.result.rateMin?"最小值：0":"最小值：".concat(e.result.rateMin),0==e.result.feeMax?(n.limitData.feeMax=1e4,i="最大值：不限"):i="最大值：".concat(o["a"].getNumber(e.result.feeMax)),r=0==e.result.feeMin?"最小值：0":"最小值：".concat(o["a"].getNumber(e.result.feeMin)),n.rateLimit="".concat(t,"，").concat(a),n.feeLimit="".concat(i,"，").concat(r),n.rateVisible=!0}))}))},handleChainList:function(e){this.chainData=[],this.chainData=e.chain||[],this.memberTitle="".concat(e.user.username,"-费率配置"),this.agent_id=e.user.parent_id,this.formChain={user_id:e.user.id,rate:void 0,max:49999,min:1,fee:0,status:1,channel_id:void 0},this.dialogTableVisible=!0},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.user.id)})):t.push(this.currentTableData[e].user.id),t},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,n=e.order,i={order_type:void 0,order_field:void 0};t&&n&&(i.order_type="ascending"===n?"asc":"desc",i.order_field=a),this.$emit("sort",i)},handleStatus:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this._getIdList(e);0!==n.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(l["U"])(n,a).then((function(){t.$emit("refresh"),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(l["j"])({keys:a}).then((function(){t.$emit("refresh",!0),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleCreate:function(){var e=this;this.form={username:void 0,level:2,auth:1,password:void 0,group_id:5,balance:void 0,credit:void 0,status:1},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,e.form.parent_id=0,Object(l["a"])(e.form).then((function(){e.dialogFormVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).finally((function(){e.dialogLoading=!1})))}))},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e];this.form={id:a.member.id,whitelist:a.member.whitelist,name:a.member.name,secret:a.member.secret},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(l["R"])(e.form).then((function(t){e.$emit("refresh"),e.dialogFormVisible=!1,e.$message.success("操作成功")})).finally((function(){e.dialogLoading=!1})))}))},handleKsRefer:function(e,t){this.ksReferVisible=!0,this.user_id=e,this.username="".concat(t,"-关联设置")},handleReset:function(e,t){var a=this,n=this.currentTableData[e].user,i="";10001==t&&(i="确定要重置 ".concat(n.username," 的密码吗?")),1e4==t&&(i="确定要关闭 ".concat(n.username," 的谷歌验证吗?")),this.$confirm(i,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){var e="123456";Object(l["P"])({user_id:n.id,cmd:t}).then((function(){10001==t&&a.$notify({title:"重置密码",dangerouslyUseHTMLString:!0,message:"".concat(n.username," 的密码已重置为：</br>").concat(e),type:"success",position:"bottom-right",duration:0}),1e4==t&&a.$notify({title:"关闭谷歌",dangerouslyUseHTMLString:!0,message:"".concat(n.username," 的谷歌验证已关闭"),type:"success",position:"bottom-right",duration:0})}))})).catch((function(){}))},handleRate:function(e){var t=this,a=this.currentTableData[e];this.financeForm.id=a.id,this.username="用户名：".concat(a.username),this.$nextTick((function(){t.$refs.finance&&t.$refs.finance.clearValidate(),Object(l["l"])({id:a.id}).then((function(e){var a,n,i,r;t.limitData=e.result,0==e.result.rateMax?(t.limitData.rateMax=1e4,a="最大值：不限"):a="最大值：".concat(e.result.rateMax),n=0==e.result.rateMin?"最小值：0":"最小值：".concat(e.result.rateMin),0==e.result.feeMax?(t.limitData.feeMax=1e4,i="最大值：不限"):i="最大值：".concat(o["a"].getNumber(e.result.feeMax)),r=0==e.result.feeMin?"最小值：0":"最小值：".concat(o["a"].getNumber(e.result.feeMin)),t.rateLimit="".concat(a,"，").concat(n),t.feeLimit="".concat(i,"，").concat(r),t.rateVisible=!0}))}))},handleFinance:function(e,t){var a=this,n=this.currentTableData[e].user,i=this.currentTableData[e].balance;this.currentTableData[e].frozen;this.$nextTick((function(){a.$refs.finance&&a.$refs.finance.clearValidate(),a.financeForm.cmd=t,a.financeForm.id=n.id,10002==t&&(a.title="资金调整",a.info="当前余额",a.balance=n.balance,a.username="用户名：".concat(n.username,"，余额:").concat(o["a"].getNumber(i.balance),"，冻结:").concat(o["a"].getNumber(i.frozen)),a.financeForm.moneyBak=i.balance),a.financeLoading=!1,a.financeVisible=!0}))},rateChange:function(){var e=this;this.$refs.rate.validate((function(t){t&&(e.financeLoading=!0,Object(l["S"])(e.financeForm).then((function(){e.financeLoading=!1,e.rateVisible=!1,e.rateTableVisible=!1,e.$message.success("操作成功"),e.financeForm.money=void 0,e.financeForm.rate=void 0,e.financeForm.cause=void 0,e.agencyTableVisible=!1,e.$emit("refresh")})).catch((function(){e.financeLoading=!1})))}))},finance:function(){var e=this;this.$refs.finance.validate((function(t){if(t){var a=!0;10002==e.financeForm.cmd&&parseInt(e.financeForm.money)<0&&parseInt(e.financeForm.moneyBak)<Math.abs(parseInt(e.financeForm.money))&&(e.$message.error("余额不足"),a=!1),10003==e.financeForm.cmd&&parseInt(e.financeForm.money)<0&&parseInt(e.financeForm.moneyBak)<Math.abs(parseInt(e.financeForm.money))&&(e.$message.error("余额不足"),a=!1),a&&(e.financeLoading=!0,Object(l["P"])(e.financeForm).then((function(){e.financeVisible=!1,e.$message.success("操作成功"),e.$emit("refresh"),e.financeForm.money=void 0})).catch((function(){e.financeLoading=!1})))}}))}}},c=s,u=(a("5b61"),a("2877")),d=Object(u["a"])(c,n,i,!1,null,"4901ef4c",null);t["default"]=d.exports}}]);