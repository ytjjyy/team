(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-my-editAddress"],{"1a57":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-7734e0e9]{height:100%;background-color:#f4f4f4}body.?%PAGE?%[data-v-7734e0e9]{background-color:#f4f4f4}",""]),t.exports=e},"1cc8":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index_class"},[i("v-uni-view",{staticClass:"edit-address"},[i("v-uni-form",{staticClass:"new_from",staticStyle:{display:"block"},attrs:{action:""}},[i("div",{staticClass:"form_list"},[i("span",[t._v(t._s(t.$t("收货人")))]),i("v-uni-input",{attrs:{type:"text",placeholder:t.$t("请填写收货人姓名")},model:{value:t.addresinfo.contacts,callback:function(e){t.$set(t.addresinfo,"contacts",e)},expression:"addresinfo.contacts"}})],1),i("div",{staticClass:"form_list"},[i("span",[t._v(t._s(t.$t("联系电话")))]),i("v-uni-input",{attrs:{type:"number",placeholder:t.$t("请填写联系电话")},model:{value:t.addresinfo.phone,callback:function(e){t.$set(t.addresinfo,"phone",e)},expression:"addresinfo.phone"}})],1),i("div",{staticClass:"form_list"},[i("span",[t._v(t._s(t.$t("所在省份")))]),i("v-uni-input",{attrs:{type:"text",disabled:"true",placeholder:t.$t("请选择所在省")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openProvince.apply(void 0,arguments)}},model:{value:t.chooseProvince.label,callback:function(e){t.$set(t.chooseProvince,"label",e)},expression:"chooseProvince.label"}})],1),i("div",{staticClass:"form_list"},[i("span",[t._v(t._s(t.$t("所在城市")))]),i("v-uni-input",{attrs:{type:"text",disabled:"true",placeholder:t.$t("请选择所在市")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openCity.apply(void 0,arguments)}},model:{value:t.chooseCity.label,callback:function(e){t.$set(t.chooseCity,"label",e)},expression:"chooseCity.label"}})],1),i("div",{staticClass:"form_list"},[i("span",[t._v(t._s(t.$t("所在地区")))]),i("v-uni-input",{attrs:{type:"text",disabled:"true",placeholder:t.$t("请选择所在区")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openArea.apply(void 0,arguments)}},model:{value:t.chooseArea.label,callback:function(e){t.$set(t.chooseArea,"label",e)},expression:"chooseArea.label"}})],1),i("div",{staticClass:"form_list"},[i("span",[t._v(t._s(t.$t("详细地址")))]),i("v-uni-input",{attrs:{type:"text",placeholder:t.$t("街道,楼牌号等")},model:{value:t.addresinfo.address,callback:function(e){t.$set(t.addresinfo,"address",e)},expression:"addresinfo.address"}})],1),i("div",{staticClass:"form_list"},[i("span",[t._v(t._s(t.$t("设置默认地址")))]),i("v-uni-switch",{attrs:{checked:t.addresinfo.is_default},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switch2Change.apply(void 0,arguments)}}})],1),i("mpvue-picker",{ref:"mpvuePickerProvince",attrs:{mode:t.mode,pickerValueDefault:t.pickerValueDefaultProvince,pickerValueArray:t.getProvinceList},on:{onChange:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeProvince.apply(void 0,arguments)},onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmProvince.apply(void 0,arguments)},onCancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancelProvince.apply(void 0,arguments)}}}),i("mpvue-picker",{ref:"mpvuePickerCity",attrs:{mode:t.mode,pickerValueDefault:t.pickerValueDefaultCity,pickerValueArray:t.getCityList},on:{onChange:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeCity.apply(void 0,arguments)},onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmCity.apply(void 0,arguments)},onCancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancelCity.apply(void 0,arguments)}}}),i("mpvue-picker",{ref:"mpvuePickerArea",attrs:{mode:t.mode,pickerValueDefault:t.pickerValueDefaultArea,pickerValueArray:t.getAreaList},on:{onChange:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeArea.apply(void 0,arguments)},onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmArea.apply(void 0,arguments)},onCancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancelArea.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"add_btn"},[i("v-uni-button",{staticClass:"cash_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.NewAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("保存地址")))])],1)],1)],1)},a=[]},"21b5":function(t,e,i){"use strict";i.r(e);var n=i("1cc8"),a=i("340b");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d263");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"7734e0e9",null,!1,n["a"],void 0);e["default"]=r.exports},"340b":function(t,e,i){"use strict";i.r(e);var n=i("ac5ad"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9308:function(t,e,i){var n=i("1a57");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("40de7d49",n,!0,{sourceMap:!1,shadowMode:!1})},ac5ad:function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("d3b7"),i("159b"),i("d401"),i("25f0");var a=n(i("c20c")),o="",s={components:{mpvuePicker:a.default},data:function(){return{mode:"selector",addresinfo:{},pirkCity:{prores:[],cityres:[],areares:[]},provinceInfo:{},cityInfo:{},areaInfo:{},disabled:1,disabled2:1,pickerValueDefaultProvince:[0],pickerValueDefaultCity:[0],pickerValueDefaultArea:[0],chooseProvince:{},chooseCity:{},chooseArea:{}}},onLoad:function(t){o=t.addrId,this.getinfo()},onShow:function(){var e=this;this.$http.getpro().then((function(i){200==i.status&&(e.pirkCity.prores=i.data,t.log(i.data))}))},computed:{getProvinceList:function(){return this.pirkCity.prores.map((function(t){return{label:t.pro_name,value:t.id}}))},getCityList:function(){return this.pirkCity.cityres.map((function(t){return{label:t.city_name,value:t.id}}))},getAreaList:function(){return this.pirkCity.areares.map((function(t){return{label:t.area_name,value:t.id}}))}},watch:{chooseProvince:function(t){var e=this;this.pirkCity.prores.forEach((function(i,n){i.id==t.value&&(e.provinceInfo=i,e.$http.getcity({pro_id:i.id}).then((function(t){200==t.status&&(e.pirkCity.cityres=t.data,e.disabled=1)})))}))},chooseCity:function(t){var e=this;this.pirkCity.cityres.forEach((function(i,n){i.id==t.value&&(e.cityInfo=i,e.$http.getarea({city_id:i.id}).then((function(t){200==t.status&&(e.pirkCity.areares=t.data,e.disabled2=1)})))}))},chooseArea:function(t){var e=this;this.pirkCity.areares.forEach((function(i,n){i.id==t.value&&(e.areaInfo=i)}))}},methods:{openProvince:function(){this.$refs.mpvuePickerProvince.show()},onConfirmProvince:function(t){this.chooseProvince=t},onChangeProvince:function(t){this.chooseProvince=t},onCancelProvince:function(e){t.log(e)},openCity:function(){this.$refs.mpvuePickerCity.show()},onConfirmCity:function(t){this.chooseCity=t},onChangeCity:function(t){this.chooseCity=t},onCancelCity:function(e){t.log(e)},openArea:function(){this.$refs.mpvuePickerArea.show()},onConfirmArea:function(t){this.chooseArea=t},onChangeArea:function(t){this.chooseArea=t},onCancelArea:function(e){t.log(e)},NewAddress:function(){var t=this;return this.addresinfo.contacts?this.addresinfo.phone?this.provinceInfo.id?this.cityInfo.id?this.areaInfo.id?this.addresinfo.address?void this.$http.getAddressedit({contacts:this.addresinfo.contacts,dz_id:this.addresinfo.id,phone:this.addresinfo.phone,address:this.addresinfo.address,is_default:this.addresinfo.is_default,pro_id:this.provinceInfo.id,city_id:this.cityInfo.id,area_id:this.areaInfo.id,province:this.provinceInfo.pro_name,city:this.cityInfo.city_name,area:this.areaInfo.area_name,datavalue:this.provinceInfo.code+" "+this.cityInfo.code+" "+this.areaInfo.code}).then((function(e){200==e.status&&(t.$toast(e.mess),setTimeout((function(e){t.getback()}),1500))})):(this.$toast(this.$t("请填写详细地址")),!1):(this.$toast(this.$t("请选择所在地区")),!1):(this.$toast(this.$t("请选择所在城市")),!1):(this.$toast(this.$t("请选择所在省份")),!1):(this.$toast(this.$t("请输入联系人手机号")),!1):(this.$toast(this.$t("请输入收货人姓名")),!1)},getinfo:function(){var e=this;this.$http.getAddressinfo({dz_id:o}).then((function(i){200==i.status&&(e.addresinfo=i.data.address,1==i.data.address.is_default?e.addresinfo.is_default=!0:e.addresinfo.is_default=!1,i.data.prores.forEach((function(n,a){i.data.address.pro_id==n.id&&(e.provinceInfo=n,t.log(a),e.pickerValueDefaultProvince=[a.toString()])})),i.data.cityres.forEach((function(t,n){i.data.address.city_id==t.id&&(e.cityInfo=t,e.pickerValueDefaultCity=[n.toString()])})),i.data.areares.forEach((function(n,a){i.data.address.area_id==n.id&&(e.areaInfo=n,t.log(a),e.pickerValueDefaultArea=[a.toString()])})),e.$http.getpro().then((function(t){200==t.status&&(e.pirkCity.prores=t.data)})),e.$http.getcity({pro_id:e.addresinfo.pro_id}).then((function(t){200==t.status&&(e.pirkCity.cityres=t.data)})),e.$http.getarea({city_id:e.addresinfo.city_id}).then((function(t){200==t.status&&(e.pirkCity.areares=t.data)})))}))},bindPickerChange:function(t,e){var i=this;1==t?this.pirkCity.prores.forEach((function(t,n){n==e.detail.value&&(i.provinceInfo=t,i.$http.getcity({pro_id:t.id}).then((function(t){200==t.status&&(i.cityInfo="",i.areaInfo="",i.pirkCity.cityres=t.data,i.disabled=1)})))})):2==t?this.pirkCity.cityres.forEach((function(t,n){n==e.detail.value&&(i.cityInfo=t,i.$http.getarea({city_id:t.id}).then((function(t){200==t.status&&(i.areaInfo="",i.pirkCity.areares=t.data,i.disabled2=1)})))})):this.pirkCity.areares.forEach((function(t,n){n==e.detail.value&&(i.areaInfo=t)}))},isdisabled:function(){0==this.disabled&&this.$toast(this.$t("请按顺序选择"))},switch2Change:function(t){this.addresinfo.is_default=!!t.detail.value}}};e.default=s}).call(this,i("5a52")["default"])},d263:function(t,e,i){"use strict";var n=i("9308"),a=i.n(n);a.a}}]);