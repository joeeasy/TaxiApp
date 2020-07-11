const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 5000;

io.on("connection", socket => {
    console.log('A user connected');
});

server.listen(PORT, () => console.log(`Node server is running on PORT ${PORT} ...`))

