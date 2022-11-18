const ConfigSchema = require('../schema/configSchema')

class ConfigRepository{
    async getConfig(){
        return ConfigSchema.find()
    }
}

module.exports = new ConfigRepository()