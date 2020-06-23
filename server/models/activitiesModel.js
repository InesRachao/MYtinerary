const mongoose = require("mongoose");
const activity = new mongoose.Schema({
    itinerary_id: {
        type: String,
        required: true 
    },

    name: {
        type: String,
        required: true, 
    },

    img: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Activity = mongoose.model("activity", activity)
module.exports = Activity