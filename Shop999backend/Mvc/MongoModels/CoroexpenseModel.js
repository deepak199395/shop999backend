const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: {
    type: String, 
  },
  amount: {
    type: String, 
  },
  description: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('ExpenseModel', expenseSchema);
