const User = require("../models/users")
const Post = require("../models/posts")
const loadmoreusers = async(req,res)=>{
    const userFind = await User.find({followers : {$in : req.user.username}})
    let array = userFind.map((val) => {
        return val.username
    })
    
    
    let pagenumber = req.query.getdata
    let pagesize = 30

    const postFind = await Post.find({sender : {$in : array}}).skip((pagenumber - 1) * pagesize).limit(pagesize)
    
    let data = {data:postFind}
    res.json(data)
    
}

module.exports=loadmoreusers