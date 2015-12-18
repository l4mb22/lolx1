var restify = require('restify');
var routes = require('./routes');
var settings = require('./settings');
var server = restify.createServer();

routes(server);

server.listen(settings.app.port, function() {
  console.log('%s listening at %s', server.name, server.url);
});