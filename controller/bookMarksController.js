const jwt = require(`jsonwebtoken`);
const { promisify } = require(`util`);
const User = require(`../model/userModel`);

exports.getAllBookmarks = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const id = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const doc = await User.findById(id.id).select(`bookmark_id`);
    console.log(doc);
  } catch (e) {
    res.json({ e });
  }
};
exports.setBookmarks = async (req, res) => {
  try {
  } catch (e) {}
};
