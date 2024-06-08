import express from "express";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import fs from "fs";
import path from "path";


const router = express.Router();

const usersFilePath = path.join(`${process.env.DIR_NAME}`, '/users.json');
//  console.log(usersFilePath)


// Helper function to read users from file
const readUsers = () => {
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
};

// Helper function to write users to file
const writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};


// Registration route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const users = readUsers();

    // Check if user already exists
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) throw err;

        // Create new user
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            username,
            password: hashedPassword,
        };

        // Add new user to users array and write to file
        users.push(newUser);
        writeUsers(users);

        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const users = readUsers();
    // const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


    // Find user by username
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Create JWT
        const payload = {
            user: {
                id: user.id,
                username: user.username,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRECT_KEY,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                
                res.status(201).json({ message: 'User login successfully',
                token });
            }
        );
    });
});

export default router;
