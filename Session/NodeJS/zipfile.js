var fs=require('fs');
var zlib=require('zlib');
var gzip=zlib.createGzip();
var rstream=fs.createReadStream('input.txt');
var wstream=fs.createWriteStream('output.txt.gz');
rstream
.pipe(gzip)
.pipe(wstream)
.on('finish',function()
{
    console.log('done compressing')
}
);