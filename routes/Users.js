const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

users.use(cors());
const SECRET_KEY = 'your_secret_key_here'; // Hard-coded secret key

users.post('/register', async (req, res) => {
    try {
        const today = new Date();
        const { First_name, Last_name, Email, Password } = req.body;

        if (!First_name || !Last_name || !Email || !Password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user already exists
        let user = await User.findOne({ Email });
        if (!user) {
            // Hash password and create user
            const hashedPassword = await bcrypt.hash(Password, 10);
            const userData = {
                First_name,
                Last_name,
                Email,
                Password: hashedPassword,
                Created: today
            };

            user = await User.create(userData);
            res.json({ status: `${user.Email} registered` });
        } else {
            res.status(400).json({ error: "User already registered" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

users.post('/login', async (req, res) => {
    try {
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const user = await User.findOne({ Email });
        if (user) {
            // Check password
            const match = await bcrypt.compare(Password, user.Password);
            if (match) {
                const payload = {
                    _id: user._id,
                    First_name: user.First_name,
                    Last_name: user.Last_name,
                    Email: user.Email
                };

                const token = jwt.sign(payload, SECRET_KEY, {
                    expiresIn: '24h'
                });

                res.json({ token });
            } else {
                res.status(401).json({ error: "Invalid credentials" });
            }
        } else {
            res.status(401).json({ error: "User does not exist" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

users.get('/profile', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        User.findOne({ _id: decoded._id })
            .then(user => {
                if (user) {
                    res.json(user);
                } else {
                    res.status(404).json({ error: "User does not exist" });
                }
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    } catch (err) {
        res.status(401).json({ error: "Invalid token" });
    }
});

module.exports = users;
