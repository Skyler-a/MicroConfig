const configSchema = require('../schema/configSchema')

class ConfigRepository{
    async getConfig(){
        return configSchema.find()
    }
    async postConfig(payload){
        return configSchema.create(payload)
    }
    async updateConfig(id, payload){
        return configSchema.findByIdAndUpdate(id, payload)
    }
}

module.exports = new ConfigRepository()