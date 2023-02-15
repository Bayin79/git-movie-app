const mongoose = require("mongoose")

const commentSchema = mongoose.Schema(
    { text : "string",
    parentId : {type : "string" , default:0},
    parentName : "string",
    sender : "string",
    profilepic : "string",
    like : ["string"],
    dislike : ["string"],
    postid : "string"

    }
)

module.exports= mongoose.model("Comment" , commentSchema)
