const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let o=null;t.addEventListener("click",(function(d){o=setInterval((t=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(r){clearInterval(o),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.1d8c840f.js.map