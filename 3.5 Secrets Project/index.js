//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


// when password==ILoveProgramming then sendFile Secret.html

import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
const __dirname =path.resolve()

const app = express()
const port = 3000;

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.use(bodyParser.urlencoded({extended:true}))


    // let passwd=req.body.password
    // console.log(passwd);
// you can build custom middleware to authorize user password

app.post('/check',(req,res)=>{
    let passwd=req.body.password
    console.log(passwd);

    if (passwd==='ILoveProgramming'){
        res.sendFile(__dirname + '/public/secret.html')
    }else{
        res.sendFile(__dirname + '/public/index.html')
        // res.redirect('/')
    }

})