const mongoose = require('mongoose')

let student = {
    studentName: 
    {
        type: String,
        required: true,
    },
    internshipStatus:
    {
        type: String,
        required: true,
        enum:['placed','unplaced','unknown'],    
    },
    outstandingSubjects:
    {
        type:Number,
        required:true,
        default:0,
    },
}

//Schema
let studentSchema = new mongoose.Schema(student); //new keyword added after test

//Model based on the schema
module.exports= mongoose.model('studentModel', studentSchema); //module.exports added after test - needs to be exported as it is used by multiple pages

/* Once you have a model you can use it to find, create, update, and delete objects of the given type. */
