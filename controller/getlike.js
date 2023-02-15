const Post = require("../models/posts")

const getlike = async (req,res)=>{

    const postFind = await Post.findOne({_id : req.query.postid})
    if(postFind.likes.indexOf(req.user.username) > -1){
        let index = postFind.likes.indexOf(req.user.username)
        postFind.likes.splice(index,1)

        await postFind.save()
        req.flash("followstatus",false)
        return res.redirect("back")
    }

    postFind.likes.push(req.user.username)
    await postFind.save()
    req.flash("likestatus",true)
    res.redirect("back")


}


module.exports = getlike