var express= require('express');
var app= express();
var http =require('http');
var url=require('url');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('workshop8', 'root', 'cybage123', {
  host: 'localhost',
  dialect: 'mysql'
})
try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
const {QueryTypes} = require('sequelize');
app.get('/Employee',(req,res)=>
{
  const user = sequelize.query("select * from Employee").then((values)=>
  {
    console.log(values); 
  })
 
 
});
// app.get('/Employee/:empid',(req,res)=>
// {
//   var empid=req.params.empid;
//   const user = sequelize.query("select * from Employee where empid=" +empid) .then (function(values){
//     console.log(values);
//   });

// });
app.listen(6000,()=>console.log("connected"));