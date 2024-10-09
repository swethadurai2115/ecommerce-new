const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const jwt = require('jsonwebtoken');
require(dotenv).config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log(err));
    

    const generateToken = (user) => {
        // Make sure to retrieve the secret from environment variables
        const secretKey = process.env.JWT_SECRET;
    
        if (!secretKey) {
            throw new Error('Secret key not defined in environment variables');
        }
    
        return jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
    };
    