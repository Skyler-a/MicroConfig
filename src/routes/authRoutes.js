const authController = require('../app/controller/authController');
const loginMiddleware = require('../app/middleware/loginMiddleware')

module.exports = (server, routes, prefix = '/v1/authenticate') => {
  routes.post('/', loginMiddleware, authController.login);

  server.use(prefix, routes);
};