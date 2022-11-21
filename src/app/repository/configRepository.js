const configSchema = require('../schema/configSchema')

class ConfigRepository{
    async getConfig(){
        return configSchema.find()
    }
    async postConfig(payload){
        return configSchema.create(payload)
    }
    async updateConfig(payload){
        return configSchema.replaceOne(payload)
    }
}

module.exports = new ConfigRepository()