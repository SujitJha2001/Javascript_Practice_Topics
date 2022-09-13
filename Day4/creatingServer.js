http = require("http");

http.createServer((req,res)=>{
    res.end("Hello Sujit");
}).listen(8087)