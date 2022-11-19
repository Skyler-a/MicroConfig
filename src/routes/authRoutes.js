const authController = require('../app/controller/authController');

module.exports = (server, routes, prefix = '/v1/authenticate') => {
  routes.post('/', authController.login);

  server.use(prefix, routes);
};