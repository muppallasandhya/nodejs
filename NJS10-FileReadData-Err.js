const fs=require("fs");
fs.readFile('myNewData.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
});