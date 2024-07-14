const express = require('express');
const path = require('path');

var app = express();

//setting middleware
app.use(express.static('static', { index: ['index.html'] })); //Serves resources from public folder
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: '.' });
});

var server = app.listen(5000);