(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{a3w7:function(e,t,r){"use strict";var s=r("tAuX"),a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("+L6B");var l=a(r("2/Rp"));r("miYZ");var i=a(r("tsqr"));r("MXD1");var n=a(r("CFYs")),u=a(r("p0pE")),o=a(r("2Taf")),d=a(r("vZ4D")),c=a(r("l4Ni")),f=a(r("ujKo")),p=a(r("MhPg"));r("5NDa");var g=a(r("5rEg"));r("OaEy");var m=a(r("2fM7"));r("y8nQ");var v=a(r("Vl3Y")),h=r("Y2fQ"),w=s(r("q1tI")),y=a(r("wY1l")),E=r("MuoO"),b=a(r("3a4m")),F=a(r("vyRF")),M=function(e,t,r,s){var a,l=arguments.length,i=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(l<3?a(i):l>3?a(t,r,i):a(t,r))||i);return l>3&&i&&Object.defineProperty(t,r,i),i},k=v.default.Item,P=(m.default.Option,g.default.Group,w.default.createElement("div",{className:F.default.success},w.default.createElement(h.FormattedMessage,{id:"user-register.strength.strong"})),w.default.createElement("div",{className:F.default.warning},w.default.createElement(h.FormattedMessage,{id:"user-register.strength.medium"})),w.default.createElement("div",{className:F.default.error},w.default.createElement(h.FormattedMessage,{id:"user-register.strength.short"})),{ok:"success",pass:"normal",poor:"exception"}),R=function(e){function t(){var e;return(0,o.default)(this,t),e=(0,c.default)(this,(0,f.default)(t).apply(this,arguments)),e.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},e.interval=void 0,e.onGetCaptcha=function(){var t=59;e.setState({count:t}),e.interval=window.setInterval(function(){t-=1,e.setState({count:t}),0===t&&clearInterval(e.interval)},1e3)},e.getPasswordStatus=function(){var t=e.props.form,r=t.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},e.handleSubmit=function(t){t.preventDefault();var r=e.props,s=r.form,a=r.dispatch;s.validateFields({force:!0},function(t,r){if(!t){var s=e.state.prefix;a({type:"userRegister/submit",payload:(0,u.default)({},r,{prefix:s}),callback:function(e){}})}})},e.checkConfirm=function(t,r,s){var a=e.props.form;r&&r!==a.getFieldValue("password")?s((0,h.formatMessage)({id:"user-register.password.twice"})):s()},e.checkPassword=function(t,r,s){var a=e.state,l=a.visible,i=a.confirmDirty;if(r)if(e.setState({help:""}),l||e.setState({visible:!!r}),r.length<6)s("error");else{var n=e.props.form;r&&i&&n.validateFields(["confirm"],{force:!0}),s()}else e.setState({help:(0,h.formatMessage)({id:"user-register.password.required"}),visible:!!r}),s("error")},e.changePrefix=function(t){e.setState({prefix:t})},e.renderPasswordProgress=function(){var t=e.props.form,r=t.getFieldValue("password"),s=e.getPasswordStatus();return r&&r.length?w.default.createElement("div",{className:F.default["progress-".concat(s)]},w.default.createElement(n.default,{status:P[s],className:F.default.progress,strokeWidth:6,percent:10*r.length>100?100:10*r.length,showInfo:!1})):null},e}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.userRegister,r=e.form,s=r.getFieldValue("mail");"ok"===t.status&&(i.default.success("\u6ce8\u518c\u6210\u529f\uff01"),b.default.push({pathname:"/user/register-result",state:{account:s}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,s=t.getFieldDecorator,a=this.state,i=(a.count,a.prefix,a.help);a.visible;return w.default.createElement("div",{style:{marginTop:80},className:F.default.main},w.default.createElement("h3",null,w.default.createElement(h.FormattedMessage,{id:"user-register.register.register"})),w.default.createElement(v.default,{onSubmit:this.handleSubmit},w.default.createElement(k,null,s("mail",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"},{pattern:/^1[3|4|5|8|7][0-9]\d{4,8}$/,message:"\u8bf7\u8f93\u5165\u6709\u6548\u624b\u673a\u53f7\u7801"}]})(w.default.createElement(g.default,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"}))),w.default.createElement(k,{help:i},s("password",{rules:[{validator:this.checkPassword}]})(w.default.createElement(g.default,{size:"large",type:"password",placeholder:(0,h.formatMessage)({id:"user-register.password.placeholder"})}))),w.default.createElement(k,null,s("confirm",{rules:[{required:!0,message:(0,h.formatMessage)({id:"user-register.confirm-password.required"})},{validator:this.checkConfirm}]})(w.default.createElement(g.default,{size:"large",type:"password",placeholder:(0,h.formatMessage)({id:"user-register.confirm-password.placeholder"})}))),w.default.createElement(k,null,w.default.createElement(l.default,{size:"large",loading:r,className:F.default.submit,type:"primary",htmlType:"submit"},w.default.createElement(h.FormattedMessage,{id:"user-register.register.register"})),w.default.createElement(y.default,{className:F.default.login,to:"/user/login"},w.default.createElement(h.FormattedMessage,{id:"user-register.register.sign-in"})))))}}]),t}(w.Component);R=M([(0,E.connect)(function(e){var t=e.userRegister,r=e.loading;return{userRegister:t,submitting:r.effects["userRegister/submit"]}})],R);var S=v.default.create()(R);t.default=S},vyRF:function(e,t,r){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);