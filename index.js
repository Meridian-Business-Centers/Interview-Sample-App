const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 8080;
const request = require('request');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile('src/index.html', {root: __dirname});
});

server.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});
