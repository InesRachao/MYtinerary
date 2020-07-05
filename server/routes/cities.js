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
});


router.get('/:name', (req, res) => {
  		let cityRequested = req.params.name;
  		cityModel.findOne({ name: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});


router.post("/add", async (req, res) => {
        const {
            name,
            country,
            img,
        } = req.body;
        
        try {
            let city = await cityModel.findOne({name: req.body.name})
            
            if (city) {
                res.status(400).json({errors: "city already exists"})
            }
            city = new cityModel({
                name,
                country,
                img,
            });

        await city.save()
        return res.json(city)
        
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router