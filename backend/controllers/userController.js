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
  knex.transaction(async trx => {
    try {

      await trx.from('user_invitation')
        .where('user_invitation.id_invited_user', userInvitedId)
        .del()

      await trx.from('invitation')
        .where('id', UUIDHex)
        .del()

    } catch (error) {
      trx.rollback();
      return res.status(409).json({
        message: "Failed to delete invitation"
      });
    }
  })
}

const acceptInvitation = async (req, res, next) => {
  try {
    const { uuid, confirmation } = req.body;
    const { 'userId': userInvitedId } = req.state;

    const isUUID = validator.isUUID(uuid, 4);
    const isValidConfirmation = confirmation == 1 || confirmation == 0;

    if (!isUUID && !isValidConfirmation) {
      return res.status(422).json({
        message: "Validation failed please check your input"
      });
    }

    let { 'status': checkUserIsDesigner } = await knex('user').select('status').where('id', userInvitedId).first();
    if (checkUserIsDesigner) {
      return res.status(406).json({
        message: "User invited already a designer"
      });
    }

    let checkUserIsInvited = await knex('user_invitation').where({ id_invited_user: userInvitedId }).first();
    if (!checkUserIsInvited) {
      return res.status(404).json({
        message: "Invitation not found"
      });
    }

    if (confirmation) await knex('user').update({ status: 1 }).where({ id: userInvitedId });

    let UUIDHex = unhexUUID(uuid);
    invitationDeleteTrx(userInvitedId, UUIDHex);

    return res.status(200).json({
      confirmation: confirmation ? "Accepted" : "Rejected"
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
      return res.status(406).json({
        message: "This user has already invited"
      });
    }

    let { 'status': checkUserIsDesigner } = await knex('user').select('status').where('id', userId).first();
    if (!checkUserIsDesigner) {
      return res.status(403).json({
        message: "You don\'t have permission to create Invitation"
      });
    }

    let { 'status': checkUserInvitedIsDesigner } = await knex('user').select('status').where('id', userInvitedId).first();
    if (checkUserInvitedIsDesigner) {
      return res.status(406).json({
        message: "User invited already a designer"
      });
    }

    let userInvited = { id: UUID, id_invited_user: userInvitedId }
    let userAndDesigner = { id_user: userId, id_invited_user: userInvitedId }

    await knex('invitation').insert(userInvited);
    await knex('user_invitation').insert(userAndDesigner);

    return res.status(201).json({
      UUID: UUID.toString('hex'),
      user: userInvitedId
    });

  } catch (error) {
    next(error);
  }
}

const cancelInvitation = async (req, res, next) => {
  try {
    const { uuid, userInvitedId } = req.body,
      { userId } = req.state,
      isUUID = validator.isUUID(uuid, 4),
      isUserInvitedIdValid = userInvitedId > 0;

    if (!isUUID && !isUserInvitedIdValid) {
      return res.status(422).json({
        message: "Validation failed please check your input"
      })
    }

    let checkUserIsInviter = await knex('user_invitation').where({ id_user: userId, id_invited_user: userInvitedId }).first();
    if (!checkUserIsInviter) {
      return res.status(403).json({
        message: "You don\'t have permission to cancel Invitation"
      })
    }

    let UUIDHex = unhexUUID(uuid);
    let checkInvitationValid = await knex('invitation').where('id', UUIDHex).first();
    if (!checkInvitationValid) {
      return res.status(404).json({
        message: "Invitation not found"
      })
    }

    invitationDeleteTrx(userInvitedId, UUIDHex);
    return res.status(200).json({
      message: "Successfully canceled the invitation"
    })
  } catch (error) {
    next(error);
  }
}

const getUserProfile = async (req, res, next) => {
  try {

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
    let { userId } = req.params;
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
                console.log(hashedPassword);
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