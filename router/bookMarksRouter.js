const express = require(`express`);
const {
  getAllBookmarks,
  setBookmarks,
  deleteBookmarks
} = require("../controller/bookMarksController");
const { protect } = require(`../controller/authController`);
const router = express.Router();


//get all the bookmarked movies and tv
router.route("/").get(protect, getAllBookmarks);

//set the bookmarked movies and tv to DB
router.route("/").post(protect, setBookmarks);

//delete the bookmarked movies and tv from DB
router.route("/").delete(protect, deleteBookmarks);

module.exports = router;
