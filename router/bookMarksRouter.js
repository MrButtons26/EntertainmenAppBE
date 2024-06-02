const express = require(`express`);
const {
  getAllBookmarks,
  setBookmarks,
} = require("../controller/bookMarksController");
const { protect } = require(`../controller/authController`);
const router = express.Router();

router.route("/").get(protect, getAllBookmarks);
router.route("/").post(protect, setBookmarks);

module.exports = router;
