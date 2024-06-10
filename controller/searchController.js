const axios = require(`axios`);

exports.getSearch = async (req, res) => {
  const { name } = req.query;
  try {
    //getting search results from the given query 
    const searchResults = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${name
        .split(` `)
        .join(`%`)}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );
    res.status(searchResults.status).json({ ...searchResults.data });
  } catch (e) {
    console.log(e);
  }
};
