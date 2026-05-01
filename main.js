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
let btn = document.getElementById("btn");
function animation(x){
    for(let i = 0; i < x.length; i++){
        x[i].style.animation='fadeInUp 2s ease forwards'
        x[i].style.opacity = 1;
    }
}



window.onscroll = function() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        animation(section);
    }
    if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
        animation(card);
    }
};




let mode = document.getElementById("mode");
let i = mode.querySelector("i");
let p = mode.querySelector("p");
let body = document.body;
let mode2 = document.getElementsByClassName("mode2");
let color2 = document.getElementsByClassName("color2");
let Search = document.getElementById("Search");
let back2 = document.getElementsByClassName("back2");



if (localStorage.getItem("theme") === "dark") {
    applyDarkMode();
}

mode.onclick = function() {
    if (body.classList.contains("dark")) {
        applyLightMode();
    } else {
        applyDarkMode();
    }
}


function applyDarkMode() {
    i.classList.replace("fa-moon", "fa-sun");
        p.innerHTML = "Light";
        Search.style.border = "1px solid #1E1E1E";
        for (let i = 0; i < mode2.length; i++) {
            mode2[i].classList.add("dark");
        }
        for (let i = 0; i < color2.length; i++) {
            color2[i].classList.add("darkColor");
        }
    localStorage.setItem("theme", "dark"); 
}

function applyLightMode() {
    i.classList.replace("fa-sun", "fa-moon");
        p.innerHTML = "Dark";
        body.classList.remove("dark");
        for (let i = 0; i < mode2.length; i++) {
            mode2[i].classList.remove("dark");
        }
        for (let i = 0; i < color2.length; i++) {
            color2[i].classList.remove("darkColor");
        }
    localStorage.setItem("theme", "light"); 
}

function focusSearch() {
    document.getElementById("Search").focus();
}
function SearchElement(value) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        
        if (card.innerText.toLowerCase().includes(value.toLowerCase())) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none";
        }
    });
}




btn.onclick = function() {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}




