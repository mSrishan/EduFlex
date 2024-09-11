const express = require('express');
const users = express.Router(); //for endpoints
const cors = require('cors'); //for share resources
const jwt = require('jsonwebtoken'); //for secure transfer details
const bcrypt = require('bcrypt'); //to hide passwords
const User = require('../models/User');
require('dotenv').config(); // Load environment variables

users.use(cors());

users.post('/register', async (req, res) => {
    try {
        const today = new Date();
        const userData = {
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            Email: req.body.Email,
            Password: req.body.Password,
            Created: today
        };

        // Check if user already exists
        let user = await User.findOne({ Email: req.body.Email });
        if (!user) {
            // Hash password and create user
            const hashedPassword = await bcrypt.hash(req.body.Password, 10);
            userData.Password = hashedPassword;

            user = await User.create(userData);
            res.json({ status: user.Email + " registered" });
        } else {
            res.json({ error: "User already registered" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

users.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ Email: req.body.Email });
        if (user) {
            // Check password
            const match = await bcrypt.compare(req.body.Password, user.Password);
            if (match) {
                const payload = {
                    _id: user._id,
                    First_name: user.First_name,
                    Last_name: user.Last_name,
                    Email: user.Email
                };

                const token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: '24h' // Use a string for time units
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
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
            res.json(user)
            } else {
                res.send("User does not exist");
        }
    })
        .catch(err => {
            res.send("Error" + err);
    })
})
module.exports = users;
