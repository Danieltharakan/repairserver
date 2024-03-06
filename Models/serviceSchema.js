

const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
   amount:{
        type:Number,
        require:true
    },
    serviceImage:{
        type:String,
        require:true
    }
})


const services = mongoose.model("services",serviceSchema)

module.exports = services