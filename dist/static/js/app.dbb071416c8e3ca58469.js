webpackJsonp([1],{"1w9k":function(t,e){},"3qwI":function(t,e){},"579T":function(t,e){},"7zck":function(t,e){},HSaf:function(t,e,i){t.exports=i.p+"static/img/signup-image.871ba3b.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7+uW"),s={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{title:"Sign in",link:"/Users/sign_in"},{title:"Sign up",link:"/Users/sign_up"}];return this.userIsAuthenticated&&(t=[{title:"Home",link:"/"},{title:"Create Exhibit",link:"/Exhibit/create_exhibit"},{title:"Exhibit List",link:"/Exhibit/exhibit_list"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogOut:function(){this.$store.dispatch("logOut"),this.$router.push("/")}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-navigation-drawer",{attrs:{temporary:"",app:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[i("v-list",[t._l(t.menuItems,function(e){return i("v-list-tile",{key:e.title,attrs:{router:"",to:e.link}},[i("v-list-tile-action",[t._v("\n          "+t._s(e.title)+"\n        ")])],1)}),t._v(" "),t.userIsAuthenticated?i("v-list-tile",{on:{click:t.onLogOut}},[i("v-list-tile-action",[t._v("\n          Log out\n        ")])],1):t._e()],2)],1),t._v(" "),i("v-toolbar",{staticClass:"yellow-bg",attrs:{app:""}},[i("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",nativeOn:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),i("v-toolbar-title",{staticClass:"ml-0"},[i("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("Photography Exhibits")])],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.menuItems,function(e){return i("v-btn",{key:e.title,attrs:{flat:"",router:"",to:e.link}},[t._v(t._s(e.title))])}),t._v(" "),t.userIsAuthenticated?i("v-btn",{attrs:{flat:""},on:{click:t.onLogOut}},[t._v("Log out")]):t._e()],2)],1),t._v(" "),i("v-content",[i("v-container",{attrs:{fluid:""}},[i("router-view")],1)],1)],1)},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("3qwI")},null,null).exports,o=i("/ocq"),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{row:"",wrap:""}}),t._v(" "),i("v-layout",[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?i("v-progress-circular",{attrs:{indeterminate:"",color:"purple"}}):t._e()],1)],1),t._v(" "),t.loading?t._e():i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{"xs-12":""}},[i("v-carousel",t._l(t.exhibits,function(e){return i("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl}},[i("div",{staticClass:"exhibit-title-and-button"},[i("h2",[t._v(t._s(e.title))]),t._v(" "),i("v-btn",{staticClass:"yellow-bg",attrs:{large:""},on:{click:function(i){t.onLoadexhibit(e.id)}}},[t._v("View Exhibit")])],1)])}))],1)],1),t._v(" "),i("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-sm-center",attrs:{xs12:""}},[i("h2",{staticClass:"red-text"},[t._v("Hello! Welcome to the Photography Exhibits!")]),t._v(" "),i("p",[t._v("Here you can View and register for the amazing exhibits that are hosted by the amazing Photography collectors!"),i("br"),t._v(" not just that but you can also host your own exhibit!")])])],1),t._v(" "),i("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-sm-center",attrs:{xs12:""}},[i("h3",[t._v("Check out some of our exhibits")])])],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.exhibits,function(e){return i("v-flex",{key:e,id:t.id,attrs:{lg4:"",md4:"",sm6:""}},[i("v-card",[i("v-card-media",{attrs:{src:e.imageUrl,height:"300px"}}),t._v(" "),i("v-card-title",{attrs:{"primary-title":""}},[i("div",{staticClass:"exhibit-details"},[i("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),t._v(" "),i("p",[i("span",[t._v("Date:")]),t._v(" "+t._s(e.date)+" "),i("span",{staticClass:"ml-2"},[t._v("Time:")]),t._v(" "+t._s(e.time)),i("br"),i("span",[t._v("Location:")]),t._v(" "+t._s(e.location))]),t._v(" "),i("div",[t._v(t._s(e.description))])])]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"orange",to:"/Exhibit/exhibit_list/exhibit/"+e.id}},[t._v("View Exhibit")])],1)],1)],1)}),t._v(" "),i("v-flex",{staticClass:"text-xs-center"},[i("v-btn",{staticClass:"yellow-bg",attrs:{large:"",to:"/Exhibit/exhibit_list/"}},[t._v("View All Exhibits")])],1)],2)],1)},staticRenderFns:[]};var c=i("VU/8")({computed:{exhibits:function(){return this.$store.getters.featuredExhibits},loading:function(){return this.$store.getters.loading}},methods:{onLoadexhibit:function(t){this.$router.push("/Exhibit/exhibit_list/exhibit/"+t)}}},l,!1,function(t){i("1w9k")},"data-v-44d88c73",null).exports,d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":""}},[i("h2",[t._v("Exhibit List")]),t._v(" "),i("p",{staticClass:"mb-3"},[t._v("These are the available Exhibits you can visit and observe the amazing talent of photographers.")]),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.exhibits,function(e){return i("v-flex",{key:e.id,attrs:{md4:"",sm6:""}},[i("v-card",[i("v-card-media",{attrs:{src:e.imageUrl,height:"300px"}}),t._v(" "),i("v-card-title",{attrs:{"primary-title":""}},[i("div",{staticClass:"exhibit-details"},[i("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),t._v(" "),i("p",[i("span",[t._v("Date:")]),t._v(" "+t._s(e.date)+" "),i("span",{staticClass:"ml-2"},[t._v("Time:")]),t._v(" "+t._s(e.time)),i("br"),i("span",[t._v("Location:")]),t._v(" "+t._s(e.location))]),t._v(" "),i("div",[t._v(t._s(e.description))])])]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"orange",to:"/Exhibit/exhibit_list/exhibit/"+e.id}},[t._v("View Exhibit")])],1)],1)],1)}))],1)},staticRenderFns:[]};var u=i("VU/8")({computed:{exhibits:function(){return this.$store.getters.loadedExhibits}}},d,!1,function(t){i("VtgF")},null,null).exports,h=i("d7EF"),v=i.n(h),p=i("mtWM"),m=i.n(p),f={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:null,dateFormatted:null,time:null,valid:!1,menu2:!1,menu3:!1,croppedImage:"",cropped:"",cropperDiv:!0,titleRules:[function(t){return!!t||"Title is required"}],locationRules:[function(t){return!!t||"Location is required"}],imageRules:[function(t){return!!t||"Image is required"}],descriptionRules:[function(t){return!!t||"Description is required"},function(t){return t.length>=50||"Description must be more than 50 characters"}]}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(t){this.dateFormatted=this.formatDate(this.date)},imageUrl:function(t){console.log(t),this.cropperDiv=!t}},methods:{updateCropped:function(t){this.cropped=t,this.croppedImage=this.dataURItoBlob(this.cropped),console.log(this.file)},dataURItoBlob:function(t,e){for(var i=atob(t.split(",")[1]),r=t.split(",")[0].split(":")[1].split(";")[0],s=new ArrayBuffer(i.length),a=new Uint8Array(s),n=0;n<i.length;n++)a[n]=i.charCodeAt(n);this.bb=new Blob([s],{type:r}),this.file=new File([s],"name",{type:r})},formatDate:function(t){if(!t)return null;var e=t.split("-"),i=v()(e,3),r=i[0];return i[1]+"/"+i[2]+"/"+r},parseDate:function(t){if(!t)return null;var e=t.split("/"),i=v()(e,3),r=i[0],s=i[1];return i[2]+"-"+r.padStart(2,"0")+"-"+s.padStart(2,"0")},submit:function(){this.$refs.form.validate()&&m.a.post("/api/submit",{})},clear:function(){this.$refs.form.reset()},onCreateExhibit:function(){if(this.valid&&this.file){var t={title:this.title,location:this.location,image:this.file,description:this.description,date:this.dateFormatted,time:this.time};this.$store.dispatch("createExhibit",t),this.$router.push("/Exhibit/exhibit_list")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,i=t.target.files;if(i[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file.");var r=new FileReader;r.addEventListener("load",function(){e.imageUrl=r.result}),r.readAsDataURL(i[0]),this.imageRaw=i[0]}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("h2",[t._v("Create Exhibit")])])],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onCreateExhibit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{rules:t.titleRules,label:"Title",name:"title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),i("v-text-field",{attrs:{rules:t.locationRules,label:"Location",name:"location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),t._v(" "),i("v-btn",{staticClass:"red-bg",attrs:{raised:"",dark:""},on:{click:t.onPickFile}},[t._v("Upload Image")]),t._v(" "),i("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}}),t._v(" "),i("image-upload",{staticClass:"mt-3",attrs:{imageUrl:t.imageUrl,hidden:t.cropperDiv},on:{onResult:t.updateCropped}}),t._v(" "),i("v-textarea",{attrs:{rules:t.descriptionRules,counter:50,label:"Description",name:"description",id:"description",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),i("v-layout",{staticClass:"mb-3",attrs:{row:""}},[i("v-flex",{attrs:{sm6:""}},[i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","full-width":"","max-width":"290px","min-width":"290px"},model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[i("v-text-field",{attrs:{slot:"activator",label:"Select Date",hint:"MM/DD/YYYY format","persistent-hint":"",readonly:""},slot:"activator",model:{value:t.computedDateFormatted,callback:function(e){t.computedDateFormatted=e},expression:"computedDateFormatted"}}),t._v(" "),i("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),i("v-flex",{attrs:{sm6:""}},[i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.time,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e}},model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[i("v-text-field",{attrs:{slot:"activator",label:"Select Time",readonly:""},slot:"activator",model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),t._v(" "),t.menu3?i("v-time-picker",{attrs:{format:"24hr","no-title":""},on:{change:function(e){t.$refs.menu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}):t._e()],1)],1)],1),t._v(" "),i("v-btn",{staticClass:"yellow-bg",attrs:{disabled:!t.valid,type:"submit",large:""},on:{submit:t.submit}},[t._v("submit")]),t._v(" "),i("v-btn",{staticClass:"grey lighten-1",attrs:{large:"",dark:""},on:{click:t.clear}},[t._v("clear")])],1)],1)],1)],1)},staticRenderFns:[]};var b=i("VU/8")(f,g,!1,function(t){i("579T")},null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("user profile")])])}]},_=i("VU/8")(null,x,!1,null,null,null).exports,w={data:function(){return{valid:!1,email:"",password:"",passwordRules:[function(t){return!!t||"Password is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},E={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{cs12:"",sm4:"","offset-sm4":""}},[r("v-card",[r("v-card-media",{attrs:{height:"200px"}},[r("img",{attrs:{src:i("koTK")}})]),t._v(" "),r("v-card-text",[t.error?r("v-flex",[r("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1):t._e(),t._v(" "),r("v-form",{on:{submit:function(e){return e.preventDefault(),t.onSignin(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{rules:t.passwordRules,label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-btn",{staticClass:"mt-4 yellow-bg",attrs:{type:"submit",disabled:t.loading,loading:t.loading,large:""}},[t._v("Sign in"),r("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[r("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},y=i("VU/8")(w,E,!1,null,null,null).exports,k={data:function(){return{valid:!1,email:"",password:"",confirmPassword:"",passwordRules:[function(t){return!!t||"Password is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},computed:{comparePassword:function(){return this.password!==this.confirmPassword?"Password do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},U={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{cs12:"",sm4:"","offset-sm4":""}},[r("v-card",[r("v-card-media",{attrs:{height:"200px"}},[r("img",{attrs:{src:i("HSaf")}})]),t._v(" "),r("v-card-text",[t.error?r("v-flex",[r("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1):t._e(),t._v(" "),r("v-form",{on:{submit:function(e){return e.preventDefault(),t.onSignup(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{rules:t.passwordRules,label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-text-field",{attrs:{rules:[t.comparePassword],label:"Confirm Password",id:"confirmPassword ",type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),t._v(" "),r("v-btn",{staticClass:"mt-4 yellow-bg",attrs:{type:"submit",disabled:t.loading,loading:t.loading,large:""}},[t._v("Sign up"),r("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[r("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},C=i("VU/8")(k,U,!1,null,null,null).exports,R={props:["id"],computed:{exhibit:function(){return this.$store.getters.loadedExhibit(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.exhibit.creatorId}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","pa-0":""}},[i("v-layout",{attrs:{row:"",wrap:"","pa-0":""}},[i("v-flex",{attrs:{"xs-12":"",sm8:"","offset-sm2":""}},[i("v-card",{staticClass:"pb-4"},[i("v-card-media",{attrs:{height:"600px"}},[i("img",{attrs:{src:t.exhibit.imageUrl}})]),t._v(" "),i("div",{staticClass:"pl-3 mt-4 exhibit-details"},[i("h1",{staticClass:"purple--text darken-1"},[t._v(t._s(t.exhibit.title))]),t._v(" "),i("p",[i("span",[t._v("Date:")]),t._v(" "+t._s(t.exhibit.date)+" "),i("span",{staticClass:"ml-2"},[t._v("Time:")]),t._v(" "+t._s(t.exhibit.time)),i("br"),i("span",[t._v("Location:")]),t._v(" "+t._s(t.exhibit.location))]),t._v(" "),i("p",{staticClass:"mt-2"},[t._v(t._s(t.exhibit.description)+"it")])]),t._v(" "),i("div",{staticClass:"text-xs-center"},[t.userIsAuthenticated&&!t.userIsCreator?i("register-dialog",{attrs:{exhibitId:t.exhibit.id}}):t._e(),t._v(" "),t.userIsCreator?i("edit-exhibit-btn",{attrs:{exhibit:t.exhibit}}):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]};var D=i("VU/8")(R,$,!1,function(t){i("aMVR")},"data-v-d36d1ede",null).exports,I=i("NYxO"),L=i("Dd8w"),F=i.n(L),P=i("kxiW"),q={state:{loadedExhibits:[{imageUrl:"https://www.didierruefworkshops.com/wp-content/gallery/horizonte-zingst-2014/004-Germany-Zingst-Horizonte-Zingst-Umweltfotofestival-Photo-exhibit-Recycle-RUEF-2014.jpg",id:"wqwqq",title:"Germany Exhibit",date:"08/16/2018 ",time:"10:00",location:"Germany",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."},{imageUrl:"http://www.bienvenidotours.com/uploads/1/3/5/3/13538651/9964551_orig.jpg",id:"wqwqq12",title:"Philippines Exhibit",date:"08/16/2018 ",time:"10:00",location:"Philippines",description:"omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam..."}]},mutations:{setLoadedExhibits:function(t,e){t.loadedExhibits=e},createExhibit:function(t,e){t.loadedExhibits.push(e)},updateExhibit:function(t,e){var i=t.loadedExhibits.find(function(t){return t.id===e.id});e.title&&(i.title=e.title),e.description&&(i.description=e.description),e.date&&(i.date=e.date),e.time&&(i.time=e.time)}},actions:{loadExhibits:function(t){var e=t.commit;e("setLoading",!0),P.database().ref("exhibits").once("value").then(function(t){var i=[],r=t.val();for(var s in r)i.push({id:s,title:r[s].title,location:r[s].location,description:r[s].description,imageUrl:r[s].imageUrl,date:r[s].date,time:r[s].time,creatorId:r[s].creatorId});e("setLoadedExhibits",i),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!0)})},createExhibit:function(t,e){var i=t.commit,r=t.getters,s={title:e.title,location:e.location,description:e.description,date:e.date,time:e.time,creatorId:r.user.id},a=void 0,n=void 0;P.database().ref("exhibits").push(s).then(function(t){return n=t.key}).then(function(t){var i=e.image.name,r=i.slice(i.lastIndexOf("."));return P.storage().ref("exhibits/"+t+"."+r).put(e.image)}).then(function(t){var e=t.metadata.fullPath;return P.storage().ref().child(e).getDownloadURL()}).then(function(t){return a=t,P.database().ref("exhibits").child(n).update({imageUrl:a})}).then(function(){i("createExhibit",F()({},s,{imageUrl:a,id:n}))}).catch(function(t){console.log(t)})},updateExhibitData:function(t,e){var i=t.commit;i("setLoading",!0);var r={};e.title&&(r.title=e.title),e.description&&(r.description=e.description),e.date&&(r.date=e.date),e.time&&(r.time=e.time),P.database().ref("exhibits").child(e.id).update(r).then(function(){i("setLoading",!1),i("updateExhibit",e)}).catch(function(t){console.log(t),i("setLoading",!1)})}},getters:{loadedExhibits:function(t){return t.loadedExhibits.sort(function(t,e){return t.date>e.date})},featuredExhibits:function(t,e){return e.loadedExhibits.slice(0,3)},loadedExhibit:function(t){return function(e){return t.loadedExhibits.find(function(t){return t.id===e})}}}},S=i("uqrR"),V=i.n(S),A={state:{user:null},mutations:{registerUserForExhibit:function(t,e){var i=e.id;t.user.registeredExhibit.findIndex(function(t){return t.id===i})>=0||(t.user.registeredExhibit.push(i),t.user.fbkeys[i]=e.fbkey)},unregisterUserFromExhibit:function(t,e){var i=t.user.registeredExhibit;i.splice(i.findIndex(function(t){return t.id===e}),1),V()(t.user.fbkeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForExhibit:function(t,e){var i=t.commit,r=t.getters;i("setLoading",!0);var s=r.user;P.database().ref("/users/"+s.id).child("/registration/").push(e).then(function(t){i("setLoading",!1),i("registerUserForExhibit",{id:e,fbkey:t.key})}).catch(function(t){console.log(t),i("setLoading",!1)})},unregisterUserFromExhibit:function(t,e){var i=t.commit,r=t.getters;i("setLoading",!0);var s=r.user;if(s.fbkeys){var a=s.fbkeys[e];P.database().ref("/users/"+s.id+"/registration/").child(a).remove().then(function(){i("setLoading",!1),i("unregisterUserFromExhibit",e)}).catch(function(t){console.log(t),i("setLoading",!1)})}},signUserUp:function(t,e){var i=t.commit;i("setLoading",!0),i("clearError"),P.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){i("setLoading",!1);var e={id:t.uid,registeredExhibit:[],fbkeys:{}};i("setUser",e)}).catch(function(t){i("setLoading",!1),i("setError",t),console.log(t)})},signUserIn:function(t,e){var i=t.commit;i("setLoading",!0),i("clearError"),P.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){i("setLoading",!1);var e={id:t.uid,registeredExhibit:[],fbkeys:{}};i("setUser",e)}).catch(function(t){i("setLoading",!1),i("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredExhibit:[],fbkeys:{}})},fetchUserData:function(t){var e=t.commit,i=t.getters;e("setLoading",!0),P.database().ref("/users/"+i.user.id+"/registration/").once("value").then(function(t){var r=t.val(),s=[],a={};for(var n in r)s.push(r[n]),a[r[n]]=n;var o={id:i.user.id,registeredExhibit:s,fbkeys:a};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logOut:function(t){var e=t.commit;P.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}};r.default.use(I.a);var T=new I.a.Store({modules:{exhibit:q,user:A,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),z=function(t,e,i){T.getters.user?i():i("/Users/sign_in")};r.default.use(o.a);var O=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:c},{path:"/Exhibit/create_exhibit",name:"CreateExhibit",component:b,beforeEnter:z},{path:"/Exhibit/exhibit_list",name:"ExhibitList",component:u},{path:"/Exhibit/exhibit_list/exhibit/:id",name:"Exhibit",props:!0,component:D},{path:"/Users/profile",name:"Profile",component:_,beforeEnter:z},{path:"/Users/sign_in",name:"SignIn",component:y},{path:"/Users/sign_up",name:"SignUp",component:C}]}),H=i("3EgV"),j=i.n(H),N=(i("7zck"),i("Rf8U")),M=i.n(N),B={render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{dismissible:"",type:"error",value:!0},on:{input:this.onClose}},[this._v(this._s(this.text))])},staticRenderFns:[]},W=i("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},B,!1,null,null,null).exports,Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[i("v-btn",{staticClass:"blue darken-1",attrs:{slot:"activator",large:"",dark:""},slot:"activator"},[t._v("Edit Exhibit")]),t._v(" "),i("v-card",[i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-title",[i("h2",[t._v("Edit Exhibit")])])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Title",name:"title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),i("v-textarea",{attrs:{counter:50,label:"Description",name:"description",id:"description",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1),t._v(" "),i("v-card-actions",[i("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"",dark:""},on:{click:t.onSaveChanges}},[t._v("Save")]),t._v(" "),i("v-btn",{staticClass:"red--text darken-1",attrs:{flat:"",dark:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},G=i("VU/8")({props:["exhibit"],data:function(){return{editDialog:!1,editedTitle:this.exhibit.title,editedDescription:this.exhibit.description}},methods:{onSaveChanges:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.editDialog=!1,this.$store.dispatch("updateExhibitData",{id:this.exhibit.id,title:this.editedTitle,description:this.description}))}}},Y,!1,null,null,null).exports,K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"300px",persistent:""},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[i("v-btn",{staticClass:"red darken-1",attrs:{slot:"activator",accent:"",large:"",dark:""},slot:"activator"},[t._v(t._s(t.userIsRegistered?"Unregister":"Register"))]),t._v(" "),i("v-card",[i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?i("v-card-title",[i("h2",[t._v("Unregister from Exhibit?")])]):i("v-card-title",[i("h2",[t._v("Register for Exhibit?")])])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-text",[t._v("\n            You can always chanage your decision whenever you want.\n          ")]),t._v(" "),i("v-card-actions",[i("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onAgree}},[t._v("Confirm")]),t._v(" "),i("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},Z=i("VU/8")({props:["exhibitId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredExhibit.findIndex(function(e){return e===t.exhibitId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromExhibit",this.exhibitId):this.$store.dispatch("registerUserForExhibit",this.exhibitId),this.registerDialog=!1}}},K,!1,null,null,null).exports,J={props:{imageUrl:{required:!0,type:String}},mounted:function(){this.$refs.croppieRef.bind({url:""})},watch:{imageUrl:function(t){this.$refs.croppieRef.bind({url:t})}},data:function(){return{cropped:null,images:null}},methods:{cropViaEvent:function(){this.$refs.croppieRef.result()},result:function(t){this.cropped=t,this.$emit("onResult",this.cropped)},update:function(t){console.log(t)},rotate:function(t){this.$refs.croppieRef.rotate(t)}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vue-croppie",{ref:"croppieRef",attrs:{enableOrientation:!0},on:{result:t.result,update:t.update}}),t._v(" "),i("v-flex",{staticClass:"text-xs-center"},[i("v-btn",{on:{click:function(e){t.rotate(-90)}}},[t._v("Rotate Left")]),t._v(" "),i("v-btn",{on:{click:function(e){t.cropViaEvent()}}},[t._v("Crop")]),t._v(" "),i("v-btn",{on:{click:function(e){t.rotate(90)}}},[t._v("Rotate Right")])],1),t._v(" "),i("img",{staticClass:"crop-result",attrs:{src:t.cropped}})],1)},staticRenderFns:[]},Q=i("VU/8")(J,X,!1,null,null,null).exports,tt=i("ujXI"),et=i.n(tt);r.default.use(et.a),r.default.use(M.a,m.a),r.default.config.productionTip=!1,r.default.component("app-alert",W),r.default.component("edit-exhibit-btn",G),r.default.component("register-dialog",Z),r.default.component("image-upload",Q),r.default.use(j.a,{theme:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}),new r.default({el:"#app",router:O,store:T,components:{App:n},created:function(){var t=this;P.initializeApp({apiKey:"AIzaSyCChD_lCs1hps-m6GrZ4jM8HeO6IyvBuo4",authDomain:"photography-exhibits.firebaseapp.com",databaseURL:"https://photography-exhibits.firebaseio.com",projectId:"photography-exhibits",storageBucket:"gs://photography-exhibits.appspot.com"}),P.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadExhibits")},template:"<App/>"})},VtgF:function(t,e){},aMVR:function(t,e){},koTK:function(t,e,i){t.exports=i.p+"static/img/signin-image.e2ec9a7.jpg"}},["NHnr"]);
//# sourceMappingURL=app.dbb071416c8e3ca58469.js.map