//Create an Array

var fruits = ["Apple", "Mango"];

console.log(fruits); // 2
//Access (index into) an Array item

var first = fruits[0]; // Apple
var last = fruits[fruits.length - 1];// Mango
//Loop over an Array
fruits.forEach((item, index, array)=>console.log(item, index));// Apple 0	
// Mango 1
//Add to the end of an Array
var newLength = fruits.push("Orange");
// ["Apple", "Mango", "Orange"]
//Remove from the end of an Array
console.log(fruits);
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Mango"]; 
console.log(fruits);
//Remove from the front of an Array
var first = fruits.shift(); // remove Apple from the front
// ["Mango"];
//Add to the front of an Array
console.log(fruits);
var newLength = fruits.unshift("Strawberry") // add to the front
// ["Strawberry", "Mango"];
//Find the index of an item in the Array
console.log(fruits);
fruits.push("Mango");
// ["Strawberry", "Mango", "Mango"]
console.log(fruits);
var pos = fruits.indexOf("Mango");
// 1
//Remove an item by Index Position
console.log(pos);
var removedItem = fruits.splice(pos, 1);//splice(2,0,"Lichi") // this is how to remove an item
// ["Strawberry", "Mango"]
//Copy an Array
console.log(fruits);

var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
console.log(fruits);

arr.map(x => x.length);

array.filter(v => v % 3 === 0);//find()

/***
var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join());
arr.splice(2, 0, "Lene");
console.log(arr.join());



var list = ["foo", "bar"];
list.splice( 1, 0, "baz"); // at index position 1, remove 0 elements, then add "baz" to that position
                           // element "bar" will now automatically be moved to index position 2
["foo", "baz", "bar"] // result

***/


fruits.forEach(
    (item,index)=>
    {
        if(item.charAt(0)==='A')
        console.log(index+" "+item+" Seasonal Fruit")
    });