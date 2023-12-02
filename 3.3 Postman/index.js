import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************
app.listen(port,()=>{
    console.log(`Server is listening in port ${port}`);
})

app.get("/",(req,res)=>{
    // res.sendStatus(200)
    res.send("<h1>Home Page</h1>")
})
//response is 201-'Created' from postman while browser hit thid endpont
app.post("/login",(req,res)=>{
    res.sendStatus(201)
})

//response is 'OK' from postman while browser hit thid endpont
app.put("/upload",(req,res)=>{
    res.sendStatus(200)
})

//response is 'OK' from postman while browser hit thid endpont
app.patch("/update",(req,res)=>{
    res.sendStatus(200)
})

//response is 'OK' from postman while browser hit thid endpont
app.delete("/upload/file1",(req,res)=>{
    res.sendStatus(200)
})