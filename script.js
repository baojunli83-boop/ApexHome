const langBtn=document.getElementById("lang");let zh=false;
langBtn.addEventListener("click",()=>{zh=!zh;document.documentElement.lang=zh?"zh-CN":"en";document.querySelectorAll("[data-en]").forEach(el=>{el.innerHTML=zh?el.dataset.zh:el.dataset.en});langBtn.textContent=zh?"EN":"中文";});
document.querySelector(".menu").addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open")));