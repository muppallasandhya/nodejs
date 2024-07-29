//http req
const https = require('https');
https.get('https://jsonplaceholder.typicode.com/todos/',(resp)=>{
    let data ='';
    //a chunk of data has been recieved
    resp.on('data',(chunk)=>{
        data +=chunk;
    });
    //the whole response has been received.print out the result
    resp.on('end',()=>{
        console.log(JSON.parse(data));
        console.log(data);
    });
}).on("error",(err)=>{
    console.log("Error: "+error.message);
});