require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./models/product')
const jsonProducts = require('./products.json')

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        console.log("success")
        await Product.deleteMany() // delete all the products in the product
        await Product.create(jsonProducts)
        console.log("Saved");
    } catch (error) {
        
    }

}
start()