const express = require("express");
const router = express.Router();
const app = express()
// Import Controllers
const { 
  createUserController, 
  getUserController, 
  LoginController, 
  updateUserController, 
  deleteController 
} = require("../Controllers/AuthController");

const { createProject, getProductsDetails } = require("../Controllers/ProductController");
const { CreateTickets, getTicketInfo } = require("../Controllers/IplTicketsController");
const { createBooking, getBookingControllers } = require("../Controllers/BookingController");
const { createExperience, getExperienceController } = require("../Controllers/ExpeianceControlller");
const { createStackController, getStackController } = require("../Controllers/StackController");
const { createProjectController, getProjectController } = require("../Controllers/ProjectController");
const { CreateMovieController, getMovieDetailsController } = require("../Controllers/MovieController");
const { CreateLiveController, getLiveshowController } = require("../Controllers/LiveshowController");
const { requireSignIn } = require("../../MiddleWere/authMiddleware");

// API Prefixes
const AUTH_API_PREFIX = "/api/v1/auth";
const PRODUCT_API_PREFIX = "/api/v1/products";
const TICKET_API_PREFIX = "/api/v1/tickets";
const BOOKING_API_PREFIX = "/api/v1/bookings";
const EXPERIENCE_API_PREFIX = "/api/v1/experiences";
const STACK_API_PREFIX = "/api/v1/stacks";
const PROJECT_API_PREFIX = "/api/v1/projects";
const MOVIE_API_PREFIX = "/api/v1/movies";
const LIVESHOW_API_PREFIX = "/api/v1/liveshows";

// ====================== Auth Routes ========================================
router.post(`${AUTH_API_PREFIX}/Create-User/api1`,requireSignIn, createUserController);
router.get(`${AUTH_API_PREFIX}/GetUser-list/api2`, getUserController);
router.post(`${AUTH_API_PREFIX}/Login-User/api3`,LoginController);
router.put(`${AUTH_API_PREFIX}/Update-User/api4/:id`, updateUserController);
router.delete(`${AUTH_API_PREFIX}/Delete-User/api5/:id`, deleteController);

// ====================== Product Routes ======================================
router.post(`${PRODUCT_API_PREFIX}/Create-Products/api6`, createProject);
router.get(`${PRODUCT_API_PREFIX}/GetProducts-list/api7`, getProductsDetails);

// ====================== IPL Ticket Routes ======================
router.post(`${TICKET_API_PREFIX}/Create-IPLTickets/api8`,requireSignIn, CreateTickets);
router.get(`${TICKET_API_PREFIX}/GetIPLTickets-list/api9`, getTicketInfo);

// ====================== Booking Routes ======================
router.post(`${BOOKING_API_PREFIX}/Create-Booking/api10`,requireSignIn, createBooking);
router.get(`${BOOKING_API_PREFIX}/Get-Booking-list/api11`, getBookingControllers);

// ====================== Experience Routes ======================
router.post(`${EXPERIENCE_API_PREFIX}/Create-Experience/api12`,requireSignIn, createExperience);
router.get(`${EXPERIENCE_API_PREFIX}/GetExperience-list/api13`, getExperienceController);

// ====================== Stack Routes ======================
router.post(`${STACK_API_PREFIX}/Create-TeachStack/api14`,requireSignIn, createStackController);
router.get(`${STACK_API_PREFIX}/GetTeachStack-list/api15`, getStackController);

// ====================== Project Routes ======================
router.post(`${PROJECT_API_PREFIX}/Create-Projects/api16`,requireSignIn, createProjectController);
router.get(`${PROJECT_API_PREFIX}/GetProjects-list/api17`, getProjectController);

// ====================== Movie Routes ======================
router.post(`${MOVIE_API_PREFIX}/Create-MovieInfo/api18`,requireSignIn, CreateMovieController);
router.get(`${MOVIE_API_PREFIX}/GetMovieInfo-list/api19`, getMovieDetailsController);

// ====================== Live Show Routes ======================
router.post(`${LIVESHOW_API_PREFIX}/Create-LiveShow/api20`,requireSignIn, CreateLiveController);
router.get(`${LIVESHOW_API_PREFIX}/GetLiveShow-list/api21`, getLiveshowController);

module.exports = router;
