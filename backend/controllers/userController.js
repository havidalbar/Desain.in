// need models

const sign = (req, res, next) => {
  try {

    // let userExists = await User.findOne()

    if (!userExists) {
      throw new Error('User isn\'t exist')
    }

    const isEqual = await bcrypt.compare(password, userExists.password)
    if (!isEqual) {
      throw new Error('username or password is incorrect')
    }

    const token = await jwt.sign({
      userId: userExists.id
    }, AUTH_TOKEN, {
        expiresIn: '365d'
      })

    return {
      userId: userExists.id,
      token: token,
      tokenExp: 365,
    }
  } catch (error) {
    next(error)
  }
}

const signup = (req, res, next) => {

}


module.exports = { sign, signup }