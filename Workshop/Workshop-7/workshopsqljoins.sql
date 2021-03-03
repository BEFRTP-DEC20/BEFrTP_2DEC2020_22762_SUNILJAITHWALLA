use ems;
select s.salary from employee e inner join empsalary s on e.empid = s.empid where s.ispermanent = "Yes";

select e2.*, e1.empname as head from employee e1 inner join employee e2 on e1.empid = e2.empheadid;

select e.* from employee e inner join empsalary s on e.empid = s.empid where s.salary = null;
