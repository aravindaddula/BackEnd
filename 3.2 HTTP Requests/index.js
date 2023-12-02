import express from "express"
const app=express()

app.listen(3000,()=>{
    console.log("Server listening at 3000")
})

app.get('/',(req,res)=>{
    res.send("<h1>Test</h1>")
})

/* /about Endpoint */
app.put('/about',(req,res)=>{
    res.sendStatus("<h1>About Page</h1>")
})