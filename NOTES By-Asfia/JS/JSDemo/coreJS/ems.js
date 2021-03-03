var employee={
    ename:'John',
    esal:58666,
    desgn:'Executive',
    dept:'Admin'
}

var employees=new Array();

function addEmployee(emp){
    employees.push(emp);
    console.log(employees);
   
}

function updateEmployeeSal(emp,sal){
    employees.push(e);
    console.log(employees);
}

function removeEmployee(emp){
    employees.forEach((e,i,a)=>{
        index=employees.indexOf((x)=>e.ename==x.ename);
    });
    console.log(index)
    employees.splice(index,1);
    console.log(employees);
}

addEmployee(employee);




var dwightSalary = (function() 
{ var salary = 0; 
    function changeBy(amount) { salary += amount; } 
    return { 
        raise: function() { changeBy(5000); },
        lower: function() { changeBy(-5000); }, 
        currentAmount: function() { return salary; }
        setSalary:function(sal){salary=sal;} 
};
 })();