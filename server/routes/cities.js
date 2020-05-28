const express = require("express");
const router = express.Router();
const cityModel = require("../models/citiesModel");

router.get("/all", async (req, res) => {
    try {
        const cities = await cityModel.find()
    
        res.send(cities)
        
    } catch (err) {
        res.status(500).send(err.message)
        
    }

})


module.exports = router