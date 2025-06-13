const mongoose = require("mongoose")

const DueLoanSchema = mongoose.Schema({
    loanId: {
        type: String,
    },
    loanAmount: {
        type: Number,
    },
    loanStartDate: {
        type: String,
    },
    loanEndDate: {
        type: String,
    },
    loanDurationInMonth: {
        type: Number,
    },
    loanInterestRate: {
        type: Number,
    },
    loanStatus: {
        type: String,
    },
    loanPaymentStatus: {
        type: String,
    },
    loanPaymentMode: {
        type: String,
    },
    payedEMInumber: {
        type: Number
    },
    payedEMIAmount: {
        type: Number
    },

    RemainingEMInumber: {
        type: Number
    },
    EmiAmmount: {
        type: Number
    },
    RemainingEmiAmmount: {
        type: Number
    },
    DateOfEMI: {
        type: String
    }

})
module.exports = mongoose.model("LoanDueModel", DueLoanSchema)

