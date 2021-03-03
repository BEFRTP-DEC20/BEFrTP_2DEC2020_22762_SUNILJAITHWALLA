
var Employee: { id: number, name: string,add:string,contactno: number }[] = 
[
    { "id": 0, "name": "sunil", "add": "kompally", contactno:898989 },
    { "id": 1, "name": "varma", "add": "kompally", contactno:898989 },
    { "id": 2, "name": "jaithwalla", "add": "jeedimetla", contactno:898989 }
];
console.log("total Employee details",Employee);
console.log("-------------------------------------------------------------------------")
console.log("sunil and varma will be output after validating kompally")
function address(adds) 
{ 
    return adds.add === 'kompally';
}
const found =Employee.filter(address);
console.log(found);// sunil and varma will be output
console.log("-------------------------------------------------------------------------")
console.log("2ND id will be retrived");
function ids(idd) { 
    return idd.id === 2;
  
    
}
const retrive =Employee.filter(ids);
console.log(retrive);
console.log("-------------------------------------------------------------------------")

Employee.splice(3, 0,{ "id":3, "name": "pranitha", "add": "nizampet", contactno:898989 } );
console.log("adding a new user PRANITHA");
console.log("total Employee details",Employee);
// var length = Employee.push({ "id":3, "name": "pranitha", "add": "nizampet", contactno:898989 }) 
//ANOTHER METHOD TO ADD
console.log("-------------------------------------------------------------------------")
 Employee.splice(2, 1, { "id": 2, "name": "Deepthi", "add": "alwal", contactno:898000989 });

console.log("after EDITING jaithwalla with deepthi",Employee);

console.log("-------------------------------------------------------------------------")
Employee.splice(1, 1);
console.log("after deleting varma",Employee);
//  var lengts = Employee.pop() ;
//  console.log("deleted a new user pranitha");
//  console.log("total Employee details",Employee);
//if we want to delete last element
console.log("-------------------------------------------------------------------------")