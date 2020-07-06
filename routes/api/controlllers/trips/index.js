const express = require('express')
const tripControllor = require('./trip.controller')

const router = express.Router()

router.get('/trips', tripControllor.getTrips)
router.get('/trips/:id', tripControllor.getTripById)
router.post('/trips', tripControllor.postTrips)
router.patch('/trips/:id', tripControllor.patchTripById)
router.delete('/trips/:id', tripControllor.deleteTripById)

module.exports = router