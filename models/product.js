const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : [true , " Name is required"]
    },
    price :{
        type:Number,
        required: [true , "Price is required"]
    },
    featured : {
        type:Boolean,
        default: false
    },
    rating :{
        type:Number,
        default: 4.5

    },
    createdAt:{
        type : Date,
        default : Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea', 'liddy', 'caressa', 'marcos'], //only these values are allowed
            message:'{VALUE} is not supported'
        },
    }
    
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product