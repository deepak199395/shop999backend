// ================= CLEAN + COMPLETE ROUTER FILE (ALL APIS INCLUDED) =================

const express = require("express");
const router = express.Router();

/* -------------------- OLD CORO CONTROLLERS -------------------- */

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
const { DueLoanController, getLoandeuDetailsController, updateLoanController } = require("../Controllers/OldCoro/LoanDueController");
const BankDetailsController = require("../Controllers/OldCoro/BankDetailsControllers");
const { profileController, getProfileDetailsController } = require("../Controllers/OldCoro/CoroProlifeController");
const { CreateExpessController, getExpessController, updateExpenssController, DeleteExpenssController } = require("../Controllers/OldCoro/expenseController");
const { CreateCoroUser, CorouserregiGet, CorouserregiGetById, CorouserregiUpdate, CorouserregiDelete, coroLoginController } = require("../Controllers/OldCoro/CoroUserController");
const { createExpessDiaryController, getExpessDiaryController } = require("../Controllers/OldCoro/ExpessDiaryController");

/* -------------------- FOX WEB CONTROLLERS -------------------- */

const { getEMIdetailsController, Emicontroller } = require("../Controllers/FoxWebController/FoxEmiController");
const { CreateRegiUserController, FoxloginController } = require("../Controllers/FoxWebController/CoroAuthController");
const { ExpenseController, getExpensseController, UpdateExpenssController, DeleteExpensesController } = require("../Controllers/FoxWebController/ExpensesController");
const { CreatNewPinController, getPinController, VerifyPinController } = require("../Controllers/FoxWebController/PinController");
const { DeleteMoodController } = require("../Controllers/RuhiController/AiAwairnesController");

/* -------------------- BASE PREFIX -------------------- */

const API = "/api/v1";

/* ============================================================================ */
/*                                CLEAN ROUTES                                 */
/* ============================================================================ */

/* -------------------- AUTH (api39, api40, api36) -------------------- */

router.post(`${API}/auth/register/api39`, CreateRegiUserController);
router.post(`${API}/auth/login/api40`, FoxloginController);

router.post(`${API}/auth/coro-user/login/api36`, coroLoginController);

/* -------------------- USERS (api1 - api5) -------------------- */

router.post(`${API}/users/create/api1`, createUserController);
router.get(`${API}/users/list/api2`, getUserController);
router.post(`${API}/users/login/api3`, LoginController);
router.put(`${API}/users/update/api4/:id`, updateUserController);
router.delete(`${API}/users/delete/api5/:id`, deleteController);

/* -------------------- PROJECTS (api6, api7, api16, api17) -------------------- */

router.post(`${API}/products/create/api6`, createProject);
router.get(`${API}/products/list/api7`, getProductsDetails);

router.post(`${API}/projects/create/api16`, createProjectController);
router.get(`${API}/projects/list/api17`, getProjectController);

/* -------------------- IPL TICKETS (api8, api9) -------------------- */

router.post(`${API}/tickets/create/api8`, CreateTickets);
router.get(`${API}/tickets/list/api9`, getTicketInfo);

/* -------------------- BOOKINGS (api10, api11) -------------------- */

router.post(`${API}/bookings/create/api10`, createBooking);
router.get(`${API}/bookings/list/api11`, getBookingControllers);

/* -------------------- EXPERIENCE (api12, api13) -------------------- */

router.post(`${API}/experiences/create/api12`, createExperience);
router.get(`${API}/experiences/list/api13`, getExperienceController);

/* -------------------- STACK (api14, api15) -------------------- */

router.post(`${API}/stacks/create/api14`, createStackController);
router.get(`${API}/stacks/list/api15`, getStackController);

/* -------------------- MOVIES (api18, api19) -------------------- */

router.post(`${API}/movies/create/api18`, CreateMovieController);
router.get(`${API}/movies/list/api19`, getMovieDetailsController);

/* -------------------- LIVE SHOWS (api20, api21) -------------------- */

router.post(`${API}/liveshows/create/api20`, CreateLiveController);
router.get(`${API}/liveshows/list/api21`, getLiveshowController);

/* -------------------- LOAN DUE (api22, api23, update loan = api29) -------------------- */

router.post(`${API}/loans/create/api22`, DueLoanController);
router.get(`${API}/loans/list/api23`, getLoandeuDetailsController);
router.put(`${API}/loans/update/api29/:id`, updateLoanController);

/* -------------------- BANK DETAILS (api24) -------------------- */

router.post(`${API}/bank/create/api24`, BankDetailsController);

/* -------------------- PROFILE (api25, api26) -------------------- */

router.post(`${API}/profile/create/api25`, profileController);
router.get(`${API}/profile/list/api26`, getProfileDetailsController);

/* -------------------- OLD DAILY EXPENSE (api27 - api30) -------------------- */

router.post(`${API}/expenses/v1/create/api27`, CreateExpessController);
router.get(`${API}/expenses/v1/list/api28`, getExpessController);
router.put(`${API}/expenses/v1/update/api29/:id`, updateExpenssController);
router.delete(`${API}/expenses/v1/delete/api30/:id`, DeleteExpenssController);

/* -------------------- CORO USERS (api31 - api35) -------------------- */

router.post(`${API}/coro/users/create/api31`, CreateCoroUser);
router.get(`${API}/coro/users/list/api32`, CorouserregiGet);
router.get(`${API}/coro/users/get/api33/:id`, CorouserregiGetById);
router.put(`${API}/coro/users/update/api34/:id`, CorouserregiUpdate);
router.delete(`${API}/coro/users/delete/api35/:id`, CorouserregiDelete);

/* -------------------- EXPRESS DIARY (api37, api38) -------------------- */

router.post(`${API}/diary/create/api37`, createExpessDiaryController);
router.get(`${API}/diary/list/api38`, getExpessDiaryController);

/* -------------------- FOX WEBSITE AUTH (api39, api40 already added) -------------------- */
// done above

/* -------------------- EMI (api41, api42) -------------------- */

router.post(`${API}/emi/create/api41`, Emicontroller);
router.get(`${API}/emi/list/api42`, getEMIdetailsController);

/* -------------------- NEW DAILY EXPENSE (api43 - api47) -------------------- */

router.post(`${API}/expenses/create/api43`, ExpenseController);
router.get(`${API}/expenses/list/api44`, getExpensseController);
router.put(`${API}/expenses/update/api46/:id`, UpdateExpenssController);
router.delete(`${API}/expenses/delete/api47/:id`, DeleteExpensesController);

/* -------------------- RUHI AI MOOD (api45) -------------------- */

router.post(`${API}/ai/mood/delete/api45`, DeleteMoodController);

/* -------------------- PIN APIs (api48 - api50) -------------------- */

router.post(`${API}/pins/create/api48`, CreatNewPinController);
router.get(`${API}/pins/list/api49`, getPinController);
router.post(`${API}/pins/verify/api50`, VerifyPinController);

module.exports = router;
