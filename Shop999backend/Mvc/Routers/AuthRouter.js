const express = require("express");
const { createUserController,
    getUserController,
    LoginController,
    updateUserController,
    deleteController } = require("../Controllers/AuthController");
const { createProject,
    getProductsDetails } = require("../Controllers/ProductController");
const { CreateTickets, getTicketInfo } = require("../Controllers/IplTicketsController");
const createBooking = require("../Controllers/BookingController");
const router = express.Router();
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
// ipl tickets api
router.post("/createTickets",CreateTickets)
router.get('/getticketsinfo',getTicketInfo)

// Booking api
router.post("/createBooking",createBooking)
module.exports = router;  






