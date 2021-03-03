







var discount=prompt('Enter discount rate');
var productPrice=100;
var discountPrice=productPrice-((productPrice*discount)/100);
if(confirm("Price of product was: "+productPrice+" Discounted Price is: "+discountPrice))
alert("Accepted");
 else
 alert("Cancled");