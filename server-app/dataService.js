var restify = require('restify');
var fs = require('fs');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
};

function getAllZipcodes(req, res, next) {
    var m = JSON.parse(fs.readFileSync('data.json').toString());
    res.send(m);
};

var server = restify.createServer();
server.use(restify.CORS({ credentials: true }));
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
server.get('/zip', getAllZipcodes);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});