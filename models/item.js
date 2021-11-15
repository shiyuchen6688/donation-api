const mongoose = require("mongoose")

// define the structure of my document
const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model("Item", itemSchema)