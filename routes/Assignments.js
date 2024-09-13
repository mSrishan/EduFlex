const express = require('express');
const assignmentRoutes = express.Router();

let Assignment = require('../models/Assignment');

// Request to add an assignment
assignmentRoutes.post('/add', (req, res) => {
    let assignment = new Assignment(req.body);
    assignment.save()
        .then(() => {
            res.status(200).json({ message: 'Assignment added successfully' });
        })
        .catch(err => {
            res.status(400).json({ error: 'Adding new assignment failed', details: err });
        });
});

// Request to get all assignments
assignmentRoutes.get('/', (req, res) => {
    Assignment.find()
        .then(assignments => {
            res.status(200).json(assignments);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to retrieve assignments', details: err });
        });
});

// Request to delete an assignment by ID
assignmentRoutes.delete('/delete/:id', (req, res) => {
    Assignment.findByIdAndDelete(req.params.id)
        .then(result => {
            if (result) {
                res.status(200).json({ message: 'Successfully removed' });
            } else {
                res.status(404).json({ error: 'Assignment not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to delete assignment', details: err });
        });
});

module.exports = assignmentRoutes;
