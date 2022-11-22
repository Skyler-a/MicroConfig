const BlockListService = require('../service/blockListService')

class BlockListController {
    async getBlockList(req, res){
        try{
            const result = await BlockListService.getBlockList()
            return res.status(200).json(...result)
        } catch (error) {
            return res.status(400).json(error)
        } 
    }
    async updateBlockList(req, res){
        try{
            const result = await BlockListService.updateBlockList(req.body)
            return res.status(200).json({mensagem: "Atualizado com sucesso"})
        } catch (error) {
            return res.status(400).json(error.message)
        } 
    }

}

module.exports = new BlockListController()