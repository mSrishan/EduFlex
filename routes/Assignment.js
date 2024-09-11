const express = require('express');
const assignmentRoutes = express.Router();

let Assignment = require('../models/Assignment')

//request for ADD ASSIGNMENT
assignmentRoutes.route('/add').post(function (req, res) {
    let assignment = new Assignment(req.body);
    assignment.save()
        .then(assignment => {
            res.status(200).json({ 'assignment': 'assignment added successfully' });
        })
        .catch(err => {
            res.status(400).send('Adding new assignment failed');
        })
})
    
//request for GET ASSIGNMENT
assignmentRoutes.route('/').get(function (req, res) {
    Assignment.find(function (err, assignment) {
        if (err) {
            console.log(err);
        } else {
            res.json(assignment);
        }
    });
});

//request for DELETE ASSIGNMENT
assignmentRoutes.route('/delete/:id').get(function (req, res) {
    Assignment.findByIdAndDelete({ _id: req.params.id }, function (err, assignment) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    })
});
module.exports = assignmentRoutes;

