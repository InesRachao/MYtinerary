const mongoose = require("mongoose");
const itinerary = new mongoose.Schema({
    city_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Itinerary = mongoose.model("itinerary", itinerary)
module.exports = Itinerary