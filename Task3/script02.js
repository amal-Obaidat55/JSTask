let btn = document.getElementById("submit");
let order = document.querySelector("p");
let name = document.getElementsByTagName("input");
let items = document.getElementsByClassName("item");
let food = document.getElementById("select")


for (let i = 0; i < items.length; i++) {
    items[i].style.color = "#2c1907"
    items[i].style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    items[i].style.fontSize = "1rem"
    
}


btn.onclick = function () {

    order.innerHTML = "Hello " +name[0].value + " ! <br>Your Order is : "+food.value
}

btn.onmouseover = function () {
    btn.style.backgroundColor = "hotpink"
}

btn.onmouseout = function () {
    btn.style.backgroundColor = ""
}