const signup = (req,res) => {
    res.render("signup",{msg: req.flash("error"),inuse : req.flash("err"), err : req.flash("err")})
}   


module.exports= signup

