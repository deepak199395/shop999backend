const BookingTicket=require('../MongoModels/BookingModel')
const createBooking=async(req,res)=>{
    try {
        const {fullname,PhoneNumber,Adress,NumberofTickets}=req.body;
        const Booking= await BookingTicket.create({
            fullname,
            PhoneNumber,
            Adress,
            NumberofTickets
        })
        res.status(201).send({
            message:"Booking created successfully",
            Booking
        })
        

    } catch (error) {
        res.status(500).send({
            message:"Error creating booking",
            error
            })
        
    }
}
module.exports=createBooking; 