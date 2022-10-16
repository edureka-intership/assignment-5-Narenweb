const restaurantsDataMealType = require('../models/mealtype.json');

exports.getMealType = (req,res) => {
    res.status(200).json({
        message: "restaurants mealtype data is fetched successfully",
        data: restaurantsDataMealType
    });
}