require('dotenv').config()
//async errors

const express = require('express')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler.js')
const connectDB = require('./db/connect')

const app = express()

//middleware
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({msg:"this is sucessful"})
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT , ()=>{
            console.log("Connected");
        })
        
    } catch (error) {
        console.log(error);   
    }
}

start()