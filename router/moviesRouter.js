const express=require(`express`);
const axios=require(`axios`)
const {getTrending,topRated,getMovie,getCredits,getImdbId}=require('../controller/movieControllers')


const router =express.Router()


router
.route(`/trending`)
.get(getTrending)

router
.route(`/:id`)
.get(getMovie)

router
.route(`/:id/imdb`)
.get(getImdbId)
router
.route(`/:id/credits`)
.get(getCredits)
router
.route(`/toprated/:pageNum`)
.get(topRated)
 module.exports=router;