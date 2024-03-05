const { Student } = require("../model/Student");

  let studentController = (req,res)=>{
    const s1 = new Student(req.query);
    s1.save().then(d=>{
        res.status(200).json({
            msg:'student data saved',
            data: req.query,

        })
    }).catch(e=>{
        console.log('error',e);
        res.status(400).json({
            msg:'student data not  saved',e
        })
    })
    
}
 // find the student in db 

 let studentFind = async(req,res)=>{
    try{
       const {id} = req.params;
       const data = await Student.findById(id);
       res.status(200).json({
        msg : data
       })
    }
    catch{
        res.status(400).json({
            msg : 'please fill valid id'
           })
    }

 }


 // update a student

let studentUpdate = async(req,res)=>{
    try{
       const{id} = req.params
       const result = await Student.findByIdAndUpdate(id,req.query)
       if(!result){
        res.status(404).json({msg :' student not found'})
       }
       else{
        res.status(200).json({ msg : 'updated successfully'})
       }
    }
    catch{
        res.status(400).json({
            msg : 'please fill valid id'
           })
    }

}


// delete student

let studentDelete= async(req,res)=>{
    try{
       const{id} = req.params
       const result = await Student.findByIdAndDelete(id)
       if(!result){
        res.status(404).json({msg :' student not found'})
       }
       else{
        res.status(200).json({ msg : ' successfully Deleted '})
       }
    }
    catch{
        res.status(400).json({
            msg : 'please fill valid id'
           })
    }

}

module.exports = {studentController, studentFind, studentUpdate,studentDelete};