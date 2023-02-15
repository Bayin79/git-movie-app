const User = require("../models/users")


const getusers = async(req,res)=>{

let userFind =await User.findOne({_id:req.query.userid})
let array = userFind.followers

if (array.indexOf(req.user.username)>-1){
    req.flash("followed",true)
}else{req.flash("followed",false)}

    const user = await User.findById(req.query.userid)

    if (req.query.userid === req.user._id.toString()){
        req.flash("self",true)
    }
    else{req.flash("self",false)}

    

    
    res.render("users",{user:user})

}








module.exports= getusers