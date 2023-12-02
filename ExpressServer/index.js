// "type": "module", //Upgrade the project to use ES6 Syntax

import express from "express"
const app=express()

// display text at the root folder of site
/*
app.get("/",(req,res)=>{
    res.send("Hello World");
 })
 */

// serve html File
app.get("/",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html')
})


app.listen(8000,()=>{
    console.log("server is listening at 8000 port");
})


// console.log(typeof app);