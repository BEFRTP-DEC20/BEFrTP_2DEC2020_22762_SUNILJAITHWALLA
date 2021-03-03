var x = 10;
var y = 10;
{
    var x = 5;
    var y = 5;
    {
       var x = 2;
        var  y = 2;
     
        document.write("x: " + x + "<br/>");
        document.write("y: " + y + "<br/>");
    }   


	document.write("x: " + x + "<br/>");
    document.write("y: " + y + "<br/>");
 }

document.write("x: " + x + "<br/>");
document.write("y: " + y + "<br/>");












//***Example1***********//
<html>
<body>
<p>
</p>

<p id="demo"></p>

<script>

myFunction();

document.getElementById("demo").innerHTML = "I can display " + carName;
var carName;
function myFunction() {
   carName = "Volvo";
}
</script>

</body>
</html>











//********Example2***********//

var aCentaur = "a horse with rider,";

function antiquities(){
    
    aCentaur = "A centaur is probably a mounted Scythian warrior";
   
}

antiquities();
aCentaur += " as seen from a distance by a naive innocent.";

document.write(aCentaur);











/////
function table(x)
{  
    var x=x*2;
     
   return function displayTable()
   {
       for(i=0;i<=x;i++)
       console.log(x*i)
   } ;
};













//******Example3***********//
var aNumber = 100;//global
tweak();
function tweak(){
   document.write(aNumber);
    var aNumber = 123;  
}















///Internally//
var aNumber = 100;
tweak();

function tweak(){
    var aNumber;
    document.write(aNumber);
        aNumber = 123;  
   
}






//********Example4***********//
function send(name) {
    // Local variable 'name' is stored in the closure
    // for the inner function.
    return function () {
        sendHi(name);
    }
}

function sendHi(msg) {
    console.log('Hello ' + msg);
}
var func = send('Bill');
func();
sendHi('Pete');
func();
 
