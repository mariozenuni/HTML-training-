const hamburgerButton=document.getElementById("hamburger");
const navList=document.getElementById("nav-list");
   

function toogleButton(){

    navList.classList.toggle("show")
}


hamburgerButton.addEventListener("click",toogleButton)


