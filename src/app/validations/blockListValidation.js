const Joi = require('joi');

const blockList = Joi.object().pattern(/^/, [Joi.array().min(1)])

module.exports = blockList;