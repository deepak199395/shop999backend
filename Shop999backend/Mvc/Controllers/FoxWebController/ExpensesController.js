const DailyExpensesModel = require("../../MongoModels/foxWeb/DailyExpensesModel");
const { getExperienceController } = require("../OldCoro/ExpeianceControlller");

const ExpenseController = async (req, res) => {
  try {
    const { expenses, reasonOfExpenses, dateOfExpenses } = req.body;

    const expense = await DailyExpensesModel.create({
      expenses,
      reasonOfExpenses,
      dateOfExpenses
    });

    res.status(200).send({
      success: true,
      flag: "green",
      message: "Expense added successfully",
      expense
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in creating expense",
      error: error.message
    });
  }
};
const getExpensseController=async(req,res)=>{
  try {
    const getexpess= await DailyExpensesModel.find()
    res.status(200).send({
        success:true,
        flag:getExperienceController,
        massage:"get Expensess sucssfully",
        getexpess
    })
  } catch (error) {
    res.status(500).send({
        status:false,
        massage:"error in getting data",
        error:error.massage
    })
  }
}
module.exports = { ExpenseController ,getExpensseController};
