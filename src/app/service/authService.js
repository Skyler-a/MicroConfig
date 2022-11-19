const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repository/authRepository');
require('dotenv').config();

class AuthService {
  async login(email, password) {
    const result = await AuthRepository.login(email, password);
    if (!result) {
      throw new Error('user not found');
    }
    if (!(await bcript.compare(password, result.password))) {
      throw new Error('Senha inválida');
    }
    result.password = undefined;
    const token = jwt.sign({ id: result.id }, process.env.SECRET, {
      expiresIn: 600
    });
    return { result, token };
  }
}


module.exports = new AuthService()