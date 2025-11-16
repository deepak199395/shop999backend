const DailyExpensesModel = require("../../MongoModels/foxWeb/DailyExpensesModel");

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

module.exports = { ExpenseController };
