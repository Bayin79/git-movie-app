const express = require("express")
const router = express.Router()

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }
    else{return res.redirect("/auth/login")}
})


router.get("/",require("../controller/getusers"))


router.get("/follow",require("../controller/getfollow"))

router.get("/followersposts",require("../controller/getfollowersposts"))

router.get("/like",require("../controller/getlike"))

router.get("/loadmore",require("../controller/getloadmoreusers"))

router.get("/commentlike",require("../controller/getcommentlike"))






module.exports= router