const express = require('express')
const { getRecommend } = require(`../controller/recommendController`)
const { protect } = require('../controller/authController')
const router = express.Router()

router.route(`/`).get(protect, getRecommend)


module.exports = router