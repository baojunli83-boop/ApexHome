const langBtn=document.getElementById("lang");let zh=false;
langBtn.addEventListener("click",()=>{zh=!zh;document.documentElement.lang=zh?"zh-CN":"en";document.querySelectorAll("[data-en]").forEach(el=>{el.innerHTML=zh?el.dataset.zh:el.dataset.en});langBtn.textContent=zh?"EN":"中文";updateLightbox();});
document.querySelector(".menu").addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open")));

const galleries={
  "3803":[
    ["assets/3803-01.png","Bellevue Eastgate Residence · Exterior","Bellevue Eastgate Residence · 外观"],
    ["assets/3803-02.png","Bellevue Eastgate Residence · Exterior","Bellevue Eastgate Residence · 外观"],
    ["assets/3803-03.png","Bellevue Eastgate Residence · Kitchen","Bellevue Eastgate Residence · 厨房"],
    ["assets/3803-04.png","Bellevue Eastgate Residence · Great Room","Bellevue Eastgate Residence · 客厅"],
    ["assets/3803-05.png","Bellevue Eastgate Residence · Great Room","Bellevue Eastgate Residence · 客厅"]
  ],
  "10435":[
    ["assets/10435-01.png","Bellevue Downtown Townhomes · Architectural Rendering","Bellevue Downtown Townhomes · 建筑效果图"],
    ["assets/10435-02.png","Bellevue Downtown Townhomes · Architectural Rendering","Bellevue Downtown Townhomes · 建筑效果图"],
    ["assets/10435-03.png","Bellevue Downtown Townhomes · Architectural Rendering","Bellevue Downtown Townhomes · 建筑效果图"]
  ],
  "17023":[
    ["assets/17023-01.jpg","Victoria Garden Townhomes · Architectural Rendering","Victoria Garden 联排住宅 · 建筑效果图"],
    ["assets/17023-02.jpg","Victoria Garden Townhomes · Architectural Rendering","Victoria Garden 联排住宅 · 建筑效果图"],
    ["assets/17023-03.jpg","Victoria Garden Townhomes · Architectural Rendering","Victoria Garden 联排住宅 · 建筑效果图"],
    ["assets/17023-04.jpg","Victoria Garden Townhomes · Architectural Rendering","Victoria Garden 联排住宅 · 建筑效果图"],
    ["assets/17023-05.jpg","Victoria Garden Townhomes · Architectural Rendering","Victoria Garden 联排住宅 · 建筑效果图"],
    ["assets/17023-06.jpg","Victoria Garden Townhomes · Architectural Rendering","Victoria Garden 联排住宅 · 建筑效果图"]
  ],
  "11815":[
    ["assets/11815-01.png","Newcastle Residences · Architectural Rendering","Newcastle 独栋别墅 · 建筑效果图"],
    ["assets/11815-02.png","Newcastle Residences · Architectural Rendering","Newcastle 独栋别墅 · 建筑效果图"],
    ["assets/11815-03.png","Newcastle Residences · Architectural Rendering","Newcastle 独栋别墅 · 建筑效果图"]
  ]
};
const lb=document.getElementById("lightbox"), img=document.getElementById("lb-img"), cap=document.getElementById("lb-caption"), count=document.getElementById("lb-count");
let active=null,index=0;
function updateLightbox(){if(!active)return;const item=galleries[active][index];img.src=item[0];img.alt=zh?item[2]:item[1];cap.textContent=zh?item[2]:item[1];count.textContent=(index+1)+" / "+galleries[active].length;}
function openGallery(name){active=name;index=0;updateLightbox();lb.classList.add("open");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function closeGallery(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";active=null;}
function move(n){if(!active)return;index=(index+n+galleries[active].length)%galleries[active].length;updateLightbox();}
document.querySelectorAll("[data-gallery]").forEach(b=>b.addEventListener("click",()=>openGallery(b.dataset.gallery)));
document.querySelector(".lb-close").addEventListener("click",closeGallery);
document.querySelector(".lb-prev").addEventListener("click",()=>move(-1));
document.querySelector(".lb-next").addEventListener("click",()=>move(1));
lb.addEventListener("click",e=>{if(e.target===lb)closeGallery();});
document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")closeGallery();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1);});