const knex = require('../database')
const { AUTH_TOKEN } = require('../config')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body,
      validPassword = await validator.isLength(password, { min: 6, max: 15 }),
      validEmail = await validator.isEmail(email)

    if (!validEmail || !validPassword) {
      throw new Error('Validation failed please check your input')
    }

    let userExists = await knex('user').where({ email }).first()
    if (!userExists) {
      throw new Error('User isn\'t exist')
    }

    const isEqual = await bcrypt.compare(password, userExists.password)
    if (!isEqual) {
      throw new Error('username or password is incorrect')
    }

    const token = await jwt.sign({ userId: userExists.id }, AUTH_TOKEN, { expiresIn: '365d' })
    return res.status(200).send({
      userId: userExists.id,
      token: token,
      tokenExp: 365
    })
  } catch (error) {
    next(error)
  }
}

const signup = async (req, res, next) => {
  try {
    const { email, password, nama } = req.body,
      validEmail = await validator.isEmail(email),
      validPassword = await validator.isLength(password, { min: 6, max: 15 }),
      hashedPassword = await bcrypt.hash(password, 12)

    if (!validEmail || !validPassword) {
      throw new Error('Validation failed please check your input')
    }

    let userExists = await knex('user').where({ email }).first()
    if (userExists) {
      throw new Error('User already exist')
    }

    let user = {
      nama,
      email,
      password: hashedPassword
    }
    await knex('user').insert(user)
    return res.status(200).send({
      nama,
      email
    })

  } catch (error) {
    next(error)
  }
}


module.exports = { login, signup }