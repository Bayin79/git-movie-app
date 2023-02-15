const Post = require("../models/posts")

const getuserssearch = async (req,res)=>{
    
    const userFind = await Post.find({ $or : [{sender : {$regex : `${req.body.userssearch}`}},
{title : {$regex : `${req.body.userssearch}`}} ] }).limit(100)
    
    
    res.render("search",{post : userFind})
}




module.exports= getuserssearch