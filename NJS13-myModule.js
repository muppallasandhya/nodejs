//req http module
var http = require('http');
//require custom module
var dt = require('./Mymodule.js');
//create an http server
http.createServer(function(req,res){
    //set response header
    res.writeHead(200,{'content-type': 'text/html'});
    //use the custom module to get the date and time
    res.write("the date and time is currently: "+dt.myDateTime());
    //end the response
    res.end();
}).listen(8000); //server listens on port 8000
