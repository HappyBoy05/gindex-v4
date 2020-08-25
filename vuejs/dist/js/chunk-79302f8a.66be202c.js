(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79302f8a"],{"28ac":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:e.ismobile?"content mx-1 mt-2 px-0 is-clipped":"content ml-5 mr-5 mt-2 pl-5 pr-5 is-clipped"},[t("div",{staticClass:"loading"},[t("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(s){e.loading=s}}})],1),t("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[t("div",{staticClass:"column is-half"},[t("div",{staticClass:"columns is-desktop is-multiline is-centered"},[t("div",{staticClass:"column is-full"},[t("div",{staticClass:"box has-background-primary"},[t("p",{staticClass:"title has-text-weight-bold has-text-white has-text-centered"},[e._v("Currently Logged as")]),t("p",{staticClass:"subtitle has-text-weight-bold has-text-white has-text-centered"},[e._v("Scroll Down to Accept Users")]),t("div",{staticClass:"columns is-vcentered is-multiline is-mobile"},[e._m(0),t("div",{staticClass:"column is-two-fifths"},[t("p",{staticClass:"subtitle has-text-black has-text-weight-bold"},[e._v(e._s(e.user.name))])]),e._m(1),t("div",{staticClass:"column is-two-fifths"},[t("p",{staticClass:"subtitle has-text-black has-text-weight-bold"},[e._v(e._s(e.user.role))])]),e.user.admin&&!e.user.superadmin?t("div",{staticClass:"column is-full"},[t("p",{staticClass:"subtitle has-text-weight-bold has-text-warning-dark"},[e._v(" Your Scope is Restricted to Adding Additional Users. Use the Below Button to get Pending User Requests. ")])]):e._e(),e.user.admin&&!e.user.superadmin?t("div",{staticClass:"column has-text-centered is-full"},[t("button",{staticClass:"button is-white",on:{click:function(s){return e.gotoPage("/request/","settings")}}},[e._m(2),t("span",[e._v("Request")])])]):e._e(),e.user.admin&&e.user.superadmin?t("div",{staticClass:"column is-full"},[t("p",{staticClass:"subtitle has-text-weight-bold has-text-danger-dark"},[e._v(" Your Scope is Maximum and Can Add Additional Users, Promote Users.Use the Below Buttons to get Pending User Requests. ")])]):e._e()])])]),t("div",{class:e.modal?"modal is-active":"modal"},[t("div",{staticClass:"modal-background"}),t("div",{staticClass:"modal-card"},[t("header",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title has-text-centered"},[e._v(e._s(e.listname))]),t("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){e.modal=!1,e.pendingUserList=[]}}})]),t("section",{key:e.actionKey,staticClass:"modal-card-body"},[0==e.pendingUserList.length?t("div",{staticClass:"columns is-centered is-mobile"},[e._m(3)]):e._l(e.pendingUserList,(function(s,i){return t("div",{key:i,staticClass:"columns is-centered is-multiline is-mobile"},[t("div",{staticClass:"column is-6"},[t("p",{staticClass:"subtitle has-text-black"},[e._v(e._s(s.email))])]),e.admin&&e.superadmin?t("div",{staticClass:"column is-6 has-text-right"},[t("button",{staticClass:"button is-netflix-red is-rounded",on:{click:function(t){return e.handleUserActions(s.email)}}},[e._v(e._s(e.action[s.email]?"Close":"Actions"))])]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.admin&&e.superadmin&&e.action[s.email],expression:"admin && superadmin && action[user.email]"}],staticClass:"column has-text-centered is-full"},[t("div",{staticClass:"box has-background-light"},[t("div",{staticClass:"columns is-mobile is-multiline is-centered"},[t("div",{class:e.ismobile?"column is-half":"column is-one-third"},[t("button",{staticClass:"button is-netflix-red is-rounded",on:{click:function(t){return e.handleTransport(s,e.setrole)}}},[e._v(" Accept ")])]),t("div",{class:e.ismobile?"column is-half":"column is-one-third"},[t("button",{staticClass:"button is-netflix-red is-rounded",on:{click:function(t){return e.handleDelete(e.deleteApi,s)}}},[e._v(" Reject ")])]),t("div",{class:e.ismobile?"column is-full":"column is-one-third"},[t("button",{staticClass:"button is-netflix-red is-rounded",on:{click:function(t){return e.handleSpam(e.deleteApi,s)}}},[e._v(" Mark as Spam ")])])])])])])}))],2)])]),t("div",{staticClass:"column is-full"},[t("div",{staticClass:"columns is-dekstop is-multiline"},[t("div",{staticClass:"column is-full"},[t("div",{staticClass:"box has-background-dark"},[t("h3",{staticClass:"title has-text-weight-bold has-text-white has-text-centered"},[e._v("Pending Users")]),t("div",{staticClass:"columns is-mobile is-multiline is-vcentered"},[e._m(4),t("div",{staticClass:"column is-one-third"},[t("button",{staticClass:"button is-success",on:{click:function(s){e.modal=!0,e.listname="Users - Pending",e.getPendingUsers(e.pendingusers),e.setrole="user",e.deleteApi="user"}}},[e._m(5),t("span",[e._v("Get")])])]),e.user.admin&&e.user.superadmin?t("div",{staticClass:"column is-two-thirds"},[t("p",{staticClass:"subtitle has-text-weight-semibold has-text-white"},[e._v(" Pending Admins ")])]):e._e(),e.user.admin&&e.user.superadmin?t("div",{staticClass:"column is-one-third"},[t("button",{staticClass:"button is-success",on:{click:function(s){e.modal=!0,e.listname="Admins - Pending",e.getPendingUsers(e.pendingadmin),e.setrole="admin",e.deleteApi="admin"}}},[e._m(6),t("span",[e._v("Get")])])]):e._e(),e.user.admin&&e.user.superadmin?t("div",{staticClass:"column is-two-thirds"},[t("p",{staticClass:"subtitle has-text-weight-semibold has-text-white"},[e._v(" Pending Superadmins ")])]):e._e(),e.user.admin&&e.user.superadmin?t("div",{staticClass:"column is-one-third"},[t("button",{staticClass:"button is-success",on:{click:function(s){e.modal=!0,e.listname="Admins - Pending",e.getPendingUsers(e.pendingsuperadmin),e.setrole="superadmin",e.deleteApi="superadmin"}}},[e._m(7),t("span",[e._v("Get")])])]):e._e()])])])])])])]),t("div",{staticClass:"column is centered has-text-centered has-text-white is-two-fifths"},[t("article",{class:e.warnmessageVisibility?"message is-warning":"message is-hidden is-warning"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Important")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.warnmessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[t("span",[e._v("Only Pending User and Admin Requests can be Accepted.Use Invite Option to Invite Users.")]),t("div",{staticClass:"buttons is-centered mt-2"},[t("button",{staticClass:"button is-rounded is-danger",on:{click:function(s){return e.gotoPage("/","invite")}}},[e._m(8),t("span",[e._v("Invite")])])])])]),t("article",{class:e.errorMessage?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Error Proccessing")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.errorMessage=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("article",{class:e.successMessage?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.successMessage=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("h2",{staticClass:"title has-text-weight-bold has-text-white"},[e._v("Add / Promote Users")]),t("p",{staticClass:"is-small has-text-white has-text-weight-bold"},[e._v("User Details will be Autopopulated After Selecting User")]),t("form",{on:{submit:function(s){return s.preventDefault(),e.handleSubmit(s)}}},[t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input is-rounded",attrs:{disabled:"",placeholder:" Recipient's Name (AutoFilled) ",id:"name",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}}),e._m(9),e._m(10),t("p",{staticClass:"help is-warning"},[e._v("Name of Recipient(Auto Filled)")])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input is-rounded is-focused",attrs:{disabled:"",placeholder:"Recipient's Email (AutoFilled)",id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),e._m(11),e._m(12),t("p",{staticClass:"help is-warning"},[e._v("Email of Recipient(Auto Filled)")])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"textarea is-success is-rounded",attrs:{disabled:"",placeholder:"Message From Recipient",id:"message",rows:"3",required:""},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}}),t("p",{staticClass:"help is-warning"},[e._v("Message From Recipient(Auto Filled)")])])]),t("label",{staticClass:"subtitle has-text-white"},[e._v(" User's Role(Auto Filled)")]),t("div",{staticClass:"control mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"userradio",type:"radio",name:"role",checked:"",value:"user",disabled:""},domProps:{checked:e._q(e.role,"user")},on:{change:function(s){e.role="user"}}}),t("label",{attrs:{for:"userradio"}},[e._v("User")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"adminradio",type:"radio",name:"role",value:"admin",disabled:""},domProps:{checked:e._q(e.role,"admin")},on:{change:function(s){e.role="admin"}}}),t("label",{attrs:{for:"adminradio"}},[e._v(" Admin")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"superadminradio",type:"radio",name:"role",value:"superadmin",disabled:""},domProps:{checked:e._q(e.role,"superadmin")},on:{change:function(s){e.role="superadmin"}}}),t("label",{attrs:{for:"superadminradio"}},[e._v("Superadmin")])]),e.admin&&!e.superadmin?t("p",{staticClass:"help is-warning"},[e._v("Only Superadmin can Accept Admin & Superadmin users")]):e._e(),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input is-rounded",attrs:{id:"password",type:"password",placeholder:"Your Admin Password",required:"",autofocus:""},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),e._m(13)])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-warning is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(s){var t=e.checked,i=s.target,a=!!i.checked;if(Array.isArray(t)){var n=null,l=e._i(t,n);i.checked?l<0&&(e.checked=t.concat([n])):l>-1&&(e.checked=t.slice(0,l).concat(t.slice(l+1)))}else e.checked=a}}}),e._m(14)])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-warning is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.codechecked,expression:"codechecked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"code",name:"terms"},domProps:{checked:Array.isArray(e.codechecked)?e._i(e.codechecked,null)>-1:e.codechecked},on:{change:function(s){var t=e.codechecked,i=s.target,a=!!i.checked;if(Array.isArray(t)){var n=null,l=e._i(t,n);i.checked?l<0&&(e.codechecked=t.concat([n])):l>-1&&(e.codechecked=t.slice(0,l).concat(t.slice(l+1)))}else e.codechecked=a}}}),e._m(15)])])]),t("div",[t("button",{class:e.loading?"button is-loading is-rounded is-warning":"button is-warning is-rounded",attrs:{type:"submit",disabled:e.disabled}},[e._m(16),t("span",[e._v("Add User")])]),t("a",{staticClass:"ml-3 button is-rounded is-white",on:{click:function(s){e.name="",e.email="",e.password="",e.message="",e.role="",e.checked=!1,e.codechecked=!1}}},[e._m(17),t("span",[e._v("Reset")])])])])])])])},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"column is-three-fifths"},[t("p",{staticClass:"subtitle has-text-black"},[e._v("Admin Name")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"column is-three-fifths"},[t("p",{staticClass:"subtitle has-text-black"},[e._v("Currently You are")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"column has-text-centered is-full"},[t("p",{staticClass:"subtitle has-text-black"},[e._v("No Pending User Requests")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"column is-two-thirds"},[t("p",{staticClass:"subtitle has-text-weight-semibold has-text-white"},[e._v(" Pending Users ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-plus"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-user"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("label",{attrs:{for:"terms"}},[t("span",{staticClass:"content has-text-white"},[e._v(" I Accept and Read the "),t("a",{staticClass:"has-text-warning",attrs:{href:"https://raw.githubusercontent.com/tks18/gindex-v4/dark-mode-0-1/CONTRIBUTING.md",target:"_blank"}},[e._v("Community Guidelines")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("label",{attrs:{for:"code"}},[t("span",{staticClass:"content has-text-white"},[e._v(" I Accept and Read the "),t("a",{staticClass:"has-text-warning",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Code of Conduct")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-user-plus"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-sync"})])}],n=(t("99af"),t("4de4"),t("4160"),t("b0c0"),t("159b"),t("96cf"),t("1da1")),l=t("e826"),d=t("9062"),r=t.n(d),c=(t("e40d"),{components:{Loading:r.a},metaInfo:function(){var e=this;return{title:this.metatitle,titleTemplate:function(s){return s&&e.siteName?s?"".concat(s," | ").concat(e.siteName):"".concat(e.siteName):"Loading..."}}},props:["nextUrl"],data:function(){return{metatitle:"Add / Upgrade Users",user:{},admin:!1,superadmin:!1,name:"",email:"",action:{},actionKey:0,namedisabled:!1,adminmessage:"",disabled:!0,deleteApi:"",password:"",apiurl:"",role:"",setrole:"",gds:[],currgd:{},successMessage:!1,errorMessage:!1,warnmessageVisibility:!0,modal:!1,resultmessage:"",message:"",checked:!1,codechecked:!1,pendingMessage:"",columnVisibility:!1,loading:!1,fullpage:!0,pendingadmin:window.apiRoutes.getPendingAdmins,pendingsuperadmin:window.apiRoutes.getPendingSuperAdmins,pendingusers:window.apiRoutes.getPendingUsers,pendingUserList:[],listname:""}},methods:{handleSubmit:function(e){var s=this;this.metatitle="Registering the User...",this.loading=!0,e.preventDefault(),this.name.length>0&&this.email.length>0&&this.password&&this.password.length>0&&this.checked&&this.role.length>0&&this.codechecked?this.$http.post(this.apiurl,{name:this.name,email:this.email,adminpass:this.password,adminuseremail:this.user.email}).then((function(e){e&&(e.data.auth&&e.data.registered?(s.loading=!1,s.successMessage=!0,s.errorMessage=!1,s.metatitle="Success...",s.$ga.event({eventCategory:"Add User",eventAction:"Success - "+s.siteName,eventLabel:"Register"}),s.resultmessage=e.data.message):(s.loading=!1,s.successMessage=!1,s.errorMessage=!0,s.metatitle="Failed...",s.$ga.event({eventCategory:"Add User",eventAction:"Failed - "+s.siteName,eventLabel:"Register"}),s.resultmessage=e.data.message))})).catch((function(e){console.error(e)})):(this.loading=!1,this.successMessage=!1,this.errorMessage=!0,this.resultmessage="Fill in the Form Properly",this.password="")},handleTransport:function(e,s){this.modal=!1,this.name=e.name,this.role=s,this.message=e.message,this.email=e.email},getPendingUsers:function(e){var s=this;this.metatitle="Getting Pending List",this.modal=!0,this.loading=!0,this.$http.post(e,{adminuseremail:this.user.email}).then((function(e){e&&(e.data.auth&&e.data.registered?(s.loading=!1,s.columnVisibility=!0,s.metatitle="Got the List",s.pendingUserList=e.data.users,e.data.users.forEach((function(e){return s.action[e.email]=!1}))):(s.loading=!1,s.columnVisibility=!1,s.metatitle="Failed...",s.pendingMessage=e.data.message))}))},gotoPage:function(e,s){this.$ga.event({eventCategory:"Page Navigation",eventAction:e+" - "+this.siteName,eventLabel:"Register"}),s?this.$router.push({path:"/"+this.currgd.id+":"+s+e}):this.$router.push({path:"/"+this.currgd.id+":"+e})},validateData:function(){this.name.length>0&&this.email.length>0&&this.password&&this.password.length>0&&this.checked&&this.role.length>0&&this.codechecked&&this.password.length>0?this.disabled=!1:this.disabled=!0},handleUserActions:function(e){this.action[e]?(this.actionKey=this.actionKey+1,this.action[e]=!1):(this.actionKey=this.actionKey+1,this.action[e]=!0)},handleSpam:function(e,s){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.loading=!0,t.metatitle="Adding Spammers...",i.next=4,t.$http.post(window.apiRoutes.quickaddSpam,{email:s.email,adminuseremail:t.user.email}).then((function(i){i&&(i.data.auth&&i.data.registered?(t.handleDelete(e,s),t.metatitle="Adding Spammers...",t.$ga.event({eventCategory:"Add Spam",eventAction:"Success - "+t.siteName,eventLabel:"Register"})):(t.metatitle="Failed to Add",t.loading=!1,t.$ga.event({eventCategory:"Add Spam",eventAction:"Failed - "+t.siteName,eventLabel:"Register"})))}));case 4:case"end":return i.stop()}}),i)})))()},handleDelete:function(e,s){var t=this;this.metatitle="Deleting from the List",this.loading=!0;var i="",a="";"user"==e?(i=window.apiRoutes.deletePendingUsers,a=this.pendingusers):"admin"==e?(i=window.apiRoutes.deletePendingAdmins,a=this.pendingadmin):"superadmin"==e&&(a=this.pendingsuperadmin,i=window.apiRoutes.deletePendingSuperAdmins),this.$http.post(i,{email:s.email,adminuseremail:this.user.email}).then((function(e){e?e.data.auth&&e.data.removed?(t.pendingUserList=[],t.metatitle="Removed",t.$ga.event({eventCategory:"Delete",eventAction:"Success - "+t.siteName,eventLabel:"Register"}),t.getPendingUsers(a),t.loading=!1):(t.metatitle="Failed to Remove",t.$ga.event({eventCategory:"Delete",eventAction:"Failed - "+t.siteName,eventLabel:"Register"}),t.loading=!1,t.modal=!0):t.loading=!1}))}},computed:{ismobile:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;return!(e>966)},siteName:function(){var e=this;return window.gds.filter((function(s,t){return t==e.$route.params.id}))[0]}},beforeMount:function(){this.loading=!0;var e=Object(l["b"])();e.isThere?"hybrid"==e.type?(this.$ga.event({eventCategory:"User Initialized",eventAction:"Hybrid - "+this.siteName,eventLabel:"Register",nonInteraction:!0}),this.user=e.data.user,this.logged=e.data.logged,this.loading=e.data.loading):"normal"==e.type&&(this.$ga.event({eventCategory:"User Initialized",eventAction:"Normal - "+this.siteName,eventLabel:"Register",nonInteraction:!0}),this.user=e.data.user,this.token=e.data.token,this.logged=e.data.logged,this.loading=e.data.loading,this.admin=e.data.admin,this.superadmin=e.data.superadmin):(this.logged=e.data.logged,this.loading=e.data.loading)},created:function(){var e=Object(l["a"])(this.$route.params.id);this.gds=e.gds,this.currgd=e.current,this.$ga.page({page:this.$route.path,title:"Add/Promote Users - "+this.siteName,location:window.location.href})},watch:{role:function(){"admin"==this.role?(this.namedisabled=!0,this.validateData(),this.apiurl=window.apiRoutes.upgradeAdmin):"superadmin"==this.role?(this.namedisabled=!0,this.validateData(),this.apiurl=window.apiRoutes.upgradeSuperAdmin):(this.namedisabled=!1,this.validateData(),this.apiurl=window.apiRoutes.registerRoute)},name:"validateData",email:"validateData",message:"validateData",password:"validateData",checked:"validateData",codechecked:"validateData"}}),o=c,u=t("2877"),m=Object(u["a"])(o,i,a,!1,null,null,null);s["default"]=m.exports},e40d:function(e,s,t){}}]);