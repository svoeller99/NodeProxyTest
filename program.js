var httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://www.yahoo.com'}).listen(9000);