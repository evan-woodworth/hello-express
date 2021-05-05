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

const sei = (req, res) => {
    res.send('SEI 412');
}

app.get('/sei', sei);

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

