const login = require('../validations/loginValidation');

module.exports = async (req, res, next) => {
  try {
    const { error } = await login.validateAsync(req.body, { abortEarly: false });
    if (error) throw new Error();
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        description: detail.message,
        name: detail.path.join('.')
      }))
    );
  }
};