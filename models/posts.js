const mongoose= require("mongoose")

const postSchema = mongoose.Schema(
    {
        sender : {type:"string", required:true},
        title : {type:"string"},
        pros : ["string"],
        cons : ["string"],
        date :{type:Date, default : Date.now()},
        likes : ["string"]
    }
)



module.exports= mongoose.model("Post",postSchema)