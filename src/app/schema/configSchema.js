const mongoose = require('mongoose');

const configSchema = new mongoose.Schema(
  {
    linkDiscord: {
      type: String,
      required: true
    },
    nivelAtivo: {
      type: Boolean,
      required: true
    },
    adsOn: {
      type: Boolean,
      required: true
    },
    politica: {
      type:String,
      required: true
    },
    build: {
      type: Number,
      required: true
    },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: true
  }
);

const config = mongoose.model('config', configSchema);
module.exports = config;