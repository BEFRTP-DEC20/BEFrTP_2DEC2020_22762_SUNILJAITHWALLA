"use strict";
var index = 0;
var myvalues = ["John", "Riya"];

myvalues.forEach((i, indx) => {
    document.querySelector("div").innerHTML += i + "<br>";
    index = indx;
})

document.querySelector("button").addEventListener('click', () => {
    myvalues.unshift(document.querySelector("input").value);
    index++;
    document.querySelector("div").innerHTML += myvalues[0] + "<br>";

});






// document.querySelector("button#id1").addEventListener('click', () => {
//     myvalues.pop();
//     console.log("Pop"+myvalues);
//     index--;
//     document.querySelector("div").innerHTML = myvalues[index] + "<br>";

// });