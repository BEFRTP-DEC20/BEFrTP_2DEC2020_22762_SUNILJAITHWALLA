const mysql=require('mysql');
var myConnection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cybage123',
    database:'ems'
});
myConnection.connect((err)=>{
    if(err) throw err;
    console.log("connected sucrssfully");
})
//select query
myConnection.query('select * from employee',(err,rows,cols)=>
{
    if(err) throw err
    console.log("Employee :",rows[0])
})
//insert records
myConnection.query('insert into employee values(106,"jason","E-103",789456123,"jaimahishmati@cybage.com",106)',(err,result)=>
{
    if(err) throw err;
    console.log("row created",result)
})
//end
myConnection.end(()=>{
    console.log('connection ended')
})