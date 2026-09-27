let task = document.getElementById("task");
let list = document.getElementById("list");
let save = document.getElementById("save");
let arr = JSON.parse(localStorage.getItem("task")) || [];

function update(){
    for(let i=0 ; i<arr.length ; i++){
    list.innerHTML+="<p>"+arr[i]+"<button onclick='deleteT("+ i +")'>Delete</button>"+"</p>";
    task.value="";
}
}

function deleteT(index){
    arr.splice(index,1);
    localStorage.setItem("task",JSON.stringify(arr));
    list.innerHTML=""
    update();
}

update();

save.onclick=function(){
    let text = task.value;
    arr.push(text);
    localStorage.setItem("task",JSON.stringify(arr));
    list.innerHTML+="<p>"+text+"<button onclick='deleteT("+(arr.length-1)+")'>Delete</button>"+"</p>";
    task.value="";
    
};

