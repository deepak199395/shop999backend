const ExpenseModel = require("../MongoModels/ExperinceModel");

// Create a new expense
const createExpense = async (req, res) => {
  try {
    const { date, amount, description } = req.body;

    const expense = await ExpenseModel.create({ date, amount, description });

    res.status(201).send({
      message: "Expense created successfully",
      success: true,
      expense,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating expense",
      success: false,
      error: error.message,
    });
  }
};

// Get all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseModel.find();

    res.status(200).send({
      message: "Expenses fetched successfully",
      success: true,
      expenses,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching expenses",
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createExpense,
  getExpenses,
};
