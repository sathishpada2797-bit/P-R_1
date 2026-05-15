document.addEventListener("DOMContentLoaded",function(){
var openingScreen=document.getElementById("openingScreen");
var openBtn=document.getElementById("openInvitation");

openBtn.onclick=function(){
openingScreen.classList.add("hide-opening");
setTimeout(function(){
document.body.style.overflow="auto";
},1200);
};

// Parallax on scroll
window.addEventListener("scroll",function(){
var scrolled=window.scrollY;
var heroImage=document.querySelector(".hero-image");
if(heroImage){
heroImage.style.transform="scale(1.08) translateY("+(scrolled*0.08)+"px)";
}
});
});
