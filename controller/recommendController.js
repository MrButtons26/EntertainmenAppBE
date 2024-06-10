const axios = require(`axios`);
const { promisify } = require('util')
const jwt = require(`jsonwebtoken`);
const User = require('../model/userModel')
exports.getRecommend = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const idOne = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        const user = await User.findById(idOne.id)
        const movies = user.bookmark_id.filter((el) => el.mediaType === 'movie')
        const tv = user.bookmark_id.filter((el) => el.mediaType === 'tv')
        let responseMovie = []
        let responseTv = []
        if (movies.length !== 0) {
            responseMovie = await axios.get(
                `https://api.themoviedb.org/3/movie/${movies.at(-1).id}/recommendations?language=en-US`,
                {
                    headers: {
                        Authorization: process.env.Authorization,
                    },
                }
            );

        }
        if (tv.length !== 0) {
            responseTv = await axios.get(
                `https://api.themoviedb.org/3/tv/${tv.at(-1).id}/recommendations?language=en-US`,
                {
                    headers: {
                        Authorization: process.env.Authorization,
                    },
                }
            );
        }
        res.status(200).json({
            status: 'success',
            data: {
                movie: responseMovie?.data,
                tv: responseTv?.data
            }
        })
    }

    catch (e) {
        console.log(e)
    }
};
