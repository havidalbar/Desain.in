const validator = require('validator');
const knex = require('../database');
const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');

const { validation } = require('../middlewares');

const recommendation = async (req, res, next) => { }

const unhexUUID = uuid => {
  return new Buffer.from(uuid, 'hex');
}

const invitationDeleteTrx = (userInvitedId, UUIDHex) => {
  return new Promise((resolve, reject) => {
    knex.transaction(async trx => {
      try {

        await trx.from('user_invitation')
          .where('id_invited_user', userInvitedId)
          .del();

        await trx.from('invitation')
          .where('id', UUIDHex)
          .del();

      } catch (error) {
        console.log(error);
        reject(false);
      } finally {
        console.log(`Invitation Transaction Executed`);
      }
    });
    resolve(true);
  });
}

const acceptInvitation = async (req, res, next) => {
  try {
    const { uuid, confirmation } = req.body;
    const { 'userId': userInvitedId } = req.state;

    const isUUID = await validator.isLength(uuid, { min: 32, max: 32 });
    const isValidConfirmation = await confirmation == 1 || confirmation == 0;

    if (!isUUID || !isValidConfirmation) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let { 'status': checkUserIsDesigner } = await knex('user').select('status').where('id', userInvitedId).first();
    if (checkUserIsDesigner) {
      const error = new Error('User invited already a designer');
      res.status(406);
      return next(error);
    }

    let UUIDHex = unhexUUID(uuid);
    let checkUserIsInvited = await knex('invitation').where({ id: UUIDHex, id_invited_user: userInvitedId }).first();
    if (!checkUserIsInvited) {
      const error = new Error('Invitation not found');
      res.status(404);
      return next(error);
    }

    if (confirmation) await knex('user').update({ status: 1 }).where({ id: userInvitedId });

    let isTransactionSuccess = await invitationDeleteTrx(userInvitedId, UUIDHex);
    if (!isTransactionSuccess) {
      const error = new Error('Failed to delete invitation');
      res.status(409);
      return next(error);
    }

    return res.status(200).json({
      confirmation: confirmation,
      message: confirmation ? "Accepted" : "Rejected"
    })
  } catch (error) {
    next(error);
  }
}

const createInvitation = async (req, res, next) => {
  try {
    const { userInvitedId } = req.params;
    const { userId } = req.state;
    let UUID = new Buffer.from(uuidv4().replace(/-/g, ''), 'hex');

    let checkIsAlreadyInvited = await knex('user_invitation').where({ id_user: userId, id_invited_user: userInvitedId }).first();
    if (checkIsAlreadyInvited) {
      const error = new Error('This user has already invited');
      res.status(406);
      return next(error);
    }

    let { 'status': checkUserIsDesigner } = await knex('user').select('status').where('id', userId).first();
    if (!checkUserIsDesigner) {
      const error = new Error('You don\'t have permission to create Invitation');
      res.status(403);
      return next(error);
    }

    let { 'status': checkUserInvitedIsDesigner } = await knex('user').select('status').where('id', userInvitedId).first();
    if (checkUserInvitedIsDesigner) {
      const error = new Error('User invited already a designer');
      res.status(406);
      return next(error);
    }

    let userInvited = { id: UUID, id_invited_user: userInvitedId }
    let userAndDesigner = { id_user: userId, id_invited_user: userInvitedId }

    await knex('invitation').insert(userInvited);
    await knex('user_invitation').insert(userAndDesigner);

    return res.status(201).json({
      UUID: UUID.toString('hex'),
      userId: userInvitedId
    });

  } catch (error) {
    next(error);
  }
}

const cancelInvitation = async (req, res, next) => {
  try {
    const { uuid, userInvitedId } = req.body,
      { userId } = req.state,
      isUUID = await validator.isLength(uuid, { min: 32, max: 32 }),
      isUserInvitedIdValid = await userInvitedId > 0;

    if (!isUUID || !isUserInvitedIdValid) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkUserIsInviter = await knex('user_invitation').where({ id_user: userId, id_invited_user: userInvitedId }).first();
    if (!checkUserIsInviter) {
      const error = new Error('You don\'t have permission to cancel Invitation');
      res.status(403);
      return next(error);
    }

    let UUIDHex = unhexUUID(uuid);
    let checkInvitationValid = await knex('invitation').where('id', UUIDHex).first();
    if (!checkInvitationValid) {
      const error = new Error('Invitation not found');
      res.status(404);
      return next(error);
    }

    let isTransactionSuccess = await invitationDeleteTrx(userInvitedId, UUIDHex);
    if (!isTransactionSuccess) {
      const error = new Error('Failed to delete invitation');
      res.status(409);
      return next(error);
    }

    return res.status(200).json({
      message: "Successfully canceled the invitation"
    })
  } catch (error) {
    next(error);
  }
}

const getUserProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;
    let checkUser = await knex('user')
      .select('nama', 'email', 'phone_number', 'status', 'rating')
      .where('id', userId).first();
    if (!checkUser) {
      const error = new Error('User not found');
      res.status(404);
      return next(error);
    }

    return res.status(200).json({ user: checkUser })
  } catch (error) {
    next(error);
  }
}

const updateUser = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const updatePassword = async (req, res, next) => {
  try {
    let { userId } = req.state;
    if (userId) {
      let userExists = await knex('user').where({ id: userId }).first();
      if (userExists) {
        let { oldPassword, newPassword } = req.body;
        if (oldPassword || newPassword !== undefined) {
          const isEqual = await bcrypt.compare(oldPassword, userExists.password);
          if (isEqual) {
            validPassword = validator.isLength(newPassword, { min: 8 });
            if (validPassword) {
              try {
                hashedPassword = await bcrypt.hash(newPassword, 12);
              }
              catch (err) {
                const error = new Error(err);
                res.status(500);
                next(error);
              }
              try {
                let update = await knex('user')
                  .where({ id: userExists.id })
                  .update({
                    password: hashedPassword
                  });
                res.json({
                  message: "update"
                });
              }
              catch (err) {
                const error = new Error(err);
                res.status(500);
                next(error);
              }
            } else {
              validation(res, validPassword);
            }
          } else {
            const error = new Error("Password not match");
            res.status(406);
            next(error);
          }
        }
        else {
          const error = new Error("Password not provided");
          res.status(412);
          next(error);
        }
      }
      else {
        res.status(404).json({
          message: 'not found'
        });
      }
    }
    else {
      const error = new Error("User id not provided");
      res.status(412);
      next(error);
    }
  } catch (error) {
    next(error);
  }
}

const USER = {
  recommendation,
  createInvitation,
  acceptInvitation,
  cancelInvitation,
  getUserProfile,
  updateUser,
  updatePassword
}

module.exports = { ...USER }