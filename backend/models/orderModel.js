const mongoose = require("mongoose");
const AutoIncreament = require("mongoose-sequence")(mongoose)
const Products = require("./productModel")


const orderSchema = new mongoose.Schema({

    custName: {
        type: String,
        required: true,
    },
    custAddress: {
        type: String,
        required: true,
    },
    custPhone: {
        type: Number,
        required: true,
    },
    products: { 
        type: [productSchema],
        required: true 
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    }


    // to have quantity field for every products in the order page, 
    // that quantity will be multiplied to the respective product's price for total amount
    // the add product controller should also update the total quantity of the products
    // if the order is placed successfully
})