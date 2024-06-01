const express=require(`express`)
const {getLanguages}=require(`../controller/languageController`)

const router=express.Router()



router.
route(`/`)
.get(getLanguages)



module.exports=router;