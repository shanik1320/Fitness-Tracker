const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req,res) =>{
    db.Workout.find({}, async (err, data)=> {
        if (err) throw err;
        res.json(data);
    })
});