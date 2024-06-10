const express = require(`express`)
const { getLanguages } = require(`../controller/languageController`)

const router = express.Router()



//get all the languages
router.
    route(`/`)
    .get(getLanguages)



module.exports = router;