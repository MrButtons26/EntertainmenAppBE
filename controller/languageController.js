const axios=require(`axios`)

exports.getLanguages=async(req,res)=>{
    try{
const response = await axios.get(
          `https://api.themoviedb.org/3/configuration/languages`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDM0OGU0YTI1NTBmYTJkZmI2YzhlZTBkMzIxYTJjNSIsInN1YiI6IjY2NGYzMDAyYjk0ZDRhY2RjZDRmODA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wCu4dTWX02meDPToYUxmESipbJ0luEbo_BZwFBiD6I",
            },
          }
        );
        res.status(response.status).json([
     ...response.data
])
    }
    catch(e){
       console.log(e)
    } 
}