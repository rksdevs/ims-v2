const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema({
    attributeName: {
        type: String,
        required: true,
    },
    value: [{type: String}]
}, {timestamps:true})

module.exports = mongoose.model("Attributes", attributeSchema);