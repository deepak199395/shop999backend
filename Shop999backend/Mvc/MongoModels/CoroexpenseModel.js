const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
  ammunt: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },

})
module.exports= mongoose.model("ExpessModel",expenseSchema)

