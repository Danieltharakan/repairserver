
//import service schema
const services = require('../Models/serviceSchema')
//add service

exports.addService = async(req,res)=>{
    console.log('inside add serice req');

    const serviceImage = req.file.filename
   /*  console.log(serviceImage); */
    const {name , description , amount } =req.body
    console.log(`${name} , ${description} , ${amount} ,${serviceImage}`);

    const newService = new services({
        name, description,amount,serviceImage
    })
    await newService.save()
    res.status(200).json(newService)
}

//getAllservices
exports.getAllServices = async(req,res)=>{
    try{
        const allServices = await services.find()
        res.status(200).json(allServices)
    }
    catch(err){
      res.status(401).json(`Request failed due to ${err}`)
    }
}

//add selelected services
exports.selectedService = async(req,res)=>{
    console.log('inside selected serice req');

    const serviceImage = req.file.filename
   /*  console.log(serviceImage); */
    const {name , description , amount } =req.body
    console.log(`${name} , ${description} , ${amount} ,${serviceImage}`);
    res.status(200).json(this.selectedService)
}