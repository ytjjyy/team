(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bce3dd4"],{"2edc":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"g",(function(){return l})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return c})),i.d(t,"e",(function(){return u})),i.d(t,"f",(function(){return m})),i.d(t,"b",(function(){return d}));var r=i("5530"),o=i("bc07"),s="/v1/delivery_item";function a(e){return Object(o["a"])({url:s,method:"post",data:Object(r["a"])({method:"add.delivery.company.item"},e)})}function l(e){return Object(o["a"])({url:s,method:"post",data:Object(r["a"])({method:"set.delivery.company.item"},e)})}function n(e){return Object(o["a"])({url:s,method:"post",data:{method:"del.delivery.company.list",delivery_item_id:e}})}function c(e){return Object(o["a"])({url:s,method:"post",data:{method:"get.delivery.company.item",delivery_item_id:e}})}function u(e){return Object(o["a"])({url:s,method:"post",data:Object(r["a"])({method:"get.delivery.company.list"},e)})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(o["a"])({url:s,method:"post",data:{method:"get.delivery.company.select",type:e}})}function d(e){return Object(o["a"])({url:s,method:"post",data:{method:"copy.delivery.company.hot",delivery_item_id:e}})}},"5eeb":function(e,t,i){},"90c8":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cs-p"},[i("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?i("el-form-item",[i("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增方式")])],1):e._e(),e.auth.enable||e.auth.disable?i("el-form-item",[i("el-button-group",[e.auth.enable?i("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?i("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,0,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),e.auth.del?i("el-form-item",[i("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),i("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),i("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[i("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),i("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[i("el-form-item",{attrs:{label:"快递公司"}},[i("span",[e._v(e._s(t.row.get_delivery_item.name))])]),i("el-form-item",{attrs:{label:"别名"}},[i("span",[e._v(e._s(t.row.alias))])]),i("el-form-item",{attrs:{label:"首重"}},[i("span",[e._v(e._s(t.row.first_weight))])]),i("el-form-item",{attrs:{label:"首重运费"}},[i("span",[e._v(e._s(t.row.first_weight_price))])]),i("el-form-item",{attrs:{label:"续重"}},[i("span",[e._v(e._s(t.row.second_weight))])]),i("el-form-item",{attrs:{label:"续重运费"}},[i("span",[e._v(e._s(t.row.second_weight_price))])]),i("el-form-item",{attrs:{label:"首件"}},[i("span",[e._v(e._s(t.row.first_item))])]),i("el-form-item",{attrs:{label:"首件运费"}},[i("span",[e._v(e._s(t.row.first_item_price))])]),i("el-form-item",{attrs:{label:"续件"}},[i("span",[e._v(e._s(t.row.second_item))])]),i("el-form-item",{attrs:{label:"续件运费"}},[i("span",[e._v(e._s(t.row.second_item_price))])]),i("el-form-item",{attrs:{label:"首体积量"}},[i("span",[e._v(e._s(t.row.first_volume))])]),i("el-form-item",{attrs:{label:"首体积运费"}},[i("span",[e._v(e._s(t.row.first_volume_price))])]),i("el-form-item",{attrs:{label:"续体积量"}},[i("span",[e._v(e._s(t.row.second_volume))])]),i("el-form-item",{attrs:{label:"续体积运费"}},[i("span",[e._v(e._s(t.row.second_volume_price))])]),i("el-form-item",{attrs:{label:"状态"}},[i("el-tag",{attrs:{type:e.statusMap[t.row.status].type,effect:"plain",size:"mini"}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])],1)],1)]}}])}),i("el-table-column",{attrs:{label:"快递公司",prop:"get_delivery_item.name",sortable:"custom","min-width":"100"}}),i("el-table-column",{attrs:{label:"别名",prop:"alias"}}),i("el-table-column",{attrs:{label:"描述",prop:"content","min-width":"250"}}),i("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.sort?i("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(i){return e.handleSort(t.$index)}},model:{value:t.row.sort,callback:function(i){e.$set(t.row,"sort",i)},expression:"scope.row.sort"}}):i("span",[e._v(" "+e._s(t.row.sort)+" ")])]}}])}),i("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"},nativeOn:{click:function(i){return e.handleStatus(t.$index)}}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(i){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e(),e.auth.del?i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(i){return e.handleDelete(t.$index)}}},[e._v("删除")]):e._e(),e.auth.area?i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(i){return e.handleArea(t.$index)}}},[e._v("配送区域")]):e._e()]}}])})],1),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t},open:e.handleOpenSelect}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"95px"}},[i("el-form-item",{attrs:{label:"快递公司",prop:"delivery_item_id"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择，只显示热门快递公司列表",clearable:""},model:{value:e.form.delivery_item_id,callback:function(t){e.$set(e.form,"delivery_item_id",t)},expression:"form.delivery_item_id"}},e._l(e.dialogCompany,(function(e){return i("el-option",{key:e.delivery_item_id,attrs:{label:e.name,value:e.delivery_item_id}})})),1)],1),i("el-form-item",{attrs:{label:"别名",prop:"alias"}},[i("el-input",{attrs:{placeholder:"请输入配送方式别名",clearable:!0},model:{value:e.form.alias,callback:function(t){e.$set(e.form,"alias",t)},expression:"form.alias"}})],1),i("el-form-item",{attrs:{label:"描述",prop:"content"}},[i("el-input",{attrs:{placeholder:"可输入配送方式描述",type:"textarea",rows:3},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[i("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"状态",prop:"status"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1)],1),i("el-divider",[e._v("费用设置")]),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"首重",prop:"first_weight"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.first_weight,callback:function(t){e.$set(e.form,"first_weight",t)},expression:"form.first_weight"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"首重运费",prop:"first_weight_price"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.first_weight_price,callback:function(t){e.$set(e.form,"first_weight_price",t)},expression:"form.first_weight_price"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"续重",prop:"second_weight"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.second_weight,callback:function(t){e.$set(e.form,"second_weight",t)},expression:"form.second_weight"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"续重运费",prop:"second_weight_price"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.second_weight_price,callback:function(t){e.$set(e.form,"second_weight_price",t)},expression:"form.second_weight_price"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"首件",prop:"first_item"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.first_item,callback:function(t){e.$set(e.form,"first_item",t)},expression:"form.first_item"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"首件运费",prop:"first_item_price"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.first_item_price,callback:function(t){e.$set(e.form,"first_item_price",t)},expression:"form.first_item_price"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"续件",prop:"second_item"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.second_item,callback:function(t){e.$set(e.form,"second_item",t)},expression:"form.second_item"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"续件运费",prop:"second_item_price"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.second_item_price,callback:function(t){e.$set(e.form,"second_item_price",t)},expression:"form.second_item_price"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"首体积量",prop:"first_volume"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.first_volume,callback:function(t){e.$set(e.form,"first_volume",t)},expression:"form.first_volume"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"首体积运费",prop:"first_volume_price"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.first_volume_price,callback:function(t){e.$set(e.form,"first_volume_price",t)},expression:"form.first_volume_price"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"续体积量",prop:"second_volume"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.second_volume,callback:function(t){e.$set(e.form,"second_volume",t)},expression:"form.second_volume"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"续体积运费",prop:"second_volume_price"}},[i("el-input-number",{attrs:{"controls-position":"right",precision:2,min:0},model:{value:e.form.second_volume_price,callback:function(t){e.$set(e.form,"second_volume_price",t)},expression:"form.second_volume_price"}})],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?i("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):i("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1)],1)},o=[],s=(i("7db0"),i("4160"),i("c975"),i("159b"),i("5530")),a=i("06e3"),l=i("ca00"),n=i("2edc"),c={props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,sort:!1,area:!1,enable:!1,disable:!1},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",dialogCompany:[],textMap:{update:"编辑方式",create:"新增方式"},form:{delivery_item_id:void 0,alias:void 0,content:void 0,first_weight:void 0,first_weight_price:void 0,second_weight:void 0,second_weight_price:void 0,first_item:void 0,first_item_price:void 0,second_item:void 0,second_item_price:void 0,first_volume:void 0,first_volume_price:void 0,second_volume:void 0,second_volume_price:void 0,sort:void 0,status:void 0},rules:{delivery_item_id:[{required:!0,message:"至少选择一项",trigger:"change"}],alias:[{required:!0,message:"别名不能为空",trigger:"blur"},{max:32,message:"长度不能大于 32 个字符",trigger:"blur"}],content:[{max:150,message:"长度不能大于 150 个字符",trigger:"blur"}],first_weight:[{required:!0,message:"首重不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],first_weight_price:[{required:!0,message:"首重运费不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],second_weight:[{required:!0,message:"续重不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],second_weight_price:[{required:!0,message:"续重运费不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],first_item:[{required:!0,message:"首件不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],first_item_price:[{required:!0,message:"首件运费不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],second_item:[{required:!0,message:"续件不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],second_item_price:[{required:!0,message:"续件运费不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],first_volume:[{required:!0,message:"首体积量不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],first_volume_price:[{required:!0,message:"首体积运费不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],second_volume:[{required:!0,message:"续体积量不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],second_volume_price:[{required:!0,message:"续体积运费不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/setting/logistics/delivery/add"),this.auth.set=this.$permission("/setting/logistics/delivery/set"),this.auth.del=this.$permission("/setting/logistics/delivery/del"),this.auth.sort=this.$permission("/setting/logistics/delivery/sort"),this.auth.area=this.$permission("/setting/logistics/delivery/area"),this.auth.enable=this.$permission("/setting/logistics/delivery/enable"),this.auth.disable=this.$permission("/setting/logistics/delivery/disable")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.delivery_id)})):t.push(this.currentTableData[e].delivery_id),t},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,i=e.prop,r=e.order,o={order_type:void 0,order_field:void 0};t&&r&&(o.order_type="ascending"===r?"asc":"desc",o.order_field=i),this.$emit("sort",o)},handleStatus:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this._getIdList(e);if(0!==o.length){if(!r){var l=this.currentTableData[e],n=l.status?0:1;if(l.status>1)return;if(0===n&&!this.auth.disable)return;if(1===n&&!this.auth.enable)return;return this.$set(this.currentTableData,e,Object(s["a"])(Object(s["a"])({},l),{},{status:2})),void c(o,n,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(o,i,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(e,t,i){Object(a["g"])(e,t).then((function(){i.currentTableData.forEach((function(r,o){-1!==e.indexOf(r.delivery_id)&&i.$set(i.currentTableData,o,Object(s["a"])(Object(s["a"])({},r),{},{status:t}))})),i.$message.success("操作成功")}))}},handleDelete:function(e){var t=this,i=this._getIdList(e);0!==i.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(a["b"])(i).then((function(){l["a"].deleteDataList(t.currentTableData,i,"delivery_id"),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleSort:function(e){Object(a["f"])(this.currentTableData[e].delivery_id,this.currentTableData[e].sort)},handleCreate:function(){var e=this;this.form={delivery_item_id:void 0,content:void 0,first_weight:0,first_weight_price:0,second_weight:0,second_weight_price:0,first_item:0,first_item_price:0,second_item:0,second_item_price:0,first_volume:0,first_volume_price:0,second_volume:0,second_volume_price:0,sort:50,status:1},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(a["a"])(e.form).then((function(t){e.currentTableData.unshift(Object(s["a"])(Object(s["a"])({},t.data),{},{get_delivery_item:Object(s["a"])({},e.dialogCompany.find((function(t){return t.delivery_item_id===e.form.delivery_item_id})))})),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleOpenSelect:function(){var e=this;this.dialogCompany.length||Object(n["f"])(0).then((function(t){e.dialogCompany=t.data||[]}))},handleUpdate:function(e){var t=this;this.currentIndex=e,this.form=Object(s["a"])({},this.currentTableData[e]),this.dialogCompany.length&&(this.dialogCompany.find((function(e){return e.delivery_item_id===t.form.delivery_item_id}))||(this.form.delivery_item_id=void 0)),this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(a["e"])(e.form).then((function(t){e.$set(e.currentTableData,e.currentIndex,Object(s["a"])(Object(s["a"])(Object(s["a"])({},e.currentTableData[e.currentIndex]),t.data),{},{get_delivery_item:Object(s["a"])({},e.dialogCompany.find((function(t){return t.delivery_item_id===e.form.delivery_item_id})))})),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleArea:function(e){var t=this.currentTableData[e];this.$router.push({name:"setting-logistics-delivery-area",params:{delivery_id:t.delivery_id,delivery_item_id:t.delivery_item_id}})}}},u=c,m=(i("fb7d"),i("2877")),d=Object(m["a"])(u,r,o,!1,null,"2f9077c5",null);t["default"]=d.exports},fb7d:function(e,t,i){"use strict";i("5eeb")}}]);