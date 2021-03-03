const express=require('express');
const { listen } = require('express/lib/application');
const app=express();
app.get("/",(req,res)=>
{
    res.send("hello sunil!!   yeah");
})
app.get("/product/:product",(req,res)=>
{
    res.send("exploreing !!"+req.params.product);
});
app.listen(4000,()=>
{
    console.log("listening.....")
})
