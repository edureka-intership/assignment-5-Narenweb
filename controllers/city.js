const restaurantsDataByCity = require('../models/Restaurent.json');

exports.getRestaurantByCity = (req,res) => {
    const result =[]; 
    restaurantsDataByCity.forEach((ele) => {
        if(ele.city_name == req.params.city_name)
        {
            result.push(ele);
        }
    });
    if(result.length){
    res.status(200).json({
        message:`restaurants of ${req.params.city_name} are fetched successfully`,
        data: result
    })
}
else{
    res.status(200).json({
        message:`restaurants in ${req.params.city_name} does not exist`
    })     
}
}
