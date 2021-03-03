"use strict";


var button=document.getElementById("b1");
console.log(button);
button.addEventListener('click', ()=>{
	console.log("Alert")
})



 var show=()=>console.log("Alert")
 show()

// function calculate(){
// 		var price=prompt('Enter the price');
// 		var discount=prompt('Enter the discount');
// 		var res=price-(price*(discount/100));
// 		if(confirm('Your final product price is: '+ res))
// 		alert("Order completed successfully!!!")
// 		else
// 		alert("Order is incomplete..")

// 		var person={name: "John",age:34,contactNmber:987655643};
// 		console.log(JSON.parse(person));
// 		JSON.stringify(person)
// 	}
name="Jonh";