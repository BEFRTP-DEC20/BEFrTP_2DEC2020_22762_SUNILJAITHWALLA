var d = new Date();
document.getElementById("demo").innerHTML = d;
var time=d.getHours();
if(time<12)
{
    document.write("Good Morning!");
}
else if(time>=12&&time<=16)
{
    document.write("Good afternoon!");
}
else
{
    document.write("Good Evening");
}