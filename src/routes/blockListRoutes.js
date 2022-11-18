const blockListController = require('../app/controller/blockListController');
const BlockListController = require('../app/controller/blockListController')

module.exports = (server, routes, prefix = '/v1/block_list') => {
  routes.get('/', BlockListController.getBlockList);
  routes.put('/', blockListController.updateBlockList);

  server.use(prefix, routes);
};