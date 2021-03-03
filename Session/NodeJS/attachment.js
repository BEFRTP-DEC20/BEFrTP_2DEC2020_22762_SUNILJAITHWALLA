var express=require('express');
var app=express();

app.use(express.static('public'));
app.get('/',function(req,res)
{
   
    res.attachment('output.txt');
   
})
app.listen(8044,function()
{
    console.log("app listening")
})