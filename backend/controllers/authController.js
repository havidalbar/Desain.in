const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../database');

const { AUTH_TOKEN } = require('../config');
const { validation } = require('../middlewares');



const login = async (req, res, next) => {
  try {
    const { email, password } = req.body,
      validEmail = validator.isEmail(email),
      validPassword = validator.isLength(password, { min: 8 });

    validation(res, validEmail, validPassword);

    let userExists = await knex('user').where({ email }).first();
    if (!userExists) {
      const error = new Error('User isn\'t exist');
      return res.status(404).json({
        error: error.message
      });
    }

    const isEqual = await bcrypt.compare(password, userExists.password);
    if (!isEqual) {
      const error = new Error('Wrong Password');
      return res.status(401).json({
        message: error.message
      });
    }

    const token = await jwt.sign({ userId: userExists.id }, AUTH_TOKEN, { expiresIn: '365d' });
    return res.status(200).json({
      userId: userExists.id,
      token: token,
      tokenExp: 365
    });

  } catch (error) {
    next(error);
  }
}

const signup = async (req, res, next) => {
  try {
    const { email, password, nama, phone_number } = req.body,
      validEmail = validator.isEmail(email),
      validPassword = validator.isLength(password, { min: 8 }),
      hashedPassword = await bcrypt.hash(password, 12);

    validation(validEmail, validPassword, res);

    let userExists = await knex('user').where({ email }).first();
    if (userExists) {
      const error = new Error('User already exist');
      return res.status(409).json({
        message: error.message
      });
    }

    let user = {
      nama,
      email,
      password: hashedPassword,
      phone_number
    }

    await knex('user').insert(user);
    return res.status(200).json({
      nama,
      email
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { login, signup }