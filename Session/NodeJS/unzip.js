var fs=require('fs');
var zlib=require('zlib');
var gzip=zlib.createGunzip();
var rstream=fs.createReadStream('output.txt.gz');
var wstream=fs.createWriteStream('unzippedfile.txt');
rstream
.pipe(gzip)
.pipe(wstream)
.on('finish',function()
{
    console.log('done de-compressing')
}
);