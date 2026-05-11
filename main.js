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



window.onscroll = function() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
btn.onclick = function() {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}





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


function SearchElement(value) {

    let cards = document.querySelectorAll(".card");
    let searchValue = value.toLowerCase();

    for (let i = 0; i < cards.length; i++) {

        let textInCard = cards[i].innerText.toLowerCase();

        if ( textInCard.includes(searchValue) ) {
            cards[i].style.display = "block";
        } 

        else {
            cards[i].style.display = "none"; 
        }
    }
}



/*instructor */


let form = document.querySelector("form");
let instructorName = document.getElementById("instructorName");
let instructorEmail = document.getElementById("instructorEmail");
let phone = document.getElementById("phone");
let experience = document.getElementById("experience");
let CourseName = document.getElementById("CourseName");
let btnSubmit = document.getElementById("btnSubmit");
let message = document.getElementById("message");

//check data
function checkData(e) {
    if ( ! ( instructorEmail.value.includes("@gmail.com") ) ) {
        e.preventDefault();
        message.innerHTML='Invalid email address';
                    message.style.cssText=
        `
    text-align: center;
    width: 100%;
    padding: 30px 0 30px 0;
    font-size: 20px;
    color: rgba(230, 43, 43, 0.94);
    font-weight: bold;
    `;
    }
    else if (! ( phone.value.includes('011') || phone.value.includes ('012') || phone.value.includes('015') || phone.value.includes('010') ) ){
        e.preventDefault();
        message.innerHTML='Please enter an Egyptian number';
            message.style.cssText=
        `
    text-align: center;
    width: 100%;
    padding: 30px 0 30px 0;
    font-size: 20px;
    color: rgba(230, 43, 43, 0.94);
    font-weight: bold;
    `;
    }
    else if(experience.value < 5)
    {
        e.preventDefault();
        message.innerHTML='You cannot join as a lecturer if you have less than five years of experience.';
            message.style.cssText=
        `
    text-align: center;
    width: 100%;
    padding: 30px 0 30px 0;
    font-size: 20px;
    color: rgba(230, 43, 43, 0.94);
    font-weight: bold;
    `;
    }
    else{
        e.preventDefault();
        message.innerHTML='We will contact you to join us';
        message.style.cssText=
        `
    text-align: center;
    width: 100%;
    padding: 30px 0 30px 0;
    font-size: 20px;
    color: rgb(47, 200, 47);
    font-weight: bold;
    `;
    }
}
form.onsubmit = checkData;