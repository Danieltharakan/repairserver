require('dotenv').config()
const express = require('express')
const cors  = require('cors')
const router = require('./Routes/router')
require('./DB/connections')
const rpServer=express()
rpServer.use(cors())
rpServer.use(express.json())
rpServer.use(router)

rpServer.use('/uploads',express.static('./uploads'))

const PORT = 4000 || process.env.PORT
rpServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT ${PORT}`);
})
rpServer.get('/',(req,res)=>{
    res.send('repair server is ready ')
})