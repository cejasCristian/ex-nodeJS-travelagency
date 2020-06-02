const express = require('express');
const router = express.Router();

//controllers
const usController = require('../controllers/usController');
const homeController = require('../controllers/homeController');
const travelController = require('../controllers/travelController');
const experienceController = require('../controllers/experienceController');

module.exports = function() {
    router.get('/', homeController.queriesHomepage);
    router.get('/us', usController.infoUs);
    router.get('/travels', travelController.showTravels);
    router.get('/travels/:id', travelController.showTravel);
    router.get('/experience', experienceController.showExperience);
    router.post('/experience', experienceController.addExperience);

    return router;
}