(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{F2:()=>E,zU:()=>b,rv:()=>S});const e="todos";function n(){const t=sessionStorage.getItem(e);return t?JSON.parse(t):[]}function o(t){return sessionStorage.setItem("curpage",JSON.stringify(t))}function s(){return JSON.parse(sessionStorage.getItem("curpage"))||1}n(),document.querySelectorAll(".clickPageNumber");let i=1;function c(){const t=n();return Math.ceil(t.length/5)}function r(){let t=document.getElementsByClassName("clickPageNumber");i=s();for(let e=0;e<t.length;e++)t[e].style.opacity=e===i-1?"1.0":"0.5"}function a(){i=s(),1===i?b.classList.add("opacity"):b.classList.remove("opacity"),i===c()?E.classList.add("opacity"):E.classList.remove("opacity")}function d(t){return n().slice(5*(t-1),5*t)}function u(){S(),a(),r()}function l(){let t=document.getElementById("page_number");t.innerHTML="";for(let e=1;e<c()+1;e++)t.innerHTML+="<span class='clickPageNumber'>"+e+"</span>"}function f(t){return{todoInput:t.querySelector(".todo-input"),todoButton:t.querySelector(".todo-button")}}function m(t){const{todoInput:e,todoButton:n}=f(t);e.value.length>=3?n.classList.remove("todo-button_disabled"):n.classList.add("todo-button_disabled")}const p=document.querySelector(".todo-input-wrapper"),{todoInput:g,todoButton:y}=f(p),L=document.querySelector(".todo-list"),v=document.querySelector(".pagination-container"),b=document.getElementById("button_prev"),E=document.getElementById("button_next");function S(){let t=d(s());L.innerHTML="",t.forEach((t=>{const o=(t=>{const o=document.createElement("li");o.classList.add("todo-item");const s=document.createElement("span");s.innerText=t,s.classList.add("todo-text"),o.appendChild(s);const i=document.createElement("button");return i.innerHTML='<i class="fas fa-trash"></i>',i.classList.add("todo-remove-button"),i.addEventListener("click",function(t){return o=>{o.preventDefault(),t.classList.add("todo-item_fall"),t.addEventListener("transitionend",(function(){!function(t){let o=n();const s=Array.from(t.childNodes).find((t=>t.classList.contains("todo-text")));if(s){const t=o.filter((t=>t.todotext!==s.innerText));sessionStorage.setItem(e,JSON.stringify(t))}}(t),t.remove(),l()}))}}(o)),o.appendChild(i),o})(t.todotext);L.appendChild(o)}))}function h(){n().length>4&&(v.style.display="flex")}document.addEventListener("DOMContentLoaded",(function(t){t.preventDefault(),S(),m(p),s(),d(),l(),r(),a(),document.addEventListener("click",(function(t){"SPAN"==t.target.nodeName&&t.target.classList.contains("clickPageNumber")&&(i=t.target.textContent,o(i),u(),a())})),h()})),g.addEventListener("input",(()=>m(p))),y.addEventListener("click",(function(t){t.preventDefault(),function(t){let o=n(),s={todotext:t};o.push(s),sessionStorage.setItem(e,JSON.stringify(o))}(g.value),S(),h(),l(),function(t){const{todoInput:e,todoButton:n}=f(t);e.value="",n.classList.add("todo-button_disabled")}(p)})),g.addEventListener("keydown",(function(t){if(13===t.keyCode&&t.target.value.length<3)return t.preventDefault(),!1})),b.addEventListener("click",(function(){i=s(),i>1&&(i--,o(i),u())})),E.addEventListener("click",(function(){i=s(),i<c()&&(i++,o(i),u(),r())}))})();