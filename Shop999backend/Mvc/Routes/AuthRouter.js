const express =require("express");
const { createUserController, getUserController, LoginController } = require("../Controllers/AuthController");
const { createProject, getProductsDetails } = require("../Controllers/ProductController");
const router=express();
// router GET || POST || PUT || DELETE 
//post
router.post("/create",createUserController)
//get
router.get("/getUser",getUserController)
// LOGIN
router.post("/login",LoginController)
// prodct API routes
router.post("/CreateProducts",createProject)
// get products details api 
router.get("/getProducts",getProductsDetails)
module.exports=router;