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

    if(!validEmail || !validPassword){
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let userExists = await knex('user').where({ email }).first();
    if (!userExists) {
      const error = new Error('User isn\'t exist');
      res.status(404);
      return next(error);
    }

    const isEqual = await bcrypt.compare(password, userExists.password);
    if (!isEqual) {
      const error = new Error('Wrong Password');
      res.status(401);
      return next(error);
    }
    const token = await jwt.sign({ userName:userExists.nama,userId: userExists.id, status: userExists.status }, AUTH_TOKEN, { expiresIn: '365d' });
    return res.status(200).json({
      userName:userExists.userName,
      userId: userExists.id,
      status: userExists.status,
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

    if(!validEmail || !validPassword){
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let userExists = await knex('user').where({ email }).first();
    if (userExists) {
      const error = new Error('User already exist');
      res.status(409);
      return next(error);
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