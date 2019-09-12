const jwt = require('jsonwebtoken');
const { AUTH_TOKEN } = require('../config');

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.length > 0) {
      const [type, token] = authHeader.split(' ');
      if (!/^Bearer$/i.test(type)) {
        const error = new Error("Wrong token Format");
        res.status(401);
        next(error);
      }

      const verified = await jwt.verify(token, AUTH_TOKEN);
      req.state = verified;
    } else {
      const error = new Error("Token not provided");
      res.status(401);
      next(error);
    }

    await next();
  } catch (err) {
    const error = new Error(err);
    res.status(500);
    next(error);
  }
}

module.exports = { auth }