"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
// import {Toy} from './IToy';
var value = 12;
var myName = "Watson";
var flag = true;
var notAvial;
var hobbies = ['Swimming', 'Treking', 'Reading'];
hobbies.forEach(function (hobby) {
    console.log(hobby);
});
var employees = [new Employee_1.Employee("John", 101, 34566),
    new Employee_1.Employee("Harry", 102, 45566)
];
employees.forEach(function (emp) {
    emp.showEmployee();
});
var mydata = value + 45;
var myToy = { name: "Rattle", color: "Red", tid: 101 };
console.log(myToy);
console.log(mydata);
console.log(Employee_1.name);
