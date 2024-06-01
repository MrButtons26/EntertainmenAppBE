const axios=require(`axios`)



exports.topRated=async(req,res)=>{
    const {pageNum}=req.params
   try{
const response = await  axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${Number(pageNum)}`,
        {
          headers: {
            Authorization:
            process.env.Authorization,
          },
        }
      );
     res.status(response.status).json({
     ...response.data
})
     
    }
    catch(e){
        console.log(e)
    }
}

exports.getMovie=async(req,res)=>{
    const {id}=req.params
    try{
const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${Number(id)}?language=en-US`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDM0OGU0YTI1NTBmYTJkZmI2YzhlZTBkMzIxYTJjNSIsInN1YiI6IjY2NGYzMDAyYjk0ZDRhY2RjZDRmODA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wCu4dTWX02meDPToYUxmESipbJ0luEbo_BZwFBiD6I",
            },
          }
        );
        res.status(response.status).json({
     ...response.data
})
    }
    catch(e){
       console.log(e)
    }
}

exports.getCredits=async(req,res)=>{
    const {id}=req.params
    try{
const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${Number(id)}/credits?language=en-US`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDM0OGU0YTI1NTBmYTJkZmI2YzhlZTBkMzIxYTJjNSIsInN1YiI6IjY2NGYzMDAyYjk0ZDRhY2RjZDRmODA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wCu4dTWX02meDPToYUxmESipbJ0luEbo_BZwFBiD6I",
            },
          }
        );
        res.status(response.status).json({
     ...response.data
})
    }
    catch(e){
       console.log(e)
    }
}

exports.getImdbId=async(req,res)=>{
    const {id}=req.params
    try{
const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${Number(id)}/external_ids`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDM0OGU0YTI1NTBmYTJkZmI2YzhlZTBkMzIxYTJjNSIsInN1YiI6IjY2NGYzMDAyYjk0ZDRhY2RjZDRmODA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wCu4dTWX02meDPToYUxmESipbJ0luEbo_BZwFBiD6I",
            },
          }
        );
        res.status(response.status).json({
     ...response.data
})
    }
    catch(e){
       console.log(e)
    }
}