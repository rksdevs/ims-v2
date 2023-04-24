const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    sku: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    attribute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attributes",
        required: true,
    },   
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema);