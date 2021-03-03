export class Employee{

    private ename:string;
    private eid:number;
    private esalary: number;
   
    constructor(name,id,sal){
        this.eid=id;
        this.ename=name;
        this.esalary=sal;        
    }

    showEmployee(){
        console.log(`Name: ${this.ename} 
        Id: ${this.eid}
        Salary: ${this.esalary}`)
    }
}//class

export var name="HArry";