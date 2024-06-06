const axios = require(`axios`);

exports.topRated = async (req, res) => {
  const { pageNum } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${Number(
        pageNum
      )}`,
      {
        headers: {
          Authorization: process.env.Authorization,
        },
      }
    );
    res.status(response.status).json({
      ...response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${Number(id)}?language=en-US`,
      {
        headers: {
          Authorization: process.env.Authorization,
        },
      }
    );
    res.status(response.status).json({
      ...response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getCredits = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${Number(id)}/credits?language=en-US`,
      {
        headers: {
          Authorization: process.env.Authorization,
        },
      }
    );
    res.status(response.status).json({
      ...response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getImdbId = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${Number(id)}/external_ids`,
      {
        headers: {
          Authorization: process.env.Authorization,
        },
      }
    );
    res.status(response.status).json({
      ...response.data,
    });
  } catch (e) {
    console.log(e);
  }
};
