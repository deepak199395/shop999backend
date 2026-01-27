const express = require("express");
const {DueLoanController, getLoandeuDetailsController, updateLoanController} = require("../Controllers/OldCoro/LoanDueController");
const { CreateExpessController, getExpessController, updateExpenssController, DeleteExpenssController } = require("../Controllers/OldCoro/expenseController");
const { CreateCoroUser, CorouserregiGet, CorouserregiGetById, CorouserregiUpdate, CorouserregiDelete,coroLoginController } = require("../Controllers/OldCoro/CoroUserController");
const { createExpessDiaryController, getExpessDiaryController } = require("../Controllers/OldCoro/ExpessDiaryController");
const { getEMIdetailsController, Emicontroller } = require("../Controllers/FoxWebController/FoxEmiController");
const { CreateRegiUserController, FoxloginController } = require("../Controllers/FoxWebController/CoroAuthController");
const { ExpenseController, getExpensseController, UpdateExpenssController, DeleteExpensesController } = require("../Controllers/FoxWebController/ExpensesController");
const { DeleteMoodController } = require("../Controllers/RuhiController/AiAwairnesController");
const {CreatNewPinController, getPinController, VerifyPinController}= require("../Controllers/FoxWebController/PinController");
const { CreateCollectionController, getCollectionController } = require("../Controllers/Shregar/CollectionController");
const { CreateCategoriesController, getCategoriesController } = require("../Controllers/Shregar/CategoriesController");
const { CreateProductController, getProductController } = require("../Controllers/Shregar/CollecProdController");
const router = express.Router();
const API = "";   

/* -------------------- AUTH -------------------- */
router.post(`${API}/auth/register/api39`, CreateRegiUserController);
router.post(`${API}/auth/login/api40`, FoxloginController);
router.post(`${API}/auth/coro-user/login/api36`, coroLoginController);

/* -------------------- LOAN -------------------- */
router.post(`${API}/loans/create/api22`, DueLoanController);
router.get(`${API}/loans/list/api23`, getLoandeuDetailsController);
router.put(`${API}/loans/update/api29/:id`, updateLoanController);

/* -------------------- OLD EXPENSES -------------------- */
router.post(`${API}/expenses/v1/create/api27`, CreateExpessController);
router.get(`${API}/expenses/v1/list/api28`, getExpessController);
router.put(`${API}/expenses/v1/update/api29/:id`, updateExpenssController);
router.delete(`${API}/expenses/v1/delete/api30/:id`, DeleteExpenssController);

/* -------------------- CORO USERS -------------------- */
router.post(`${API}/coro/users/create/api31`, CreateCoroUser);
router.get(`${API}/coro/users/list/api32`, CorouserregiGet);
router.get(`${API}/coro/users/get/api33/:id`, CorouserregiGetById);
router.put(`${API}/coro/users/update/api34/:id`, CorouserregiUpdate);
router.delete(`${API}/coro/users/delete/api35/:id`, CorouserregiDelete);

/* -------------------- DIARY -------------------- */
router.post(`${API}/diary/create/api37`, createExpessDiaryController);
router.get(`${API}/diary/list/api38`, getExpessDiaryController);

/* -------------------- EMI -------------------- */
router.post(`${API}/emi/create/api41`, Emicontroller);
router.get(`${API}/emi/list/api42`, getEMIdetailsController);

/* -------------------- NEW EXPENSES -------------------- */
router.post(`${API}/expenses/create/api43`, ExpenseController);
router.get(`${API}/expenses/list/api44`, getExpensseController);
router.put(`${API}/expenses/update/api46/:id`, UpdateExpenssController);
router.delete(`${API}/expenses/delete/api47/:id`, DeleteExpensesController);

/* -------------------- RUHI AI -------------------- */
router.post(`${API}/ai/mood/delete/api45`, DeleteMoodController);

/* -------------------- PIN API -------------------- */
router.post(`${API}/pins/create/api48`, CreatNewPinController);
router.get(`${API}/pins/list/api49`, getPinController);
router.post(`${API}/pins/verify/api50`, VerifyPinController);

/* -------------------- Shregar API -------------------- */
router.post(`${API}/shrigar/collections/create/api51`,CreateCollectionController)
router.get(`${API}/shrigar/collections/list/api52`, getCollectionController);
router.post(`${API}/shrigar/CreateCategories/get/api53`,CreateCategoriesController)
router.get(`${API}/shrigar/getCategories/list/api54`,getCategoriesController)
router.post(`${API}/shrigar/Collections/products/create/api55`,CreateProductController)
router.get(`${API}/shrigar/Collections/products/list/api56`,getProductController)

module.exports = router;
