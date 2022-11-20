(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-394261ca"],{"0b6d":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-form",{attrs:{inline:!0,size:"small"}},[r("el-form-item",[r("el-tooltip",{attrs:{placement:"top-start","open-delay":650}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("span",[e._v("为您提供三个月内的数据导出")]),r("br"),r("span",[e._v("当勾选订单时，只导出被选中的数据")])]),r("el-button",{attrs:{icon:"el-icon-download",disabled:e.loading,loading:e.exportLoading},on:{click:function(t){e.$emit("export")}}},[e._v("导出数据")])],1)],1),r("el-form-item",[3==e.role_id?r("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:e.loading,loading:e.loading},on:{click:e.handlePostOrder}},[e._v("手动下单")]):e._e()],1),r("div",{staticStyle:{float:"right"}},[r("el-alert",{attrs:{closable:!1,type:"success"}},[e._v(" "+e._s("查询金额："+e.getNumberX(e.motionData.amount)+"元，"+(1==e.role_id?"手续费："+e.getNumberX(e.motionData.fee)+"元，":"")+"查询笔数："+e.motionData.total+"笔")+" ")])],1)],1),r("el-table",{attrs:{data:e.tableData,"highlight-current-row":!0},on:{"sort-change":e.sortChange}},[r("el-table-column",{attrs:{label:"订单编号",prop:"order.id"}}),r("el-table-column",{attrs:{label:"通道名称",prop:"channel.name"}}),r("el-table-column",{attrs:{label:"创建时间",prop:"created_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.order.created_at))+" ")]}}])}),r("el-table-column",{attrs:{label:"商户单号",prop:"out_trade_no"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(r){return e.renderAction(!0,t.row)}}},[e._v(" "+e._s(t.row.order.out_trade_no))])]}}])}),r("el-table-column",{attrs:{label:"支付金额",prop:"amount"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.order.amount))+" ")]}}])}),r("el-table-column",{attrs:{label:"付款姓名",prop:"order.pay_name"}}),r("el-table-column",{attrs:{label:"手续费",prop:"fee"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getNumFee(t.row.order))+" ")]}}])}),r("el-table-column",{attrs:{label:"订单状态",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:e.statusMap[t.row.order.status].type,effect:"plain",size:"mini"}},[e._v(" "+e._s(e.statusMap[t.row.order.status].text)+" ")])]}}])}),r("el-table-column",{attrs:{label:"订单备注",prop:"order.desc"}}),r("el-table-column",{attrs:{label:"商户名称",prop:"memberName"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.member?t.row.member.name:"")+" ")]}}])}),4==e.role_id||1==e.role_id?r("el-table-column",{attrs:{label:"操作",prop:"created_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.order.status?r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(r){return e.handlePostAction(t.row,1e4)}}},[e._v("成功")]):e._e(),1!=e.role_id||1!=t.row.order.status&&4!=t.row.order.status?e._e():r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(r){return e.handlePostAction(t.row,10009)}}},[e._v("修改金额")])]}}],null,!1,4206890783)}):e._e()],1),r("el-dialog",{attrs:{title:"详情",visible:e.centerDialogVisible,"append-to-body":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[r("el-form",{attrs:{size:"mini"}},[r("el-form-item",{attrs:{label:"商户单号"}},[e._v(" "+e._s(e.record.order?e.record.order.out_trade_no:"")+" ")]),r("el-form-item",{attrs:{label:"支付金额"}},[e._v(" "+e._s(e.record.order?e.getNumberX(e.record.order.amount):"")+" ")]),r("el-form-item",{attrs:{label:"订单状态"}},[r("el-tag",{attrs:{type:e.statusMap[e.record.order?e.record.order.status:0].type,effect:"plain",size:"mini"}},[e._v(" "+e._s(e.statusMap[e.record.order?e.record.order.status:0].text)+" ")])],1),r("el-form-item",{attrs:{label:"订单备注"}},[e._v(" "+e._s(e.record.order?e.record.order.desc:"")+" ")]),r("el-form-item",{attrs:{label:"重要提示"}},[r("span",[e._v(" 请确认付款完成后再点确认，否则请点击取消！")])])],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[1==e.record.order.status&&4==e.role_id||1==e.record.order.status&&1==e.role_id||2==e.record.order.status&&1==e.role_id?r("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:function(t){return e.postAction(1e4)}}},[e._v("完成付款")]):e._e(),4==e.role_id&&2==e.record.order.status||4==e.role_id&&4==e.record.order.status||4==e.role_id&&5==e.record.order.status||1==e.role_id&&2==e.record.order.status||1==e.role_id&&4==e.record.order.status||1==e.role_id&&5==e.record.order.status?r("el-button",{attrs:{loading:e.dialogLoading,size:"small"},on:{click:function(t){return e.postAction(1e4)}}},[e._v("补发通知")]):e._e(),2==e.record.order.status&&1==e.role_id||2==e.record.order.status&&1==e.role_id||2==e.record.order.status&&4==e.role_id||2==e.record.order.status&&4==e.role_id||5==e.record.order.status&&4==e.role_id||4==e.record.order.status&&4==e.role_id||1==e.record.order.status&&4==e.role_id||5==e.record.order.status&&1==e.role_id||4==e.record.order.status&&1==e.role_id||1==e.record.order.status&&1==e.role_id?r("el-button",{attrs:{loading:e.dialogLoading,size:"small"},on:{click:function(t){return e.postAction(10002)}}},[e._v("订单驳回")]):e._e(),r("el-button",{attrs:{size:"small"},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("关闭窗口")])],1)],1),r("el-dialog",{attrs:{title:"订单驳回","close-on-click-modal":!1,visible:e.dialogVisible,"append-to-body":"",width:"30%",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-input",{attrs:{type:"textarea",placeholder:"请填写备注",maxlength:"30","show-word-limit":""},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.postAction(10003)}}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{"close-on-click-modal":!1,title:"订单确认",visible:e.dialogConfrimTableVisible},on:{"update:visible":function(t){e.dialogConfrimTableVisible=t}}},[r("div",[r("span",[e._v("当前账号："+e._s(e.userinfo.username)+"，可用余额："),r("el-tag",{staticStyle:{},attrs:{type:"success",effect:"light"}},[e._v(" "+e._s(e.getNumberX(e.userinfo.balance))+" ")])],1)]),r("el-table",{attrs:{data:e.chainData}},[r("el-table-column",{attrs:{label:"编号",prop:"index"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),r("el-table-column",{attrs:{label:"通道名称",prop:"channel_id"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getChannelName(t.row.channel_id))+" ")]}}])}),r("el-table-column",{attrs:{label:"付款姓名","min-width":"120",prop:"name"}}),r("el-table-column",{attrs:{label:"支付金额","min-width":"120",prop:"amount"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.amount))+" ")]}}])})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{disabled:e.dialogLoading,size:"small"},on:{click:function(t){e.dialogConfrimTableVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{loading:e.dialogLoading,disabled:e.dialogLoading,type:"primary",size:"small"},on:{click:e.saveChain}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:e.modTitle,"close-on-click-modal":!1,visible:e.dialogVisibleMoney,"append-to-body":"",width:"30%",center:""},on:{"update:visible":function(t){e.dialogVisibleMoney=t}}},[r("el-input-number",{attrs:{"controls-position":"right",min:1,mxn:5e4,placeholder:"请输入修改金额",clearable:!0},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),r("div",[r("br")]),r("el-input",{attrs:{type:"textarea",placeholder:"请填写备注",maxlength:"30","show-word-limit":""},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.postAction(10008)}}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{"close-on-click-modal":!1,title:"手动下单",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[r("el-table",{attrs:{data:e.chainData}},[r("el-table-column",{attrs:{label:"编号","min-width":"40",prop:"index"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),r("el-table-column",{attrs:{label:"选择通道","min-width":"120",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{attrs:{placeholder:"请选择通道"},model:{value:t.row.channel_id,callback:function(r){e.$set(t.row,"channel_id",r)},expression:"scope.row.channel_id"}},e._l(e.channel,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)]}}])}),r("el-table-column",{attrs:{label:"付款姓名","min-width":"120",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"请输入付款姓名",clearable:!0},model:{value:t.row.name,callback:function(r){e.$set(t.row,"name",r)},expression:"scope.row.name"}})]}}])}),r("el-table-column",{attrs:{label:"支付金额","min-width":"130",prop:"amount"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input-number",{attrs:{"controls-position":"right",min:1,mxn:5e4,placeholder:"请输入支付金额",clearable:!0},model:{value:t.row.amount,callback:function(r){e.$set(t.row,"amount",r)},expression:"scope.row.amount"}})]}}])})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{disabled:e.dialogLoading,size:"small"},on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{loading:e.dialogLoading,disabled:e.dialogLoading,type:"primary",size:"small"},on:{click:e.confirmChain}},[e._v("确定")])],1)],1)],1)},a=[],i=(r("99af"),r("4160"),r("a434"),r("b0c0"),r("d3b7"),r("159b"),r("5530")),n=r("ca00"),l=(r("7db0"),r("caad"),r("c975"),r("dea0")),s=r("06e3"),d=r("2edc"),c={components:{csRegionSelect:function(){return r.e("chunk-d77acf44").then(r.bind(null,"90f8"))},csDeliveryDist:function(){return r.e("chunk-7619cb4b").then(r.bind(null,"3b44"))},csGoodsDrawer:function(){return r.e("chunk-392e853a").then(r.bind(null,"fd20"))}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{print:!1,start_picking:!1,cancel_picking:!1,delivery:!1,complete:!1,price:!1,set:!1,dist:!1,cancel:!1,del:!1,restore:!1,remark:!1},rules:{order:{consignee:[{required:!0,message:"收货人姓名不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],mobile:[{required:!0,message:"收货人手机号码不能为空",trigger:"blur"},{min:7,max:15,message:"长度在 7 到 15 个字符",trigger:"blur"}],tel:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],zipcode:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],region_list:[{required:!0,message:"收货区域不能为空",trigger:"change"}],address:[{required:!0,message:"收货详细地址不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],invoice_title:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],tax_number:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}]},delivery:{delivery_id:[{required:!0,message:"至少选择一项",trigger:"change"}],delivery_item_id:[{required:!0,message:"至少选择一项",trigger:"change"}],logistic_code:[{required:!0,message:"快递单号不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}]}},delivery:{},deliveryMap:{0:"#303133",1:"#67C23A",2:"#67C23A",3:"#F56C6C"},sourceMap:{},serviceMap:{1:"售后中",2:"已售后"},statusMap:{0:"待发货",1:"已发货",2:"已收货",3:"已取消"},formRemark:{index:void 0,loading:!1,visible:!1,request:{}},formAmount:{index:void 0,loading:!1,visible:!1,actual:0,request:{}},formOrder:{index:void 0,loading:!1,visible:!1,request:{}},formDelivery:{index:void 0,loading:!1,visible:!1,delivery:1,selection:[],goods:{},request:{}}}},filters:{getPreviewUrl:function(e){return e?n["a"].getImageCodeUrl(e,"goods_image_x80"):""},getNumber:function(e){return n["a"].getNumber(e)},getDelivery:function(e){return e?e.alias:""}},mounted:function(){},methods:{_validationAuth:function(){this.auth.print=this.$permission("/order/admin/print"),this.auth.start_picking=this.$permission("/order/admin/list/start_picking"),this.auth.cancel_picking=this.$permission("/order/admin/list/cancel_picking"),this.auth.delivery=this.$permission("/order/admin/list/delivery"),this.auth.complete=this.$permission("/order/admin/list/complete"),this.auth.price=this.$permission("/order/admin/list/price"),this.auth.set=this.$permission("/order/admin/list/set"),this.auth.dist=this.$permission("/order/admin/list/dist"),this.auth.cancel=this.$permission("/order/admin/list/cancel"),this.auth.del=this.$permission("/order/admin/list/del"),this.auth.restore=this.$permission("/order/admin/list/restore"),this.auth.remark=this.$permission("/order/admin/list/remark")},_getOrderNoList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.order_no)})):t.push(this.currentTableData[e].order_no),t},_getPaymentType:function(e){return Object.prototype.hasOwnProperty.call(this.toPayment,e)?this.toPayment[e].name:""},_whetherToConfirm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r={confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:t},o=e||"确定要执行该操作吗?";return this.$confirm(o,"提示",r)},handleViewGoods:function(e){var t=this;this.$nextTick((function(){t.$refs.goodsDrawer.show(e)}))},handleView:function(e){this.$router.push({name:"goods-admin-view",params:{goods_id:e}})},setSellersRemark:function(e){var t=this.currentTableData[e];this.formRemark={index:e,loading:!1,visible:!0,request:{order_no:t.order_no,sellers_remark:t.sellers_remark}}},handleSellersRemark:function(){var e=this;this.formRemark.loading=!0;var t=this.formRemark.index;Object(l["l"])(this.formRemark.request).then((function(r){e.currentTableData[t].sellers_remark=r.data.sellers_remark,e.formRemark.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formRemark.loading=!1}))},handleDeliveryDist:function(e){this.$refs.deliveryDist&&this.$refs.deliveryDist.show(e)},setOrderAmount:function(e){var t=this.currentTableData[e];this.formAmount={index:e,loading:!1,visible:!0,actual:t.total_amount,request:{order_no:t.order_no,total_amount:0}}},handleOrderAmount:function(){var e=this;this.formAmount.loading=!0;var t=this.formAmount.index;Object(l["c"])(this.formAmount.request).then((function(){"order-admin-info"!==e.$options.name?e.currentTableData[t].total_amount+=e.formAmount.request.total_amount:e.getOrderData(),e.formAmount.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formAmount.loading=!1}))},setOrderItem:function(e){var t=this;this.formOrder={index:e,loading:!1,visible:!1,request:Object(i["a"])({},this.currentTableData[e])},this.$nextTick((function(){t.$refs.formOrder&&t.$refs.formOrder.clearValidate(),t.formOrder.visible=!0}))},handleSetOrder:function(){var e=this;this.$refs.formOrder.validate((function(t){t&&(e.formOrder.loading=!0,Object(l["r"])(e.formOrder.request).then((function(t){"order-admin-info"!==e.$options.name?e.$set(e.currentTableData,e.formOrder.index,Object(i["a"])(Object(i["a"])({},e.currentTableData[e.formOrder.index]),t.data)):e.getOrderData(),e.formOrder.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formOrder.loading=!1})))}))},handlePicking:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=this._getOrderNoList(r);0!==o.length?this._whetherToConfirm().then((function(){Object(l["i"])(o,e).then((function(e){if("order-admin-info"!==t.$options.name){var r=!0;"0"===t.tabPane?t.currentTableData.forEach((function(r){-1!==o.indexOf(r.order_no)&&t.$set(r,"trade_status",e.data.trade_status)})):(n["a"].deleteDataList(t.currentTableData,o,"order_no"),t.currentTableData.length<=0&&(r=!1,t.$emit("refresh",!0))),r&&t.$emit("total")}else t.getOrderData();t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleOpenDelivery:function(){var e=this;this.delivery.select||Object(s["d"])().then((function(t){e.delivery.select=t.data||[]})),this.delivery.company||Object(d["f"])(0).then((function(t){e.delivery.company=t.data||[]}))},handleDelivery:function(e){var t=this,r=this.currentTableData[e];this.formDelivery={index:e,loading:!1,visible:!1,delivery:1,selection:[],goods:r.get_order_goods,request:{order_no:r.order_no,order_goods_id:[],delivery_id:r.delivery_id,delivery_item_id:void 0,logistic_code:void 0}},this.delivery.select&&(this.delivery.select.find((function(e){return e.delivery_id===r.delivery_id}))||(this.formDelivery.request.delivery_id=void 0)),this.$nextTick((function(){t.$refs.formDelivery&&t.$refs.formDelivery.clearValidate(),t.$refs.dliveryMultiple&&t.$refs.dliveryMultiple.clearSelection(),t.formDelivery.visible=!0}))},deliveryOrderItem:function(){var e=this;this.$refs.formDelivery.validate((function(t){if(t){if(e.formDelivery.selection.length<=0)return e.formDelivery.loading=!1,void e.$message.error("请至少选择一个商品");var r=[],o=e.formDelivery.request;switch(e.formDelivery.selection.forEach((function(e){r.push(e.order_goods_id)})),e.formDelivery.delivery){case 0:delete o.delivery_id,delete o.delivery_item_id,delete o.logistic_code;break;case 1:delete o.delivery_item_id;break;case 2:delete o.delivery_id;break}e.formDelivery.loading=!0,e.formDelivery.request.order_goods_id=r,Object(l["e"])(o).then((function(t){if("order-admin-info"!==e.$options.name){var o=!0,a=e.formDelivery.index;"0"===e.tabPane||1!==t.data.delivery_status?(e.formDelivery.goods.forEach((function(e){r.includes(e.order_goods_id)&&(e.is_service=0,e.status=1)})),e.$set(e.currentTableData,a,Object(i["a"])(Object(i["a"])({},e.currentTableData[a]),t.data))):(e.currentTableData.splice(a,1),e.currentTableData.length<=0&&(o=!1,e.$emit("refresh",!0))),o&&e.$emit("total")}else e.getOrderData();e.formDelivery.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formDelivery.loading=!1}))}}))},handleComplete:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this._getOrderNoList(t);0!==r.length?this._whetherToConfirm().then((function(){Object(l["d"])(r).then((function(t){if("order-admin-info"!==e.$options.name){var o=!0;"0"===e.tabPane?e.currentTableData.forEach((function(e){-1!==r.indexOf(e.order_no)&&(e.trade_status=t.data.trade_status,e.finished_time=t.data.finished_time,e.get_order_goods.forEach((function(e){1===e.is_service&&(e.is_service=0)})))})):(n["a"].deleteDataList(e.currentTableData,r,"order_no"),e.currentTableData.length<=0&&(o=!1,e.$emit("refresh",!0))),o&&e.$emit("total")}else e.getOrderData();e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleOrderCancel:function(e){var t=this;this._whetherToConfirm().then((function(){var r=t.currentTableData[e];Object(l["b"])(r.order_no).then((function(o){if("order-admin-info"!==t.$options.name){var a=!0;"0"===t.tabPane?t.$set(t.currentTableData,e,Object(i["a"])(Object(i["a"])({},r),o.data)):(t.currentTableData.splice(e,1),t.currentTableData.length<=0&&(a=!1,t.$emit("refresh",!0))),a&&t.$emit("total")}else t.getOrderData();t.$message.success("操作成功")}))})).catch((function(){}))},handleOrderRecycle:function(e,t){var r=this;this._whetherToConfirm().then((function(){Object(l["k"])(r.currentTableData[e].order_no,t).then((function(){"order-admin-info"!==r.$options.name?(r.currentTableData.splice(e,1),r.currentTableData.length<=0&&r.$emit("refresh",!0)):r.getOrderData(),r.$message.success("操作成功")}))})).catch((function(){}))}}},u=r("b85c"),m=r("2909"),f=r("64f1"),p=r.n(f),h={data:function(){return{exportLoading:!1}},methods:{handleExport:function(){var e=this,t=[];this.exportLoading=!0,this.multipleSelection.length>0?(t=Object(m["a"])(this.multipleSelection),this.dataProcessing(t)):Object(l["f"])({is_export:1}).then((function(r){t=r.data.items||[],e.dataProcessing(t)})).catch((function(){e.exportLoading=!1}))},dataProcessing:function(e){var t=this;if(!Array.isArray(e)||e.length<=0)return this.exportLoading=!1,void this.$message.warning("没有可导出的数据");var r,o={0:"未评价",1:"已评价",2:"追加评价"},a={0:"可申请售后",1:"售后中",2:"完成售后",3:"不可申请售后"},i={0:"未发货",1:"已发货",2:"已收货",3:"已取消"},l=Object(u["a"])(e);try{for(l.s();!(r=l.n()).done;){var s=r.value;s.username=s.get_user.username,s.nickname=s.get_user.nickname,s.delivery_id=s.get_delivery&&s.get_delivery.alias,s.payment_code=this._getPaymentType(s.payment_code),s.goods="";var d,c=Object(u["a"])(s.get_order_goods);try{for(c.s();!(d=c.n()).done;){var m=d.value;s.goods+="名称：".concat(m.goods_name,";"),s.goods+="货号：".concat(m.goods_code,";"),s.goods+="SKU：".concat(m.goods_sku,";"),s.goods+="条码：".concat(m.bar_code,";"),s.goods+="规格：".concat(m.key_value,";"),s.goods+="市场价：".concat(m.market_price,";"),s.goods+="本店价：".concat(m.shop_price,";"),s.goods+="购买数量：".concat(m.qty,";"),s.goods+="评价状态：".concat(o[m.is_comment],";"),s.goods+="售后状态：".concat(a[m.is_service],";"),s.goods+="货品状态：".concat(i[m.status],";;")}}catch(b){c.e(b)}finally{c.f()}}}catch(b){l.e(b)}finally{l.f()}var f="订单导出"+(new Date).getTime(),h=[{label:"订单号",prop:"order_no"},{label:"买家账号",prop:"username"},{label:"买家昵称",prop:"nickname"},{label:"商品",prop:"goods"},{label:"订单金额",prop:"pay_amount"},{label:"商品金额",prop:"goods_amount"},{label:"应付金额(含运费)",prop:"total_amount"},{label:"余额抵扣",prop:"use_money"},{label:"会员等级抵扣",prop:"use_level"},{label:"积分抵扣",prop:"use_integral"},{label:"优惠劵抵扣",prop:"use_coupon"},{label:"商品折扣抵扣",prop:"use_discount"},{label:"订单促销抵扣",prop:"use_promotion"},{label:"购物卡抵扣",prop:"use_card"},{label:"运费",prop:"delivery_fee"},{label:"支付单号(交易流水号)",prop:"payment_no"},{label:"支付编码",prop:"payment_code"},{label:"购物卡号",prop:"card_number"},{label:"配送方式",prop:"delivery_id"},{label:"收货人姓名",prop:"consignee"},{label:"完整地址",prop:"complete_address"},{label:"邮编",prop:"zipcode"},{label:"手机号码",prop:"mobile"},{label:"电话",prop:"tel"},{label:"买家备注",prop:"buyer_remark"},{label:"发票抬头",prop:"invoice_title"},{label:"纳税人识别号",prop:"tax_number"},{label:"开票费用",prop:"invoice_amount"},{label:"交易状态",prop:"trade_status"},{label:"配送状态",prop:"delivery_status"},{label:"支付状态",prop:"payment_status"},{label:"卖家备注",prop:"sellers_remark"},{label:"调整价格",prop:"adjustment"},{label:"积分换算比例(%)",prop:"integral_pct"},{label:"赠送积分",prop:"give_integral"},{label:"支付时间",prop:"payment_time"},{label:"发货时间",prop:"delivery_time"},{label:"完成时间",prop:"finished_time"},{label:"创建时间",prop:"create_time"},{label:"更新时间",prop:"update_time"}],g={trade_status:{0:"待处理",1:"配货中",2:"已发货",3:"已完成",4:"已取消"},delivery_status:{0:"未发货",1:"已发货",2:"部分发"},payment_status:{0:"未支付",1:"已支付"}};p.a.excel({columns:h,data:n["a"].dataReplace(e,g),title:f}).finally((function(){t.exportLoading=!1}))}}},g=r("0592"),b={mixins:[c,h],props:{loading:{default:!1},channel:{default:function(){return[]}},motionData:{default:function(){}},tableData:{default:function(){return[]}}},data:function(){return{chainData:[],amount:void 0,dialogVisibleMoney:!1,modTitle:void 0,userinfo:{balance:0,usename:""},dialogConfrimTableVisible:!1,dialogTableVisible:!1,textarea:"",dialogLoading:!1,centerDialogVisible:!1,dialogVisible:!1,role_id:0,record:{order:{id:0,status:0}},visible:!1,auth:{query:!1},statusMap:{0:{text:"处理中",type:"success"},1:{text:"处理中",type:"success"},2:{text:"人工确认",type:"success"},3:{text:"失败",type:"danger"},4:{text:"订单超时",type:"danger"},5:{text:"支付成功",type:""},6:{text:"订单驳回",type:"warning"},7:{text:"订单关闭",type:"info"}}}},filters:{getNumber:function(e){return n["a"].getNumber(e)},formatDate:function(e){return n["a"].formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){this.role_id=parseInt(n["a"].cookies.get("role_id"))},methods:{getNumFee:function(e){var t=0;return 1==this.role_id?t=e.fee:2==this.role_id?t=e.agency:3==this.role_id?t=e.fee:4==this.role_id&&(t=e.ksfee),n["a"].getNumber(t)},confirmChain:function(){var e=this;Object(g["b"])().then((function(t){e.userinfo=t.data,e.dialogConfrimTableVisible=!0}))},onselectChange:function(e,t){console.log(e,t)},saveChain:function(){var e=this;this.dialogLoading=!0;var t=this.chainData[0];Object(l["h"])(Object(i["a"])({},t)).then((function(t){e.$open(t.data.url),e.dialogTableVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).finally((function(){e.dialogLoading=!1,e.dialogConfrimTableVisible=!1}))},handleDeleteChain:function(e){this.chainData.splice(e,1)},handleChainPush:function(){this.chainData.push({notify_url:"",out_trade_no:n["a"].randomLenNum(18)})},getChannelName:function(e){var t="";return this._props.channel.forEach((function(r){r.id==e&&(t=r.name||"")})),t},handlePostOrder:function(){this.chainData=[],this.handleChainPush(),this.dialogTableVisible=!0},getNumberX:function(e){return n["a"].getNumber(e)},getDevice:function(e){var t="";return e.bank&&(t+="".concat(e.bank.name,"-")),e.card&&(t+="".concat(e.card.name,"-").concat(e.card.code)),t},handlePostAction:function(e,t){var r=this;if(this.record=e,10002!=t)return 10009==t?(this.dialogVisibleMoney=!0,void(this.modTitle="单号:".concat(e.order.out_trade_no,"修改金额"))):void(1e4==t&&(this.dialogLoading=!0,Object(l["q"])({out_trade_no:e.order.out_trade_no}).then((function(e){r.$message.success("操作成功"),r.$emit("refresh",!1)})).finally((function(){r.dialogLoading=!1,r.centerDialogVisible=!1}))));this.dialogVisible=!0},postAction:function(e){var t=this;10002==e?this.dialogVisible=!0:10001==e?(this.dialogLoading=!0,Object(l["o"])({out_trade_no:this.record.order.out_trade_no}).then((function(e){t.$message.success("操作成功"),t.$emit("refresh",!1)})).finally((function(){t.dialogLoading=!1,t.centerDialogVisible=!1}))):10003==e?(this.dialogLoading=!0,Object(l["n"])({desc:""==this.textarea?"无暂":this.textarea,out_trade_no:this.record.order.out_trade_no}).then((function(e){t.$message.success("操作成功"),t.$emit("refresh",!1)})).finally((function(){t.dialogLoading=!1,t.$emit("refresh",!1),t.textarea="",t.dialogVisible=!1,t.centerDialogVisible=!1}))):10008==e?(this.dialogLoading=!0,Object(l["p"])({desc:""==this.textarea?"无暂":this.textarea,amount:this.amount,out_trade_no:this.record.order.out_trade_no}).then((function(e){t.$message.success("操作成功"),t.$emit("refresh",!1),t.amount=1})).finally((function(){t.dialogLoading=!1,t.textarea="",t.dialogVisibleMoney=!1,t.centerDialogVisible=!1}))):(this.dialogLoading=!0,Object(l["q"])({cmd:e,out_trade_no:this.record.order.out_trade_no}).then((function(e){t.$message.success("操作成功"),t.$emit("refresh",!1)})).finally((function(){t.dialogLoading=!1,t.centerDialogVisible=!1})))},openUrl:function(e){this.$open("".concat(window.location.host,"/file/order").concat(e,".png"))},renderAction:function(e,t){this.record=t,this.centerDialogVisible=e},_validationAuth:function(){this.auth.query=this.$permission("/order/admin/refund/query")},getToPayment:function(e){return""!==e?this.toPayment[e].name:""},sortChange:function(e){var t=e.column,r=e.prop,o=e.order,a={order_type:void 0,order_field:void 0};t&&o&&(a.order_type="ascending"===o?"asc":"desc",a.order_field=r),this.$emit("sort",a)},handleQuery:function(e){this.auth.query&&(this.refundNo=e,this.visible=!0)},handleOrder:function(e){this.$router.push({name:"order-admin-info",params:{order_no:e}})}}},_=b,v=(r("b570"),r("2877")),y=Object(v["a"])(_,o,a,!1,null,"4bca6b88",null);t["default"]=y.exports},"82ae":function(e,t,r){},b570:function(e,t,r){"use strict";r("82ae")}}]);