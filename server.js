const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {Student} = require('./student');
const app = express();

// MongoDB connection
const db = 'mongodb://localhost/students';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${db}`));

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.post('/api/students', async (req, res, next) => {
    try {
        let student = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age,
            grade: req.body.grade
        });
    
        student = await student.save();
        res.send(student);

    } catch (err) {
        res.send(err.message);
    }
});

app.get('/api/students', async (req, res, next) => {
    const students = await Student.find();
    res.send(students);
});

app.get('/api/students/:id', async (req, res, next) => {
        try {
            const student = await Student.findById(req.params.id); 
            res.send(student);
        } catch (error) {
            res.status(404).send('The student with the given ID was not found.');
        }
});

app.put('/api/students/:id', async (req, res, next) => {
    try {
        let student = await Student.findByIdAndUpdate(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age,
            grade: req.body.grade
        }, {
            useFindAndModify: false,
            new: true
        });

        res.send(student);

    } catch (error) {
        res.send(error.message);
    }
});

app.delete('/api/students/:id', async (req, res, next) => {
    try {
        const student = await Student.findByIdAndRemove(req.params.id, {useFindAndModify: false});
        res.send(student);

    } catch (error) {
        res.status(404).send('The student with the given ID was not found.');
    }

});

// Server configuration
const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}`));