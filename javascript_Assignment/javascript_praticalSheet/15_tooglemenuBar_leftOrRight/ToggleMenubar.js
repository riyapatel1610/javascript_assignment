let toggleBtn=document.querySelector(".tbtn");
let nav =document.querySelector(".menubar");
toggleBtn.addEventListener("click",function(){
    nav.classList.add("nav-toggle")
})
let closbtn=document.querySelector(".cbtn")
closbtn.addEventListener("click",function(){
    nav.classList.remove("nav-toggle");

})
