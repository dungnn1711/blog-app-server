import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import posts from './router/posts.js';

// Config dotenv
dotenv.config();

// Create express app
const app = express();
const PORT = process.env.YOUR_PORT || process.env.PORT || 5000;
const HOST = process.env.YOUR_HOST || process.env.HOST || '0.0.0.0';

// Middlewares
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

// Routers
app.use('/posts', posts);

// Connect DB and run server
const URI = process.env.DATABASE_URL;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connect to Mongo successfull...');
        // Run server
        app.listen(PORT, HOST, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    }).catch((e) => {
        console.error(e);
    });
