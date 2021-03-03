var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());
//setter cookies
app.get('/cookieset',function(req,res)
{
    res.clearCookie();
    res.cookie('company','cybage');
    res.cookie('name','sunil');
    res.status(200).send('cookie is set');
});
//getter cookies
app.get('/cookieget',function(req,res)
{
    res.status(200).send(req.cookies);
});
app.listen(8000,function()
{
    console.log('app listening');
});