var express = require('express');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var path = require('path');

var bodyParser = require('body-parser');
var assignmentRoutes = require('./routes/Assignment');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
    
app.use('/Assignments', assignmentRoutes);
app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));