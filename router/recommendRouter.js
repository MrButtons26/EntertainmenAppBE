const express = require('express')
const { getRecommend } = require(`../controller/recommendController`)
const { protect } = require('../controller/authController')
const router = express.Router()


//get the recommended movies and tv shows
router.route(`/`).get(protect, getRecommend)


module.exports = router