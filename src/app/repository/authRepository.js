const usuarioSchema = require('../schema/usuarioSchema');

class AuthRepository {
  async login(email) {
    return usuarioSchema.findOne({ email }).select('+password');
  }
}
module.exports = new AuthRepository();