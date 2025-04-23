const express = require("express");
const router = express.Router();

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

// ====================== Auth Routes ======================
router.post(`${AUTH_API_PREFIX}/create`, createUserController);
router.get(`${AUTH_API_PREFIX}/list`, getUserController);
router.post(`${AUTH_API_PREFIX}/login`, LoginController);
router.put(`${AUTH_API_PREFIX}/update/:id`, updateUserController);
router.delete(`${AUTH_API_PREFIX}/delete/:id`, deleteController);

// ====================== Product Routes ======================
router.post(`${PRODUCT_API_PREFIX}/create`, createProject);
router.get(`${PRODUCT_API_PREFIX}/list`, getProductsDetails);

// ====================== IPL Ticket Routes ======================
router.post(`${TICKET_API_PREFIX}/create`, CreateTickets);
router.get(`${TICKET_API_PREFIX}/list`, getTicketInfo);

// ====================== Booking Routes ======================
router.post(`${BOOKING_API_PREFIX}/create`, createBooking);
router.get(`${BOOKING_API_PREFIX}/list`, getBookingControllers);

// ====================== Experience Routes ======================
router.post(`${EXPERIENCE_API_PREFIX}/create`, createExperience);
router.get(`${EXPERIENCE_API_PREFIX}/list`, getExperienceController);

// ====================== Stack Routes ======================
router.post(`${STACK_API_PREFIX}/create`, createStackController);
router.get(`${STACK_API_PREFIX}/list`, getStackController);

// ====================== Project Routes ======================
router.post(`${PROJECT_API_PREFIX}/create`, createProjectController);
router.get(`${PROJECT_API_PREFIX}/list`, getProjectController);

// ====================== Movie Routes ======================
router.post(`${MOVIE_API_PREFIX}/create`, CreateMovieController);
router.get(`${MOVIE_API_PREFIX}/list`, getMovieDetailsController);

// ====================== Live Show Routes ======================
router.post(`${LIVESHOW_API_PREFIX}/create`, CreateLiveController);
router.get(`${LIVESHOW_API_PREFIX}/list`, getLiveshowController);

module.exports = router;
