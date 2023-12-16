import express from 'express'
import mongoose from 'mongoose'
// mongodb+srv://harvey:Aa7730061615@cluster0.aasej.mongodb.net/onlinedb?retryWrites=true&w=majority

const MONGO_URI = 'mongodb+srv://harvey:Aa7730061615@cluster0.aasej.mongodb.net/onlinedb?retryWrites=true&w=majority'
//middleware configuration
const app = express()
app.use(express.json())

// Connect mongo db
 const connectDB = async ()=>{
    try{
       const conn = await mongoose.connect(MONGO_URI)
        console.log(`****** Connected to DB ${conn.connection.host} ******`);
    }
    catch(err){
        console.log(err);
    }
}
// connectToDB()

export {connectDB} //named export
//export default connectDB //default export

/* mongoose.connect(MONGO_URI)
        .then(() =>console.log('DB Connected'))
        .catch(err =>console.log('The error is --> ',err))
 */