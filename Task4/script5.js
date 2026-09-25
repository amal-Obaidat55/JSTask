let btn = document.getElementById("btn");
let orderDetails = document.getElementById("orderDetails");



let userError = document.getElementById("name");
let passError = document.getElementById("pass");
let telError = document.getElementById("phone");

let userValidate = /^\S+$/;
let passValidate = /^(?=.*\d).{8,}$/;
let telValidate = /^07\d{8}$/

let valid1=false;
let valid2= false;
let valid3 = false;



btn.onclick = function () {
    let userName = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("number").value;
    let order = document.getElementById("order").value;

    if (userValidate.test(userName) === true) {
        valid1 = true
        userError.innerHTML = " "
    } else {
        userError.innerHTML = "<p style='color:red;'>Enter 1 digit at least and don't using spaces</p>"
    }
    if (passValidate.test(password) === true) {
        valid2 = true
        passError.innerHTML = " "
    } else {
        passError.innerHTML = "<p style='color:red;'>Enter at least 8 characters and contains at least one number</p>"
    }
    if (telValidate.test(phone) === true) {
        valid3 = true
        telError.innerHTML = " "
    } else {
        telError.innerHTML = "<p style='color:red;'>Enter exactly 10 digits and starts with 07</p>"
    }


    if (valid1 === true && valid2 === true && valid3 === true) {
        localStorage.setItem("order", order);
        sessionStorage.setItem("username", userName);

        orderDetails.innerHTML = ("<h3>Welcome, " + sessionStorage.getItem("username") +
            "</h3><p> Saved Order : " + localStorage.getItem("order") +
            "</p><p> Saved Username : " + sessionStorage.getItem("username") + "</p>")
    }

}
