const express=require(`express`)
const {getSearch}=require(`../controller/searchController`)

const router=express.Router()



router.
route(`/`)
.get(getSearch)



module.exports=router