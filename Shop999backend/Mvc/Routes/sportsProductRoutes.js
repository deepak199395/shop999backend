const express = require("express");
const router = express.Router();
const sportsProductController= require("../Controllers/sportsProductController")
// Define routes
router.post("/create",sportsProductController.createProduct)
router.get("/getProductsDetails/:id",sportsProductController.getProductDetails)
router.get('/allproductlist',sportsProductController.getAllProducts)
module.exports = router;
