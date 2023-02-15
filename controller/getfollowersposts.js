const User = require("../models/users")
const Post = require("../models/posts")
const getfollowersposts =async(req,res)=>{

    const userFind = await User.find({followers : {$in : req.user.username}})
    let array = userFind.map((val) => {
        return val.username
    })
    
    const postFind = await Post.find({sender : {$in : array}}).limit(30)

    

    res.render("followersposts",{post : postFind})
}








module.exports= getfollowersposts