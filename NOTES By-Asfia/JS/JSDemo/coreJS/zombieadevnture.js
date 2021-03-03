/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


alert("Welcome to the Zombie andventure Game!!!");
alert("A zombie is entering next the door...");
var weapon=prompt("Select your weapon Gun, Axe,Rubber Chicken");
var rnum=Math.round(Math.random());
console.log(rnum);
if(rnum===0){
  alert("You loose!!!!");
}else if(rnum===1){
  alert("You win using your weapon"+ " "+weapon);
  
}