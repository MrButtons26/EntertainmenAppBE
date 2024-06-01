const express=require(`express`)
const morgan=require('morgan')
const app=require(`./index`)
const axios=require(`axios`)
const cors=require('cors')
const moviesRouter=require(`./router/moviesRouter`)
const languageRouter=require(`./router/languageRouter`)
const tvRouter=require(`./router/tvRouter`)
const searchRouter=require(`./router/searchRouter`)
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors());



app.use(`/language`,languageRouter)
app.use(`/movies`,moviesRouter)
app.use(`/tvshows`,tvRouter)
app.use(`/search`,searchRouter)



app.listen(process.env.port,()=>{
    console.log(`running on port:3000`)
})