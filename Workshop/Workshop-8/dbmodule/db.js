const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('workshop8', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
  });

const connectDB= async ()=>{
  let flag = false;
  try{

    await sequelize.authenticate();
    return true;

  }
  catch(err){
    return false;
  }
}


const insertEmployee=async (item)=>{
  console.log(item);
  const [result,metadata]=await sequelize.query(
    "insert into Employee (empname,empsalary,empdesgn,deptid) values('"+item.empname+"',"+item.empsalary+",'"+item.empdesgn+"',"+item.deptid+")")
  console.log(result);
  return result;
}

const getAllEmployees=async ()=>{

  const [result,metadata]=await sequelize.query("select * from Employee");
 
  return result;
}

const getEmployeeWithId=async (id)=>{

  const [result,metadata]= await sequelize.query("select * from Employee where empid="+id);
  return result;
}

const updateEmployee=async (id,item)=>{
  console.log(item);
  const [result,metadata]=await sequelize.query("update Employee set empname='"+item.empname+"',empsalary="+item.empsalary+",empdesgn='"+item.empdesg+"',deptid="+item.deptid+" where empid ="+id+"");
  console.log(result.affectedRows);
  return result.affectedRows;
}

const insertDepartment =async (item)=>{
  
  const [result,metadata]=await sequelize.query("insert into Department (deptname) values('"+item.deptname+"')");
  console.log(result);
  return result;
}
const getAllDepartment=async ()=>{

  const [result, metadata]=await sequelize.query("select * from Department");
  return result;
}

const getDepartmentWithId=async (id)=>{

  const [result,metadata]= await sequelize.query("select * from Department where deptid="+id);
  return result;
}

const updateDepartment=async (id,item)=>{
  console.log(item);
  const [result,metadata]=await sequelize.query("update Department set deptname='"+item.deptname+"' where deptid ="+id+"");
  console.log(result.affectedRows);
  return result.affectedRows;
}


module.exports =
 {connectDB,insertEmployee,updateEmployee,getEmployeeWithId,getAllEmployees,getAllDepartment,insertDepartment,updateDepartment,getDepartmentWithId};
