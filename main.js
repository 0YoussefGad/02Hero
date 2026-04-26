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
