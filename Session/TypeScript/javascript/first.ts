import {Employee,name} from './Employee';
 import {Toy} from './IToy';


var value: number =12;
var myName: string ="Watson";
var flag:boolean=true;
var notAvial: undefined;
var hobbies: Array<string>=['Swimming','Treking','Reading']

hobbies.forEach((hobby)=>{
console.log(hobby)
})

var employees:Array<Employee>=[new Employee("John",101,34566),
new Employee("Harry",102,45566)
]

employees.forEach((emp)=>{
   emp.showEmployee();
    })

var mydata:number=value+45;

var myToy: Toy= {name: "Rattle",color: "Red",tid:101}

console.log(myToy)

console.log(mydata)
console.log(name)