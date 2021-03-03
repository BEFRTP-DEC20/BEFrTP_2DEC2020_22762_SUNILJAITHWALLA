const express = require('express');
const db =require('../dbmodule/db');


const app = express();
app.use(express.json());


const connected=db.connectDB().then((value)=>{
    console.log(value);
});


app.get('/employees',async (req,res)=>{
    const result = await db.getAllEmployees();
    res.send(result);
    res.end();
});

app.get('/employees/:id',async (req,res)=>{
    const result = await db.getEmployeeWithId(req.params.id);
    res.send(result);
    res.end();
});

app.post('/employees',async (req,res)=>{
    console.log(req.body);
    const result =await db.insertEmployee(req.body);
    if(result>0)
    {
        res.send('data inserted successfully');
    }
    res.end();
});

app.post('/employees/:id/update',async (req,res)=>{
    const result = await db.updateEmployee(req.params.id,req.body);
    if(result>0)
    {
        res.send('data updated successfully');
    }
    res.end();
});

app.get('/departments',async (req,res)=>{
    const result = await db.getAllDepartment();
    res.send(result);
    res.end();
});

app.get('/departments/:id',async (req,res)=>{
    const result = await db.getDepartmentWithId(req.params.id);
    res.send(result);
    res.end();
});

app.post('/departments',async (req,res)=>{
    console.log(req.body);
    const result =await db.insertDepartment(req.body);
    if(result>0)
    {
        res.send('data inserted successfully');
    }
    res.end();
});

app.post('/departments/:id/update',async (req,res)=>{
    const result = await db.updateDepartment(req.params.id,req.body);
    console.log(result);
    if(result>0)
    {
        res.send('data updated successfully');
    }
    res.end();
});

app.listen(3000,()=>{
    console.log("server is running");
})