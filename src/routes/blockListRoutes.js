const BlockListController = require('../app/controller/blockListController')
const authMiddleware = require('../app/middleware/authMiddleware');
const blockListMiddleware = require('../app/middleware/blockListMiddleware');

module.exports = (server, routes, prefix = '/v1/block_list') => {
  routes.get('/', BlockListController.getBlockList);
  routes.put('/', authMiddleware, blockListMiddleware, BlockListController.updateBlockList);

  server.use(prefix, routes);
};