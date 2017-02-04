/* Copyright (c) Samuel Kilada 2017. */

// Load modules
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// Load routes
var weather = require('./routes/weather.js');

// App settings
var app = express();
app.disable('x-powered-by');
app.set('env', 'development');
app.set('port', process.env.PORT || 1337);
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var router = express.Router();
app.use('/', router);
app.use(require('cookie-parser')());

// Handle requests
app.get('/zipcode_list', weather.zipcode_list);
app.get('/zipcode', weather.zipcode);

// Start the server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});