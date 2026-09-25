let btn1 = document.getElementById("circle");
let btn2 = document.getElementById("square");
let img = document.getElementById("img");

btn1.style.padding="1rem";
btn1.style.margin="0.5rem";
btn2.style.padding="1rem";
btn1.style.margin="0.5rem";

btn1.onclick=function(){
    img.style.borderRadius= "50%"
}
btn2.onclick=function(){
    img.style.borderRadius= "0"
}