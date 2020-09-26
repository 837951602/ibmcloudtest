var net = require('net');
var server = net.createServer(socket=>{
  socket.on('data', d=>socket.write(d));
});
server.listen(process.env.PORT || 3000, _=>_);