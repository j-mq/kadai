(this.webpackJsonpkadai=this.webpackJsonpkadai||[]).push([[0],{12:function(e,n,t){e.exports=t(26)},18:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a,r=t(0),c=t.n(r),i=t(11),u=t.n(i),o=(t(17),t(4)),s=t(5),l=(t(18),t(2)),d=t(3),m=function(e){var n=e.thirdMenus,t=e.removeThisMenu,a=e.showMenuContent;return c.a.createElement(r.Fragment,null,n.length>0&&n.map((function(e){return c.a.createElement("h6",{className:"d-flex justify-content-between align-items-center px-3 mb-0",key:"thirdMenu-".concat(e.id)},c.a.createElement("a",{className:"nav-link text-white m-0 p-0",href:"#",onClick:function(){return a(e.content)}},"3rd Menu"),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){return t(e.id)}},c.a.createElement(l.a,{icon:d.a}))))})))},h=function(e){var n=e.secondaryMenus,t=e.removeThisSecondMenu,a=e.removeThisThirdMenu,i=e.addMenuHere,u=e.showMenuContent;return c.a.createElement(r.Fragment,null,n.length>0&&n.map((function(e){return c.a.createElement("div",{className:"mb-2",key:"secondMenu-".concat(e.id)},c.a.createElement("h5",{className:"d-flex justify-content-between align-items-center px-3 mb-1"},c.a.createElement("a",{className:"nav-link text-white m-0 p-0",href:"#",onClick:function(){return u(e.content)}},"2nd Menu"),c.a.createElement("div",{className:"btn-group text-right"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white mx-1 p-0",onClick:function(){return i(e.id)}},c.a.createElement(l.a,{icon:d.c})),c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){return t(e.id)}},c.a.createElement(l.a,{icon:d.a})))),c.a.createElement(m,{thirdMenus:e.thirdMenus,removeThisMenu:function(n){return a(e.id,n)},showMenuContent:u}))})))},p=function(e){var n=e.mainMenus,t=e.removeMainMenu,a=e.addSecondaryMenu,i=e.removeSecondaryMenu,u=e.addThirdMenu,o=e.removeThirdMenu,s=e.showMenuContent;return c.a.createElement(r.Fragment,null,n.length>0?n.map((function(e){return c.a.createElement("div",{className:"mb-3",key:"mainMenu-".concat(e.id)},c.a.createElement("h4",{className:"d-flex justify-content-between align-items-center px-3"},c.a.createElement("a",{className:"nav-link text-white m-0 p-0",href:"#",onClick:function(){return s(e.content)}},"Main menu"),c.a.createElement("div",{className:"btn-group text-right"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white mx-1 p-0",onClick:function(){return a(e.id)}},c.a.createElement(l.a,{icon:d.c})),c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){return t(e.id)}},c.a.createElement(l.a,{icon:d.a})))),c.a.createElement(h,{secondaryMenus:e.secondMenus,removeThisSecondMenu:function(n){return i(e.id,n)},removeThisThirdMenu:function(n,t){return o(e.id,n,t)},addMenuHere:function(n){return u(e.id,n)},showMenuContent:s}))})):c.a.createElement("div",{className:"text-center"},"Add a menu"))},f=function(e){var n=e.mainMenus,t=e.updateMenus,a=e.showMenuContent;return c.a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-dark sidebar text-white"},c.a.createElement("div",{className:"sidebar-inner"},c.a.createElement(p,{mainMenus:n,removeMainMenu:function(e){if(n.length>0){var a=Object(o.a)(n);n.map((function(n,t){n.id===e&&a.splice(t,1)})),t(a)}},addSecondaryMenu:function(e){var a=n[e].secondMenus.length>0?n[e].secondMenus[n[e].secondMenus.length-1].id+1:0,r=Object(o.a)(n),c={thirdMenus:[],id:a,content:{title:"Second Menu Title",paragraph:[{id:0,text:"Second Menu Paragraph"}],mainMenuId:e,secondMenuId:a}};r[e].secondMenus.push(c),t(r)},removeSecondaryMenu:function(e,a){if(n[e].secondMenus.length>0){var r=Object(o.a)(n);n[e].secondMenus.map((function(n,t){n.id===a&&r[e].secondMenus.splice(t,1)})),t(r)}},addThirdMenu:function(e,a){var r=n[e].secondMenus[a].thirdMenus.length>0?n[e].secondMenus[a].thirdMenus[n[e].secondMenus[a].thirdMenus.length-1].id+1:0,c=Object(o.a)(n),i={id:r,content:{title:"Third Menu Title",paragraph:[{id:0,text:"Third Menu Paragraph"}],mainMenuId:e,secondMenuId:a,thirdMenuId:r}};c[e].secondMenus[a].thirdMenus.push(i),t(c)},removeThirdMenu:function(e,a,r){if(n[e].secondMenus[a].thirdMenus.length>0){var c=Object(o.a)(n);n[e].secondMenus[a].thirdMenus.map((function(n,t){n.id===r&&c[e].secondMenus[a].thirdMenus.splice(t,1)})),t(c)}},showMenuContent:a}),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-sm btn-link text-white p-0",onClick:function(){var e=n.length>0?n[n.length-1].id+1:0,a=Object(o.a)(n),r={secondMenus:[],id:e,content:{title:"Main Menu Title",paragraph:[{id:0,text:"Main Menu Paragraph"}],mainMenuId:e}};a.push(r),t(a)}},c.a.createElement(l.a,{icon:d.b})))))},M=(t(24),function(){return c.a.createElement("footer",{className:"footer bg-secondary mt-auto py-3"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"innerText"},"Footer")))}),b=(t(25),function(e){var n=e.paragraph,t=e.removeThisParagraph,a=e.saveThisParagraph,i=Object(r.useState)(n),u=Object(s.a)(i,2),o=u[0],m=u[1];Object(r.useEffect)((function(){m(n)}),[n]);return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",{className:"w-100"},c.a.createElement("textarea",{className:"no-border form-control no-resize",value:o.text,rows:3,onChange:function(e){return m({id:o.id,text:e.target.value})}})),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm mr-1",disabled:n.text===o.text,onClick:function(){return a(o.text,o.id)}},c.a.createElement(l.a,{icon:d.d})),c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return t(o.id)}},c.a.createElement(l.a,{icon:d.e}))),c.a.createElement("hr",null))}),v=function(e){var n=e.currentPage,t=e.addParagraph,a=e.removeParagraph,i=e.saveTitle,u=e.saveParagraph,o=Object(r.useState)(n?n.title:""),m=Object(s.a)(o,2),h=m[0],p=m[1];Object(r.useEffect)((function(){n&&p(n.title)}),[n]);return n?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement("input",{className:"no-border",type:"text",value:h,onChange:function(e){return p(e.target.value)}})),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",disabled:!n||h===n.title,onClick:function(){return i(h,n.mainMenuId,n.secondMenuId,n.thirdMenuId)}},c.a.createElement(l.a,{icon:d.d})))),function(){if(n)return n.paragraph.map((function(e){return c.a.createElement(b,{paragraph:e,removeThisParagraph:function(e){return a(e,n.mainMenuId,n.secondMenuId,n.thirdMenuId)},saveThisParagraph:function(e,t){return u(e,t,n.mainMenuId,n.secondMenuId,n.thirdMenuId)}})}))}(),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return t(n.mainMenuId,n.secondMenuId,n.thirdMenuId)}},c.a.createElement(l.a,{icon:d.b})))):c.a.createElement("div",null,"Select a Menu")};!function(e){e[e.addParagraph=0]="addParagraph",e[e.removeParagraph=1]="removeParagraph",e[e.saveTitle=2]="saveTitle",e[e.saveParagraph=3]="saveParagraph"}(a||(a={}));var g=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],i=n[1],u=Object(r.useState)(null),l=Object(s.a)(u,2),d=l[0],m=l[1],h=function(e,n,a,r,c,u){var s=Object(o.a)(t);s.map((function(t){if(t.id===n){if("undefined"===typeof a)return void p(e,t,c,u);t.secondMenus.map((function(n){if(n.id===a){if("undefined"===typeof r)return void p(e,n,c,u);n.thirdMenus.map((function(n){n.id!==r||p(e,n,c,u)}))}}))}})),i(s)},p=function(e,n,t,r){switch(e){case a.addParagraph:var c=n.content.paragraph.length>0?n.content.paragraph[n.content.paragraph.length-1].id+1:0;n.content.paragraph.push({id:c,text:"New paragraph"});break;case a.removeParagraph:"undefined"!==typeof t&&n.content.paragraph.map((function(e,a){e.id===t&&n.content.paragraph.splice(a,1)}));break;case a.saveTitle:"undefined"!==typeof r&&(n.content.title=r);break;case a.saveParagraph:"undefined"!==typeof r&&"undefined"!==typeof t&&n.content.paragraph.map((function(e,n){e.id===t&&(e.text=r)}))}};return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement(f,{mainMenus:t,updateMenus:function(e){i(e)},showMenuContent:function(e){m(e)}})),c.a.createElement("div",{className:"col-md-10 p-5 mb-4"},c.a.createElement(v,{currentPage:d,addParagraph:function(e,n,t){h(a.addParagraph,e,n,t)},removeParagraph:function(e,n,t,r){h(a.removeParagraph,n,t,r,e)},saveTitle:function(e,n,t,r){h(a.saveTitle,n,t,r,void 0,e)},saveParagraph:function(e,n,t,r,c){h(a.saveParagraph,t,r,c,n,e)}})))),c.a.createElement(M,null))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.86b8763d.chunk.js.map