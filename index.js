//Imports
const express = require('express');
const axios = require('axios');
const app = express(); // instance of the app

// Home route
app.get('/', (req, res) => {
    // access a database if needed
    // make some logic to handle the request
    // access an API
    // return some data
    // send a response
    res.send('Hello World!');
});

// const sei = (req, res) => {
//     res.send('SEI 412');
// }

// app.get('/sei', sei);

app.get('/rockets', (req, res) => {
    axios.get('https://api.spacexdata.com/v3/rockets')
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    })
});

app.get('/greet/:name', (req, res) => {
    console.log(req.params);
    res.send(`Hello ${req.params.name}`);
});

app.get('/github/:username', (req, res) => {
    const {username} = req.params; //destructuring
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// IMPORTANT NOTE: Make this the last route
app.get('/*', (req, res) => {
    console.log(req.params);
    res.send('404 Not Found');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

