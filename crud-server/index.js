import express from "express";
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import cors from 'cors'
import {connectDB} from './connectDB.js'
// const connectDB =require('./connectDB')
// const MONGO_URI = 'mongodb+srv://harvey:Aa7730061615@cluster0.aasej.mongodb.net/onlinedb?retryWrites=true&w=majority'
const port = 8000;
const app = express()
app.listen(port,()=>{
    console.log(`listening in the port of ${port}`);
})

// middleware configuration
    // allow every domain to come and access this location
    app.use(cors())
    //ask express to always communicate using json
    app.use(express.json())
    //mount the body parser
    // app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.urlencoded({extended:true}))


// database configuration
const Schema = mongoose.Schema
let ObjectId = Schema.ObjectId;
let heroSchema = new Schema({
                id:ObjectId,
                firstName:String,
                lastName:String,
                power:Number,
                city:String
            })
let Hero = mongoose.model("Hero",heroSchema) //creates an object for it

//invoke the DB connection to check db connection and to create database for the initial time
connectDB()

//Route configurations for CRUD:Create Read Update Delete operations
//create operation
app.post('/getdata',(req,res)=>{
    //create a object of corresponding Model to insert
    console.log('request triggered');
    // console.log(req.body);
    // console.log(req.query);
    // console.log(req.params);
    // res.json(200)
    res.sendStatus(200)
    //now save() it, it returns a promise if it is success.
    /* let hero = new Hero(req.query)
    hero.save()
        .then(()=>res.send({message:"hero added into db"}))
        .catch(err=>console.log(err)) */
})

//Read operation
app.get('/data',(req,res)=>{
    //Model.find({}) returns a promise
    Hero.find({}).then(heros=>{
        // hero = JSON.parse(heros);
        res.json(heros)
    })
    // console.log(hero);
})

// Update operation
app.put('/update',(req,res)=>{

})

// delete operation
app.delete('/delete',(req,res)=>{

})
