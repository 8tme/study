var net = require('net');
var socket = net.createConnection(12306, '127.0.0.1');

socket.on('connect', function() {
    console.log('connect!!!')
    socket.write('hello server!!!')
});


socket.on('error', function() {
    console.log('defeat!!!')
})