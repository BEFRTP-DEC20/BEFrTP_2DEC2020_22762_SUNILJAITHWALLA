
'use strict';

document.addEventListener('change',function(){
	
var color=document.getElementById("c1").value;
console.log(color)
document.body.style.backgroundColor=color;	
});







  /*var hobbies=['Swimming','Dancing','Treking'];
 function hi()
{
	/*var data=document.getElementById('n').value;
		hobbies.push(data);
		//console.log(hobbies)
		hobbies.forEach(function(i,ind,a){
			document.getElementById('mytable').innerHTML+="<ul>"+i+"</ul>";
		});
		
	var num=prompt('Enter the number');
	for(i=1;i<=10;i++){
	document.getElementById('mytable').innerHTML+=num+" * "+i+" = "+(i*num)+" <br>";
	}


	
}

function table()
{
for(i=1;i<=10;i++)
document.writeln("\n"+44+" * "+i+" = "+i*44 );
} */
