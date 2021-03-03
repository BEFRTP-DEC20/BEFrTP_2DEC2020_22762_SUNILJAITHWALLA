import { Employee } from "./Employee";

class Manager extends Employee{
    private managerRole:string;

    constructor(){
        super("John",110,345456);
        this.managerRole="Associate";
    }

    show(){
        super.showEmployee();
        console.log("Manager Role: "+this.managerRole)
    }
}

var newManager=new Manager();
newManager.show();