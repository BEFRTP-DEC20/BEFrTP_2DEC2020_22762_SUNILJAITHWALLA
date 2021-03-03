const http=require('http');
const fs=require('fs');
const port=3000;
const server=http.createServer((req,res)=>
{
    fs.readFile('index.html',(err,data)=>
    {
        if(err)
        throw new Error();
        else
        {
            res.writeHead(200,{'Context-type':'text/html'});
          res.write(data.toString());
        }
        res.end();
    })
}).listen(port);
server.on('listenong',()=>
{
    console.log('listening..' +port)
});