const configSchema = require('../schema/configSchema')

class ConfigRepository{
    async getConfig(){
        return configSchema.find()
    }
    async updateConfig(payload){
        return configSchema.replaceOne(payload)
    }
}

module.exports = new ConfigRepository()