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
    async updateConfig(payload){
        const result = await ConfigRepository.updateConfig(payload)
        return result
    }
}

module.exports = new ConfigService()