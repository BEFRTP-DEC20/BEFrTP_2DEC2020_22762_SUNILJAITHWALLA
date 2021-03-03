const fs = require('fs');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var result = [];
var letter;
const http = require('http');

fs.readFile('unzippedfile.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    else {

        rl.question("Enter character ? ", function(ch) {
            letter = ch;
            var str = data.toString().split(' ');
            for(var i = 0; i < str.length; i++) {

            if(str[i].startsWith(ch)) {
               result.push(str[i]);
            }
        }
       });
       
    }
})

http.createServer((req, res) => {
    res.writeHead(200, {'context-type': 'text/html'});
    
    res.write('<html><h3>Words starting with <i>'+ letter+'</i> are: </h3><br><p>'+result+'</p></html>');
    res.end();
}, console.log('Server is running! ')).listen(8080);