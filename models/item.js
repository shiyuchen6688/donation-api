const mongoose = require("mongoose")

// define the structure of my document
const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    distance: {
        type: String
    },
    createdAt: {
        type: Date,
        defult: Date.now()
    },
    condition: {
        type: String,
        enum: {
            values: ["Like New", "Very Good", "Good", "Fair"],
            message: '{Value} is not supported, supported conditions are: "Like New", "Very Good", "Good", "Fair"'
        }
    }
});

module.exports = mongoose.model("Item", itemSchema)