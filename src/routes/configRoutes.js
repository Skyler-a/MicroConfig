const ConfigController = require('../app/controller/configController')

module.exports = (server, routes, prefix = '/v1/config') => {
  routes.get('/', ConfigController.getConfig);
  routes.post('/', ConfigController.postConfig);
  routes.put('/:id', ConfigController.updateConfig)

  server.use(prefix, routes);
};