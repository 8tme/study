const net = require('net');
const fs = require('fs');

const server = net.createServer();
server.listen(8080, '127.0.0.1');

server.on('connection', socket=> {
    socket.on('data', data=> {
        console.log(data.toString())
        const url = data.toString().split('\r\n')[0].split(' ')[1].replace('/', '\\');
        // try{
        //     const htmlData = fs.readFileSync(__dirname + url);
        //     socket.write('HTTP/1.1 200OK\r\nMessage:you are bitch!!\r\n\r\n');
        //     socket.write(htmlData);
        // }catch(e){
        //     socket.write('HTTP/1.1 404NotFound\r\n\r\n<html><body>not found</body></html>');
        // }
        console.log(__dirname,url)
        if(url.length === 1){
            var filename = '\index.html';
        }else {
            var filename = __dirname + url;
        }
            const htmlData = fs.readFileSync(filename);
            socket.write('HTTP/1.1 200OK\r\nMessage:you are bitch!!\r\n\r\n');
            socket.write(htmlData);
            // const htmlData = fs.readFileSync('./index.html');
            // socket.write('HTTP/1.1 200OK\r\nMessage:you are bitch!!\r\n\r\n');
            // socket.write(htmlData);
        console.log('had connected')
        socket.end();
    })
})