var express=require('express');
var app=express();
app.set("view engine","pug")
app.get('/',function(req,res){
    var list= [ { name:'ryan' },{ name:'sunil' },{ name:'varma' }]
    res.render('sample',{list:list});
});
app.listen(5030,function()
{
    console.log('node server is running');
});