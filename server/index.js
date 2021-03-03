const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000

const router = require('./router')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);


io.on('connection', (socket) => {
    console.log('We have new connection');

    socket.on('join', ({ name, room }, callback) => {
        try {
            console.log(name, room);

        } catch (error) {
            callback({ error })
        }

    })

    socket.on("disconnect", () => {
        console.log("User has left!!!!!!");
    })
})


server.listen(PORT, () => console.log(`Server running on PORT:- http://localhost:${PORT}`))