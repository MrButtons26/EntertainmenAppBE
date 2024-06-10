const express = require(`express`);
const axios = require(`axios`)
const { getTrending, topRated, getMovie, getCredits, getImdbId } = require('../controller/movieControllers')


const router = express.Router()

//get all trending movies
router
    .route(`/trending`)
    .get(getTrending)


//get a specific movie
router
    .route(`/:id`)
    .get(getMovie)

//get a specific movie IMDB id 
router
    .route(`/:id/imdb`)
    .get(getImdbId)

//get a specific movie cast and credits
router
    .route(`/:id/credits`)
    .get(getCredits)

//get all top rated movies 
router
    .route(`/toprated/:pageNum`)
    .get(topRated)
module.exports = router;