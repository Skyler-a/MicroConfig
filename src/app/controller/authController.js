const AuthService = require('../service/authService');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      return res.setHeader('token', result.token).status(200).json({ Message: 'Login Successfully', Token: result.token });
    } catch (Error) {
        return res.status(401).json(Error)
    }
  }
}
module.exports = new AuthController();