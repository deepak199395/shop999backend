const express = require("express");
const { createUserController,
    getUserController,
    LoginController,
    updateUserController,
    deleteController } = require("../Controllers/AuthController");
const { createProject,
    getProductsDetails } = require("../Controllers/ProductController");
const router = express();
// router GET || POST || PUT || DELETE 
//users
router.post("/create", createUserController)
router.get("/getUser", getUserController)
router.post("/login", LoginController)
router.put("/update/:id", updateUserController)
router.delete("/delete/:id",deleteController)
//prodcts
router.post("/CreateProducts", createProject)
router.get("/getProducts", getProductsDetails)
module.exports = router;