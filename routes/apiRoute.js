const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req,res) =>{
    db.Workout.find({}, async (err, data)=> {
        if (err) throw err;
        res.json(data);
    })
});

router.get("/workouts/range", (req,res) =>{
    db.Workout.find({}, sort({day: "desc"}).then(data=> {
        res.json(data);
       
    }).catch(err => {
        res.json(err);
    })
});

router.post("/workouts"), ({body}, res) => {
    db.Workout.create(body, (err,data) =>{
        if (err) throw err;
        res.json(data);

    })
}

module.exports = router;
