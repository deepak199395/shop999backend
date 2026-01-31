const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        collectionName: {
            type: String,
            required: true,
            trim: true,
        },
        categoryName: {
            type: String,
            required: true,
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
        discountPercentage: {
            type: Number,
            default: 0
        }, inStock: {
            type: Boolean,
            default: true,
        },
    }
)
module.exports = mongoose.model("Product", productSchema);
