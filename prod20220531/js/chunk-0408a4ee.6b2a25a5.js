(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0408a4ee"],{"0176":function(t,s,i){"use strict";i("65ee")},"0b86":function(t,s,i){},2287:function(t,s,i){"use strict";i("0b86")},"65ee":function(t,s,i){},"8a18":function(t,s,i){"use strict";i("ae51")},"97a4":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pass_Popup_page"},[i("div",{staticClass:"Popup_boxs"},[t.isShowVerifyCode?[i("p",{staticClass:"propu_title_txt font24"},[t._v(t._s(t.$t("message.signin.txt35")))]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.account.txt22")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.forgetPassForm.mailAccount,expression:"forgetPassForm.mailAccount",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:"text"},domProps:{value:t.forgetPassForm.mailAccount},on:{input:function(s){s.target.composing||t.$set(t.forgetPassForm,"mailAccount",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),t.forgetPassForm.prompt1?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.forgetPassForm.prompt1)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.account.txt23")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.forgetPassForm.verifyCode,expression:"forgetPassForm.verifyCode",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:"text"},domProps:{value:t.forgetPassForm.verifyCode},on:{input:function(s){s.target.composing||t.$set(t.forgetPassForm,"verifyCode",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"verification font14",on:{click:function(s){return t.sendEmail()}}},[t.showCountdown?i("span",[t._v(t._s(t.minutes+" : "+t.seconds))]):i("span",[t._v(t._s(t.$t("message.signin.txt39")))]),i("BtnLoading",{attrs:{isloading:t.codebtnloading}})],1)]),t.forgetPassForm.prompt2?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.forgetPassForm.prompt2)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.account.txt24")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.forgetPassForm.password,expression:"forgetPassForm.password",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:t.isShowPassword?"text":"password"},domProps:{value:t.forgetPassForm.password},on:{input:function(s){s.target.composing||t.$set(t.forgetPassForm,"password",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.forgetPassForm.prompt3?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.forgetPassForm.prompt3)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.account.txt25")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.forgetPassForm.password2,expression:"forgetPassForm.password2",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:t.isShowPassword?"text":"password"},domProps:{value:t.forgetPassForm.password2},on:{input:function(s){s.target.composing||t.$set(t.forgetPassForm,"password2",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.forgetPassForm.prompt4?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.forgetPassForm.prompt4)))])]):t._e()]),i("div",{staticClass:"btn font18",on:{click:function(s){return t.handleSubmit1()}}},[t._v(" "+t._s(t.$t("message.signin.btn_txt2"))+" "),i("BtnLoading",{attrs:{isloading:t.submitloading}})],1)]:[i("p",{staticClass:"propu_title_txt font24"},[t._v(t._s(t.$t("message.signin.txt34")))]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.account.txt26")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.changePassForm.oldPass,expression:"changePassForm.oldPass",modifiers:{trim:!0}}],staticClass:"font16",attrs:{disabled:"",type:t.isShowPassword?"text":"password"},domProps:{value:t.changePassForm.oldPass},on:{input:function(s){s.target.composing||t.$set(t.changePassForm,"oldPass",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.changePassForm.prompt1?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.changePassForm.prompt1)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.account.txt24")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.changePassForm.newPass,expression:"changePassForm.newPass",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:t.isShowPassword?"text":"password"},domProps:{value:t.changePassForm.newPass},on:{input:function(s){s.target.composing||t.$set(t.changePassForm,"newPass",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.changePassForm.prompt2?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.changePassForm.prompt2)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.account.txt25")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.changePassForm.newPass2,expression:"changePassForm.newPass2",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:t.isShowPassword?"text":"password"},domProps:{value:t.changePassForm.newPass2},on:{input:function(s){s.target.composing||t.$set(t.changePassForm,"newPass2",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.changePassForm.prompt3?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.changePassForm.prompt3)))])]):t._e()]),i("div",{staticClass:"btn font18",on:{click:function(s){return t.handleSubmit2()}}},[t._v(" "+t._s(t.$t("message.signin.btn_txt1"))+" "),i("BtnLoading",{attrs:{isloading:t.submitloading}})],1)],i("img",{staticClass:"close_img",attrs:{src:t.$store.state.imgUrl+"passclose.webp"},on:{click:function(s){return s.stopPropagation(),t.closePassPopup.apply(null,arguments)}}})],2)])},o=[],a=i("5530"),r=(i("ac1f"),i("00b4"),i("e9c4"),i("2f62")),n=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,m=/^[a-zA-Z0-9]{6,16}$/,c={props:{isShowVerifyCode:{type:Boolean,default:!1}},computed:Object(a["a"])({},Object(r["b"])(["getLogin"])),data:function(){return{forgetPassForm:{mailAccount:"",prompt1:"",verifyCode:"",prompt2:"",password:"",prompt3:"",password2:"",prompt4:""},changePassForm:{mailAccount:"",oldPass:"",prompt1:"",newPass:"",prompt2:"",newPass2:"",prompt3:""},isShowPassword:!1,codebtnloading:!1,submitloading:!1,showCountdown:!1,minutes:0,seconds:0}},created:function(){this.forgetPassForm.mailAccount=this.getLogin.mailAccount,this.changePassForm.mailAccount=this.getLogin.mailAccount,this.changePassForm.oldPass=this.getLogin.password},methods:{sendEmail:function(){var t=this;if(!this.codebtnloading&&!this.showCountdown){if(!this.forgetPassForm.mailAccount)return this.forgetPassForm.prompt1="message.signin.txt30";if(!n.test(this.forgetPassForm.mailAccount))return this.forgetPassForm.prompt1="message.signin.txt31";if(this.forgetPassForm.prompt1="",localStorage.getItem("fpvc".concat(this.forgetPassForm.mailAccount))){var s=JSON.parse(localStorage.getItem("fpvc".concat(this.forgetPassForm.mailAccount))),i=s-Date.parse(new Date);i<=0?(localStorage.removeItem("fpvc".concat(this.forgetPassForm.mailAccount)),this.sendEmail()):(this.showCountdown=!0,this.countdownFun(s))}else this.codebtnloading=!0,this.$api.accountSendEmail({email:this.forgetPassForm.mailAccount,method:"2"}).then((function(s){if(200===s.code){t.showCountdown=!0;var i=Date.parse(new Date)+6e5;localStorage.setItem("fpvc".concat(t.forgetPassForm.mailAccount),JSON.stringify(i)),t.countdownFun(i)}t.codebtnloading=!1,t.$store.commit("setNoticeStatus",JSON.stringify({status:!0,word:s.msg}))})).catch((function(){t.codebtnloading=!1}))}},handleSubmit1:function(){var t=this;if(!this.submitloading){if(!this.forgetPassForm.mailAccount)return this.forgetPassForm.prompt1="message.signin.txt30";if(!n.test(this.forgetPassForm.mailAccount))return this.forgetPassForm.prompt1="message.signin.txt31";if(this.forgetPassForm.prompt1="",!this.forgetPassForm.verifyCode)return this.forgetPassForm.prompt2="message.signin.txt32";if(this.forgetPassForm.prompt2="",!this.forgetPassForm.password)return this.forgetPassForm.prompt3="message.signin.txt33";if(!m.test(this.forgetPassForm.password))return this.forgetPassForm.prompt3="message.signin.txt37";if(this.forgetPassForm.prompt3="",!this.forgetPassForm.password2)return this.forgetPassForm.prompt4="message.signin.txt36";if(!m.test(this.forgetPassForm.password2))return this.forgetPassForm.prompt4="message.signin.txt37";if(this.forgetPassForm.password2!==this.forgetPassForm.password)return this.forgetPassForm.prompt3=this.forgetPassForm.prompt4="message.signin.txt38";this.forgetPassForm.prompt3="",this.forgetPassForm.prompt4="",this.$api.accountForget({email:this.forgetPassForm.mailAccount,newPwd:this.forgetPassForm.password,code:this.forgetPassForm.verifyCode}).then((function(s){t.submitloading=!1,t.showCountdown=!1,localStorage.removeItem("fpvc".concat(t.forgetPassForm.mailAccount)),t.$store.commit("setNoticeStatus",JSON.stringify({status:!0,word:s.msg})),200===s.code&&(t.resetUserInfo(),t.closePassPopup())})).catch((function(){t.submitloading=!1}))}},handleSubmit2:function(){var t=this;if(!this.submitloading){if(!this.changePassForm.oldPass)return this.changePassForm.prompt1="message.signin.txt33";if(!m.test(this.changePassForm.oldPass))return this.changePassForm.prompt1="message.signin.txt37";if(!this.changePassForm.newPass)return this.changePassForm.prompt2="message.signin.txt33";if(!m.test(this.changePassForm.newPass))return this.changePassForm.prompt2="message.signin.txt37";if(!this.changePassForm.newPass2)return this.changePassForm.prompt3="message.signin.txt33";if(!m.test(this.changePassForm.newPass2))return this.changePassForm.prompt3="message.signin.txt37";if(this.changePassForm.newPass!==this.changePassForm.newPass2)return this.changePassForm.prompt2=this.changePassForm.prompt3="message.signin.txt38";this.changePassForm.prompt2="",this.changePassForm.prompt3="",this.submitloading=!0,this.$api.accountUpdate({email:this.changePassForm.mailAccount,newPwd:this.changePassForm.newPass},{headers:{Authorization:"Bearer "+this.getLogin.token}}).then((function(s){200===s.code&&(t.resetUserInfo(),t.closePassPopup(),t.$router.push("/signin/login")),t.submitloading=!1,t.$store.commit("setNoticeStatus",JSON.stringify({status:!0,word:s.msg}))})).catch((function(){t.submitloading=!1}))}},countdownFun:function(t){var s=this,i=t-Date.parse(new Date);if(i<=0)this.removeItemGetCode();else{var e=parseInt(i/1e3/60%60),o=parseInt(i/1e3%60);this.minutes=e>9?e:"0"+e,this.seconds=o>9?o:"0"+o,e>=0&&o>=0&&(0==e&&0==o?this.removeItemGetCode():setTimeout((function(){s.countdownFun(JSON.parse(localStorage.getItem("fpvc".concat(s.forgetPassForm.mailAccount))))}),1e3))}},removeItemGetCode:function(){localStorage.removeItem("fpvc".concat(this.forgetPassForm.mailAccount)),this.showCountdown=!1},resetUserInfo:function(){this.$store.commit("setLogin",{loginStatus:!1,rememberStatus:!1,mailAccount:"",password:"",token:"",activationTime:"",lastLogin:"",addr:""})},closePassPopup:function(){this.$parent.isShowPassPopup=!1}}},g=c,p=(i("8a18"),i("2877")),l=Object(p["a"])(g,e,o,!1,null,"57f5fd38",null);s["a"]=l.exports},ae51:function(t,s,i){},b0c0:function(t,s,i){var e=i("83ab"),o=i("5e77").EXISTS,a=i("e330"),r=i("9bf2").f,n=Function.prototype,m=a(n.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,g=a(c.exec),p="name";e&&!o&&r(n,p,{configurable:!0,get:function(){try{return g(c,m(this))[1]}catch(t){return""}}})},b254:function(t,s,i){"use strict";i("c977")},c977:function(t,s,i){},d9c9:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"login_register"},["login"==t.name?i("Login"):t._e(),"register"==t.name?i("Register"):t._e()],1)},o=[],a=(i("b0c0"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"register_page"},[i("span",{staticClass:"font30 establish_txt mobile_font16"},[t._v(t._s(t.$t("message.signin.txt24")))]),i("span",{staticClass:"font26 subtitle_txt"},[t._v(t._s(t.$t("message.signin.txt25")))]),i("div",{staticClass:"content"},[i("div",{staticClass:"left_content"},t._l(t.list,(function(s,e){return i("div",{key:e,staticClass:"onebox"},[i("div",{staticClass:"imgbox_"},[i("img",{attrs:{src:s.src}})]),i("div",{staticClass:"right_txt"},[i("span",{staticClass:"font22 mobile_font14"},[t._v(t._s(t.$t(s.title)))]),i("span",{staticClass:"font16"},[t._v(t._s(t.$t(s.explain)))])])])})),0),i("div",{staticClass:"right_content"},[i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.signin.txt16")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginForm.mailAccount,expression:"loginForm.mailAccount",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:"text"},domProps:{value:t.loginForm.mailAccount},on:{input:function(s){s.target.composing||t.$set(t.loginForm,"mailAccount",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),t.loginForm.prompt1?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.loginForm.prompt1)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.signin.txt17")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginForm.password,expression:"loginForm.password",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:t.isShowPassword?"text":"password"},domProps:{value:t.loginForm.password},on:{input:function(s){s.target.composing||t.$set(t.loginForm,"password",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.loginForm.prompt2?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.loginForm.prompt2)))])]):t._e()]),i("div",{staticClass:"remember_box"},[i("div",{staticClass:"_check",on:{click:function(s){t.rememberStatus=!t.rememberStatus}}},[i("div",{staticClass:"checkbox"},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.rememberStatus,expression:"rememberStatus"}],staticClass:"correct font22"})]),i("span",{staticClass:"font16 account"},[t._v(t._s(t.$t("message.signin.txt28")))])]),i("span",{staticClass:"font16 forget",on:{click:t.toForgetPassword}},[t._v(t._s(t.$t("message.signin.txt29")))])]),i("div",{staticClass:"explain"},[i("div",[i("img",{staticClass:"ques_img",attrs:{src:t.$store.state.imgUrl+"ques.webp"}}),i("span",{staticClass:"txt_ font16"},[t._v(t._s(t.$t("message.signin.txt26")))])])]),i("div",{staticClass:"btn_box font18",on:{click:t.loginFun}},[t._v(" "+t._s(t.$t("message.signin.txt23"))+" "),i("BtnLoading",{attrs:{isloading:t.loginbtnloading}})],1),i("p",{staticClass:"font16 tip_txt",on:{click:t.toRegister}},[t._v(" "+t._s(t.$t("message.signin.txt27"))),i("span",{staticClass:"tip_login"},[t._v(t._s(t.$t("message.signin.txt3")))])])])]),t.isShowPassPopup?i("PassPopup",{attrs:{isShowVerifyCode:t.isShowVerifyCode}}):t._e()],1)}),r=[],n=i("5530"),m=(i("ac1f"),i("00b4"),i("e9c4"),i("2f62")),c=i("97a4"),g=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,p=/^[a-zA-Z0-9]{6,16}$/,l={components:{PassPopup:c["a"]},computed:Object(n["a"])({},Object(m["b"])(["getLogin","setLogin"])),data:function(){return{list:[{src:"".concat(this.$store.state.imgUrl,"register1.webp"),title:"message.signin.txt3",explain:"message.signin.txt4"},{src:"".concat(this.$store.state.imgUrl,"register2.webp"),title:"message.signin.txt5",explain:"message.signin.txt6"},{src:"".concat(this.$store.state.imgUrl,"register3.webp"),title:"message.signin.txt7",explain:"message.signin.txt8"},{src:"".concat(this.$store.state.imgUrl,"register4.webp"),title:"message.signin.txt9",explain:"message.signin.txt10"},{src:"".concat(this.$store.state.imgUrl,"register5.webp"),title:"message.signin.txt11",explain:"message.signin.txt12"},{src:"".concat(this.$store.state.imgUrl,"register6.webp"),title:"message.signin.txt13",explain:"message.signin.txt14"}],loginForm:{mailAccount:"",password:"",prompt1:"",prompt2:""},rememberStatus:!1,loginbtnloading:!1,isShowPassword:!1,isShowPassPopup:!1,isShowVerifyCode:!1}},created:function(){this.loginForm.mailAccount=this.getLogin.mailAccount,this.loginForm.password=this.getLogin.password,this.rememberStatus=this.getLogin.rememberStatus},methods:{loginFun:function(){var t=this;if(!this.loginbtnloading){if(!this.loginForm.mailAccount)return this.loginForm.prompt1="message.signin.txt30";if(!g.test(this.loginForm.mailAccount))return this.loginForm.prompt1="message.signin.txt31";if(this.loginForm.prompt1="",!this.loginForm.password)return this.loginForm.prompt2="message.signin.txt33";if(!p.test(this.loginForm.password))return this.loginForm.prompt2="message.signin.txt37";this.loginForm.prompt2="",this.loginbtnloading=!0,this.$api.accountLogin({email:this.loginForm.mailAccount,password:this.loginForm.password}).then((function(s){200===s.code&&(t.$store.commit("setLogin",{loginStatus:!0,rememberStatus:t.rememberStatus,mailAccount:t.loginForm.mailAccount,password:t.loginForm.password,token:s.data.token,activationTime:s.data.activationTime,lastLogin:s.data.lastLogin,addr:s.data.addr}),t.$router.push("/myaccount/information")),t.loginbtnloading=!1,t.$store.commit("setNoticeStatus",JSON.stringify({status:!0,word:s.msg}))})).catch((function(){t.loginbtnloading=!1}))}},toRegister:function(){this.$router.push("/signin/register")},toForgetPassword:function(){this.isShowPassPopup=this.isShowVerifyCode=!0}}},u=l,d=(i("b254"),i("2877")),f=Object(d["a"])(u,a,r,!1,null,"132660c2",null),h=f.exports,v=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"register_page"},[i("span",{staticClass:"font30 establish_txt mobile_font16"},[t._v(t._s(t.$t("message.signin.txt1")))]),i("span",{staticClass:"font26 subtitle_txt"},[t._v(t._s(t.$t("message.signin.txt2")))]),i("div",{staticClass:"content"},[i("div",{staticClass:"left_content"},t._l(t.list,(function(s,e){return i("div",{key:e,staticClass:"onebox"},[i("div",{staticClass:"imgbox_"},[i("img",{attrs:{src:s.src}})]),i("div",{staticClass:"right_txt"},[i("span",{staticClass:"font22 mobile_font14"},[t._v(t._s(t.$t(s.title)))]),i("span",{staticClass:"font16"},[t._v(t._s(t.$t(s.explain)))])])])})),0),i("div",{staticClass:"right_content"},[i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.signin.txt16")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.registerForm.mailAccount,expression:"registerForm.mailAccount",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:"text"},domProps:{value:t.registerForm.mailAccount},on:{input:function(s){s.target.composing||t.$set(t.registerForm,"mailAccount",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),t.registerForm.prompt1?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.registerForm.prompt1)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.signin.txt19")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.registerForm.verifyCode,expression:"registerForm.verifyCode",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:"text"},domProps:{value:t.registerForm.verifyCode},on:{input:function(s){s.target.composing||t.$set(t.registerForm,"verifyCode",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"verification font14",on:{click:function(s){return t.sendEmail()}}},[t.showCountdown?i("span",[t._v(t._s(t.minutes+" : "+t.seconds))]):i("span",[t._v(t._s(t.$t("message.signin.txt39")))]),i("BtnLoading",{attrs:{isloading:t.codebtnloading}})],1)]),t.registerForm.prompt2?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.registerForm.prompt2)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.signin.txt17")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.registerForm.password,expression:"registerForm.password",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:t.isShowPassword?"text":"password"},domProps:{value:t.registerForm.password},on:{input:function(s){s.target.composing||t.$set(t.registerForm,"password",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.registerForm.prompt3?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.registerForm.prompt3)))])]):t._e()]),i("div",{staticClass:"user_inputbox"},[i("p",{staticClass:"font16 email_txt"},[t._v(t._s(t.$t("message.signin.txt18")))]),i("div",{staticClass:"inputbox"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.registerForm.password2,expression:"registerForm.password2",modifiers:{trim:!0}}],staticClass:"font16",attrs:{type:t.isShowPassword?"text":"password"},domProps:{value:t.registerForm.password2},on:{input:function(s){s.target.composing||t.$set(t.registerForm,"password2",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),i("div",{staticClass:"eye"},[i("div",{class:{active:t.isShowPassword},on:{click:function(s){t.isShowPassword=!t.isShowPassword}}})])]),t.registerForm.prompt4?i("div",{staticClass:"input_prompt font12"},[i("span",[t._v("* "+t._s(t.$t(t.registerForm.prompt4)))])]):t._e()]),i("div",{ref:"circular",staticClass:"agree_box",on:{click:function(s){t.igraeeFlag=!t.igraeeFlag}}},[i("div",{staticClass:"circular_"},[t.igraeeFlag?i("span",{staticClass:"sure_box"}):t._e()]),i("div",{staticClass:"agree_txt"},[t._v(" "+t._s(t.$t("message.signin.txt20"))),i("span",{staticClass:"span",on:{click:function(s){return s.stopPropagation(),t.igraeeTheTreaty.apply(null,arguments)}}},[t._v(t._s(t.$t("message.signin.txt21")))])])]),i("div",{staticClass:"btn_box font18",on:{click:t.registerFun}},[t._v(" "+t._s(t.$t("message.signin.txt1"))+" "),i("BtnLoading",{attrs:{isloading:t.registerbtnloading}})],1),i("p",{staticClass:"font16 tip_txt",on:{click:t.toLogin}},[t._v(" "+t._s(t.$t("message.signin.txt22"))+" "),i("span",{staticClass:"tip_login"},[t._v(t._s(t.$t("message.signin.txt23")))])])])])])},w=[],F=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,_=/^[a-zA-Z0-9]{6,16}$/,P={computed:Object(n["a"])({},Object(m["b"])(["getNoticeNum"])),data:function(){return{list:[{src:"".concat(this.$store.state.imgUrl,"register1.webp"),title:"message.signin.txt3",explain:"message.signin.txt4"},{src:"".concat(this.$store.state.imgUrl,"register2.webp"),title:"message.signin.txt5",explain:"message.signin.txt6"},{src:"".concat(this.$store.state.imgUrl,"register3.webp"),title:"message.signin.txt7",explain:"message.signin.txt8"},{src:"".concat(this.$store.state.imgUrl,"register4.webp"),title:"message.signin.txt9",explain:"message.signin.txt10"},{src:"".concat(this.$store.state.imgUrl,"register5.webp"),title:"message.signin.txt11",explain:"message.signin.txt12"},{src:"".concat(this.$store.state.imgUrl,"register6.webp"),title:"message.signin.txt13",explain:"message.signin.txt14"}],registerForm:{mailAccount:"",prompt1:"",verifyCode:"",prompt2:"",password:"",prompt3:"",password2:"",prompt4:""},isShowPassword:!1,registerbtnloading:!1,igraeeFlag:!1,codebtnloading:!1,showCountdown:!1,minutes:0,seconds:0}},methods:{sendEmail:function(){var t=this;if(!this.codebtnloading&&!this.showCountdown){if(!this.registerForm.mailAccount)return this.registerForm.prompt1="message.signin.txt30";if(!F.test(this.registerForm.mailAccount))return this.registerForm.prompt1="message.signin.txt31";if(this.registerForm.prompt1="",localStorage.getItem("rvc".concat(this.registerForm.mailAccount))){var s=JSON.parse(localStorage.getItem("rvc".concat(this.registerForm.mailAccount))),i=s-Date.parse(new Date);i<=0?(localStorage.removeItem("rvc".concat(this.registerForm.mailAccount)),this.sendEmail()):(this.showCountdown=!0,this.countdownFun(s))}else this.codebtnloading=!0,this.$api.accountSendEmail({email:this.registerForm.mailAccount,method:"1"}).then((function(s){if(200===s.code){t.showCountdown=!0;var i=Date.parse(new Date)+6e5;localStorage.setItem("rvc".concat(t.registerForm.mailAccount),JSON.stringify(i)),t.countdownFun(i)}t.codebtnloading=!1,t.$store.commit("setNoticeStatus",JSON.stringify({status:!0,word:s.msg}))})).catch((function(){t.codebtnloading=!1}))}},registerFun:function(){var t=this;if(!this.registerbtnloading){if(!this.registerForm.mailAccount)return this.registerForm.prompt1="message.signin.txt30";if(!F.test(this.registerForm.mailAccount))return this.registerForm.prompt1="message.signin.txt31";if(this.registerForm.prompt1="",!this.registerForm.verifyCode)return this.registerForm.prompt2="message.signin.txt32";if(this.registerForm.prompt2="",!this.registerForm.password)return this.registerForm.prompt3="message.signin.txt33";if(!_.test(this.registerForm.password))return this.registerForm.prompt3="message.signin.txt37";if(this.registerForm.prompt3="",!this.registerForm.password2)return this.registerForm.prompt4="message.signin.txt36";if(!_.test(this.registerForm.password2))return this.registerForm.prompt4="message.signin.txt37";if(this.registerForm.password2!==this.registerForm.password)return this.registerForm.prompt3=this.registerForm.prompt4="message.signin.txt38";if(this.registerForm.prompt3="",this.registerForm.prompt4="",!this.igraeeFlag)return this.$refs.circular.classList.add("animation_move"),void setTimeout((function(){t.$refs.circular.classList.remove("animation_move")}),300);this.registerbtnloading=!0,this.$api.accountRegister({email:this.registerForm.mailAccount,password:this.registerForm.password,code:this.registerForm.verifyCode}).then((function(s){t.registerbtnloading=!1,t.showCountdown=!1,localStorage.removeItem("rvc".concat(t.registerForm.mailAccount)),t.$store.commit("setNoticeStatus",JSON.stringify({status:!0,word:s.msg})),200===s.code&&t.toLogin()})).catch((function(){t.registerbtnloading=!1}))}},countdownFun:function(t){var s=this,i=t-Date.parse(new Date);if(i<=0)this.removeItemGetCode();else{var e=parseInt(i/1e3/60%60),o=parseInt(i/1e3%60);this.minutes=e>9?e:"0"+e,this.seconds=o>9?o:"0"+o,e>=0&&o>=0&&(0==e&&0==o?this.removeItemGetCode():setTimeout((function(){s.countdownFun(JSON.parse(localStorage.getItem("rvc".concat(s.registerForm.mailAccount))))}),1e3))}},removeItemGetCode:function(){localStorage.removeItem("rvc".concat(this.registerForm.mailAccount)),this.showCountdown=!1},igraeeTheTreaty:function(){window.location.href="".concat(this.$store.state.htmlUrl,"SealemLab_protocol.html")},toLogin:function(){this.$router.push("/signin/login")}}},x=P,C=(i("2287"),Object(d["a"])(x,v,w,!1,null,"f3e4022a",null)),b=C.exports,$={components:{Login:h,Register:b},data:function(){return{name:""}},watch:{$route:function(t){this.name=t.params.name,window.scrollTo(0,0)}},mounted:function(){this.name=this.$route.params.name}},S=$,y=(i("0176"),Object(d["a"])(S,e,o,!1,null,"4199613c",null));s["default"]=y.exports}}]);