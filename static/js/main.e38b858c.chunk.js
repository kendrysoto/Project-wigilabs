(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{180:function(e,a,t){e.exports=t(396)},185:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},396:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(185),t(186),t(24)),s=t(29),i=(t(187),function(){var e=Object(s.l)();return r.a.createElement("div",null,r.a.createElement("div",{className:"contenedor"},r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#1E90FF"}},"APP WIGILABS"))),r.a.createElement("div",{className:"SideMenu-container"}),r.a.createElement("nav",null,r.a.createElement("div",{id:"menuA"},r.a.createElement("div",{href:"#",className:"showhim"},r.a.createElement("span",{className:"menumov"},"  \u2263"),r.a.createElement("div",{className:"showme"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"LogIn/Register")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/Contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/Task"},"agregar tarea")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/GalleryImg"},"Gallery")),r.a.createElement("li",null,e&&r.a.createElement("p",null,"User :",e.email)),r.a.createElement("hr",null)))),r.a.createElement("ul",{className:"elivi"},r.a.createElement("li",{className:"fac"},r.a.createElement(o.b,{to:"/"},"LogIn/Register")),r.a.createElement("li",{className:"fac"},r.a.createElement(o.b,{to:"/Contact"},"Contact")),r.a.createElement("li",{className:"fac"},r.a.createElement(o.b,{to:"/Task"},"add Task")),r.a.createElement("li",{className:"fac"},r.a.createElement(o.b,{to:"/GalleryImg"},"Gallery")),r.a.createElement("li",{className:"fac"},e&&r.a.createElement("p",null,"User :",e.email)))),r.a.createElement("hr",{className:"hr"}))}),m=t(4),u=t(5),p=t.n(u),d=t(23),E=t(7),f=(t(42),function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(E.a)(c,2),i=o[0],m=o[1],u=Object(s.i)(),f=Object(s.l)(),g=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.auth().createUserWithEmailAndPassword(t,i);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.auth().signInWithEmailAndPassword(t,i);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundColor:"#1E90FF"},class:"jumbotron"},r.a.createElement("h1",{class:"display-4"},"Login /Register")),!f&&r.a.createElement("div",{style:{width:"70%",marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{class:"form-group"}),r.a.createElement("label",{htmlFor:"email"},"Mail address"),r.a.createElement("input",{class:"form-control","aria-describedby":"emailHelp",type:"email",id:"email",onChange:function(e){return l(e.target.value)}})," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{class:"form-control","aria-describedby":"emailHelp",type:"password",id:"password",onChange:function(e){return m(e.target.value)}})," ",r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{class:"btn btn-primary",onClick:g},"crear cuenta")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{class:"btn btn-primary",onClick:b},"iniciar cesion"))),f&&r.a.createElement("button",{class:"btn btn-primary",onClick:v},"cerrar cesion"))}),g=t(17),b=t(107);t(109);b.initializeApp({apiKey:"AIzaSyAiFKVk6_ZBnRj6628XGr2xcx17hQP7qB4",authDomain:"reactfirebasegallery.firebaseapp.com",databaseURL:"https://reactfirebasegallery.firebaseio.com",projectId:"reactfirebasegallery",storageBucket:"reactfirebasegallery.appspot.com",messagingSenderId:"324261181265",appId:"1:324261181265:web:9672148bf4ee623ad74570",measurementId:"G-CHX551S05P"});var v=b.firestore(),h=function(){var e=Object(n.useState)({fullName:"",mobile:"",email:"",address:""}),a=Object(E.a)(e,2),t=a[0],l=a[1],c=function(e){t[e.target.name]=e.target.value,l(Object(g.a)({},t))};return r.a.createElement("div",null,r.a.createElement("form",{autoComplete:"off"},r.a.createElement("div",{className:"form-group input-group "},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{className:"form-control",placeholder:"full Name",name:"fullName",value:t.fullName,onChange:c})),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group input-group col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-mobile-alt"}))),r.a.createElement("input",{className:"form-control",placeholder:"mobile",name:"mobile",value:t.mobile,onChange:c})),r.a.createElement("div",{className:"form-group input-group col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",value:t.email,onChange:c})),r.a.createElement("div",{className:"form-group input-group "},r.a.createElement("textarea",{className:"form-control",placeholder:"Address",name:"address",value:t.address,onChange:c})),r.a.createElement("div",{className:"form-group input-group "},r.a.createElement("button",{type:"submit",value:"save",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),v.collection("contactsInfo").add({timestamp:Date.now(),contactInfo:t})}}," enviar ")))))},N=t(169),y=(t(200),function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=(a[0],a[1],function(){var e=Object(n.useState)(null),a=Object(E.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!0),c=Object(E.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)([]),m=Object(E.a)(i,2),u=m[0],p=m[1];return Object(n.useEffect)((function(){var e=v.collection("messages").onSnapshot((function(e){s(!1),p(e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())})))}),(function(e){r(e)}));return function(){return e()}}),[p]),{error:t,loading:o,messages:u}}());t.error,t.loading,t.messages;return r.a.createElement("div",null,r.a.createElement(N.Widget,{handleNewUserMessage:function(e){console.log("New message incomig! ".concat(e)),v.collection("messages").add({timestamp:Date.now(),message:e})},title:"Chat",subtitle:"write us to assist you"}))}),j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{style:{backgroundColor:"#1E90FF"},class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"Register contact"),r.a.createElement("p",{class:"lead"},"Send your information to contact him or write to Chat"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(h,null))))},O=t(79),w=Object(O.withScriptjs)(Object(O.withGoogleMap)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.GoogleMap,{defaultZoom:10,defaultCenter:{lat:e.lat,lng:e.lng}}))}))),k="AIzaSyCJDZj4Oi2Z9g3AnR2hVigkJgtTjRS523A",x=function(e){var a="http://maps.googleapis.com/maps/api/js?v=3.exp&key=".concat(k),t={inCharge:"",description:"",address:"",lat:6.2518401,lng:-75.563591},l=Object(n.useState)(t),c=Object(E.a)(l,2),o=c[0],s=c[1],i=function(e){o[e.target.name]=e.target.value,s(Object(g.a)({},o))},m=function(){var e=Object(d.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("tasks").doc(a).get();case 2:t=e.sent,s(Object(g.a)({},t.data()));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){""===e.currenId?s(Object(g.a)({},t)):m(e.currenId)}),[e.currenId]),r.a.createElement("div",null,r.a.createElement("form",{autoComplete:"off",onSubmit:function(a){a.preventDefault(),e.addOrEdit(o),s(Object(g.a)({},t))}},r.a.createElement("div",{className:"form-group input-group "},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{className:"form-control",placeholder:"incharge",name:"inCharge",value:o.inCharge,onChange:i})),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group input-group col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{class:"fas fa-audio-description"}))),r.a.createElement("input",{className:"form-control",placeholder:"description",name:"description",value:o.description,onChange:i})),r.a.createElement("div",{className:"form-group input-group col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{class:"fas fa-map-marked"}))),r.a.createElement("input",{className:"form-control",placeholder:"address",name:"address",value:o.address,onChange:i})),r.a.createElement("div",{className:"form-group input-group col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{class:"fas fa-map-marker-alt"}))),r.a.createElement("input",{className:"form-control",placeholder:"lat",name:"lat",value:o.lat,onChange:i})),r.a.createElement("div",{className:"form-group input-group col-md-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{class:"fas fa-map-marker-alt"}))),r.a.createElement("input",{className:"form-control",placeholder:"lng",name:"lng",value:o.lng,onChange:i})),r.a.createElement("div",{className:"form-group input-group "},r.a.createElement("button",{type:"submit",value:"save",className:"btn btn-primary btn-block"}," ",""===e.currenId?"save":"update"," ")))),console.log(o),r.a.createElement(w,{lat:o.lat,lng:o.lng,googleMapURL:a,containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),loadingElement:r.a.createElement("p",null,"Loading")}))},C=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(E.a)(c,2),s=o[0],i=o[1],m=function(){var e=Object(d.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=5;break}return e.next=3,v.collection("tasks").doc().set(a);case 3:e.next=8;break;case 5:return e.next=7,v.collection("tasks").doc(s).update(a);case 7:i("");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("tasks").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push(Object(g.a)(Object(g.a)({},e.data()),{},{id:e.id}))})),l(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("estas seguro que quieres eliminarlo")){e.next=4;break}return e.next=3,v.collection("tasks").doc(a).delete();case 3:console.log("eliminado");case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"#1E90FF"},class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"Add task"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(x,{currenId:s,tasks:t,addOrEdit:m})),r.a.createElement("div",{className:"col-md-7"},r.a.createElement("div",null,r.a.createElement("h4",null,"List of task")),r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"In Charged"),r.a.createElement("th",{scope:"col"},"description"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"},"Latitude"),r.a.createElement("th",{scope:"col"},"Longitude"))),r.a.createElement("tbody",null,t.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,e.inCharge),r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.address),r.a.createElement("td",null,e.lat),r.a.createElement("td",null,e.lng),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return i(e.id)},type:"button",class:"btn btn-primary"},"editar")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return f(e.id)},type:"button",class:"btn btn-danger"},"eliminar")))})))))))},S=function(e){var a=Object(n.useState)([]),t=Object(E.a)(a,2),l=t[0],c=t[1],o={width:"18rem",margin:"15px",float:"left",height:"350px",marginBottom:"10px"},s={position:"absolute",left:"0px",right:"0px",bottom:"0px",top:"50px"},i=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("gallery").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push(Object(g.a)(Object(g.a)({},e.data()),{},{id:e.id}))})),c(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(r.a.Fragment,null,l.map((function(e){return console.log(l),console.log("ssssssssssss"),r.a.createElement("div",{key:e.id,class:"card",style:o},r.a.createElement("img",{src:e.imageUrl,class:"card-img-top",alt:"..."}),r.a.createElement("div",{slyle:s},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},e.titulo))))})))},I=function(){return r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:f}),r.a.createElement(m.a,{exact:!0,path:"/gallery",component:f}),r.a.createElement(m.a,{path:"/Contact",component:j}),r.a.createElement(m.a,{path:"/Task",component:C}),r.a.createElement(m.a,{path:"/GalleryImg",component:S})))},A=t(172);var F=function(){var e=Object(s.i)();return console.log(e),r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(I,null),r.a.createElement(A.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{firebaseConfig:{apiKey:"AIzaSyAiFKVk6_ZBnRj6628XGr2xcx17hQP7qB4",authDomain:"reactfirebasegallery.firebaseapp.com",databaseURL:"https://reactfirebasegallery.firebaseio.com",projectId:"reactfirebasegallery",storageBucket:"reactfirebasegallery.appspot.com",messagingSenderId:"324261181265",appId:"1:324261181265:web:9672148bf4ee623ad74570",measurementId:"G-CHX551S05P"}},r.a.createElement(n.Suspense,{fallback:"cargando..."},r.a.createElement(F,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[180,1,2]]]);
//# sourceMappingURL=main.e38b858c.chunk.js.map