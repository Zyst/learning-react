const express = require('express');

const app = express();

const connections = [];
const users = [];

app.use(express.static('./public'));

const server = app.listen(3000);

const io = require('socket.io').listen(server);

io.sockets.on('connection', socket => {
  connections.push(socket);
  console.log(`Connected: ${connections.length} sockets connected.`);

  socket.on('messageAdded', payload => {
    const newMessage = {
      timeStamp: payload.timeStamp,
      text: payload.text,
      user: payload.user,
    };

    io.emit('messageAdded', newMessage);
  });

  socket.on('userJoined', payload => {
    const newUser = {
      id: this.id,
      name: payload.name,
    };

    users.push(newUser);
    console.log(`${payload.name} has joined the chat room`);
    io.emit('userJoined', users);
  });

  socket.once('disconnect', () => {
    users.forEach((user, index) => {
      if (user.id === this.id) {
        console.log(`${user.name} has disconnected.`);
        users.splice(index, 1);
      }
    });

    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log(`Disconnected: ${connections.length} sockets connected.`);
    io.emit('disconnect', users);
  });
});

console.log('Server is running on port 3000');
