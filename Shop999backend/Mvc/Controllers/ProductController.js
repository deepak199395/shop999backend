const productModel= require("../Models/ProductSchema")
const createProject=async(req,res)=>{
     try {
       const {ProductNmae,ProductDescription,ProductPrice,ProductImage,ProductCategory} =req.body;
       const product= await  productModel.create({
        ProductNmae,
        ProductDescription,
        ProductPrice,
        ProductImage,
        ProductCategory
    })
       res.status(201).send({message:"Product Created Successfully",product})
     } catch (error) {
        console.log("error in create product",error)
        res.status(500).send({message:"Error in Creating Product"})

     }
}
module.exports = {createProject}