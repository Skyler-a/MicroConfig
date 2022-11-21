const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repository/authRepository');
const BadRequest = require('../error/badRequest')
require('dotenv').config();

class AuthService {
  async login(email, password) {
    const result = await AuthRepository.login(email, password);
    if (!result) {
      throw new BadRequest('Usuário não encontrado');
    }
    if (!(await bcript.compare(password, result.password))) {
      throw new BadRequest('Senha inválida');
    }
    result.password = undefined;
    const token = jwt.sign({ id: result.id }, process.env.SECRET, {
      expiresIn: 900
    });
    return { result, token };
  }
}


module.exports = new AuthService()