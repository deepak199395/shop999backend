const mongoose = require("mongoose");

const CoroRegiModelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    gender:{
        type:String,
    },
    age:{
        type:Number,
        },
        citizenship:{
            type:String,
        },
    address: {
        type: String,
        required: true
    },
    })
module.exports = mongoose.model("CoroRegiModel",CoroRegiModelSchema) 