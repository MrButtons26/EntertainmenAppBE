const jwt = require(`jsonwebtoken`);
const { promisify } = require(`util`);
const axios = require('axios')
const User = require(`../model/userModel`);

exports.getAllBookmarks = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const id = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const user = await User.findById(id.id)
    const moviesPromises = user.bookmark_id.filter((el) => el.mediaType === 'movie').map(async (el) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${Number(el.id)}?language=en-US`,
        {
          headers: {
            Authorization: process.env.Authorization,
          },
        }
      );
      return response.data;
    }
    )
    const tvPromises = user.bookmark_id.filter((el) => el.mediaType === 'tv').map(async (el) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${Number(el.id)}?language=en-US`,
        {
          headers: {
            Authorization: process.env.Authorization,
          },
        }
      );
      return response.data;
    }
    )
    const tvShows = await Promise.all(tvPromises)
    const movies = await Promise.all(moviesPromises)
    res.status(200).json({
      status: 'success',
      data: [...movies, ...tvShows]
    })
  } catch (e) {
    res.json({ e });
  }
};
exports.setBookmarks = async (req, res) => {
  const body = req.body
  try {
    const token = req.headers.authorization.split(" ")[1];
    const id = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const userOne = await User.findById(id.id)
    const user = await User.findByIdAndUpdate(id.id, { userName: `princejackson`, bookmark_id: [...userOne.bookmark_id, body] }, { new: true })
    res.status(200).json({
      status: `success`
    })
  }
  catch (e) {
    res.status(300).json({
      status: `failed`
    })
    console.log(e)
  }
};
exports.deleteBookmarks = async (req, res) => {
  const body = req.body
  try {
    const token = req.headers.authorization.split(" ")[1];
    const id = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const userOne = await User.findById(id.id)
    console.log(body)
    const bookmark = userOne.bookmark_id.filter((el) => {
      if (el.id == body.id && el.mediaType == body.mediaType) { return false }
      return true;
    })
    console.log(bookmark)
    const user = await User.findByIdAndUpdate(id.id, { bookmark_id: [...bookmark] }, { new: true })
    res.status(200).json({
      status: `success`
    })
  }
  catch (e) {
    console.log(e)
    res.status(300).json({
      status: `failed`
    })
  }
};
