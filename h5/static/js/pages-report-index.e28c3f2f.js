(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-index"],{"014b":function(t,a,e){"use strict";e.r(a);var i=e("aecf"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=o.a},"4cb5":function(t,a,e){"use strict";var i=e("9941"),o=e.n(i);o.a},"6a92":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".tabs_box[data-v-66836395]{position:fixed;left:0;right:0;background-color:#fff;border-bottom:2px solid #ebedf0;color:#666}.log_control[data-v-66836395]{display:flex;flex-direction:row;align-items:center;justify-content:center;height:%?80?%;\r\n\t/* \tposition: fixed;\r\n\tleft: 0;\r\n\tright: 0; */padding:0 %?30?%}.log_condition[data-v-66836395]{flex:1;display:flex;align-items:center;justify-content:center}.condition_button[data-v-66836395]{color:#f63;font-size:%?28?%}.left_line[data-v-66836395]{border-left:2px solid #ebedf0}.right_line[data-v-66836395]{border-right:2px solid #ebedf0}.log_wrap[data-v-66836395]{margin:%?180?% %?10?% %?30?%;color:#666;padding-bottom:%?30?%}.log_box[data-v-66836395]{display:flex;flex-direction:column;background-color:#fff;border-radius:%?15?%;padding:%?30?% %?30?% %?10?%;box-shadow:%?1?% %?6?% %?16?% rgba(0,0,0,.1);margin-bottom:%?15?%}.log_title[data-v-66836395],\r\n.log_content[data-v-66836395]{display:flex;flex-direction:row;align-items:center;height:%?48?%}.log_no[data-v-66836395],\r\n.log_time[data-v-66836395],\r\n.log_acc[data-v-66836395],\r\n.log_remark[data-v-66836395]{display:flex;height:100%;flex:1;align-items:center}.log_acc[data-v-66836395],\r\n.log_no[data-v-66836395]{justify-content:flex-start}.log_time[data-v-66836395],\r\n.log_remark[data-v-66836395]{justify-content:flex-end}.log_acc[data-v-66836395]{font-size:%?32?%}.log_acc_outlay[data-v-66836395]{color:#f63;font-size:%?42?%}.log_acc_income[data-v-66836395]{color:#81c16a;font-size:%?42?%}.log_name[data-v-66836395]{height:%?58?%;text-align:center}.load_more[data-v-66836395]{padding:%?50?% 0 %?80?%}.log_remark uni-text[data-v-66836395]{margin-left:%?10?%}.status_done[data-v-66836395]{color:#81c16a;font-weight:500}.status_pending[data-v-66836395]{color:#1890ff;font-weight:500}.status_return[data-v-66836395]{color:#faad14;font-weight:500}.log_report[data-v-66836395]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:%?20?%}.log_item[data-v-66836395]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.log_total[data-v-66836395]{border:%?2?% solid rgba(255,102,51,.6)}",""]),t.exports=a},9941:function(t,a,e){var i=e("6a92");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("2b938b76",i,!0,{sourceMap:!1,shadowMode:!1})},aecf:function(t,a,e){"use strict";var i=e("4ea4");e("4160"),e("acd8"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(e("422c")),s={data:function(){return{totalBank:0,userBank:0,roleId:"",TabCur:0,TabList:["个人报表","团队报表"],startDate:"",endDate:"",show_date:!1,teamDataList:[],userFeeIn:"0.00",userFeeOut:"0.00",userIn:0,userOut:0,totalFeeIn:"0.00",totalFeeOut:"0.00",totalIn:0,totalOut:0}},onShow:function(){try{var t=uni.getStorageSync("token"),a=uni.getStorageSync("role_id");t&&a?this.roleId=a:uni.reLaunch({url:"../public/login"})}catch(e){}this.resetLoad(),this.loadDataList()},onLoad:function(){this.todayDate()},onPullDownRefresh:function(){this.resetLoad(),this.loadDataList(),uni.stopPullDownRefresh()},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.resetLoad(),this.loadDataList()},todayDate:function(){this.startDate=(0,o.default)().format("YYYY-MM-DD"),this.endDate=(0,o.default)().format("YYYY-MM-DD")},changeDate:function(t){this.startDate=t.startDate,this.endDate=t.endDate,this.resetLoad(),this.loadDataList()},clickReset:function(){this.teamDataList=[],this.todayDate(),this.resetLoad(),this.loadDataList()},resetLoad:function(){this.teamDataList=[]},loadDataList:function(){var t=this;uni.showLoading({title:"数据加载中...",mask:!0});var a={};""!=this.startDate.length&&(a.start=this.startDate+" 00:00:00"),""!=this.endDate.length&&(a.end=this.endDate+" 23:59:59"),a.role_id=this.roleId,this.$u.api.getReport(a).then((function(a){if(null!=a.data){var e=a.data.team;null!=e&&e.forEach((function(a){var e={};e.name=a.name,e.fee_in=null==a.fee_in?"0.00":parseFloat(a.fee_in).toFixed(2),e.fee_out=null==a.fee_out?"0.00":parseFloat(a.fee_out).toFixed(2),e.in=null==a.in?0:parseFloat(a.in).toFixed(2),e.out=null==a.out?0:parseFloat(a.out).toFixed(2),e.bank=a.bank,t.teamDataList.push(e)})),t.totalFeeIn=null==a.data.total.fee_in?"0.00":parseFloat(a.data.total.fee_in).toFixed(2),t.totalFeeOut=null==a.data.total.fee_out?"0.00":parseFloat(a.data.total.fee_out).toFixed(2),t.totalIn=null==a.data.total.in?0:parseFloat(a.data.total.in).toFixed(2),t.totalOut=null==a.data.total.out?0:parseFloat(a.data.total.out).toFixed(2),t.totalBank=a.data.total.bank,t.userFeeIn=null==a.data.user.fee_in?"0.00":parseFloat(a.data.user.fee_in).toFixed(2),t.userFeeOut=null==a.data.user.fee_out?"0.00":parseFloat(a.data.user.fee_out).toFixed(2),t.userIn=null==a.data.user.in?0:parseFloat(a.data.user.in).toFixed(2),t.userOut=null==a.data.user.out?0:parseFloat(a.data.user.out).toFixed(2),t.userBank=a.data.user.bank}else uni.showToast({icon:"none",title:err.message?err.message:"获取盈利报表异常,请稍后重试",duration:2e3})})).catch((function(t){uni.showToast({icon:"none",title:t.message?t.message:"获取盈利报表异常,请稍后重试",duration:2e3})}))}}};a.default=s},c148:function(t,a,e){"use strict";e.r(a);var i=e("d652"),o=e("014b");for(var s in o)"default"!==s&&function(t){e.d(a,t,(function(){return o[t]}))}(s);e("4cb5");var n,l=e("f0c5"),c=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"66836395",null,!1,i["a"],n);a["default"]=c.exports},d652:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={uCalendar:e("3f5e").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("cu-custom",{attrs:{bgColor:"bg-gradual-orange",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("盈利报表")])],2),e("v-uni-view",{staticClass:"tabs_box"},[e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"flex text-center"},t._l(2,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item flex-sub",class:i==t.TabCur?"text-orange cur":"",attrs:{"data-id":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(t.TabList[i]))])})),1)],1),e("v-uni-view",{staticClass:"log_control"},[e("v-uni-view",{staticClass:"log_condition",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.show_date=!0}}},[e("v-uni-text",[t._v(t._s(t.startDate)+" 至 "+t._s(t.endDate))])],1),e("v-uni-view",{staticClass:"condition_button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickReset.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("重置")])],1)],1)],1),e("v-uni-view",{staticClass:"log_wrap"},[0==t.TabCur?e("v-uni-view",[e("v-uni-view",{staticClass:"log_box",style:[{animation:"show 1.2s 1"}]},[e("v-uni-view",{staticClass:"log_report"},[e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("代付金额")]),e("v-uni-view",{staticClass:"log_acc log_acc_income"},[t._v(t._s(t.userOut))])],1),e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("在线卡片")]),e("v-uni-view",{staticClass:"log_acc log_acc_income"},[t._v(t._s(t.userBank))])],1)],1),e("v-uni-view",{staticClass:"log_report"},[e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("代收金额")]),e("v-uni-view",{staticClass:"log_acc log_acc_outlay"},[t._v(t._s(t.userIn))])],1),e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("当前收益")]),e("v-uni-view",{staticClass:"log_acc log_acc_outlay"},[t._v(t._s(t.userFeeIn))])],1)],1)],1)],1):t._e(),1==t.TabCur?e("v-uni-view",[e("v-uni-view",{staticClass:"log_box log_total",style:[{animation:"show 1.2s 1"}]},[e("v-uni-view",{staticClass:"log_report"},[e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("代付累计金额")]),e("v-uni-view",{staticClass:"log_acc log_acc_income"},[t._v(t._s(t.totalOut))])],1),e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("在线卡片")]),e("v-uni-view",{staticClass:"log_acc log_acc_income"},[t._v(t._s(t.totalBank))])],1)],1),e("v-uni-view",{staticClass:"log_report"},[e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("代收累计金额")]),e("v-uni-view",{staticClass:"log_acc log_acc_outlay"},[t._v(t._s(t.totalIn))])],1),e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("当前累计收益")]),e("v-uni-view",{staticClass:"log_acc log_acc_outlay"},[t._v(t._s(t.totalFeeIn))])],1)],1)],1)],1):t._e(),t._l(t.teamDataList,(function(a,i){return 1==t.TabCur?e("v-uni-view",{key:i},[e("v-uni-view",{staticClass:"log_box log_team",style:[{animation:"show "+(.2*(i+1)+1)+"s 1"}]},[e("v-uni-view",{staticClass:"log_name"},[t._v("下级账号："+t._s(a.name))]),e("v-uni-view",{staticClass:"log_report"},[e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("代付金额")]),e("v-uni-view",{staticClass:"log_acc log_acc_income"},[t._v(t._s(a.out))])],1),e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("在线卡片")]),e("v-uni-view",{staticClass:"log_acc log_acc_income"},[t._v(t._s(a.bank))])],1)],1),e("v-uni-view",{staticClass:"log_report"},[e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("代收金额")]),e("v-uni-view",{staticClass:"log_acc log_acc_outlay"},[t._v(t._s(a.in))])],1),e("v-uni-view",{staticClass:"log_item"},[e("v-uni-view",{staticClass:"log_acc_title"},[t._v("当前收益")]),e("v-uni-view",{staticClass:"log_acc log_acc_outlay"},[t._v(t._s(a.fee_in))])],1)],1)],1)],1):t._e()}))],2),e("u-calendar",{attrs:{mode:"range",safeAreaInsetBottom:!0,toolTip:"选择日期","start-text":"开始","end-text":"结束","active-bg-color":"#FF6633","range-color":"#FF6633"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.changeDate.apply(void 0,arguments)}},model:{value:t.show_date,callback:function(a){t.show_date=a},expression:"show_date"}})],1)},s=[]}}]);