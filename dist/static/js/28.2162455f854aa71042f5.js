webpackJsonp([28],{"08xP":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("woOf"),r=n.n(i),o=n("UZcr"),a=n("pM9x"),s=(n("ZoQJ"),n("Fd2+")),l={data:function(){return{second:null,show:!1,form:{phone:"",password:"",code:"",username:"",invitation:"",transactionPwd:null},loginPwd_re:"",payPwd_re:null,transactionPwd_re:null,invitation_dis:!1,recommendreName:null}},components:{getCode:a.a},methods:{verifynfo:function(){if(!this.form.phone)return Object(s.x)(this.$t("wallet.login.toast_mail")),!1;if(!this.form.code)return Object(s.x)(this.$t("wallet.register.form_input_code")),!1;if(!this.form.password)return Object(s.x)(this.$t("wallet.register.form_input_loginPwd")),!1;if(!this.loginPwd_re)return Object(s.x)(this.$t("wallet.register.form_input_loginPwd_re")),!1;if(this.form.password===this.loginPwd_re)if(this.form.transactionPwd)if(this.transactionPwd_re){if(this.form.transactionPwd===this.transactionPwd_re)return!!this.form.invitation||(Object(s.x)(this.$t("wallet.register.form_input_invitation")),!1);Object(s.x)(this.$t("feature.register.toast_payPass_fail"))}else Object(s.x)(this.$t("feature.register.input_payPass_re"));else Object(s.x)(this.$t("feature.register.input_payPass"));else Object(s.x)(this.$t("feature.register.toast_loginPass_fail"))},submitRegister:function(){var t=this;if(this.verifynfo()){var e=r()({},this.form);e.phoneOrEmail=this.form.phone,e.username=this.form.phone,Object(o.s)(e).then(function(e){Object(s.x)(e.message),Dialog.alert({title:e.message,confirmButtonText:t.$t("wallet.register.login_now")}).then(function(){t.$router.replace({path:"/login"})})}).catch(function(t){console.error(t)})}},onSelect:function(t){this.set_lang(t.type),this.show=!1}},mounted:function(){this.$route.query.invitation&&(this.form.invitation=this.$route.query.invitation,this.invitation_dis=!0)}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login_form padding20 full-screen",attrs:{id:"login"}},[n("div",{staticClass:"space30"}),t._v(" "),n("div",{staticClass:"title flex align between"},[n("div",{staticClass:"h2 text_color_dark"},[t._v(t._s(t.$t("wallet.register.title")))]),t._v(" "),"en"==t.$i18n.locale?n("div",{staticClass:"change_lang",on:{click:function(e){t.show=!0}}},[t._v("English"),n("van-icon",{attrs:{name:"arrow-down"}})],1):t._e(),t._v(" "),"zh_hk"==t.$i18n.locale?n("div",{staticClass:"change_lang",on:{click:function(e){t.show=!0}}},[t._v("繁體中文"),n("van-icon",{attrs:{name:"arrow-down"}})],1):t._e(),t._v(" "),"zh_cn"==t.$i18n.locale?n("div",{staticClass:"change_lang",on:{click:function(e){t.show=!0}}},[t._v("简体中文"),n("van-icon",{attrs:{name:"arrow-down"}})],1):t._e()]),t._v(" "),n("div",{staticClass:"space20"}),t._v(" "),n("div",{staticClass:"them_form"},[n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.userAccount,expression:"form.userAccount"}],attrs:{type:"text",placeholder:t.$t("wallet.register.form_input_userName")},domProps:{value:t.form.userAccount},on:{blur:t.blur_event,input:function(e){e.target.composing||t.$set(t.form,"userAccount",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],attrs:{type:"text",placeholder:t.$t("wallet.register.form_input_email")},domProps:{value:t.form.phone},on:{blur:t.blur_event,input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],attrs:{type:"number",pattern:"\\d*",placeholder:t.$t("wallet.register.form_input_code")},domProps:{value:t.form.code},on:{blur:t.blur_event,input:function(e){e.target.composing||t.$set(t.form,"code",e.target.value)}}}),t._v(" "),n("getCode",{attrs:{codeData:{type:"register",phone:t.form.phone}}})],1),t._v(" "),n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password",placeholder:t.$t("wallet.register.form_input_loginPwd")},domProps:{value:t.form.password},on:{blur:t.blur_event,input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPwd_re,expression:"loginPwd_re"}],attrs:{type:"password",placeholder:t.$t("wallet.register.form_input_loginPwd_re")},domProps:{value:t.loginPwd_re},on:{blur:t.blur_event,input:function(e){e.target.composing||(t.loginPwd_re=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.transactionPwd,expression:"form.transactionPwd"}],staticStyle:{"-webkit-text-security":"disc"},attrs:{type:"number",placeholder:t.$t("feature.register.input_payPass")},domProps:{value:t.form.transactionPwd},on:{blur:t.blur_event,input:function(e){e.target.composing||t.$set(t.form,"transactionPwd",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transactionPwd_re,expression:"transactionPwd_re"}],staticStyle:{"-webkit-text-security":"disc"},attrs:{type:"number",placeholder:t.$t("feature.register.input_payPass_re")},domProps:{value:t.transactionPwd_re},on:{blur:t.blur_event,input:function(e){e.target.composing||(t.transactionPwd_re=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_gorup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.invitation,expression:"form.invitation"}],attrs:{type:"text",placeholder:t.$t("wallet.register.form_input_invitation"),disabled:t.invitation_dis},domProps:{value:t.form.invitation},on:{blur:t.blur_event,input:function(e){e.target.composing||t.$set(t.form,"invitation",e.target.value)}}}),t._v(" "),t.recommendreName?n("div",{staticClass:"color-warning font12 marginT10 animated fadeIn"},[t._v(t._s(t.$t("feature.register.text_recommendreName"))+"："+t._s(t.recommendreName))]):t._e()]),t._v(" "),n("div",{staticClass:"space20"}),t._v(" "),n("van-button",{attrs:{type:"info"},on:{click:function(e){return t.submitRegister()}}},[t._v(t._s(t.$t("wallet.register.form_btn")))]),t._v(" "),n("div",{staticClass:"space30"}),t._v(" "),n("div",{staticClass:"info flex align between"},[n("div",{staticClass:"textLeft"},[n("span",{staticClass:"font14 them_color_gray"},[t._v(t._s(t.$t("wallet.register.old_user")))]),t._v(" \n        "),n("a",{staticClass:"font14 font_link",on:{click:function(e){return t.gopage_re("login")}}},[t._v(t._s(t.$t("wallet.register.login_now")))])]),t._v(" "),n("a",{staticClass:"font14 font_link",attrs:{href:"https://www.gscapp.cn/ios/cAxn",target:"_bank"}},[t._v(t._s(t.$t("feature.register.text_download")))])]),t._v(" "),n("div",{staticClass:"space20"})],1),t._v(" "),n("van-action-sheet",{attrs:{title:t.$t("wallet.common.exchange_lang"),actions:t.lang_actions},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("7feS")},"data-v-5314bd7e",null);e.default=u.exports},"4KBh":function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\n.van-button[data-v-5314bd7e] {\n  display: block;\n  width: 100%;\n}\n\n","",{version:3,sources:["/Users/wangyouyu/Downloads/Document/vue/TBClient/src/view/walletView/register.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,YAAY;CACb",file:"register.vue",sourcesContent:["\n.van-button[data-v-5314bd7e] {\n  display: block;\n  width: 100%;\n}\n\n"],sourceRoot:""}])},"7feS":function(t,e,n){var i=n("4KBh");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("8f5cac30",i,!0,{})}});
//# sourceMappingURL=28.2162455f854aa71042f5.js.map