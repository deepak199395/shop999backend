const express =require("express");
const { createUserController, getUserController, editUserController, LoginController } = require("../Controllers/AuthController");

const router=express();


// router GET || POST || PUT || DELETE 

//post
router.post("/create",createUserController)

//get
router.get("/getUser",getUserController)

// LOGIN
router.post("/login",LoginController)



module.exports=router;