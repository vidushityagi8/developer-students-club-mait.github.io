(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{200:function(e,t,n){"use strict";n.r(t);var a=n(217),r=n.n(a),l=n(219),c=n.n(l),o=n(54),i=n.n(o),s=n(0),m=n.n(s),u=n(210),p=n(220),f=n(37);t.default=function(e){var t=Object(s.useState)(null),n=i()(t,2),a=n[0],l=n[1],o=Object(s.useState)(!1),d=i()(o,2),E=d[0],h=d[1];return Object(s.useEffect)((function(){function e(){return(e=c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dscmait").then((function(e){return e.json()})).then((function(e){l(e.items),h(!1)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),E?m.a.createElement(f.a,null):m.a.createElement(u.a,{container:!0,component:"main"},m.a.createElement(u.a,{item:!0,xs:12},m.a.createElement(p.a,{variant:"h2",align:"center"},"Our Blogs")),m.a.createElement(u.a,{container:!0,component:"div",justify:"space-evenly"},E?m.a.createElement(f.a,null):a&&a.map((function(e,t){var n=document.createElement("div");n.innerHTML=e.description,n=n.querySelector("img").src;var a=document.createElement("div");return a.innerHTML=e.description,a=a.querySelector("p").innerHTML,m.a.createElement(u.a,{item:!0,sm:12,md:6,key:t},m.a.createElement("div",{style:{width:"75%",margin:"30px auto",boxShadow:"0px 8px 1rem rgba(159, 232, 244, 0.8)"}},m.a.createElement("img",{src:n,alt:"",style:{height:"100%",width:"100%"}}),m.a.createElement("div",{style:{padding:15}},m.a.createElement(p.a,{variant:"h3",style:{fontSize:40,color:"#346DF1",fontWeight:600,fontFamily:"Poppins"}},e.title),m.a.createElement(p.a,{style:{fontFamily:"Poppins",fontSize:22,color:"#464646"}},m.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}})),m.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:20}},m.a.createElement("div",null,m.a.createElement("span",{style:{font:"italic normal 600 23px/28px Montserrat",color:"#FBBD00"}},e.author),m.a.createElement("br",null),m.a.createElement("span",{style:{font:"normal normal normal 23px/28px Montserrat"}},new Date(e.pubDate).toDateString())),m.a.createElement("div",null,m.a.createElement("a",{href:e.link,target:"_blank"},m.a.createElement("button",{className:"project-button"},"Read Now"," ",m.a.createElement("i",{className:"fas fa-external-link-alt",style:{fontSize:"20px"}}))))))))}))))}}}]);