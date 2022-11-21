const ConfigRepository = require('../repository/configRepository')
const BadRequest = require('../error/badRequest')

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
        
        if(!Object.keys(payload).length){
            throw new BadRequest("Campo vazio")
        }

        const result = await ConfigRepository.updateConfig(payload)
        return result
    }
}

module.exports = new ConfigService()