const fs=require("fs")
const biodata = {
    name : "sandhya",
    age : 20,
    skill : "node.js programmer"
}
console.log(biodata);
const jsonData = JSON.stringify(biodata);
fs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("process completed....");
})
fs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data);
})