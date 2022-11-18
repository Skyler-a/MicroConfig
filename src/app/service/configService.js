const ConfigRepository = require('../repository/configRepository')

class ConfigService{
    async getConfig(){
        const result = await ConfigRepository.getConfig()
        return result
    }
}

module.exports = new ConfigService()