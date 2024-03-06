const users = require('../Models/userSchema')
const jwt= require('jsonwebtoken')

//register logic
exports.register = async(req,res)=>{
    console.log('inside usercontroller register');
    
    const {username , email , password } = req.body

  try {  const existingUser = await users.findOne({email})
     if(existingUser){
        res.status(406).json('Account already exist... please login')
     }
     else{
        const newUser = new users({
                  username:username,
                  email,
                  password
        })
          await newUser.save()
        res.status(200).json(newUser)
     }
}
catch(err){

        res.status(401).json('register request failed due to ',err)
}
    
}
//login logic
exports.login = async(req,res)=>{
console.log('inside login fun');
const{email,password} = req.body
try{const existingUser=await users.findOne({email,password})
if(existingUser){
  const token = jwt.sign({userid: existingUser._id},"supersecretekey12345")
    res.status(200).json(
    { 
      existingUser,
      token 
    }
   
    )
}
else{
    res.status(404).json('Invalid email id or password')
}}
catch(err){
  res.status(401).json('login request failed due to :',err)
}
}