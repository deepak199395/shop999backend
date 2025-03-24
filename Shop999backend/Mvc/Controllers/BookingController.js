const booking = require("../MongoModels/BookingModel")
const CreateBooking = async (req, res) => {
    try {
        const { Fullname, Phone, Adress, NumberofTicket,flag } = req.body;
        const CreateBooking = await booking.create({
            Fullname,
            Phone,
            Adress,
            NumberofTicket,
            flag
        })
        res.status(201).send({
            Success: true,
            message: "Booking Created Successfully",
            data: CreateBooking,
        })
    } catch (error) {
        console.log("Error in create booking Api")
        res.status(500).send({
            Success: false,
            message: "Error in create booking Api",
            data: error
        })
    }

}
const getBookingDetails = async (req, res) => {
    try {
        const getbooking = await booking.find()
        res.status(201).send({
            Success: true,
            message: "Booking Details",
            data: getbooking
        }
        )
    } catch (error) {
        console.log("error in api getTickets");
        res.status(500).send({
            Success: false,
            message: "Error in get booking Api",
            data: error
        })
    }
}
module.exports = { CreateBooking, getBookingDetails } 
