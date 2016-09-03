'use strict';

const fs = require('fs');
const http = require('http');
const express = require('express');

let app = express();

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let config = require('./config/config')[env];
require('./config/express')(app, config);
require('./config/mongoose')(config);
const httpServer = http.createServer(app);
console.log(config.port);
if (!module.parent) {
  httpServer.listen(config.port, function() {
    console.log("Server listening on: http://localhost:%s", config.port);
  });
}

let io = require('socket.io')(httpServer);

require('./routes/routes')(app, io);


module.exports = app;