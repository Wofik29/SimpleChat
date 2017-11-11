var server= require('./bin/www').server;
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('USER CONNECTION');
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
        console.log('message: '+msg);
    })
});