const Post = require("../models/posts")
const loadmore = async(req,res)=>{
    let pagenumber = req.query.getdata
    let pagesize = 30
    const post = await Post.find({}).skip((pagenumber - 1) * pagesize).limit(pagesize)
    let data = {data:post}
    res.json(data)
    
}


module.exports= loadmore