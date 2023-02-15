const express= require("express")
const router = express.Router()

router.use((req,res,next)=>{
    if (req.isAuthenticated()){
        return res.redirect("/profile")
    }
    next()
})

router.get("/signup",require("../controller/getsignup"))

router.post("/signup",require("../controller/postsignup"))

router.get("/login",require("../controller/getlogin"))

router.post("/login",require("../controller/postlogin"))


module.exports = router