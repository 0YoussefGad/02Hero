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