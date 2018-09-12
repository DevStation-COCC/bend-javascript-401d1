'use strict';

// 1st party
const EventEmitter = require('events');
const net = require('net');

// 3rd party
const uuid = require('uuid/v4');

const port = process.env.PORT || 3000;
const server = net.createServer();
const events = new EventEmitter();
const userPool = {};

let User = function(socket){
  let id = uuid();
  this.id = id;
  this.nickname = `User-${id}`;
  this.socket = socket;
}

server.on('connection', (socket) => {
  let user = new User(socket);
  userPool[user.id] = user;

  socket.on('data', (buffer) => {
    dispatchAction(user.nickname, buffer);
  });
});

let dispatchAction = (userName, buffer) => {
  let message = parse(buffer);
  events.emit(message.command, userName, message);
};

events.on('@all', (sender, message) => {
  for(let userId in userPool){
    let user = userPool[userId];
    user.socket.write(`<${sender}>: ${message.payload}\n`);
  }
})

let parse = (buffer) => {
  let text = buffer.toString().trim();
  if(!text.startsWith('@')) { return null; }

  let [command, payload] = text.split(/\s+(.*)/);
  console.log(command);
  return {command, payload};
}


server.listen(port, () => {
  console.log(`Chat server is up and running on port: ${port}`);
});