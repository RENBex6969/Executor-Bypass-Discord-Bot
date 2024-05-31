var http = require('http');
http.createServer(function (req, res) {
  res.write("ByteBypasser Alive");
  res.end();
}).listen(8080);
