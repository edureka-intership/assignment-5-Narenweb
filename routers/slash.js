const express = require('express');
const controllerLoc = require('../controllers/location');
const controllerCity = require('../controllers/city');
const controllerMealType = require('../controllers/mealtype');

const router = express.Router();

router.get('/', controllerLoc.getRestaurantsByLocation);

router.get('/mealtype',controllerMealType.getMealType);

router.get('/:city_name', controllerCity.getRestaurantByCity);



module.exports = router;