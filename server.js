const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Create an instance of express
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload()); // Handle file uploads

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eduflex', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Ensure 'uploads' directory exists
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// File upload endpoint for assignments
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;
    const sanitizedFileName = file.name.replace(/\s+/g, '_'); // Replace spaces with underscores
    const uploadPath = path.join(__dirname, 'public/uploads', sanitizedFileName);

    // Move the file to the 'uploads' directory
    file.mv(uploadPath, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: sanitizedFileName, filePath: `/uploads/${sanitizedFileName}` });
    });
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const userRoutes = require('./routes/Users');
const assignmentRoutes = require('./routes/Assignments'); // Import the assignments route

app.use('/users', userRoutes); // Register the user routes
app.use('/assignments', assignmentRoutes); // Register the assignments routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
