function sayHello(lang) {
    var text = 'Talk ' + lang;   // local variable
   
    var sayAlert = function(fluency) { 
      if(fluency===1) 
      console.log("Beginner"+text);
      else
      console.log("Expert"+text);
  }
    return sayAlert;
}
var talkHindi = sayHello("Hindi");
talkHindi(1);
talkHindi(2);
talkHindi(34)
var talkMarathi = sayHello("Marathi");
talkMarathi(1);
var talkEng = sayHello("English");
talkEng(2);








//****Example2*****//
function setupSomeGlobals() {

    // Local variable that ends up within closure
    var num = 666;
    // Store some references to functions as global variables
    gAlertNumber = function() { alert(num); }
    gIncreaseNumber = function() { num++; }
    gSetNumber = function(x) { num = x; }
}


setupSomeGlobals() //value of num is 666 
gAlertNumber () //alerts 666 
gIncreaseNumber()

gAlertNumber () //alerts 667 
gSetNumber (600) 
gAlertNumber () //alerts 600








//Example//

function makeFunc() {
  var name = "JAVASCRIPT";
  
  return function() {
    alert(name);
  };
}

var myFunc = makeFunc();
var myFunc1 = makeFunc();
myFunc();



//Public and private////

var x=(function(){.....})();//Immediately Invoked Function Expression 









var Module = (function() {
  var x=89;
function privateMethod() {
      // do something
      console.log('inside private method...');
  }

function setX(data){
  x=data;
}

  return {
      publicMethod: function() {
          // can call privateMethod();
          privateMethod();  
          console.log(x);
      },
      setValue:function(x){setX(x);}
  };
})();




class StaffMemeber extends Employee
{ 
  

  getDesgn(){ return this.desgn;}
} 





The return statement of the Module contains our public functions. The private functions are just those that are not returned. Not returning functions makes them inaccessible outside of the Module namespace. But our public functions can access our private functions which make them handy for helper functions, AJAX calls, and other things.

Module.publicMethod(); // works
Module.privateMethod(); // Uncaught ReferenceError: privateMethod is not defined


////Example/////////
var MyModule = (function() {
  var myPrivateData = 303;
  function myPrivateFunction() {
    alert('private');
  }
  return {
    myPublicData : 42,
    myPublicFunction : function() {
      alert('public');
	  myPrivateFunction();
    }
  };
})();





function sayHello(lang){

  var text="talks in "+lang;

  function greet(){
    if(lang==="Hindi")
    return "Namaste";
    if(lang==="Marathi")
    return "Namaskar";
    if(lang==="English")
    return "Hello";
  }

  return greet;}

  var value=34;

  function f1()
  { console.log(value);}
   return f1();
  }