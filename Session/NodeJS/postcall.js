app.post('/addUser',function(req,res)
{
    false.readFile(__dirname + "/public" + "users.json","utf8",function(err,data)
    {
        data=JSONparse(data);
        data["user5"]=user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});