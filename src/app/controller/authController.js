const AuthService = require('../service/authService');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      return res.setHeader('token', result.token).status(200).json({ Message: 'Logado com sucesso', Token: result.token });
    } catch (error) {
      return res.status(401).json(...error.message)
    }
  }
}
module.exports = new AuthController();