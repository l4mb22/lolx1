var hello = {};

hello.get = function(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

module.exports = hello;