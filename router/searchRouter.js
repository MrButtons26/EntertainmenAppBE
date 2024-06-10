const express = require(`express`)
const { getSearch } = require(`../controller/searchController`)

const router = express.Router()



//get search resulted movies and tvShows
router.
    route(`/`)
    .get(getSearch)



module.exports = router