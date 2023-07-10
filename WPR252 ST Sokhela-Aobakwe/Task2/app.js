require('dotenv').config()
let express = require('express')
const appServer = express()
appServer.use(express.urlencoded) //access request values

PORT = process.env.PORT
HOST = process.env.HOST


appServer.get('/add', function(req,res)
{
    res.render('index.ejs')
})

let newStudent=[]
appServer.post('/process', function(req,res)
{
    let stdName = req.body.studentName
    let internStatus = req.body.internshipStatus
    let remainingModules = req.body.outstandingSubjects

    let studentInfo = {stdName, internStatus, remainingModules}

    newStudent.push(studentInfo)
    res.send('Successfully added.')
})

let collectedData=[]
appServer.get('/view', function(req,res)
{
    collectedData.push(newStudent)

    res.render('view-student.ejs')
    res.send('Done.')
})

appServer.listen(PORT,HOST, function(req,res)
{
    console.log(`Server running on port ${PORT} on ${HOST}`);
})
