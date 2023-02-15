const getlogin = (req,res)=>{
    res.render("login",{err : req.flash("err")})
}


module.exports = getlogin