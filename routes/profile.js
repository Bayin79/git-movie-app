const express= require("express")
const router = express.Router()
const User = require("../models/users")

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/auth/login")
})


router.get("/",(req,res)=>{
    res.render("profile",{req:req,upl:req.flash("upl")})
})

router.get("/showfollowers",require("../controller/getshowfollowers"))

router.get("/post",require("../controller/getpost"))
router.post("/post",require("../controller/postpost"))



module.exports = router