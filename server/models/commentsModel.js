const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({

    text:{
        type: String,
        required: true,
    },

    userName:{
        type: String,
        
    },

    profile_img:{
        type: String,

    },

    date:{
        type: Date,
        default: Date.now,
    },

    itineraryID: {
        type: String,
        required: true,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }


})

module.exports = Comment = mongoose.model("comment", commentSchema)