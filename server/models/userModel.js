mongoose = require ("mongoose")

const user = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },

    userGoogle: {
        type: Boolean,
    },

    password:{
        type: String,
        required: function validate() {
            if (this.userGoogle) {
                return false
            } else {
                return true
            }
        }

    },

    email: {
        type: String,
        required: true,
        unique: true

    },

    profile_img: {
        type: String,
        required: true

    },

    favourites: {
        type: Array,
    }

})

const User = mongoose.model("user", user)
module.exports = User