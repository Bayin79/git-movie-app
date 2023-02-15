const express= require("express")
const router = express.Router()


router.get("/",require("../controller/getallposts")
)


router.get("/postwith",require("../controller/getpostwith"))


router.post("/postwith",require("../controller/postcomment"))











module.exports= router