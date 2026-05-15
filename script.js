
document.addEventListener("DOMContentLoaded",function(){
var openingScreen=document.getElementById("openingScreen");
var openBtn=document.getElementById("openInvitation");
var heroSection=document.querySelector(".hero-section");
var familySection=document.querySelector(".family-section");
openBtn.onclick=function(){
openingScreen.classList.add("hide-opening");
setTimeout(function(){
document.body.style.overflow="auto";
heroSection.classList.add("active");
familySection.classList.add("active");
},1200);
};
// Parallax
window.addEventListener("scroll",function(){
var scrolled=window.scrollY;
var heroImage=document.querySelector(".hero-image");
if(heroImage){
heroImage.style.transform="scale(1.08) translateY("+(scrolled*0.08)+"px)";
}
});
// Scroll reveal
var revealElements=document.querySelectorAll(".family-card,.quote-text");
function revealOnScroll(){
var windowHeight=window.innerHeight;
revealElements.forEach(function(el){
var top=el.getBoundingClientRect().top;
if(top<windowHeight-100){
el.classList.add("show");
}
});
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();
});

