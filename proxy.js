var http = require('http')
var httpProxy = require('http-proxy');
(async function () {
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
  proxy.on('proxyRes', function (proxyRes, req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  })
})()
