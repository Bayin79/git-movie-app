const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const User = require("../models/users")

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (id,done)=>{
    let user = await User.findById(id)
    if (user) done(null,user)
})


// register

passport.use("localRegister", new localStrategy(
    {usernameField:"email",
passwordField:"password",
passReqToCallback:true},async(req,email,password,done)=>{
    let user = await User.findOne({email:req.body.email})
    if (user){
        return done(null,false,req.flash("err","چنین کاربری با این ایمیل وجود دارد."))
    }
    const newUser = new User(
        {
            email : req.body.email,
            password: req.body.password,
            username : req.body.username
                
        }
    )
    await newUser.save()
    done(null,newUser)
}
))


//login


passport.use("localLogin", new localStrategy(
    {
        usernameField: "email",
        passwordField:"password",
        passReqToCallback:true
    },async(req,email,password,done)=>{
        const user = await User.findOne({email : req.body.email})
        if(!user || user.password != req.body.password){
            return done(null,false,req.flash("err","ایمیل یا رمز عبور اشتباه است."))
        }
        done(null,user)
    }
))