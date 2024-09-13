const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AssignmentSchema = new Schema({
    Course: {
        type: String,
        required: true
    },
    Assignment_name: {
        type: String,
        required: true
    },
    Deadline: {
        type: String,
        required: true
    }
}, {
    collection: 'assignments'
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
