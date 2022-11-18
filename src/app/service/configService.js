const ConfigRepository = require('../repository/configRepository')

class ConfigService{
    async getConfig(){
        const result = await ConfigRepository.getConfig()
        return result
    }
    async postConfig(payload){
        const result = await ConfigRepository.postConfig(payload)
        return result
    }
    async updateConfig(id, payload){
        const result = await ConfigRepository.updateConfig(id, payload)
        return result
    }
}

module.exports = new ConfigService()