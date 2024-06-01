const express=require(`express`);
const {topRated,getMovie,getCredits,getImdbId}=require('../controller/tvController')


const router =express.Router()

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