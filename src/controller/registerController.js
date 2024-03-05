const { register } = require("../model/user");
const bcrypt = require('bcrypt');

registerController = (req,res)=>{
    const user = new register(req.body);
    const number =10;
  let encryptedPassword =  bcrypt.hashSync(req.body.Password,number);
  req.body.Password = encryptedPassword;
    user.save().then(d=>{
        console.log('registration successfull');
        res.status(200).json({msg:'successfully data saved',
             data : d.role
     } )
    }).catch(e=>{
        console.log('the data not saved',e);
        res.status(400).json({msg:'not save data',
        data : e
    })
   
})
}

module.exports = {registerController};