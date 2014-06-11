var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = require('http').createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://www.yahoo.com' });
});

console.log("listening on port 9000")
server.listen(9000);