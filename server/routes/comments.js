const express = require ("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const commentsModel = require ("../models/commentsModel");
const userModel = require ("../models/userModel");



router.post(
    "/addComments/:id",
    passport.authenticate("jwt", {session: false}),
    
    async (req, res) =>{
        

        let user = await userModel.findById({_id: req.user.id})
        if(!user){
            res.status(404).json({ error: "User does not exist" })
        }

        console.log(req.params.id)
        const comment = new commentsModel({
            user: user._id,
            text: req.body.text,
            userName: user.name,
            profile_img: user.profile_img,
            itineraryID: req.params.id,
            
        })
        await comment.save()
        console.log(comment)
        res.send(comment)
        
    }

)


router.get('/:id', (req, res) => {
    let itineraryRequested = req.params.id;
    commentsModel.find({ itineraryID: itineraryRequested })
      .then(comments => {
          res.send(comments)
      })
      .catch(err => console.log(err));
});



router.put(
    "/updateComment/:id",

    passport.authenticate("jwt", {session: false}),
    
    async (req, res) =>{
        
        let user = await userModel.findById({_id: req.user.id})
        if(!user){
            res.status(404).json({ error: "User does not exist" })
        }


        let comment = await commentsModel.findById({_id: req.params.id})
        console.log(comment)

        if(comment.user.toString() !== req.user.id){
            res.status(401).json({ error: "User not authorized" })
        }

        if(!comment){
            res.status(404).json({ error: "Comment does not exist" })
        } else {
           comment.text = req.body.text
        
        await comment.save()
        res.send(comment)
        }
    }

)


router.delete(
    "/deleteComment/:id",

    passport.authenticate("jwt", {session: false}),

    async (req, res) =>{
        
        let user = await userModel.findById({_id: req.user.id})
        if(!user){
            res.status(404).json({ error: "User does not exist" })
        }

        console.log("user ze "+user)
        let comment = await commentsModel.findById({_id: req.params.id})
        console.log(comment)

        if(comment.user.toString() !== req.user.id){
            res.status(401).json({ error: "User not authorized" })
        }

        if(!comment){
            res.status(404).json({ error: "Comment does not exist" })
        } else {
           await comment.remove()
        
        res.json({ msg: "Comment removed"})
        }
    }

)


module.exports = router


