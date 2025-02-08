require('dotenv').config()
//async errors
require('express-async-errors')

const express = require('express')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler.js')
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

const app = express()

//middleware
app.use(express.json())

app.use('/api/v1/products' , productRouter)

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