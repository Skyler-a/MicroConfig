const ConfigController = require('../app/controller/configController')

module.exports = (server, routes, prefix = '/v1/config') => {
  routes.get('/', ConfigController.getConfig);
  server.use(prefix, routes);
};