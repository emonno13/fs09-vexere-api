const express = require('express');
const router = express.Router();
const { authenticate, authorize} = require('../../../../middlewares/auth')

// import stations bên file station.controllor.js vào
const stationControllor = require('./station.controller')

router.get("/stations", stationControllor.getStations) 
router.get("/stations/:id",stationControllor.getStationById) 
router.post("/stations",
    authenticate,
    authorize(["admin"]),
    stationControllor.postStations)
router.put("/stations/:id", stationControllor.putStationById)
router.patch("/stations/:id",stationControllor.patchStationById)
router.delete("/stations/:id",stationControllor.deleteStationById)

module.exports = router;