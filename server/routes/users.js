const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {

    const {
        name,
        password,
        email,
        profile_img,
    } = req.body

    try {
        user = new userModel({
        name,
        password,
        email,
        profile_img,
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()
        res.send(user)

    } catch (error) {
        res.status(500).send(error.message)
        process.exit(1)
    }

})

module.exports = router