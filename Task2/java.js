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



// #task2
let menu = [
    {
        name: "Zinger",
        price: "3 JD",
        category: "snacks",
        isAvailable: true
    },
    {
        name: "Shawarma",
        price: "2 JD",
        category: "snacks",
        isAvailable: true
    },
    {
        name: "Mansaf",
        price: "6 JD",
        category: "Rice",
        isAvailable: false
    },
    {
        name: "Tikka",
        price: "2 JD",
        category: "BBQ",
        isAvailable: false
    },
    {
        name: "Mozzarella Sticks",
        price: "2 JD",
        category: "appetizer",
        isAvailable: true
    },
]


function showMenu() {
    let Status
    for (let i = 0; i < menu.length; i++) {
        document.write("<tr>");
        document.write("<td>"+menu[i].name+"</td>")
        document.write("<td>"+menu[i].price+"</td>")
        document.write("<td>"+menu[i].category+"</td>")
         if (menu[i].isAvailable === true) {
           Status = "Available";
        }
        else {
            Status="Not Available"
        }
        document.write("<td>"+Status+"</td>")
        document.write("</tr>");
       
    }
}

function findMeal(meal) {
    document.write("<h3 style='padding : 1rem;'>Your Meal: </h3>")
    for (let property in meal) {

        document.write("<p style='padding-left : 1rem;'>" + property + " : " + meal[property] + "</p>")
    }
}

function total(meal)
{
    let qnty =Number(prompt("How many meals you need? (ex: 2 )"));
    let price = Number(meal["price"].split(" ")[0])
    document.write("<h3 style='padding-left : 1rem;'>Total : "+(price*qnty)+" JD</h3>");
}

document.write("<p style='color: #2c1907; font-family: fantasy; font-size: 2rem; padding-left: 1.5rem;'>Menu</p>")
document.write("<table border= '2' style='margin : 1rem;'>")
document.write("<tr><th>Meal</th><th>Price</th><th>Category</th><th>Available</th></tr>")
showMenu();
document.write("</table>")


let validMeal = null

while (validMeal === null) {
    let enterFromMenu = prompt("Enter the food name (Mansaf , Zinger , Shawarma , Tikka , Mozzarella sticks)");
    let found = false

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].isAvailable === false) {
            continue;
        }

        if (menu[i].name.toLowerCase() === enterFromMenu.toLowerCase()) {

            validMeal = menu[i];
            found = true
            alert("welcome we prepare your order");
            findMeal(validMeal);
            total(validMeal);
            break;
        }
    }
    if (found === false) {
        alert("Enter the available food from menu ");

    }


}