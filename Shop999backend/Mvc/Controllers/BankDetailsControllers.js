const Bankmodel = require("../MongoModels/BookingModel")
const BankDetailsController = async (req, res) => {
    try {
        const { accnum, acctype, number, email, emailadd } = req.body;
        const newBank = await BankDetails.create({
            accnum,
            acctype,
            number,
            email,
            emailadd
        })
        res.status(201).json({
            message: "Bank details added successfully",
            success: true,
            newBank
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to add bank details",
            success: false,
            error
        })
    }
}
module.exports = BankDetailsController;