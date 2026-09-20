let userName = prompt("Enter your name please : ")
let age = Number(prompt("Enter your Age : "))
let gender = prompt("Enter your Gender please (Male or Female only) :")

console.log("Username : " + userName);
console.log("Age : " + age);
console.log("Gender : " + gender);

if (gender.toLowerCase() === "male") {
    document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 3rem; padding: 1rem;'>Welcome Mr. " + userName + "!...</p>");
}
else if (gender.toLowerCase() === "female") {
    document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 3rem; padding: 1rem;'>Welcome Ms. " + userName + "!...</p>");
}
else {
    document.write("<p style='color: #2c1907;  font-family: fantasy; font-size: 3rem; padding: 1rem;'>Welcome  " + userName + "!...</p>");
}

var validOrder = false;

if (age < 16) {
    alert("You are not eligible to place an order")
    order = "You are not eligible to place an order"
}
else {
    var order = prompt("What do you want to order ( Zinger , Shawarma , Burger)");
    if (order.toLowerCase() === "zinger" || order.toLowerCase() === "shawarma" || order.toLowerCase() === "burger") {
        alert("Your order is being prepared")
        validOrder = !validOrder;
    }
    else {
        alert("Invalid order. Please try again")
    }

}
let orderStatus = ""
if (age >= 18 && validOrder === true) {
    alert("Order confirmed")
    orderStatus = "Your Order confirmed"
}
else if (age < 18 || validOrder === false) {
    alert("Order requires verification")
    orderStatus = "Your Order requires verification"
}

document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 2rem; padding-left: 1.5rem;'>Customer Name : <span style='color: #2c1907; font-family: Arial; font-size: 2rem;'>" + userName + "</span></p>")
document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 2rem; padding-left: 1.5rem;'>Age : <span style='color: #2c1907; font-family: Arial; font-size: 2rem;'>" + age + "</span></p>")
document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 2rem; padding-left: 1.5rem;'>Gender : <span style='color: #2c1907; font-family: Arial; font-size: 2rem;'>" + gender + "</span></p>")
document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 2rem; padding-left: 1.5rem;'>Your order : <span style='color: #2c1907; font-family: Arial; font-size: 2rem;'>" + order + "</span></p>")
document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 2rem; padding-left: 1.5rem;'>Order status : <span style='color: #2c1907; font-family: Arial; font-size: 2rem;'>" + orderStatus + "</span></p>")