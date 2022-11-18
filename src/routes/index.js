const { Router } = require('express');
const Config = require('./configRoutes')

module.exports = (server) => {
    server.use((req, res, next) => {
    Config(server, new Router());
    next();
  });
};