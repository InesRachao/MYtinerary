const mongoose = require("mongoose");
const city = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const City = mongoose.model("city", city)
module.exports = City