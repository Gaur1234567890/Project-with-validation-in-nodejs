
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();


 let authMiddleware =(req,res,next)=>{
    // console.log(req.body);  role: 'admin',data: { email: 'gaurav3@gmail.com', Password: 'G3' },iat: 1709634862
        if(req.headers.authorization === undefined){
            res.status(403).json({ msg : 'unauthorized access'})
        }
        else{
           var token = req.headers.authorization.split(' ')[1];
           try{
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.body = decoded;  //        req.body = admin
            next()
           }
           catch(err){
            res.status(403).json({
                msg:'unauthorized'
            })

           }
        }
 }
 let adminAuth = (req,res,next)=>{
   if(req.body.role !=='admin'){
    res.status(403).json({msg : 'not permission'})
   }
   else{
    next()
   }

 }

 let adminTeacher = (req,res,next)=>{
    if(req.body.role ==='student'){
     res.status(403).json({msg : 'not permission to create student'})
    }
    else{
     next()
    }
 
  }

  let allAccess = (req,res,next)=>{
    if(req.body.role =='student'||req.body.role =='teacher'||req.body.role =='admin'){
    next()
    }
  }


 module.exports = {authMiddleware, adminAuth,allAccess,adminTeacher};