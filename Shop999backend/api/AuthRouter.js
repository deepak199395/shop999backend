const express = require("express");
const { createUserController,
    getUserController,
    LoginController,
    updateUserController,
    deleteController } = require("../Mvc/Controllers/AuthController");
const { createProject,
    getProductsDetails } = require("../Mvc/Controllers/ProductController");
const { CreateTickets, getTicketInfo } = require("../Mvc/Controllers/IplTicketsController");
const { CreateBooking, getBookingDetails } = require("../Mvc/Controllers/BookingController");
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
// ipl tickets api
router.post("/createTickets",CreateTickets)
router.get('/getticketsinfo',getTicketInfo)

// tickeBooking api
router.post('/createBooking',CreateBooking)
router.get('/getBookingDetails',getBookingDetails)





