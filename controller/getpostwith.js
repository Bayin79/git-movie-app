const Post = require("../models/posts")
const Comment = require("../models/comments")
const getpostwith = async(req,res)=>{
    const postFind = await Post.findById(req.query.postid)
    const rootcomment = await Comment.find ({postid : req.query.postid , parentId : 0}) 
    const notroot = await Comment.find({postid : req.query.postid , parentId : {$nin : 0}})


    if(req.isAuthenticated()){          
        if(postFind.likes.indexOf(req.user.username)>-1){
            req.flash("likestatus",true)
            return res.render("eachpost",{post:postFind , rootcomments : rootcomment , notroot })
        }else{req.flash("likestatus",false)
    return res.render("eachpost",{post:postFind , rootcomments : rootcomment , notroot})}
        
    }else{return res.render("eachpost",{post:postFind , rootcomments : rootcomment, notroot})}

}
   








module.exports= getpostwith