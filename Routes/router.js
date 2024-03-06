const express = require('express')
const userController=require('../controllers/userController')
const serviceController=require('../controllers/serviceController')
const addedserviceController=require('../controllers/addedserviceController')
const multerConfig = require('../Middleware/multerMiddleware')


const router = new express.Router()
//register
router.post('/user/register',userController.register)
//login
router.post('/user/login',userController.login)
//addservice
router.post('/service/add',multerConfig.single('serviceImage'),serviceController.addService)

//get all services
router.get('/services/all-service',serviceController.getAllServices)
//add selected service
/* router.post('/selected/services',multerConfig.single('serviceImage'),serviceController.addService) */

//added services
router.post('/selected/services',addedserviceController.pushaddService)


module.exports = router