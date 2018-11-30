var http = require('http')
var httpProxy = require('http-proxy')
var proxy = httpProxy.createProxyServer({
  headers: {
    host: 'localhost'
  }
})
http.createServer(function (request, response) {
  proxy.web(request, response, {
    target: 'http://localhost:2771'
  })
}).listen(process.env.PORT || 3000)
