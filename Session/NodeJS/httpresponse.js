const http=require('http');
const url=require('url');
const port=3000;
http.createServer((req,res)=>
{
    res.writeHead(200,{'Context-type':'text/html'});
    const query=url.parse(req.url,true).query;
    let data= "welcome " +query.name ;
    res.write("<h1>"+data +"</h1>");
    res.end();
}).listen(port);
