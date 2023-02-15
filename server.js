//app

const express = require("express")
const app = express()


//database


const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/moviedb").then(()=>{
    console.log("database connected")
}).catch((err)=>{console.log(err.message)})


//cookie and session

const cookieparser = require("cookie-parser")

const session  = require("express-session")

const flash = require("connect-flash")

app.use( cookieparser("youaresostupiddd"))

app.use(session(
    {
        secret: "youaresostupiddd",
        saveUninitialized : true,
        resave: true,
        cookie : {maxAge: 36000000*24}
    }
))

app.use(flash())


// bodyparser

const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())



// passport

const passport= require("passport")
require("./passport/passport-local")
app.use(passport.initialize())
app.use(passport.session())



// static files

const path = require("path")

app.use("/public",express.static(path.join(__dirname,"public")))
app.use("/image",express.static(path.join(__dirname,"image")))



// view engine

app.set ("view engine" , "ejs")
app.set("views","./views")


// multer

const multer = require("multer")
const multerStorage = multer.diskStorage(
    {
        destination: (req,file,cb)=>{
            cb(null,"public/uploads")
        },
        filename : (req,file,cb)=>{
            const ext = file.mimetype.split("/")[1]
            cb(null, `profilepic-${Date.now()}.${ext}`
            )
        }
    }
)


const multerFilter = (req,file,cb)=>{
    if(file.mimetype.split("/")[1]=== "jpg" || file.mimetype.split("/")[1] === "jpeg" ||
    file.mimetype.split("/")[1] === "png")
   {

          
        cb(null,true,req.flash("upl","عملیات با موفقیت انجام شد"))
        req.flash("notwrongext",true)

    }
    else {
         
        cb(null,false,req.flash("upl","فرمت فایل صحیح نیست"))
        req.flash("notwrongext",false)
}
}

const upload = multer(
    {storage : multerStorage,
    fileFilter:multerFilter
}
)
const User = require("./models/users")
app.post("/upload",upload.single("myFile"),async(req,res)=>{

    if(req.flash("notwrongext")[0]){
        
     await User.updateOne({email:req.user.email},{$set:{profileName :req.file.filename}})
    
     

    res.redirect("/profile")
    }
    else{
            res.redirect("/profile")
    }
    })

//res.locals

app.use((req,res,next)=>{
    res.locals = {req:req}
    next()
})




// main route

const main = require("./routes/main")
app.use("/", main)





















app.listen(3000)