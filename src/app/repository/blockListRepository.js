const blockListSchema = require('../schema/blockListSchema')

class BlockListRepository{
    async getBlockList(){
        return blockListSchema.find()
    }
    async updateBlockList(payload){
        return blockListSchema.findOneAndUpdate({$push: payload})
    }
}

module.exports = new BlockListRepository()