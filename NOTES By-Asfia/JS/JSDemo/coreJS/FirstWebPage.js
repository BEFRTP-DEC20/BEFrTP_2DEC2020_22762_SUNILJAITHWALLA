'use strict';
var message="Welcome to Cybage!!!";
document.getElementById("myP").innerHTML=message;

document.querySelector('button').onclick=function(){
    alert("Clicked the button...");
}

document.addEventListener('click',()=>{alert("Clicked..")});