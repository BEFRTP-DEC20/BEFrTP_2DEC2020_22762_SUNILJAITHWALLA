var animal = { eats: true }
var rabbit = { jumps: true }

rabbit.__proto__ = animal  // inherit

alert(rabbit.eats) // true

//Sample2//
var animal = { eats: true }
var fedUpRabbit = { eats: false}

fedUpRabbit.__proto__ = animal  

alert(fedUpRabbit.eats) // false

//SAmple 3//
var animal = {
  eat: function() { 
    alert( "I'm full" )
    this.full = true
  }
}

var rabbit = { 
  jump: function() { /* something */ alert("I am jumping");}
}

rabbit.__proto__ = animal  

rabbit.eat()


