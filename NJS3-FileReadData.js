const myfs=require("fs");
const mybuf_data=myfs.readFileSync("mydata.txt");
console.log(mybuf_data);

