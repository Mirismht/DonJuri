const e=document.querySelector(".btn-showRecipe"),t=document.querySelector(".content-to-hidde");e.addEventListener("click",()=>{t.classList.toggle("visible")});const n=document.getElementById("whatsappLink");n.addEventListener("click",function(){let e=encodeURIComponent("+355697477372");window.open("https://api.whatsapp.com/send?phone="+e,"_blank")});const o=document.querySelectorAll("a:link");o.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();let n=e.getAttribute("href");if("#"===n&&window.scrollTo({top:0,behavior:"smooth"}),"#"!==n&&n.startsWith("#")){let e=document.querySelector(n);e.scrollIntoView({behavior:"smooth"})}e.classList.contains("main-nav-link")&&headerEl.classList.toggle("nav-open")})}),function(){let e=new Date().getFullYear();document.getElementById("current-year").textContent=e}();
//# sourceMappingURL=index.b802d486.js.map