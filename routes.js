var controllers = require('./controllers');

function routes (server) {
	server.get('/hello/:name', controllers.hello.get);
	server.head('/hello/:name', controllers.hello.get);

}

module.exports = routes;