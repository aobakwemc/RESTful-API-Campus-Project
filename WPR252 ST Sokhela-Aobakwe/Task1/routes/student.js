//Routes will be defined in here.

let express = require('express')

let studentRoute = express.Router()
module.exports=studentRoute //corrected after test - I exported the model instead

//Require the model which interacts with the database.
let studentModel = require('../models/student-model')
//Route handling
studentRoute.get('/view', async function(req,res) 
{
    try 
    {
      let viewStudents = await studentModel.find()
      res.json('HTTP Response 200: '+{viewStudents})
    } 
    catch (error) 
    {
       res.json('HTTP Response 500: '+{msg:error.msg});
    }
})

studentRoute.post('/add', async function(req,res)
{
    let student = {
        studentName: req.body.studentName,
        internshipStatus: req.body.internshipStatus,
        outstandingSubjects: req.body.outstandingSubjects,
    }

    try 
    {
      let newStudent = new studentModel(student); //new keyword added after test
      await newStudent.save()
      res.json('HTTP Response 200: Successfully saved.')   
    } 
    catch (error) 
    {
        res.json('HTTP Response 500: '+{msg:error.msg})    
    }
})

studentRoute.patch('/:id', async function(req,res)
{
    try 
    {
        //findOneAndDelete() is a better alternative as findByIdAndRemove has characteristics of findAndModify - commented after test
        let removeStudent = studentModel.findByIdAndRemove(req.params.id) 
        await removeStudent.delete()
        res.json('HTTP Response 200: Successfully removed.')
    } 
    catch (error) 
    {
        console.log('HTTP Response 500: '+{msg:error.msg});
    }
})