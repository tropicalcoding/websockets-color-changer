console.log('server.js is now running');

var express = require('express');

var app = express();

var server = app.listen(3000);

var socket = require('socket.io');

var io = socket(server);

console.log('Listening on port 3000');



app.use(express.static('public'));

console.log('Hosting static files');

io.sockets.on('connection', (socket) =>{
    console.log(socket.id);

    socket.on('mouse', (data) =>{
        socket.broadcast.emit('mouse',data)
        //console.log(data);
    });
});