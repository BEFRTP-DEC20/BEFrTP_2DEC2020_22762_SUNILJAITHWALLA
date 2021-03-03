var fs = require("fs");
var data =' ';
var readerStream =fs.createReadStream('input.txt');
var writeStream=fs.createWriteStream('output.txt');
readerStream.setEncoding('UTF8');
readerStream.pipe(writeStream);
readerStream.on('data',function(chunk)
{
	data +=chunk;
});
readerStream.on('end',function()
 {
	console.log(data);
});
readerStream.on('error',function(err) 
{
	console.log(err.stack);
});
writeStream.on('data',function(chunk)
{
	data +=chunk;
});
