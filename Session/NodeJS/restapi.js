const express=require('express');
const app=express();
const fs=require('fs')

app.use(express.static('public'));
app.get('/api/products',function(req,res)
{
   fs.readFileSync("products.json",(err,data)=>
   {    if (err)
     {
       console.log(err);
     }
        console.log(data)
       res.end(JSON.stringify(data));
   })
})


app.listen(1010,function(){
    console.log("app listen")
})