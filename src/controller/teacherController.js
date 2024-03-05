let teacherController = (req,res)=>{
    res.status(200).json({
        msg : 'teacher successfully created'
    })
}
module.exports= {teacherController};