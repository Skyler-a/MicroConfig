const ConfigService = require('../service/configService')

class ConfigController {
    async getConfig(req, res){
        try{
            const result = await ConfigService.getConfig()
            return res.status(200).json(...result)
        } catch (error) {
            return res.status(400).json(error)
        } 
    }
    async postConfig(req, res){
        try{
            const result = await ConfigService.postConfig(req.body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        } 
    }
    async updateConfig(req, res){
        try{
            const result = await ConfigService.updateConfig(req.body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        } 
    }

}

module.exports = new ConfigController()