let reverse = [1,2,3,4,5,6];

document.write("<p> Numbers before reverse :<br>");
for(let i=0 ; i<reverse.length; i++){
    document.write("<span>"+ reverse[i]+"</span>")
}
document.write("</p>");


document.write("<p>  Numbers after reverse:<br>");
for(let i=reverse.length-1 ; i>= 0; i--){
    document.write("<span>"+ reverse[i]+"</span>")
}

document.write("</p>");



for(let i=0 ; i<=15; i++){
    if(i%2===0)
    {
        console.log(i+" is even");
    }
    else{
        console.log(i+" is odd");
    }
}


let Num = prompt("Enter any number (at least 6 random number): ")
let dashedNum = ""

document.write("The original nuumber : "+ Num +"<br>");
for(let i=0; i< Num.length ; i++)
{
 dashedNum += Num[i];
 if( Number(Num[i])%2===0 && Number(Num[i+1])%2===0){
    dashedNum +="-"
 }
}
document.write("The dashed number : "+ dashedNum  +"<br>");


let age = prompt("Enter your Age please: ")

function ageChecker(age){
    if(age>=18)
    {
        document.write("The user is Adult")
    }
    else{
        document.write("The user is Minor")
    }
}

ageChecker(age)