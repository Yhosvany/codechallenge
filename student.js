// This is a Mongoose model for MongoDB database
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 24
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 24
      },
      email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      },
      age: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 3
      },
      grade: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 3
      }
  });
  
const Student = mongoose.model('Student', studentSchema);

exports.Student = Student;