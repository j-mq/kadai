(this.webpackJsonpkadai=this.webpackJsonpkadai||[]).push([[0],{160:function(e,n,t){e.exports=t(378)},168:function(e,n,t){},169:function(e,n,t){},196:function(e,n){},210:function(e,n){},212:function(e,n){},376:function(e,n,t){},377:function(e,n,t){},378:function(e,n,t){"use strict";t.r(n);var a,r=t(0),c=t.n(r),i=t(56),u=t.n(i),o=t(12),l=t(11),s=t(2),m=t(3),d=function(e){var n=e.thirdMenus,t=e.removeThisMenu,a=e.showMenuContent;return c.a.createElement(r.Fragment,null,n.length>0&&n.map((function(e){return c.a.createElement("h6",{className:"d-flex justify-content-between align-items-center px-3 mb-0",key:"thirdMenu-".concat(e.id)},c.a.createElement("a",{className:"nav-link text-white m-0 p-0",href:"#",onClick:function(){return a(e.content)}},e.content.title),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){return t(e.id)}},c.a.createElement(s.a,{icon:m.b}))))})))},h=function(e){var n=e.secondaryMenus,t=e.removeThisSecondMenu,a=e.removeThisThirdMenu,i=e.addMenuHere,u=e.showMenuContent;return c.a.createElement(r.Fragment,null,n.length>0&&n.map((function(e){return c.a.createElement("div",{className:"mb-2",key:"secondMenu-".concat(e.id)},c.a.createElement("h5",{className:"d-flex justify-content-between align-items-center px-3 mb-1"},c.a.createElement("a",{className:"nav-link text-white m-0 p-0",href:"#",onClick:function(){return u(e.content)}},e.content.title),c.a.createElement("div",{className:"btn-group text-right"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white mx-1 p-0",onClick:function(){return i(e.id)}},c.a.createElement(s.a,{icon:m.d})),c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){return t(e.id)}},c.a.createElement(s.a,{icon:m.b})))),c.a.createElement(d,{thirdMenus:e.thirdMenus,removeThisMenu:function(n){return a(e.id,n)},showMenuContent:u}))})))},p=function(e){var n=e.mainMenus,t=e.removeMainMenu,a=e.addSecondaryMenu,i=e.removeSecondaryMenu,u=e.addThirdMenu,o=e.removeThirdMenu,l=e.showMenuContent;return c.a.createElement(r.Fragment,null,n.length>0?n.map((function(e){return c.a.createElement("div",{className:"mb-3",key:"mainMenu-".concat(e.id)},c.a.createElement("h4",{className:"d-flex justify-content-between align-items-center px-3"},c.a.createElement("a",{className:"nav-link text-white m-0 p-0",href:"#",onClick:function(){return l(e.content)}},e.content.title),c.a.createElement("div",{className:"btn-group text-right"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white mx-1 p-0",onClick:function(){return a(e.id)}},c.a.createElement(s.a,{icon:m.d})),c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){return t(e.id)}},c.a.createElement(s.a,{icon:m.b})))),c.a.createElement(h,{secondaryMenus:e.secondMenus,removeThisSecondMenu:function(n){return i(e.id,n)},removeThisThirdMenu:function(n,t){return o(e.id,n,t)},addMenuHere:function(n){return u(e.id,n)},showMenuContent:l}))})):c.a.createElement("div",{className:"text-center"},"Add a menu"))},f=function(e){var n=e.mainMenus,t=e.updateMenus,a=e.showMenuContent;return c.a.createElement("div",{className:"sidebar-sticky pt-3 pb-3 text-white"},c.a.createElement(p,{mainMenus:n,removeMainMenu:function(e){if(n.length>0){var a=Object(o.a)(n);n.map((function(n,t){n.id===e&&a.splice(t,1)})),t(a)}},addSecondaryMenu:function(e){var a=n.filter((function(n){return n.id===e}));console.log("target Menu",a);var r=a[0].secondMenus.length>0?a[0].secondMenus[a[0].secondMenus.length-1].id+1:0,c=Object(o.a)(n),i={thirdMenus:[],id:r,content:{title:"Second Menu Title",paragraph:[{id:0,text:"Second Menu Paragraph"}],mainMenuId:e,secondMenuId:r}};n.map((function(n,t){n.id===e&&c[t].secondMenus.push(i)})),t(c)},removeSecondaryMenu:function(e,a){if(n.filter((function(n){return n.id===e}))[0].secondMenus.length>0){var r=Object(o.a)(n);n.map((function(n,t){n.id==e&&n.secondMenus.map((function(e,n){e.id===a&&r[t].secondMenus.splice(n,1)}))})),t(r)}},addThirdMenu:function(e,a){var r=n.filter((function(n){return n.id===e}))[0].secondMenus.filter((function(e){return e.id===a})),c=r[0].thirdMenus.length>0?r[0].thirdMenus[r[0].thirdMenus.length-1].id+1:0,i=Object(o.a)(n),u={id:c,content:{title:"Third Menu Title",paragraph:[{id:0,text:"Third Menu Paragraph"}],mainMenuId:e,secondMenuId:a,thirdMenuId:c}};n.map((function(n,t){n.id===e&&n.secondMenus.map((function(e,n){e.id===a&&i[t].secondMenus[n].thirdMenus.push(u)}))})),t(i)},removeThirdMenu:function(e,a,r){if(n.filter((function(n){return n.id===e}))[0].secondMenus.filter((function(e){return e.id===a}))[0].thirdMenus.length>0){var c=Object(o.a)(n);n.map((function(n,t){n.id==e&&n.secondMenus.map((function(e,n){e.id===a&&e.thirdMenus.map((function(e,a){e.id===r&&c[t].secondMenus[n].thirdMenus.splice(a,1)}))}))})),t(c)}},showMenuContent:a}),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){var e=n.length>0?n[n.length-1].id+1:0,a=Object(o.a)(n),r={secondMenus:[],id:e,content:{title:"Main Menu Title",paragraph:[{id:0,text:"Main Menu Paragraph"}],mainMenuId:e}};a.push(r),t(a)}},c.a.createElement(s.a,{icon:m.c}))))},b=(t(168),function(){return c.a.createElement("footer",{className:"footer bg-secondary mt-auto py-3"},c.a.createElement("div",{className:"container text-right"},c.a.createElement("span",{className:"innerText "},"Jacobo Moreno, 4-7-2020")))}),M=(t(169),t(159)),g=function(e){var n=e.paragraph,t=e.removeThisParagraph,a=e.saveThisParagraph,i=Object(r.useState)(n),u=Object(l.a)(i,2),o=u[0],d=u[1],h=Object(r.useState)(!1),p=Object(l.a)(h,2),f=p[0],b=p[1];Object(r.useEffect)((function(){d(n)}),[n]);return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",{className:"w-100"},f?c.a.createElement("textarea",{className:"form-control no-resize",value:o.text,rows:5,onChange:function(e){return d({id:o.id,text:e.target.value})}}):c.a.createElement(M.a,{html:"".concat(o.text)})),c.a.createElement("div",{className:"text-right"},f?c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm mr-1",onClick:function(){return b(!1),void a(o.text,o.id)}},c.a.createElement(s.a,{icon:m.e})):c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm mr-1",onClick:function(){return b(!0)}},c.a.createElement(s.a,{icon:m.a})),c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return t(o.id)}},c.a.createElement(s.a,{icon:m.f}))),c.a.createElement("hr",null))},v=function(e){var n=e.currentPage,t=e.addParagraph,a=e.removeParagraph,i=e.saveTitle,u=e.saveParagraph,o=Object(r.useState)(n?n.title:""),d=Object(l.a)(o,2),h=d[0],p=d[1],f=Object(r.useState)(!1),b=Object(l.a)(f,2),M=b[0],v=b[1];Object(r.useEffect)((function(){n&&p(n.title)}),[n]);return n?c.a.createElement("div",null,c.a.createElement("div",null,M?c.a.createElement("h1",null,c.a.createElement("input",{type:"text",value:h,onChange:function(e){return p(e.target.value)}})):c.a.createElement("h1",null,h),c.a.createElement("div",{className:"text-right"},M?c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm mr-1",onClick:function(){n&&(v(!1),i(h,n.mainMenuId,n.secondMenuId,n.thirdMenuId))}},c.a.createElement(s.a,{icon:m.e})):c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm mr-1",onClick:function(){return v(!0)}},c.a.createElement(s.a,{icon:m.a})))),function(){if(n)return n.paragraph.map((function(e){return c.a.createElement(g,{key:"paragraph-".concat(e.id),paragraph:e,removeThisParagraph:function(e){return a(e,n.mainMenuId,n.secondMenuId,n.thirdMenuId)},saveThisParagraph:function(e,t){return u(e,t,n.mainMenuId,n.secondMenuId,n.thirdMenuId)}})}))}(),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return t(n.mainMenuId,n.secondMenuId,n.thirdMenuId)}},c.a.createElement(s.a,{icon:m.c})))):c.a.createElement("div",null,"Select a Menu")};t(376);!function(e){e[e.addParagraph=0]="addParagraph",e[e.removeParagraph=1]="removeParagraph",e[e.saveTitle=2]="saveTitle",e[e.saveParagraph=3]="saveParagraph"}(a||(a={}));var E=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],i=n[1],u=Object(r.useState)(null),s=Object(l.a)(u,2),m=s[0],d=s[1];console.log("Main menus",t);var h=function(e,n,a,r,c,u){var l=Object(o.a)(t);l.map((function(t){if(t.id===n){if("undefined"===typeof a)return void p(e,t,c,u);t.secondMenus.map((function(n){if(n.id===a){if("undefined"===typeof r)return void p(e,n,c,u);n.thirdMenus.map((function(n){n.id!==r||p(e,n,c,u)}))}}))}})),i(l)},p=function(e,n,t,r){switch(e){case a.addParagraph:var c=n.content.paragraph.length>0?n.content.paragraph[n.content.paragraph.length-1].id+1:0;n.content.paragraph.push({id:c,text:"New paragraph"});break;case a.removeParagraph:"undefined"!==typeof t&&n.content.paragraph.map((function(e,a){e.id===t&&n.content.paragraph.splice(a,1)}));break;case a.saveTitle:"undefined"!==typeof r&&(n.content.title=r);break;case a.saveParagraph:"undefined"!==typeof r&&"undefined"!==typeof t&&n.content.paragraph.map((function(e,n){e.id===t&&(e.text=r)}))}};return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"container-fluid bg-light"},c.a.createElement("div",{className:"row"},c.a.createElement("nav",{className:"col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"},c.a.createElement(f,{mainMenus:t,updateMenus:function(e){i(e),e.length<=0&&d(null)},showMenuContent:function(e){d(e)}})),c.a.createElement("div",{className:"col-md-9 p-5 mb-4"},c.a.createElement(v,{currentPage:m,addParagraph:function(e,n,t){h(a.addParagraph,e,n,t)},removeParagraph:function(e,n,t,r){h(a.removeParagraph,n,t,r,e)},saveTitle:function(e,n,t,r){h(a.saveTitle,n,t,r,void 0,e)},saveParagraph:function(e,n,t,r,c){h(a.saveParagraph,t,r,c,n,e)}})))),c.a.createElement(b,null))};t(377);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.e362aa63.chunk.js.map