//import service schema
const addedservices = require('../Models/addedserviceSchema');


exports.pushaddService = async(req,res)=>{
    console.log('inside add serice req');

    
   /*  console.log(serviceImage); */
    const {service ,userId,phoneModel} = req.body
    console.log(`${service},${userId},${phoneModel}`);

    const addedService = new addedservices({
        service,userId,phoneModel
    })
    await addedService.save()
    res.status(200).json(addedService)
}