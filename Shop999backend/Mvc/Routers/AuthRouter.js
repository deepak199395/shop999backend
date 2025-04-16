const express = require("express");
const { createUserController,getUserController, LoginController,updateUserController,deleteController } = require("../Controllers/AuthController");
const { createProject, getProductsDetails } = require("../Controllers/ProductController");
const { CreateTickets, getTicketInfo } = require("../Controllers/IplTicketsController");
const { createBooking, getBookingControllers } = require("../Controllers/BookingController");
const { createExperience, getExperienceController } = require("../Controllers/ExpeianceControlller");
const { createStackController, getStackController } = require("../Controllers/StackController");
const { createProjectController, getProjectController } = require("../Controllers/ProjectController");
const { CreateMovieController, getMovieDetailsController } = require("../Controllers/MovieController");
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
router.post("/Booking",createBooking)
router.get("/getBooking",getBookingControllers)

// experince api 
router.post('/experince',createExperience)
router.get('/getexperincedetails',getExperienceController)

// stack api
router.post('/cratestack',createStackController)
router.get('/getstack',getStackController)

// projects api
router.post('/createproject',createProjectController)
router.get('/getProjectDetails',getProjectController)


// Movie API 
router.post('/createMovie/Api',CreateMovieController)
router.get('/getMovie/Api',getMovieDetailsController)
module.exports = router; 






