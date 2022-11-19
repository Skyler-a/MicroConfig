const BlockListController = require('../app/controller/blockListController')
const authMiddleware = require('../app/middleware/authMiddleware')

module.exports = (server, routes, prefix = '/v1/block_list') => {
  routes.get('/', authMiddleware, BlockListController.getBlockList);
  routes.put('/', BlockListController.updateBlockList);

  server.use(prefix, routes);
};