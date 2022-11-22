const ConfigController = require('../app/controller/configController')
const authMiddleware = require('../app/middleware/authMiddleware')
const configMiddleware = require('../app/middleware/configMiddleware')

module.exports = (server, routes, prefix = '/v1/config') => {
  routes.get('/', ConfigController.getConfig);
  routes.put('/', authMiddleware, configMiddleware, ConfigController.updateConfig)

  server.use(prefix, routes);
};