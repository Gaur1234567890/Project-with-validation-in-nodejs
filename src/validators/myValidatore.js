myValidator = (req,res,next)=>{
    if(req.body.email == undefined)
  {
  res.status(400).json({msg:'email is required'});
  }
  else
  {
  next();
  }
}
module.exports = {myValidator};