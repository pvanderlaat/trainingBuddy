const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    musclesWorked: {
        type: String,
        required: true
    },
    lastDone: {
        type: Date,
        required: true,
        default: new Date()
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Workout', workoutSchema)