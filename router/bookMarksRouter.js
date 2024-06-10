const express = require(`express`);
const {
  getAllBookmarks,
  setBookmarks,
  deleteBookmarks
} = require("../controller/bookMarksController");
const { protect } = require(`../controller/authController`);
const router = express.Router();

router.route("/").get(protect, getAllBookmarks);
router.route("/").post(protect, setBookmarks);
router.route("/").delete(protect, deleteBookmarks);

module.exports = router;
