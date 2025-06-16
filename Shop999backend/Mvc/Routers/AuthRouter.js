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
const {DueLoanController, getLoandeuDetailsController} = require("../Controllers/LoanDueController");
const BankDetailsController = require("../Controllers/BankDetailsControllers");
const { profileController, getProfileDetailsController } = require("../Controllers/CoroProlifeController");
const { createExpense } = require("../Controllers/expenseController");
const CreateExpessController = require("../Controllers/expenseController");

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
const LOAN_API_PREFIX = "/api/v1/loans";
const BANK_API_PREFIX = "/api/v1/bankdetails";
const PROFILE_API_PREFIX="/api/v1/profileDetails"
const GETPROFILE_API_PREFIX= "/api/v1/getProfile"
const EXPRESS_API_PREFIX = "/api/v1/createEexpess"
//const GET_EXPRESS_API_PREFIX = "/api/v1/getExpress"

// ====================== Auth Routes ========================================
router.post(`${AUTH_API_PREFIX}/Create-User/api1`,createUserController);
router.get(`${AUTH_API_PREFIX}/GetUser-list/api2`, requireSignIn,getUserController);
router.post(`${AUTH_API_PREFIX}/Login-User/api3`,LoginController);
router.put(`${AUTH_API_PREFIX}/Update-User/api4/:id`, updateUserController);
router.delete(`${AUTH_API_PREFIX}/Delete-User/api5/:id`, deleteController);

// ====================== Product Routes ======================================
router.post(`${PRODUCT_API_PREFIX}/Create-Products/api6`, createProject);
router.get(`${PRODUCT_API_PREFIX}/GetProducts-list/api7`, getProductsDetails);

// ====================== IPL Ticket Routes ======================
router.post(`${TICKET_API_PREFIX}/Create-IPLTickets/api8`, CreateTickets);
router.get(`${TICKET_API_PREFIX}/GetIPLTickets-list/api9`, getTicketInfo);

// ====================== Booking Routes ======================
router.post(`${BOOKING_API_PREFIX}/Create-Booking/api10`, createBooking);
router.get(`${BOOKING_API_PREFIX}/Get-Booking-list/api11`, getBookingControllers);

// ====================== Experience Routes ======================
router.post(`${EXPERIENCE_API_PREFIX}/Create-Experience/api12`, createExperience);
router.get(`${EXPERIENCE_API_PREFIX}/GetExperience-list/api13`, getExperienceController);

// ====================== Stack Routes ======================
router.post(`${STACK_API_PREFIX}/Create-TeachStack/api14`, createStackController);
router.get(`${STACK_API_PREFIX}/GetTeachStack-list/api15`, getStackController);

// ====================== Project Routes ======================
router.post(`${PROJECT_API_PREFIX}/Create-Projects/api16`, createProjectController);
router.get(`${PROJECT_API_PREFIX}/GetProjects-list/api17`, getProjectController);

// ====================== Movie Routes ======================
router.post(`${MOVIE_API_PREFIX}/Create-MovieInfo/api18`, CreateMovieController);
router.get(`${MOVIE_API_PREFIX}/GetMovieInfo-list/api19`, getMovieDetailsController);

// ====================== Live Show Routes ======================
router.post(`${LIVESHOW_API_PREFIX}/Create-LiveShow/api20`, CreateLiveController);
router.get(`${LIVESHOW_API_PREFIX}/GetLiveShow-list/api21`, getLiveshowController);

// ======================= CORO LoanDue ===============================
router.post(`${LOAN_API_PREFIX}/Create-LoanDue/api22`,DueLoanController);
router.get(`${LOAN_API_PREFIX}/GetLoanDue-list/api23`,getLoandeuDetailsController);

//========================== CORO BankDatails=============================
router.post(`${BANK_API_PREFIX}/Create-BankDetails/api24`,BankDetailsController);

//========================== CORO PROFILE Details=============================
router.post(`${PROFILE_API_PREFIX}/Create-Profile/api25`,profileController)
router.get(`${GETPROFILE_API_PREFIX}/get-profile/api26`,getProfileDetailsController)

//========================== CORO expesss=============================
router.post(`${EXPRESS_API_PREFIX}/Create-Express/api27`,CreateExpessController)
//router.get(`${GET_EXPRESS_API_PREFIX}/get-Express/api28`,createExpense)


module.exports = router;
