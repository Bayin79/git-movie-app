const express=require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    res.render("home",{req:req})
})

router.use("/auth",require("./auth"))

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){return next(err)}
        res.redirect("/")
    })
})

router.use("/profile",require("./profile"))

router.use("/users",require("./users"))

// azmayeshi
const User = require("../models/users")
router.get("/list",async(req,res)=>{
   const users = await User.find({})
    res.render("list",{users:users})
})

//azmayesh
const Comment = require("../models/comments")

router.get("/azmayesh",async(req,res)=>{
    const rootcomment =await Comment.find({parentId : 0 })
    const notroot = await Comment.find({parentId : {$nin : 0}})
    
    res.render("azmayesh",{rootcomment : rootcomment , notroot : notroot})
})

router.post("/azmayesh",async(req,res)=>{
    
    const newComment = new Comment({matn : req.body.matn ,
        parentId : req.body.parentid , parentName : req.body.parentname ,
        sender : req.user.username 
    })
    
    
    await newComment.save()
    res.redirect("back")

})







router.get("/loadmore",require("../controller/getloadmore"))




router.use("/allposts",require("./allposts"))


router.post("/userssearch",require("../controller/getuserssearch"))





router.get("*",(req,res)=>{
    res.send("404 not found")
})


module.exports = router     