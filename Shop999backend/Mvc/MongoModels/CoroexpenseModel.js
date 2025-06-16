const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: {
    type: String, // Format: YYYY-MM-DD
  },
  amount: {
    type: Number,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('ExpenseModel', expenseSchema);
