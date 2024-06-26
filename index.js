const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = express()


//mongoose connection
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log(`DB Connection Successfull`)
})

//exporting the app 
module.exports = app;
