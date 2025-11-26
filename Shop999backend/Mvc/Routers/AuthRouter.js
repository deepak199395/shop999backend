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
} = require("../Controllers/OldCoro/AuthController");

const { createProject, getProductsDetails } = require("../Controllers/OldCoro/ProductController");
const { CreateTickets, getTicketInfo } = require("../Controllers/OldCoro/IplTicketsController");
const { createBooking, getBookingControllers } = require("../Controllers/OldCoro/BookingController");
const { createExperience, getExperienceController } = require("../Controllers/OldCoro/ExpeianceControlller");
const { createStackController, getStackController } = require("../Controllers/OldCoro/StackController");
const { createProjectController, getProjectController } = require("../Controllers/OldCoro/ProjectController");
const { CreateMovieController, getMovieDetailsController } = require("../Controllers/OldCoro/MovieController");
const { CreateLiveController, getLiveshowController } = require("../Controllers/OldCoro/LiveshowController");
const { requireSignIn } = require("../../MiddleWere/authMiddleware");
const {DueLoanController, getLoandeuDetailsController, updateLoanController} = require("../Controllers/OldCoro/LoanDueController");
const BankDetailsController = require("../Controllers/OldCoro/BankDetailsControllers");
const { profileController, getProfileDetailsController } = require("../Controllers/OldCoro/CoroProlifeController");
const { CreateExpessController, getExpessController, updateExpenssController, DeleteExpenssController } = require("../Controllers/OldCoro/expenseController");
const { CreateCoroUser, CorouserregiGet, CorouserregiGetById, CorouserregiUpdate, CorouserregiDelete,coroLoginController } = require("../Controllers/OldCoro/CoroUserController");
const { createExpessDiaryController, getExpessDiaryController } = require("../Controllers/OldCoro/ExpessDiaryController");
const { getEMIdetailsController, Emicontroller } = require("../Controllers/FoxWebController/FoxEmiController");
const { CreateRegiUserController, FoxloginController } = require("../Controllers/FoxWebController/CoroAuthController");
const { ExpenseController, getExpensseController, UpdateExpenssController, DeleteExpensesController } = require("../Controllers/FoxWebController/ExpensesController");
const { DeleteMoodController } = require("../Controllers/RuhiController/AiAwairnesController");
const {CreatNewPinController, getPinController, VerifyPinController}= require("../Controllers/FoxWebController/PinController")
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
const PROFILE_API_PREFIX="/api/v1/profileDetails";
const GETPROFILE_API_PREFIX= "/api/v1/getProfile";
const EXPRESS_API_PREFIX = "/api/v1/createEexpess";
const GET_EXPRESS_API_PREFIX = "/api/v1/getExpress";
const PUT_EXPENSESS_API_PRIFIX="/api/v1/putexpensess";
const PUT_EXPENSEE_API_PRIFIX = "/api/v1/putDeallyExpess";
const DELETE_EXPENSEE_API_PRIFIX = "/api/v1/deleteDeallyExpess";
const LOGIN_CORO_USER="/api/v1/LogincoroUser";
const CREATE_EXPRESS_DIARY_API_PREFIX = "/api/v1/createExpessDiary";
const GET_EXPRESS_DIARY_API_PREFIX = "/api/v1/getExpessDiary";
const AUTH_USER_REGISTER="/api/vi/coroCreateUser";
const AUTH_USER_LOGIN = "/api/v1/foxuserLogin";
const AUTH_EMI_DATABASE= "/api/v1/foxEMI";
const AUTH_EMI_GET_DETAILS="/api/v1/foremi-details";
const DAILT_EXPENSE_DETAILS="/api/v1/expensse-deails";
const GET_DAILY_EXPENSE= "/api/v1/expess-deatils";
const DEL_MOOD_RUHI="/api/v1/ai/mood-detect";
const UPDATE_DAILY_EXPENSES="/api/v1/update-daily-apenses";
const DELETE_DAILY_EXPENSES= "/api/v1/delete-daily-expense";
const CORO_CREATEPIN="/api/v1/create-new-pin";
const COR0_GETPIN= "/api/v1/get-pin";
const CORO_VERIFY_PIN="/api/v1/verify-exixtingPin"
// ==========================coro user ===================================
const CREATE_CORO_USER_API_PREFIX = "/api/v1/createcoroUser";
const GET_CORO_USER_API_PREFIX= "/api/v1/getcoroUser";
const GET_BYID_CORO_USER_API_PREFIX="/api/v1/getCoroUserById";
const UPDATE_CORO_USER_API_PREFIX= "/api/v1/updatecoroUserById";
const DELETE_CORO_USER_API_PREFIX= "/api/v1/deletecoroUserById";
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
router.put(`${PUT_EXPENSESS_API_PRIFIX}/put-expensess/api29/:id`,updateLoanController);

