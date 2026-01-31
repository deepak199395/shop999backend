const Product = require("../../MongoModels/ShrigarModel/ProductModel.js")
const CreateProductController = async(req,res)=>{
    try {
        const {collectionName,ProductNmae,image,price,originalPrice,description,discountPercentage,inStock}=req.body;
        const newProduct = await Product.create({
            collectionName,
            ProductNmae,
            image,
            price,
            originalPrice,
            description,
            discountPercentage,
            inStock
        })
       res.status(201).json({
        message:"Product created successfully",
        success: true,
        flage:"Y",
        newProduct
       })
    } catch (error) {
        res.status(500).json({
            message:"Error creating product",
            success: false,
            flage:"N",
            error:error.message
        })
    }
}
const getProductController=async(req,res)=>{
    try {
        const product= await Product.find()
        res.status(200).json({
            message:"Product retrieved successfully",
            success: true,
            flage:"Y",
            product
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Error retrieving product",
            success: false,
            flage:"N",
            error:error.message
        })
        
    }
}

module.exports={CreateProductController,getProductController}