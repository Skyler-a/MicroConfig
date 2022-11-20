const ConfigController = require('../app/controller/configController')
const authMiddleware = require('../app/middleware/authMiddleware')

module.exports = (server, routes, prefix = '/v1/config') => {
  routes.get('/', ConfigController.getConfig);
  routes.post('/', authMiddleware, ConfigController.postConfig);
  routes.put('/', authMiddleware, ConfigController.updateConfig)

  server.use(prefix, routes);
};