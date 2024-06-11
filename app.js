const express = require(`express`);
const morgan = require("morgan");
const app = require(`./index`);
const axios = require(`axios`);
const cors = require("cors");
const moviesRouter = require(`./router/moviesRouter`);
const languageRouter = require(`./router/languageRouter`);
const tvRouter = require(`./router/tvRouter`);
const searchRouter = require(`./router/searchRouter`);
const model = require(`./model/userModel`);
const userRouter = require("./router/userRouter");
const bookMarksRouter = require("./router/bookMarksRouter");
const recommendRouter = require("./router/recommendRouter")

//request logging middleware
app.use(morgan("tiny"));

//putting request headers for cross origin resource sharing
app.use(express.json());
app.use(cors());




//routes for all the resources 
app.use(`/movies`, moviesRouter);
app.use(`/language`, languageRouter);
app.use(`/tvshows`, tvRouter);
app.use(`/search`, searchRouter);
app.use(`/user`, userRouter);
app.use(`/bookmarks`, bookMarksRouter);
app.use('/recommendations', recommendRouter)
app.use('*', (req, res) => {
  res.status(404).json({
    status: `failed`,
    message: `This Url does not belong to the server`
  })
})


//opening port for the machine to listen to requests
app.listen(process.env.PORT, () => {
  console.log(`running on port:3000`);
});
