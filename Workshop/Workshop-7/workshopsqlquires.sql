use ems;
 select empname from employee where empname LIKE 'p%';
  select (ispermanent='YES') 'NO of employess whose salary is greater than 5000 and permanent'from empsalary where salary>5000;
  select empid,empname,department,contactno,empheadid from employee where  emaildid like '%@gmail.com' ;
  
  select * from employee where department in ('E-102','E-104');
   select deptname 'deptname of empid E-102' from empdept where deptid='E-102';
     select sum(salary) as 'total salary of permanent employees' from empsalary where ispermanent='yes';
     select empname from employee where  empname like '%a';
     select count(empid) as employee, projectid from empproject group by projectid;
      select count(empid), projectid from empproject group by projectid;
       select count(projectid) as project from empproject where startyear=2010;
       select count(projectid) as project from empproject where startyear=endyear;
       select empname from employee where  empname like '__h%';
     