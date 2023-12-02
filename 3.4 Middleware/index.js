import express from 'express'
const app=express()
import path from 'path'
const __dirname = path.resolve()
// console.log('Pth is ',__dirname)

app.listen(3000,()=>{
    console.log("running in 3000 port");
})
//what to do when server get get request
app.get("/",(req,res)=>{
    // console.log(req);//will logs too much information to understand
    console.log(req.rawHeaders);//logs only headers
})


app.get("/",(req,res)=>{
    // send this html file as response
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/",(req,res)=>{
    
})


//what to do when server get post request



//what to do when server get put request


//what to do when server get patch request


//what to do when server get delete request
