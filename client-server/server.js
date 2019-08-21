var net = require('net');
var server = net.createServer();
server.listen(12306, '127.0.0.1');
server.on('listening', function() {
    console.log('listening!!!')
});

server.on('connection', function(socket) {
    console.log('socket connect successfully!!!')
    socket.on('data', function(data) {
        socket.write('hello client!!!')
        console.log(data.toString());
        socket.end();
    })
    socket.on('close', function() {
        server.close();
    })
    
})

