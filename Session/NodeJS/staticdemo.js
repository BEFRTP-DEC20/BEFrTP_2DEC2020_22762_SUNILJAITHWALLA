var express=require('express');
var app=express();
//set the server to read files from public location
app.use(express.static('public'));
app.get('/',function(req,res)
{
   res.send('index.html');
})
app.listen(8011,function(){
    console.log("app listen")
})