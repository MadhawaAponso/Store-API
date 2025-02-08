const Product = require('../models/product')
const getAllProducts = async(req,res)=>{
    const {featured,company ,name} = req.query
    const queryObj = {}
    if (featured){
        queryObj.featured =featured=== 'true' ? true : false
    }
    if(company){
        queryObj.company = company
    }
    if(name){
        queryObj.name = name
    }
    const products = await Product.find(queryObj)
    res.status(200).json({products , nbHits : products.length})
}

const getProduct = async(req,res)=>{
    
}
module.exports = {
    getAllProducts ,
    getProduct
}