const express = require(`express`);
const { topRated, getMovie, getCredits, getImdbId } = require('../controller/tvcontroller')


const router = express.Router()TV

//get a specific TV
router
    .route(`/:id`)
    .get(getMovie)

//get a specific TV IMDB id 
router
    .route(`/:id/imdb`)
    .get(getImdbId)

//get a specific TV cast and credits
router
    .route(`/:id/credits`)
    .get(getCredits)

//get all top rated TV 
router
    .route(`/toprated/:pageNum`)
    .get(topRated)

module.exports = router;