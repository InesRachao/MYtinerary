const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const key = require("../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");


router.post("/register", async (req, res) => {
    console.log(req.body)

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



router.post("/login", async (req, res) => {

    const {
        email,
        password

    } = req.body

    console.log(req.body)

    try {
        let loginUser = await userModel.findOne({email: req.body.email})

        if (!loginUser) {
            res.status(400).json({errors: "Email does not exist"})
            process.exit(1)
        }


    
        let passwordMatch = await bcrypt.compare(password, loginUser.password);

        if (passwordMatch) {
            const payload = {
                id: loginUser.id,
                email: loginUser.email
            };
            const options = {expiresIn: 2592000};
            jwt.sign(
                payload,
                key.secretOrKey,
                options,
                (err, token) => {
                    if(err){
                        res.json({
                            success: false,
                            token: "There was an error"
                        });
                    }else {
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                }
            );
        }

    } catch (error) {
        res.status(500).send(error.message)
        process.exit(1)
    }
})




router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    userModel
    .findOne({ _id: req.user.id })
    .then(user => {
    res.json(user);
    })
    .catch(err => res.status(404).json({ error: "User does not exist" }));
    }
   );


module.exports = router