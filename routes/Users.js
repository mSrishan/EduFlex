const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

users.use(cors());
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key_here';

// Register route
users.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        // Validate input
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already registered" });
        }

        // Hash the password and create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ status: `${newUser.email} registered successfully` });

    } catch (err) {
        console.error('Error in /register route:', err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login route
users.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "User does not exist" });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        };

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
        res.status(200).json({ token });

    } catch (err) {
        console.error('Error in /login route:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = users;
