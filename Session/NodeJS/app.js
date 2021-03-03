const {myName} = require("./mymodule");

var myDate     =   require("./mymodule");

myDate.showDate=()=>
{
    return "12th jan";
}

var message="hello world";

console.log("message: ",message,myName());

console.log(myDate.showDate());
module.exports={myDate}
var yes=setTimeout(()=>{console.log("message")},5000)
var no= setInterval(() => {console.log(myDate.showDate())},1000)
//clearTimeout(yes);
clearInterval(no);