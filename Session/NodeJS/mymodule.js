myDate=function()
{
    console.log("inside the module");
    return new Date();
}
myName=()=>
{
    return "Sunil";
}
module.exports={myDate,myName}