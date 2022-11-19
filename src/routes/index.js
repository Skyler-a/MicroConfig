const { Router } = require('express');
const Config = require('./configRoutes')
const Block = require('./blockListRoutes')
const Auth = require('./authRoutes')

module.exports = (server) => {
    server.use((req, res, next) => {
    Config(server, new Router());
    Block(server, new Router());
    Auth(server, new Router());
    next();
  });
};