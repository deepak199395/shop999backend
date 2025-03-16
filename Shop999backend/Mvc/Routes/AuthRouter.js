const express =require("express");
const { createUserController, getUserController, LoginController } = require("../Controllers/AuthController");
const { createProject } = require("../Controllers/ProductController");

const router=express();


// router GET || POST || PUT || DELETE 

//post
router.post("/create",createUserController)

//get
router.get("/getUser",getUserController)

// LOGIN
router.post("/login",LoginController)

// prodct API routes
router.put("/createprocts",createProject)

module.exports=router;