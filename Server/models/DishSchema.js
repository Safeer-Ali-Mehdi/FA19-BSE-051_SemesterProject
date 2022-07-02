const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({

    // define the structure of schema (in which format data will store in database) 
    name:{
        type: String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
})

const Dish = mongoose.model('DISHES',DishSchema);
module.exports = Dish;
