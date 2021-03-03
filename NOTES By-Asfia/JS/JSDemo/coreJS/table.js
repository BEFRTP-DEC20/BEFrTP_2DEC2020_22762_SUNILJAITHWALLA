
function table(){
    var num=document.querySelector('input').value;
var value=1;
while(value<=10)
{
    ans=num*value;
 
    document.querySelector("p").innerHTML+=" <br>"+ num+" * "+value+" = "+ans;
    value++;
}
}