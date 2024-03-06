const mongoose = require('mongoose')

const addedserviceSchema = new mongoose.Schema({
    service:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    phoneModel:{
        type:String,
        require:true
    }
})


const addedservices = mongoose.model("addedservices",addedserviceSchema)

module.exports = addedservices