!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){var o=e(1),r=e(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},function(t,n,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function s(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},o=[],r=0;r<t.length;r++){var i=t[r],c=n.base?i[0]+n.base:i[0],u=e[c]||0,l="".concat(c," ").concat(u);e[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,n),references:1}),o.push(l)}return o}function u(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function f(t,n,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function p(t,n,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,h=0;function v(t,n){var e,o,r;if(n.singleton){var i=h++;e=m||(m=u(n)),o=f.bind(null,e,i,!1),r=f.bind(null,e,i,!0)}else e=u(n),o=p.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var r=s(e[o]);a[r].references--}for(var i=c(t,n),u=0;u<e.length;u++){var l=s(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(t,n,e){(n=e(3)(!1)).push([t.i,"/**\n * Body CSS\n */\n\nhtml,\nbody {\n\theight: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\ttext-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n\n/**\n * Sidebar CSS\n */\n\n#sidebar {\n\tbackground-color: #2196F3;\n\tpadding: 15px;\n}\n\n@media (min-width: 768px) {\n\t#sidebar {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\twidth: 180px;\n\t\theight: 100%;\n\t\tpadding-top: 30px;\n\t}\n}\n\n\n/**\n * Content CSS\n */\n@media (min-width: 768px) {\n\t#content {\n\t\tmargin-left: 180px;\n\t}\n}\n\n\n/********** MY STYLES **********/\n.author{\n\tfont-size: 1rem;\n}\n\n.floating-btn{\n\tposition: fixed;\n\tbottom : 50px;\n\tright : 50px;\n}\n\n.modal{\n\tmax-width: 600px;\n\tmax-height: 300px;\n\tmargin : 100px auto;\n\toverflow-y: auto;\n\tbackground: #fff ;\n}\n\n .modal > h1{\n\t text-align : center;\n }\n \n .modal .modal-content{\n\t padding: 1rem;\n }\n\n .error{\n\t color: red;\n }\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([r]).join("\n")}var a,s,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},function(t,n,e){"use strict";e.r(n);class o{static create(t){return fetch("https://frontend-question-app.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(n=>(t.id=n.name,t)).then(r).then(o.renderList)}static fetch(t){return t?fetch(`https://frontend-question-app.firebaseio.com/questions.json?auth=${t}`).then(t=>t.json()).then(t=>t&&t.error?`<p class="error">${t.error}</p>`:t?Object.keys(t).map(n=>({...t[n],id:n})):[]):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const t=i(),n=t.length?t.map(a).join(""):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';document.getElementById("list").innerHTML=n}static listToHTML(t){return t.length?`<ol>${t.map(t=>`<li>${t.text}</li>`).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function r(t){const n=i();n.push(t),localStorage.setItem("questions",JSON.stringify(n))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(t){return`\n    <div class="mui--text-black-54">\n      ${new Date(t.date).toLocaleDateString()}\n      ${new Date(t.date).toLocaleTimeString()}\n    </div>\n    <div>${t.text}</div>\n    <br>\n  `}function s(t){return t.length>=10}function c(t,n){const e=document.createElement("div");e.classList.add("modal"),e.innerHTML=`\n\t<h1>${t}</h1>\n\t<div class="modal-content">${n}</div>\n\t`,mui.overlay("on",e)}e(0);const u=document.getElementById("form"),l=document.getElementById("modal-btn"),d=u.querySelector("#question-input"),f=u.querySelector("#submit");function p(t){t.preventDefault();const n=t.target.querySelector("button"),e=t.target.querySelector("#email").value,r=t.target.querySelector("#password").value;n.disabled=!0,function(t,n){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDB4sE39L86lmEBJgt-RpdJopyl8R6C8ek",{method:"POST",body:JSON.stringify({email:t,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>t.idToken)}(e,r).then(o.fetch).then(m).then(()=>n.disabled=!1)}function m(t){"string"==typeof t?c("Ошибка!",t):c("Список вопросов",o.listToHTML(t))}window.addEventListener("load",o.renderList),u.addEventListener("submit",(function(t){if(t.preventDefault(),s(d.value)){const t={text:d.value.trim(),date:(new Date).toJSON()};f.disabled=!0,o.create(t).then(()=>{d.value="",d.className="",f.disabled=!1})}})),l.addEventListener("click",(function(){c("Авторизация",'\n\t     \t<form class="mui-form" id="auth-form">\n\t\t\t\t<div class="mui-textfield mui-textfield--float-label">\n\t\t\t\t\t<input type="email" id="email" required>\n\t\t\t\t\t<label for="email">Email </label>\n\t\t\t\t</div>\n\t\t\t\t<div class="mui-textfield mui-textfield--float-label">\n\t\t\t\t\t<input type="password" id="password" required>\n\t\t\t\t\t<label for="password">Пароль</label>\n\t\t\t\t</div>\n\t\t\t\t<button\n\t\t\t\t\t\ttype="submit"     \n\t\t\t\t\t\tclass="mui-btn mui-btn--raised mui-btn--primary">\n\t\t\t\t\tВойти\n\t\t\t\t</button>\n\t\t\t</form>\n\t     '),document.getElementById("auth-form").addEventListener("submit",p,{once:!0})})),d.addEventListener("input",()=>{f.disabled=!s(d.value)})}]);