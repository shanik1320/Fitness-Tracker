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
        
    }]
})