const { Router } = require('express');
const Config = require('./configRoutes')
const Block = require('./blockListRoutes')

module.exports = (server) => {
    server.use((req, res, next) => {
    Config(server, new Router());
    Block(server, new Router());
    next();
  });
};