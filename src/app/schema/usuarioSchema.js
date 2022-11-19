const mongoose = require('mongoose');
const bcript = require('bcryptjs');

const usuarioSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);

usuarioSchema.pre('save', async function password(next) {
  const hash = await bcript.hash(this.password, 10);
  this.password = hash;
  next();
});

const usuario = mongoose.model('usuario', usuarioSchema);
module.exports = usuario;