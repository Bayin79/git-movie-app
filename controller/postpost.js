const Post = require("../models/posts")

const postpost =async (req,res)=>{

    const parray = [req.body.p1,req.body.p2,req.body.p3,req.body.p4,req.body.p5]
    const carray = [req.body.c1,req.body.c2,req.body.c3,req.body.c4,req.body.c5]
    
    const newPost = new Post(
        {
            title : req.body.title,
            sender : req.user.username,
            pros : parray,
            cons : carray
        }
    )
     await newPost.save()
        req.flash("post","عملیات با موفقیت انجام شد")
     res.redirect("back")


}
















module.exports=postpost