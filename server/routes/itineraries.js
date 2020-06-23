const express = require("express");
const router = express.Router();
const itineraryModel = require("../models/itinerariesModel");



router.get("/all", async (req, res) => {
    try {
        const itineraries = await itineraryModel.find()
        res.send(itineraries)
        
    } catch (err) {
        res.status(500).send(err.message)
        
    }
});


router.get('/:id', (req, res) => {
  		let cityRequested = req.params.id;
  		itineraryModel.find({ city_id: cityRequested })
			.then(itineraries => {
				res.send(itineraries)
			})
			.catch(err => console.log(err));
});


router.post("/:id", async (req, res) => {
    const {
        city_id,
        title,
        img,
        summary,
        duration,
        price,
        rating,
    } = req.body

    try {
        itinerary = new itineraryModel ({
        title,
        img,
        summary,
        duration,
        price,
        rating,
        city_id: req.params.id
        })

        console.log(`add itinerary ${itinerary}`)

        await itinerary.save()
        res.send(itinerary)


    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = router