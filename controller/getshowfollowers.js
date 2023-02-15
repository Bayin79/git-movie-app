const User = require("../models/users")

const showfollowers = async(req,res)=>{
    const user = await User.findOne({username : req.user.username})
    let array = user.followers
    const followers = await User.find({username : {$in : array}})
    
    res.render("showfollowers",{followers:followers})
    
}





module.exports= showfollowers