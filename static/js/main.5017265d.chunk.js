(this.webpackJsonpfinished=this.webpackJsonpfinished||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),s=a(4),u=a(1),o=a(7),i=(a(13),["Landscape","Nature","People","Technology","Architecture","Wallpapers"]),m=function(e){var t=i.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{href:""},e))}));return c.a.createElement("div",{className:"menu ".concat(e.open?"isopen":"")},c.a.createElement("ul",null,t))},p=(a(14),function(){return c.a.createElement("div",{className:"wrapper-spinner"},c.a.createElement("div",{className:"spinner"},c.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{cx:"8",cy:"8",r:"7",strokeWidth:"2"}))))});a(15);function h(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),i=Object(u.a)(l,2),h=i[0],f=i[1],E=Object(n.useState)(""),d=Object(u.a)(E,2),v=d[0],g=d[1],w=Object(n.useState)(!1),b=Object(u.a)(w,2),j=b[0],O=b[1],N=Object(n.useState)(!1),k=Object(u.a)(N,2),y=k[0],x=k[1];function S(){var e="https://api.unsplash.com/photos?";v&&(e="https://api.unsplash.com/search/photos?query=".concat(v)),e+="&page=".concat(h),e+="&client_id=".concat("9QW8Vu7D8nEVVju2qJkWH1h-3TvwzXmz_Puijd-wHe8"),fetch(e).then((function(e){return e.json()})).then((function(e){var t;console.log(e);var a=null!==(t=e.results)&&void 0!==t?t:e;1===h&&r(a),r((function(e){return[].concat(Object(s.a)(e),Object(s.a)(a))}))}))}return Object(n.useEffect)((function(){S()}),[h]),c.a.createElement("div",{className:"app ".concat(y?"search":"")},c.a.createElement(m,{open:j}),c.a.createElement("header",null,c.a.createElement("span",{className:"icon-search",onClick:function(){var e=document.querySelector(".input-search");x(!y),e.focus()}},c.a.createElement("svg",{height:"48",viewBox:"0 0 48 48",width:"48",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"}),c.a.createElement("path",{d:"M0 0h48v48h-48z",fill:"none"}))),c.a.createElement("h1",null,"Unsplash Image Gallery!"),c.a.createElement("div",{className:"hamburguer ".concat(j?"open":""),onClick:function(){return O(!j)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))),c.a.createElement("div",{className:"wrapper-search"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(1),S(),x(!y)}},c.a.createElement("input",{type:"text",placeholder:"Search...",value:v,onChange:function(e){return g(e.target.value)},className:"input-search"}))),c.a.createElement("div",{className:"wrapper-image"},c.a.createElement(o.a,{dataLength:a.length,next:function(){return f((function(e){return e+1}))},hasMore:!0,loader:c.a.createElement(p,null)},c.a.createElement("div",{className:"image-grid"},a.map((function(e,t){return c.a.createElement("a",{className:"image",key:t,href:e.links.html,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:e.urls.regular,alt:e.alt_description}))}))))))}l.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5017265d.chunk.js.map