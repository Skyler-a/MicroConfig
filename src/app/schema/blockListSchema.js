const mongoose = require('mongoose');

const blockListSchema = new mongoose.Schema(
  {
    block_list: [{
        type: String,
    }],

    over_18_list: [{
        type: String
    }],

   },
  {
    versionKey: false
  }
);

const blockList = mongoose.model('blockList', blockListSchema);
module.exports = blockList;