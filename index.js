//Imports
const express = require('express');
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

app.get('/sei', (req, res) => {
    res.send('SEI 412');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

