(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3571414e"],{d40f:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:e.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5"},[t("div",{staticClass:"loading"},[t("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(s){e.loading=s}}})],1),t("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[t("div",{staticClass:"column is-half"},[t("section",{staticClass:"hero is-black is-medium"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"tile is-ancestor"},[t("div",{staticClass:"tile is-parent"},[t("article",{staticClass:"tile has-text-centered is-child notification is-primary"},[e._m(0),t("p",{staticClass:"subtitle"},[e._v("Login")]),t("div",{staticClass:"content"},[t("p",{staticClass:"has-text-dark has-text-weight-semibold"},[e._v("Login to this Website to Continue.")]),t("p",{staticClass:"has-text-dark"},[e._v("You are Just a Page from Experiencing the Glory.")]),t("button",{staticClass:"button mb-3",on:{click:function(s){e.hyInput=!e.hyInput}}},[e._m(1),t("span",[e._v("Hybrid Login")])]),t("form",{directives:[{name:"show",rawName:"v-show",value:e.hyInput,expression:"hyInput"}],on:{submit:function(s){return s.preventDefault(),e.handleHybrid(s)}}},[t("div",{staticClass:"columns is-mobile is-centered is-multiline is-vcentered"},[t("div",{staticClass:"column is-four-fifths"},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hypassword,expression:"hypassword"}],staticClass:"input is-rounded",attrs:{id:"hypassword",autocomplete:"hy-password",type:"password",placeholder:"Enter Your Hybrid Password",required:""},domProps:{value:e.hypassword},on:{input:function(s){s.target.composing||(e.hypassword=s.target.value)}}}),e._m(2)])])]),e._m(3)])])])])])])])])])]),t("div",{class:e.modal?"modal is-active":"modal"},[t("div",{staticClass:"modal-background"}),t("div",{staticClass:"modal-card"},[t("header",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title has-text-centered"},[e._v("Forgot Password")]),t("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){e.modal=!1}}})]),t("section",{staticClass:"modal-card-body"},[t("article",{class:e.forgotErrorMessage?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Error Processing !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.forgotErrorMessage=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.forgotMessage)+" ")])]),t("article",{class:e.forgotSuccessMessage?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.forgotSuccessMessage=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.forgotMessage)),t("br"),t("span",{staticClass:"forgot-pass is-medium has-text-weight-bold",staticStyle:{cursor:"pointer"},on:{click:function(s){return e.gotoPage("/otp/","register")}}},[e._v("Click Here to Enter OTP")])])]),t("form",{on:{submit:function(s){return s.preventDefault(),e.handleForgotPass(s)}}},[t("div",{staticClass:"columns is-centered is-desktop is-multiline is-vcentered"},[t("div",{staticClass:"column is-two-thirds"},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.forgotEmail,expression:"forgotEmail"}],staticClass:"input is-rounded",attrs:{placeholder:"Enter Your Account Email",id:"foremail",type:"email",required:"",autofocus:""},domProps:{value:e.forgotEmail},on:{input:function(s){s.target.composing||(e.forgotEmail=s.target.value)}}}),e._m(4),e._m(5)])])]),t("div",{staticClass:"column has-text-centered is-two-thirds"},[t("button",{class:e.loading?"button is-rounded is-loading is-danger":"button is-rounded is-danger"},[e._m(6),t("span",[e._v("Get OTP")])])])])])])])]),t("div",{staticClass:"column is centered has-text-centered has-text-white is-two-fifths"},[t("article",{class:e.errormessageVisibility?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Error Logging in!!")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.errormessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("article",{class:e.successmessageVisibility?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.successmessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("h2",{staticClass:"title has-text-weight-bold has-text-white"},[e._v("Login")]),t("form",{on:{submit:function(s){return s.preventDefault(),e.handleSubmit(s)}}},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input is-rounded",attrs:{placeholder:"Email",autocomplete:"username",id:"logemail",type:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),e._m(7),e._m(8)])]),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input is-rounded",attrs:{id:"logpassword",autocomplete:"current-password",type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),e._m(9)])]),t("p",{staticClass:"help subtitle has-text-weight-bold forgot-pass has-text-right is-success",staticStyle:{cursor:"pointer"},on:{click:function(s){e.modal=!0}}},[e._v("Forgot Password ?")]),t("button",{class:e.loading?"button is-rounded is-loading is-danger is-medium":"button is-rounded is-medium is-danger",attrs:{disabled:e.disabled}},[e._m(10),t("span",[e._v("Login")])])])])])])},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",{staticClass:"title has-text-dark"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-superpowers"})]),t("span",[e._v(" Ahh!! Perfect !")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-dolly"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"column is-one-fifth"},[t("button",{staticClass:"button is-danger"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-sign-in-alt"})]),t("span",{staticClass:"is-hidden-mobile"},[e._v("Login")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-user-plus"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-medium"},[t("i",{staticClass:"fas fa-shipping-fast"})])}],o=(t("99af"),t("4de4"),t("b0c0"),t("96cf"),t("1da1")),r=t("19e9"),n=t("e826"),l=t("9062"),c=t.n(l),d=(t("e40d"),{components:{Loading:c.a},metaInfo:function(){var e=this;return{title:this.metatitle,titleTemplate:function(s){return s&&e.siteName?s?"".concat(s," | ").concat(e.siteName):"".concat(e.siteName):"Loading..."}}},data:function(){return{email:"",password:"",hypassword:"",disabled:!0,metatitle:"Login",modal:!1,forgotEmail:"",forgotMessage:"",forgotErrorMessage:!1,forgotSuccessMessage:!1,emailFocus:!0,gds:[],hyInput:!1,currgd:{},passwordFocus:!1,resultmessage:"",databasemessage:"",loading:!1,fullpage:!0,errormessageVisibility:!1,successmessageVisibility:!1}},methods:{handleSubmit:function(e){var s=this;this.metatitle="Logging You In...",this.loading=!0,e.preventDefault(),this.password.length>0&&this.email.length>0&&this.$http.post(window.apiRoutes.loginRoute,{email:this.email,password:this.password}).then((function(e){if(e.data.auth&&e.data.registered){s.metatitle="Success...",Object(r["f"])("tokendata",Object(r["c"])(JSON.stringify({token:e.data.token,issuedate:e.data.issuedat,expirydate:e.data.expiryat}))),Object(r["f"])("userdata",Object(r["c"])(JSON.stringify(e.data.tokenuser)));var t=Object(r["d"])("tokendata"),a=Object(r["d"])("userdata");if(null!=t&&null!=a){var i=JSON.parse(Object(r["b"])(t)),o=JSON.parse(Object(r["b"])(a));s.loading=!1,s.errormessageVisibility=!1,s.successmessageVisibility=!0,s.$ga.event({eventCategory:"Normal Login",eventAction:"Successfully Logged - "+s.siteName,eventLabel:"Login"}),s.resultmessage="Logged in Successfully as ".concat(o.name,". Your token will expire at ").concat(s.$moment(i.expirydate).format("dddd, MMMM Do YYYY [at] hh:mm A"),"."),s.$bus.$emit("logged","User Logged"),setTimeout((function(){null!=s.$route.params.nextUrl?s.$router.push({name:"results",params:{id:s.currgd.id,cmd:"result",success:!0,data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:s.$route.params.nextUrl}}):s.$router.push({name:"results",params:{id:s.currgd.id,cmd:"result",success:!0,tocmd:"home",data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:"/"}})}),500)}}else s.metatitle="Failed...",s.$ga.event({eventCategory:"Normal Login",eventAction:"Failed - "+s.siteName,eventLabel:"Login"}),s.errormessageVisibility=!0,s.successmessageVisibility=!1,s.loading=!1,s.resultmessage=e.data.message}))},handleHybrid:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var t,a,i,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.metatitle="Logging You In...",e.loading=!0,t=window.gdHybridPass,s.next=5,Object(r["a"])(e.hypassword,t);case 5:if(a=s.sent,!a){s.next=16;break}return i={user:!0,name:"Anon",email:"anonymous@gmail.com",registeredDate:Date.now(),role:"User",admin:!1,superadmin:!1,verified:!0},s.next=10,Object(r["f"])("hybridToken",Object(r["c"])(JSON.stringify(i)));case 10:return s.next=12,JSON.parse(Object(r["b"])(Object(r["d"])("hybridToken")));case 12:o=s.sent,o.user?(e.metatitle="Success...",e.loading=!1,e.errormessageVisibility=!1,e.successmessageVisibility=!0,e.$ga.event({eventCategory:"Hybrid Login",eventAction:"Successfully Logged - "+e.siteName,eventLabel:"Login"}),e.resultmessage="Logged in Successfully as Guest User.You will Log Out after this Browser Session.",e.$bus.$emit("logged","User Logged"),setTimeout((function(){e.$router.push({name:"results",params:{id:e.currgd.id,cmd:"result",success:!0,tocmd:"home",data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:"/"}})}),500)):(e.metatitle="Failed...",e.loading=!1,e.$ga.event({eventCategory:"Hybrid Login",eventAction:"Failed - "+e.siteName,eventLabel:"Login"}),e.errormessageVisibility=!0,e.successmessageVisibility=!1,e.resultmessage="Hybrid Password is Wrong"),s.next=22;break;case 16:e.metatitle="Failed...",e.loading=!1,e.$ga.event({eventCategory:"Hybrid Login",eventAction:"Failed - "+e.siteName,eventLabel:"Login"}),e.errormessageVisibility=!0,e.successmessageVisibility=!1,e.resultmessage="Hybrid Password is Wrong";case 22:case"end":return s.stop()}}),s)})))()},checkParams:function(){this.$route.params.email?(this.email=this.$route.params.email,this.emailFocus=!1,this.passwordFocus=!0):(this.emailFocus=!0,this.passwordFocus=!1)},gotoPage:function(e,s){this.$ga.event({eventCategory:"Page Navigation",eventAction:e+" - "+this.siteName,eventLabel:"Login"}),s?this.$router.push({path:"/"+this.currgd.id+":"+s+e}):this.$router.push({path:"/"+this.currgd.id+":"+e})},validateData:function(){var e=/[a-z1-9].+@+[a-z1-9A-Z].+[.][a-z]+/g;e.test(this.email)&&this.password.length>0?this.disabled=!1:this.disabled=!0},handleForgotPass:function(e){var s=this;this.metatitle="Forgot Password",this.loading=!0,e.preventDefault(),this.forgotEmail.length>0?this.$http.post(window.apiRoutes.forgotPass,{email:this.forgotEmail}).then((function(e){e.data.auth&&e.data.registered&&e.data.changed?(s.loading=!1,s.$ga.event({eventCategory:"Forgot Password",eventAction:"Successfully Reset - "+s.siteName,eventLabel:"Login"}),s.forgotSuccessMessage=!0,s.forgotErrorMessage=!1,s.metatitle="Password Reset Success",s.forgotMessage=e.data.message):(s.loading=!1,s.$ga.event({eventCategory:"Forgot Password",eventAction:"Failed - "+s.siteName,eventLabel:"Login"}),s.forgotSuccessMessage=!1,s.forgotErrorMessage=!0,s.metatitle="Password Reset Failed",s.forgotMessage=e.data.message)})):(this.loading=!1,this.forgotSuccessMessage=!1,this.forgotErrorMessage=!0,this.forgotMessage="Please Type in Your Email First.")}},computed:{ismobile:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;return!(e>966)},siteName:function(){var e=this;return window.gds.filter((function(s,t){return t==e.$route.params.id}))[0]}},mounted:function(){this.checkParams()},created:function(){var e=Object(n["a"])(this.$route.params.id);this.gds=e.gds,this.currgd=e.current,this.$ga.page({page:this.$route.path,title:"Login - "+this.siteName,location:window.location.href})},watch:{email:"validateData",password:"validateData"}}),u=d,g=t("2877"),m=Object(g["a"])(u,a,i,!1,null,null,null);s["default"]=m.exports},e40d:function(e,s,t){}}]);