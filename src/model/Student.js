const { mongoose } = require("../config/db");

let studentSchema = new mongoose.Schema({
    fname : {type : String , },
    lName : String,
    emailid : {type:String , unique :true}
},
{
    timestamps:true

})
let Student = mongoose.model('Student',studentSchema)

module.exports = {Student}