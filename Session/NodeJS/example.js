const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>
{
fs.readFile("example.html", function (err, data) {
    if (err) throw err;
    else
        {
            res.writeHead(200,{'Context-type':'text/html'});
          res.write(data.toString());
          (data.indexOf('search string') >= 0)
            console.log(data)
           
        }
  
  });
}).listen(8000);
$file = file_get_contents("example.txt");
if (!strpos($file, "search string")) {
    echo "String not found!";
} else {
    echo "String found!";
}
