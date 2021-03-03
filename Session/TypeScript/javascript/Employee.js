"use strict";
exports.__esModule = true;
exports.name = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, id, sal) {
        this.eid = id;
        this.ename = name;
        this.esalary = sal;
    }
    Employee.prototype.showEmployee = function () {
        console.log("Name: " + this.ename + " \n        Id: " + this.eid + "\n        Salary: " + this.esalary);
    };
    return Employee;
}()); //class
exports.Employee = Employee;
exports.name = "HArry";
