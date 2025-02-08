const getAllProducts = async(req,res)=>{
    res.send("get all producst")
}

const getProduct = async(req,res)=>{
    res.send("get product")
}
module.exports = {
    getAllProducts ,
    getProduct
}