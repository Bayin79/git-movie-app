const User = require("../models/users")

const getfollow = async(req,res)=>{
    const user = await User.findById(req.query.userid)

    let array = user.followers

    if (array.indexOf(req.user.username)>-1){
      
        let index = array.indexOf(req.user.username)
        array.splice(index,1)
        await user.save()
        req.flash("followed",false)  
        return  res.redirect("back")
    }
   
    array.push(req.user.username)
    await user.save()
    req.flash("followed",true) 
    return res.redirect("back")
    


}

module.exports= getfollow