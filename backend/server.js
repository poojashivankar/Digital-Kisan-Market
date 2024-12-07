const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // To load environment variables (like JWT secret)

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',  // Frontend React app URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac', // Make sure to use a secure password or .env for production
    database: 'Digital_Kisan_Market'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.message);
        return;
    }
    console.log('MySQL Connected...');
});

// Registration endpoint
app.post('/register', (req, res) => {
    const { name, role, mobile_no, email, password, confirm_password } = req.body;

    if (!name || !role || !mobile_no || !email || !password || !confirm_password) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    if (password !== confirm_password) {
        return res.status(400).send({ message: "Passwords don't match" });
    }

    // Check if user already exists
    let query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], async (err, result) => {
        if (err) return res.status(500).send({ message: 'Database error' });

        if (result.length > 0) {
            return res.status(400).send({ message: 'User already exists with this email' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        query = `INSERT INTO users (name, role, mobile_no, email, password) VALUES (?, ?, ?, ?, ?)`;
        db.query(query, [name, role, mobile_no, email, hashedPassword], (err, result) => {
            if (err) return res.status(500).send({ message: 'Database error during registration' });
            res.status(200).send({ message: 'Registered successfully. You can now log in.' });
        });
    });
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Email and Password are required' });
    }

    let query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], async (err, result) => {
        if (err) return res.status(500).send({ message: 'Database error' });

        if (result.length === 0) {
            return res.status(400).send({ message: 'User not found' });
        }

        const user = result[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        // Create JWT Token with a secret key
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || 'secret_key', // Use environment variable for security
            { expiresIn: '1h' }
        );

        res.status(200).send({ message: 'Login successful', token });
    });
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
