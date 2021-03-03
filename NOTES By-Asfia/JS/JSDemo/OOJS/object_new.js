function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Eagle", "Talon TSi", 1993);
var kenscar = new Car("Nissan", "300ZX", 1992);
var vpgscar = new Car("Mazda", "Miata", 1990);
console.log(mycar);
console.log(kenscar);
console.log(vpgscar);













var employee={ename:"Samuel",empid: 101, edesgn:"SE"};
//property array conatctNo



//property object name:fname lname



//property function details
var employee={name:{fname: "Samuel",lname: "Jhonson"},empid: 101, 
edesgn:"SE",contactno: [9866674545,23423333,5768899],
deatils:()=>{ console.log(this.employee.name.fname)} };


var employee={name:{fname: "Samuel",lname: "Jhonson"},empid: 101,
 edesgn:"SE",contactno: [9866674545,23423333,5768899],
deatils: function(){ console.log(this.name.fname)} };









