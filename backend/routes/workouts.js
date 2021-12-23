const express = require('express')
const workout = require('../models/workout')
const router = express.Router()
const Workout = require('../models/workout')

//getting all
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find()
        res.json(workouts)
    }
    catch(error) {
        res.status(500).json( { message: err.message } )
    }
})

//getting one
router.get('/:id', getWorkout,(req, res) => {
    res.send(res.workout)
})

//creating one
router.post('/', async (req, res) => {
    const workout = new Workout({
        name: req.body.name,
        musclesWorked: req.body.musclesWorked,
        description: req.body.description
    })
    try {
        const newWorkout = await workout.save()
        res.status(201).json(newWorkout)
    }
    catch (err) {
        res.status(400).json( { message: err.message } )
    }
})

//updating one
router.patch('/:id', getWorkout, async(req, res) => {
    if (req.body.name != null) {
        res.workout.name = req.body.name
    }
    if (req.body.musclesWorked != null) {
        res.workout.musclesWorked = req.body.musclesWorked
    }
    if (req.body.description != null) {
        res.workout.description = req.body.description
    }
    if (req.body.lastDone != null) {
        res.workout.lastDone = req.body.lastDone
    }
    try {
        const updatedWorkout = await res.workout.save()
        res.json(updatedWorkout)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
})

//deleting one
router.delete('/:id', getWorkout,async (req, res) => {
    let workoutName = res.workout.name
    try {
        await res.workout.remove()
        res.json({message: "Deleted workout \"" + workoutName + "\""})
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getWorkout(req, res, next) {
    let workout
    try {
        workout = await Workout.findById(req.params.id)
        if (workout == null) {
            return res.status(404).json({message: "Cannot find workout"})
        }
    }
    catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.workout = workout
    next()
}

module.exports = router