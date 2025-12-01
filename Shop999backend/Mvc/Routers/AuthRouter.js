// CLEAN + NUMBERED API ROUTES (SAFE FOR GOOGLE)

const express = require("express");
const router = express.Router();

/* -------------------- Import Controllers -------------------- */
const { createUserController, getUserController, LoginController, updateUserController, deleteController } = require("../Controllers/OldCoro/AuthController");
const { createProject, getProductsDetails } = require("../Controllers/OldCoro/ProductController");
const { CreateTickets, getTicketInfo } = require("../Controllers/OldCoro/IplTicketsController");
const { createBooking, getBookingControllers } = require("../Controllers/OldCoro/BookingController");
const { createExperience, getExperienceController } = require("../Controllers/OldCoro/ExpeianceControlller");
const { createStackController, getStackController } = require("../Controllers/OldCoro/StackController");
const { createProjectController, getProjectController } = require("../Controllers/OldCoro/ProjectController");
const { CreateMovieController, getMovieDetailsController } = require("../Controllers/OldCoro/MovieController");
const { CreateLiveController, getLiveshowController } = require("../Controllers/OldCoro/LiveshowController");
const { DueLoanController, getLoandeuDetailsController, updateLoanController } = require("../Controllers/OldCoro/LoanDueController");
const BankDetailsController = require("../Controllers/OldCoro/BankDetailsControllers");
const { profileController, getProfileDetailsController } = require("../Controllers/OldCoro/CoroProlifeController");
const { CreateExpessController, getExpessController, updateExpenssController, DeleteExpenssController } = require("../Controllers/OldCoro/expenseController");
const { CreateCoroUser, CorouserregiGet, CorouserregiGetById, CorouserregiUpdate, CorouserregiDelete, coroLoginController } = require("../Controllers/OldCoro/CoroUserController");
const { createExpessDiaryController, getExpessDiaryController } = require("../Controllers/OldCoro/ExpessDiaryController");

const { getEMIdetailsController, Emicontroller } = require("../Controllers/FoxWebController/FoxEmiController");
const { CreateRegiUserController, FoxloginController } = require("../Controllers/FoxWebController/CoroAuthController");
const { ExpenseController, getExpensseController, UpdateExpenssController, DeleteExpensesController } = require("../Controllers/FoxWebController/ExpensesController");
const { CreatNewPinController, getPinController, VerifyPinController } = require("../Controllers/FoxWebController/PinController");
const { DeleteMoodController } = require("../Controllers/RuhiController/AiAwairnesController");

/* -------------------- BASE PREFIX -------------------- */
const API = "/api/v1";

/* -------------------- AUTH APIs (Numbered) -------------------- */
router.post(`${API}/auth/register/api39`, CreateRegiUserController);
router.post(`${API}/auth/login/api40`, FoxloginController);

/* -------------------- PIN APIs -------------------- */
router.post(`${API}/pins/create/api48`, CreatNewPinController);
router.get(`${API}/pins/list/api49`, getPinController);
router.post(`${API}/pins/verify/api50`, VerifyPinController);

/* -------------------- EXPENSE APIs -------------------- */
router.post(`${API}/expenses/create/api43`, ExpenseController);
router.get(`${API}/expenses/list/api44`, getExpensseController);
router.put(`${API}/expenses/update/api46/:id`, UpdateExpenssController);
router.delete(`${API}/expenses/delete/api47/:id`, DeleteExpensesController);

/* -------------------- EMI APIs -------------------- */
router.post(`${API}/emi/create/api41`, Emicontroller);
router.get(`${API}/emi/list/api42`, getEMIdetailsController);

/* -------------------- PROFILE APIs -------------------- */
router.post(`${API}/profile/create/api25`, profileController);
router.get(`${API}/profile/list/api26`, getProfileDetailsController);

/* -------------------- PRODUCTS -------------------- */
router.post(`${API}/products/create/api6`, createProject);
router.get(`${API}/products/list/api7`, getProductsDetails);

/* -------------------- MOVIES -------------------- */
router.post(`${API}/movies/create/api18`, CreateMovieController);
router.get(`${API}/movies/list/api19`, getMovieDetailsController);

/* -------------------- LIVE SHOWS -------------------- */
router.post(`${API}/liveshows/create/api20`, CreateLiveController);
router.get(`${API}/liveshows/list/api21`, getLiveshowController);

/* -------------------- STACK -------------------- */
router.post(`${API}/stacks/create/api14`, createStackController);
router.get(`${API}/stacks/list/api15`, getStackController);

/* -------------------- PROJECTS -------------------- */
router.post(`${API}/projects/create/api16`, createProjectController);
router.get(`${API}/projects/list/api17`, getProjectController);

/* -------------------- LOAN -------------------- */
router.post(`${API}/loans/create/api22`, DueLoanController);
router.get(`${API}/loans/list/api23`, getLoandeuDetailsController);
router.put(`${API}/loans/update/api29/:id`, updateLoanController);

/* -------------------- BANK -------------------- */
router.post(`${API}/bank/create/api24`, BankDetailsController);

/* -------------------- TICKETS -------------------- */
router.post(`${API}/tickets/create/api8`, CreateTickets);
router.get(`${API}/tickets/list/api9`, getTicketInfo);

/* -------------------- BOOKINGS -------------------- */
router.post(`${API}/bookings/create/api10`, createBooking);
router.get(`${API}/bookings/list/api11`, getBookingControllers);

/* -------------------- EXPERIENCES -------------------- */
router.post(`${API}/experiences/create/api12`, createExperience);
router.get(`${API}/experiences/list/api13`, getExperienceController);

/* -------------------- DIARY -------------------- */
router.post(`${API}/diary/create/api37`, createExpessDiaryController);
router.get(`${API}/diary/list/api38`, getExpessDiaryController);

/* -------------------- CORO USERS -------------------- */
router.post(`${API}/coro/users/create/api31`, CreateCoroUser);
router.get(`${API}/coro/users/list/api32`, CorouserregiGet);
router.get(`${API}/coro/users/api33/:id`, CorouserregiGetById);
router.put(`${API}/coro/users/update/api34/:id`, CorouserregiUpdate);
router.delete(`${API}/coro/users/delete/api35/:id`, CorouserregiDelete);
router.post(`${API}/coro/users/login/api36`, coroLoginController);

/* -------------------- MOOD AI -------------------- */
router.post(`${API}/ai/mood/delete/api45`, DeleteMoodController);

module.exports = router;
