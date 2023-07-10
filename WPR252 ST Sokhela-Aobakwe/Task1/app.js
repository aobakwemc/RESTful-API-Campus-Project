require('dotenv').config()
const express = require('express')
const appServer = express()
const mongoose = require('mongoose')

//const keywords added after test
const PORT = process.env.PORT
const HOST = process.env.HOST
const pathToDB = process.env.pathToDB

//Connect to DB - forgot the implementation; here's a try...
mongoose.connect(pathToDB)
let studentDB=mongoose.connection //CORRECTED CODE - submitted code: mongoose.Connection()

//Checking if connection works - added after test (It is important to actively open and run mongod in cmd to test connection success)
studentDB.on('error', function()
{
    console.log('Connection error.');
})
studentDB.on('open', function()
{
    console.log('Connected to database.');
})

//Middleware -comment added after test
let studentRouteHandler = require('./routes/student') //has an instance of Router
appServer.use(express.json()) //set app to json
appServer.use('/student', studentRouteHandler) //handle all routes beginning with /student


appServer.listen(PORT,HOST, function(req,res)
{
    console.log(`Server running on port ${PORT} on ${HOST}`);
})
