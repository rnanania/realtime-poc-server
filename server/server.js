const express = require('express');
const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const { getRestrictions, generateRestriction } = require('./utils/restriction');

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.port || 3000;

const app = express();
app.use(bodyParser.json());

app.get('/api/restrictions', (req, resp) => {
    const restrictions = getRestrictions();
    resp.send({restrictions});
});

let server = http.createServer(app);
let io = socketIO(server);

const PRL_ROOM = 'PRL_UPDATE';
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');    
    socket.join(PRL_ROOM);

    // New Restriction addition
    socket.on('newRestriction', () => {
        const newRestriction = generateRestriction();
        io.to(PRL_ROOM).emit('newRestriction', newRestriction);
    });

    // User got disconnected
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(PORT, () => {
    console.info(`App running at ${PORT}`);
});