const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
        },
        image: {
            type: String 
        },
        
        price: {
            type: Number,
            required: true,
        },
        originalPrice: {
            type: Number,
            required: true,
        },
        discountPercentage:{
            type: Number,
           default:0
        }
    }
)
module.exports = mongoose.model("Product", productSchema);
