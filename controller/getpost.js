

const getpost = (req,res)=>{
    res.render("post",{post:req.flash("post")})
}


module.exports= getpost