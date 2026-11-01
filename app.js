
const express = require('express');
const os = require('os');

const app = express();

// Home Route
app.get('/', (req, res) => {
    res.status(200).send(
        '<h1>Welcome to Node.js and Express Server</h1><p>Home Page</p>'
    );
});

// About Route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Manisha',
        section: 'AI-ML 2B',
        project: 'BDF Lab 1 - Node.js and Express'
    });
});

// Time Route
app.get('/time', (req, res) => {
    res.status(200).send(
        `<h1>Current Date and Time</h1><p>${new Date()}</p>`
    );
});

// Server Route
app.get('/server', (req, res) => {
    res.status(200).send(`
        <h1>Server Information</h1>
        <p>Platform: ${os.platform()}</p>
        <p>Architecture: ${os.arch()}</p>
        <p>Hostname: ${os.hostname()}</p>
    `);
});

// Error Route
app.get('/error', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Handle Unknown Routes
app.use((req, res) => {
    res.status(404).send('<h1>404 - Route Not Found</h1>');
});

// Export Express Application
module.exports = app;
