(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bill-index"],{"09cd":function(t,e,a){var s=a("1e8b");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("4f06").default;i("291ff40a",s,!0,{sourceMap:!1,shadowMode:!1})},"1e8b":function(t,e,a){var s=a("24fb2");e=s(!1),e.push([t.i,".log_control[data-v-972a8c28]{display:flex;flex-direction:row;align-items:center;justify-content:center;height:%?80?%;background-color:#fff;border-bottom:2px solid #ebedf0;position:fixed;left:0;right:0;padding:0 %?30?%;color:#666}.log_condition[data-v-972a8c28]{flex:1;display:flex;align-items:center;justify-content:center}.condition_button[data-v-972a8c28]{color:#f63;font-size:%?28?%}.left_line[data-v-972a8c28]{border-left:2px solid #ebedf0}.right_line[data-v-972a8c28]{border-right:2px solid #ebedf0}.log_wrap[data-v-972a8c28]{margin:%?90?% %?10?% %?30?%}.log_box[data-v-972a8c28]{display:flex;flex-direction:column;background-color:#fff;border-radius:%?15?%;padding:%?30?%;box-shadow:%?1?% %?6?% %?16?% rgba(0,0,0,.1);margin-bottom:%?15?%}.log_title[data-v-972a8c28],\r\n.log_content[data-v-972a8c28]{display:flex;flex-direction:row;align-items:center;height:%?48?%}.log_no[data-v-972a8c28],\r\n.log_time[data-v-972a8c28],\r\n.log_acc[data-v-972a8c28],\r\n.log_remark[data-v-972a8c28]{display:flex;height:100%;flex:1;align-items:center}.log_acc[data-v-972a8c28],\r\n.log_no[data-v-972a8c28]{justify-content:flex-start}.log_time[data-v-972a8c28],\r\n.log_remark[data-v-972a8c28]{justify-content:flex-end}.log_acc[data-v-972a8c28]{font-size:%?38?%;font-weight:600}.log_acc_outlay[data-v-972a8c28]{color:#f63}.log_acc_income[data-v-972a8c28]{color:#81c16a}.load_more[data-v-972a8c28]{padding:%?50?% 0 %?80?%}.log_remark uni-text[data-v-972a8c28]{margin-left:%?10?%}.status_done[data-v-972a8c28]{color:#81c16a;font-weight:500}.status_pending[data-v-972a8c28]{color:#1890ff;font-weight:500}.status_return[data-v-972a8c28]{color:#faad14;font-weight:500}",""]),t.exports=e},"24ed":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return s}));var s={uLoadmore:a("744c").default,uActionSheet:a("f44f").default,uCalendar:a("4bee").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("cu-custom",{attrs:{bgColor:"bg-gradual-orange",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("账单流水")])],2),a("v-uni-view",{staticClass:"log_control"},[a("v-uni-view",{staticClass:"log_condition",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show_type=!0}}},[a("v-uni-text",[t._v(t._s(t.typeText))])],1),a("v-uni-view",{staticClass:"log_condition left_line right_line",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show_status=!0}}},[a("v-uni-text",[t._v(t._s(t.statusText))])],1),a("v-uni-view",{staticClass:"log_condition",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show_date=!0}}},[a("v-uni-text",[t._v("日期范围")])],1),a("v-uni-view",{staticClass:"condition_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickReset.apply(void 0,arguments)}}},[a("v-uni-text",[t._v("重置")])],1)],1),a("v-uni-view",{staticClass:"log_wrap"},[t._l(t.billList,(function(e,s){return a("v-uni-view",{key:s},[a("v-uni-view",{staticClass:"log_box",style:[{animation:"show "+(.2*(s+1)+1)+"s 1"}]},[a("v-uni-view",{staticClass:"log_title"},[a("v-uni-view",{staticClass:"log_no"},[t._v("No."+t._s(e.id))]),a("v-uni-view",{staticClass:"log_time"},[t._v(t._s(e.createAt))])],1),a("v-uni-view",{staticClass:"log_content"},[a("v-uni-view",{staticClass:"log_acc",class:"1"==e.listType?"log_acc_outlay":"log_acc_income"},[t._v(t._s("1"==e.listType?"-":"+")+t._s(e.amount))]),3==e.status?a("v-uni-view",{staticClass:"log_remark"},[t._v(t._s(e.typeLabel)+" -"),a("v-uni-text",{staticClass:"status_pending"},[t._v("待处理")])],1):t._e(),1==e.status?a("v-uni-view",{staticClass:"log_remark"},[t._v(t._s(e.typeLabel)+" -"),a("v-uni-text",{staticClass:"status_done"},[t._v("已处理")])],1):t._e(),2==e.status?a("v-uni-view",{staticClass:"log_remark"},[t._v(t._s(e.typeLabel)+" -"),a("v-uni-text",{staticClass:"status_return"},[t._v("已撤回")])],1):t._e()],1)],1)],1)})),a("v-uni-view",{staticClass:"load_more"},[a("u-loadmore",{attrs:{status:t.status,"load-text":t.loadText,"bg-color":"#f1f1f1"},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore.apply(void 0,arguments)}}})],1)],2),a("u-action-sheet",{attrs:{list:t.typeList,"cancel-text":"取消"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeType.apply(void 0,arguments)}},model:{value:t.show_type,callback:function(e){t.show_type=e},expression:"show_type"}}),a("u-action-sheet",{attrs:{list:t.statusList,"cancel-text":"取消"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus.apply(void 0,arguments)}},model:{value:t.show_status,callback:function(e){t.show_status=e},expression:"show_status"}}),a("u-calendar",{attrs:{mode:"range",safeAreaInsetBottom:!0,toolTip:"选择日期","start-text":"开始","end-text":"结束","active-bg-color":"#FF6633","range-color":"#FF6633"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDate.apply(void 0,arguments)}},model:{value:t.show_date,callback:function(e){t.show_date=e},expression:"show_date"}})],1)},o=[]},"8e9c":function(t,e,a){"use strict";var s=a("4ea4");a("4160"),a("acd8"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("20ad")),o={data:function(){return{roleId:"",typeList:[{text:"全部",value:""},{text:"充值",value:1},{text:"提现",value:2},{text:"支出",value:3},{text:"退款",value:4},{text:"收入",value:5},{text:"收入-管理员操作",value:6},{text:"支出-管理员操作",value:7},{text:"收入-佣金",value:8},{text:"支出-充值手续费",value:9}],typeValue:"",typeText:"记录类型",show_type:!1,statusList:[{text:"全部",value:""},{text:"待处理",value:3,label:"pending"},{text:"已处理",value:1,label:"done"},{text:"已撤回",value:2,label:"return"}],statusValue:"",statusText:"流水状态",show_status:!1,startDate:"",endDate:"",show_date:!1,keyWord:"",status:"loadmore",billList:[],total:5,currentPage:1,pageSize:5,loadText:{loadmore:"点击或上拉加载更多",loading:"努力加载中",nomore:"没有更多数据"}}},onShow:function(){try{var t=uni.getStorageSync("token"),e=uni.getStorageSync("role_id");t&&e?this.roleId=e:uni.reLaunch({url:"../public/login"})}catch(a){}this.resetLoad(),this.loadmore()},onPullDownRefresh:function(){this.resetLoad(),this.loadmore(),uni.stopPullDownRefresh()},onReachBottom:function(){this.loadmore()},methods:{changeType:function(t){0==t?(this.typeText="记录类型",this.typeValue=""):(this.typeText=this.typeList[t].text,this.typeValue=this.typeList[t].value),this.resetLoad(),this.loadmore()},changeStatus:function(t){0==t?(this.statusText="处理状态",this.statusValue=""):(this.statusText=this.statusList[t].text,this.statusValue=this.statusList[t].value),this.resetLoad(),this.loadmore()},changeDate:function(t){this.startDate=t.startDate+" 00:00:00",this.endDate=t.endDate+" 23:59:59",this.resetLoad(),this.loadmore()},loadmore:function(){this.status="loading",this.loadBillList()},clickReset:function(){this.billList=[],this.currentPage=1,this.pageSize=5,this.startDate="",this.endDate="",this.keyWord="",this.statusValue="",this.statusText="流水状态",this.typeValue="",this.typeText="记录类型",this.resetLoad(),this.loadmore()},resetLoad:function(){this.status="loadmore",this.billList=[],this.currentPage=1,this.pageSize=5},loadBillList:function(){var t=this;uni.showLoading({title:"数据加载中...",mask:!0});var e={};""!=this.startDate.length&&(e.start=this.startDate),""!=this.endDate.length&&(e.end=this.endDate),""!=this.keyWord.length&&(e.code=this.keyWord),""!=this.statusValue.length&&(e.status=this.statusValue),""!=this.typeValue.length&&(e.type=this.typeValue),e.role_id=this.roleId,e.currentPage=this.currentPage,e.pageSize=this.pageSize,this.$u.api.getBillList(e).then((function(e){if(t.billList.length<=0&&(t.total=e.data.pagination.total),null!=e.data.result){var a=e.data.result;a.forEach((function(e){var a={};a.id=e.balance.id,a.createAt=(0,i.default)(e.balance.created_at).format("YYYY-MM-DD HH:mm:ss"),a.status=e.balance.status,a.type=e.balance.type,1==a.type?(a.typeLabel="充值",a.listType=0):2==a.type?(a.typeLabel="提现",a.listType=1):3==a.type?(a.typeLabel="支出",a.listType=1):4==a.type?(a.typeLabel="退款",a.listType=0):5==a.type?(a.typeLabel="收入",a.listType=0):6==a.type?(a.typeLabel="收入-管理员操作",a.listType=0):7==a.type?(a.typeLabel="支出-管理员操作",a.listType=1):8==a.type?(a.typeLabel="收入-佣金",a.listType=0):9==a.type&&(a.typeLabel="支出-充值手续费",a.listType=1),a.amount=parseFloat(e.balance.amount).toFixed(2),a.before=parseFloat(e.balance.before).toFixed(2),a.balance=parseFloat(e.balance.balance).toFixed(2),t.billList.push(a)})),t.currentPage+=1,t.total=t.total-e.data.result.length,t.status="loadmore"}else t.status="nomore"})).catch((function(t){uni.showToast({icon:"none",title:t.message?t.message:"获取账单流水列表异常,请稍后重试",duration:2e3})}))}}};e.default=o},c81b:function(t,e,a){"use strict";a.r(e);var s=a("8e9c"),i=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);e["default"]=i.a},cfd9:function(t,e,a){"use strict";var s=a("09cd"),i=a.n(s);i.a},ee07:function(t,e,a){"use strict";a.r(e);var s=a("24ed"),i=a("c81b");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("cfd9");var n,l=a("f0c5"),c=Object(l["a"])(i["default"],s["b"],s["c"],!1,null,"972a8c28",null,!1,s["a"],n);e["default"]=c.exports}}]);