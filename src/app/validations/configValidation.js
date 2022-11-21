const Joi = require('joi');

const blockList = Joi.object().pattern(/^/, [
    Joi.array().min(1), 
    Joi.number().min(0), 
    Joi.boolean(), 
    Joi.string().min(1)
])

module.exports = blockList;