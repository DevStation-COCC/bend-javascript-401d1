'use strict';

const socketPool = {};

socketPool.remove = (id) => {
  if( ! socketPool[id] && socketPool[id].socket ) { return; }
  let socket = socketPool[id].socket;
  socket.destroy();
  delete socketPool[id];
};

module.exports = socketPool;