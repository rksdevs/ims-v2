const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: [true, "Category name must be unique"],
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Inactive"]
    }
}, {timestamps: true})

module.exports= mongoose.model("Category", categorySchema);