const { log } = require("console")
// const fs = require ("fs")
import fs from "fs"
// var fs=fs()
// fs.readFile("message.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.log(err);        
//     }else{
//         console.log(data);
//     }
// })

fs.writeFile("message2.txt","Hello from Aravind",(err)=>{
    if (err) throw err
    console.log("success");
})