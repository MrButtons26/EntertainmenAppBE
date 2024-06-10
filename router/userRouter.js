const express = require(`express`);
const { signUp, login } = require("../controller/authController");
const router = express.Router();


//sign up for user
router.route(`/signup`).post(signUp);


//login for user
router.route(`/login`).post(login);

module.exports = router;
