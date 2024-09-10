const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Assignment = new Schema({
    Course: {
        type: String,
    },
    Assignment_name: {
        type: String,
    },
    Deadline: {
        type: String,
    }
},{
        collection: 'assignments'
    }
);
module.exports = mongoose.model('Assignment', Assignment)