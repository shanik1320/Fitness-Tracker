const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Workout = new Schema({
    day:{
        type: Date,
        default: Date.now()
    },
    exercises :[{
        type:{
            type: String
        },
        name: String,
        duration: Number,
        weight: Number,
        reps:Number,
        sets: Number,
        distance: Number

    }]
})

const Workout = mongoose.model("Workout", Workout)

module.exports = Workout