const Comment = require("../models/comments")

const postcomment = async (req,res)=>{

    const newComment = await new Comment({
        text : req.body.text,
        sender : req.user.username ,
        profilepic : req.user.profileName,
        parentId : req.body.parentid,
        parentName : req.body.parentname,
        postid : req.query.postid
    })

    await newComment.save()

    res.redirect("back")


}






module.exports=postcomment