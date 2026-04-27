let i_links = document.getElementById("menu-links");
let linksBox = document.querySelector(".links"); 

i_links.onclick = function() {

    linksBox.classList.toggle("active");
    
    if (linksBox.classList.contains("active")) {
        i_links.classList.replace("fa-bars", "fa-xmark");
    } else {
        i_links.classList.replace("fa-xmark", "fa-bars");
    }
}
let section = document.getElementsByClassName("section");
let card = document.getElementsByClassName("card");
function animation(x){
    for(let i = 0; i < x.length; i++){
        x[i].style.animation='fadeInUp 2s ease forwards'
    }
}
window.onscroll = function() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        animation(section);
    }
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        animation(card);
    }
};








let Search = document.getElementById("Search");
function focusSearch(){
    Search.focus();
}
function SearchElement(value) {
    for(let i = 0; i < value.length; i++)
    {

    }
}
