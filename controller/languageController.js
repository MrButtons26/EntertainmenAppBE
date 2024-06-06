const axios = require(`axios`);

exports.getLanguages = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/configuration/languages`,
      {
        headers: {
          Authorization: process.env.Authorization,
        },
      }
    );
    res.status(response.status).json([...response.data]);
  } catch (e) {
    console.log(e);
  }
};
