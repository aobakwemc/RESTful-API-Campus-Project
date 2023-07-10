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
let studentSchema = mongoose.Schema(student);

//Model based on the schema
mongoose.model('studentModel', studentSchema);
