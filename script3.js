let textBox = document.getElementById("box");
let text = document.getElementById("text");


let fontFamily = document.getElementById("family");
let fontSize = document.getElementById("size")

fontFamily.onclick = function () {
    text.style.fontFamily = fontFamily.value;
}

fontSize.onclick = function () {
    text.style.fontSize = fontSize.value;
}



let under = document.getElementById("underline");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");


italic.onclick = function () {
    if (italic.checked) {
        text.style.fontStyle = "italic";
    }
    else {
        text.style.fontStyle = "normal"
    }
}

bold.onclick = function () {
    if (bold.checked) {
        text.style.fontWeight = "bold";
    }
    else {
        text.style.fontWeight = "normal"
    }
}

under.onclick = function () {
    if (under.checked) {
        text.style.textDecoration = "underline";
    }
    else {
        text.style.textDecoration = "none"
    }
}

textBox.style.marginTop = "1rem"
textBox.style.marginLeft = "0.2rem"
textBox.style.padding = "0.2rem"
textBox.style.width = "75%"
textBox.style.height = "300px"
textBox.style.border = "5px ridge black"