//========================== CORO BankDatails=============================
router.post(`${BANK_API_PREFIX}/Create-BankDetails/api24`,BankDetailsController);

//========================== CORO PROFILE Details=============================
router.post(`${PROFILE_API_PREFIX}/Create-Profile/api25`,profileController);
router.get(`${GETPROFILE_API_PREFIX}/get-profile/api26`,getProfileDetailsController);

//========================== CORO expesss=============================
router.post(`${EXPRESS_API_PREFIX}/Create-Express/api27`,CreateExpessController);
router.get(`${GET_EXPRESS_API_PREFIX}/get-Express/api28`,getExpessController);
router.put(`${PUT_EXPENSEE_API_PRIFIX}/put-dellyExpensess/api29/:id`,updateExpenssController);
router.delete(`${DELETE_EXPENSEE_API_PRIFIX}/put-dellyExpenses/api30/:id`,DeleteExpenssController);

// ==========================coro user ===================================
router.post(`${CREATE_CORO_USER_API_PREFIX}/Create-CoroUser/api31`,CreateCoroUser);
router.get(`${GET_CORO_USER_API_PREFIX}/get-CoroUser/api32`,CorouserregiGet)
router.get(`${GET_BYID_CORO_USER_API_PREFIX}/get-CoroUserById/api33/:id`,CorouserregiGetById)
router.put(`${UPDATE_CORO_USER_API_PREFIX}/update-CoroUserById/api34/:id`,CorouserregiUpdate)
router.delete(`${DELETE_CORO_USER_API_PREFIX}/delete-CoroUserById/api35/:id`,CorouserregiDelete)
router.post(`${LOGIN_CORO_USER}/login-coroUser/api36`,coroLoginController)

//===========================exprensee Diray ===========================
router.post(`${CREATE_EXPRESS_DIARY_API_PREFIX}/expess-diry/api37`,createExpessDiaryController);
router.get(`${GET_EXPRESS_DIARY_API_PREFIX}/get-expess-diry/api38`,getExpessDiaryController);

//=============================coro website ============================//
//===AUTH===>
router.post(`${AUTH_USER_REGISTER}/create-coro/api39`,CreateRegiUserController)
router.post (`${AUTH_USER_LOGIN}/foxuser-corologin/api40`,FoxloginController)
//===>EMI===>
router.post(`${AUTH_EMI_DATABASE}/FOX-EMI/api41`,Emicontroller)
router.get(`${AUTH_EMI_GET_DETAILS}/FOX-EMI/api42`,getEMIdetailsController)

//===DailyExpense===>
router.post(`${DAILT_EXPENSE_DETAILS}/fox-expenses/api43`,ExpenseController)
router.get(`${GET_DAILY_EXPENSE}/fox-getExpensse/api44`,getExpensseController)
router.post(`${UPDATE_DAILY_EXPENSES}/daily-exp-privete-api/api46/:id`,UpdateExpenssController)
router.post(`${DELETE_DAILY_EXPENSES}/daily-exp-privete-api/api47/:id`,DeleteExpensesController)
// === RUHI API===>
router.post(`${DEL_MOOD_RUHI}/deleteMood-AI-MOOD-DETECTION/api45`,DeleteMoodController)
// == pin==== >
router.post(`${CORO_CREATEPIN}/create/create-pin/api48`,CreatNewPinController)
router.get(`${COR0_GETPIN}/create/get-pin/api49`,getPinController)
router.post(`${CORO_VERIFY_PIN}/verify/exixtingPin/api50`,VerifyPinController)
module.exports = router;
