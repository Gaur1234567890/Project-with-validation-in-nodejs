const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const env = require('dotenv');
const { register } = require('../model/user');
env.config();
let loginController = (req,res)=>{
// email is exists
    register.findOne({email:req.body.email})
    .then(d=>{
        if(d==null){
            // invalid user
            res.status(403).json({
                msg:'invalid Credentials'
            })
        }
        else{
           
            //compare password
            if(req.body.Password == d.Password){
                var token = jwt.sign({role:d.role,data:req.body},process.env.JWT_SECRET)
                console.log('login successfully')
                res.status(200).json({
                    result :'welcome login successfully',
                    token:token
                    
            })
            }
            else{
                res.status(403).json({
                    msg:'invalid Credentials'
                })
            }

        }
     })
    }


module.exports = {loginController};