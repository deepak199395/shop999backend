const mongoose = require("mongoose")

const bookingScrema = mongoose.Schema({
    Fullname: {
        type: String,
        required: true
    },
   Phone: {
        type: String,
        required: true
    },
    Adress: {
        type: String,
        required: true
    },
    NumberofTicket: {
        type: Number,
        required: true
    },
    flag:{
        type:String,
        default:"",
        required: true

    }

})
module.exports = mongoose.model('booking',bookingScrema);
