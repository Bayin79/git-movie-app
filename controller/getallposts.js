const Post = require("../models/posts")

const getallposts=async(req,res)=>{

    

    const postFind = await Post.find({}).limit(30)

    res.render("allposts",{post:postFind})

}





module.exports= getallposts