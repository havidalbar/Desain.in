const jwt = require('jsonwebtoken');
const { AUTH_TOKEN } = require('../config');

const auth = async (req, res, next) => {
<<<<<<< HEAD


=======
>>>>>>> backend-dev
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.length > 0) {
      const [type, token] = authHeader.split(' ');
      if (!/^Bearer$/i.test(type)) {
        res.status(401).json({
          error: 'Wrong token format'
        });
      }

      const verified = await jwt.verify(token, AUTH_TOKEN);
      req.state = verified;
    }

    await next();
  } catch (error) {
    next(error);
  }
}

module.exports = { auth }