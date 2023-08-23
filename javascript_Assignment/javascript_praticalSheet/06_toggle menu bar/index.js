
let toggle_btn = document.querySelector(".t_btn");
let nav_bar = document.querySelector(".nav");
let icon = document.querySelector(".fa-bars");
toggle_btn.addEventListener("click", function(){
    nav_bar.classList.toggle("nav_toggle");
    if(nav_bar.classList.contains("nav_toggle") == true){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-close");
    }else{
        icon.classList.remove("fa-close");
        icon.classList.add("fa-bars");
    }
})