const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        email : {type:"string",unique : true , required : true},
        password : {type : "string", required:true},
        admin : {type:"boolean", default:false},
        profileName : {type : "string" , default:'null'},
        username : {type : "string" , required: true , unique: true},
        followers : ["string"]




    }
)




module.exports= mongoose.model("User",userSchema)