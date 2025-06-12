const LoanDueModel = require("../MongoModels/LoanDueModel")
const DueLoanController = async (req, res) => {
    try {
        const { loanId, loanAmount, loanStartDate, loanEndDate, loanDurationInMonth, loanInterestRate, loanStatus, loanPaymentStatus, loanPaymentMode } = req.body
        const DueLoan = await LoanDueModel.create({
            loanId,
            loanAmount,
            loanStartDate,
            loanEndDate,
            loanDurationInMonth,
            loanInterestRate,
            loanStatus,
            loanPaymentStatus,
            loanPaymentMode
        })
        res.status(201).send({
            message: "Loan Due Created Successfully",
            success: true,
            data: DueLoan
        })
    } catch (error) {
        res.status(500).send({
            message: "Error Occured",
            success: false,
            error: error.message
        })
    }
}
module.exports = DueLoanController;