const passport = require("passport")

const postlogin = (req,res,next)=>{
    passport.authenticate("localLogin",(err,user)=>{
        if(!user) return res.redirect("/auth/login")

        req.login(user,err=>{
    return res.redirect("/profile")})
    })(req,res,next)
}



module.exports= postlogin