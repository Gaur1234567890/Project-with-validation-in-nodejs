const { mongoose } = require("../config/db")


let userSchema = new mongoose.Schema({
    name : {type : String , },
    lastName : String,
    email : {type:String, unique:true},
    username : {type:String, },
    mobileno: Number,
    Password : String,
    role:{type: String,
        enum:['admin','teacher','student'],
        default:'student'
    }
},
{
    timestamps:true

})

let register = mongoose.model('User',userSchema)

module.exports = {register}