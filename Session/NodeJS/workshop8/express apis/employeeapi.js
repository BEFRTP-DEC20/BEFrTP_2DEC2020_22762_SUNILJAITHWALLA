const { Sequelize } = require('sequelize');
var express = require('express');
var app = express();
var http = require('http');
var url = require('url');



// Create Sequelize Object to connect DB
const sequelize = new Sequelize('workshop8', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
});

// Connection into DB
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Employee CRUD 
app.get("/employees", function(req, res){
    sequelize.query("SELECT * FROM Employee").then(function(values){
        res.send(values[0]);
    });
});

app.get("/employees/:id", function(req, res){
    var id = req.params.id;
    sequelize.query("SELECT * FROM Employee where empid = " + id).then(function(values){
        res.send(values);
    });
});

app.post("/employees", function(req, res){
    var empname = req.body.empname;
    var empsalary = req.body.empsalary;
    var deptid = req.body.deptid;
    var empdesgn = req.body.empdesgn;
    var query = "INSERT INTO employee (empname, empsalary, empdesgn, deptid) values ('"+empname+"',"+empsalary+", '"+empdesgn+"', "+deptid+")";
    sequelize.query(query).then(function(values){
        console.log("Employee Data Added successfully.");
    });
});

app.listen(3000,()=>{
    console.log("server is running");
})