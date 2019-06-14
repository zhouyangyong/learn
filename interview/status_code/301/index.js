var http = require('http');

var server = http.createServer(function(req,res) {
  // 响应头
  res.writeHead(301, {'location': 'http://itbilu.com/'});
  res.end();
  console.log(res._header);
});

server.listen(3000);