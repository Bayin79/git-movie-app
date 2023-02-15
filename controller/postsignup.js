const {check,validationResult}=require("express-validator")
const passport = require("passport")
const User = require("../models/users")

const postsignup = [ [check("email","فرمت ایمیل صحیح نیست").isEmail()
.not().isEmpty().withMessage("لطفا ایمیل خود را وارد کنید."),
check("password","رمز عبور نباید فضای خالی داشته باشد.").custom(value=>!/\s/.test(value))
.isLength({min:8,max:10}).withMessage("طول رمز عبور باید هشت تا ده رقم باشد.")
.matches("[A-Z]").withMessage("رمز عبور باید شامل حروف بزرگ انگلیسی باشد")
.matches("[a-z]").withMessage("لطفا از حروف کوچک انگلیسی نیز استفاده کنید.")
.not().isEmpty().withMessage("لطفا رمز عبور خود را وارد کنید."),
check("username","لطفا نام کاربری خود را بنویسد").not().isEmpty()]
,async(req,res,next)=>{
    let exist = await User.findOne({username:req.body.username})
    const errors = validationResult(req)
    if(!errors.isEmpty()){

        const myErrors = errors.array()
        req.flash("error",myErrors)
        return res.redirect("/auth/signup")

    }

    
    else if(exist){
        req.flash("err","این نام کاربری قبلا انتخاب شده است")
        return res.redirect("/auth/signup")
    }

    passport.authenticate("localRegister",{
        successRedirect : "/profile",
        failureRedirect:"/auth/signup",
        failureFlash : true
    })(req,res,next)

}
]

module.exports= postsignup