const myhttp = require("http");
const server = myhttp.createServer((req,res)=>{
    res.end("hello from server side :SANDY");
})
server.listen(9000,"127.0.0.1", ()=>{
    console.log("listening on port 9000:SANDY")
})