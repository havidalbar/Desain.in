const validator = require('validator');
const knex = require('../database');

const recommendation = async (req, res, next) => {}

const acceptInvitation = async (req, res, next) => {
  try {
    const { invitationId, status } = req.body;

  } catch (error) {
    next(error);
  }
}

const createInvitation = async (req, res, next) => {
  try {
    const { userId } = req.body;

  } catch (error) {
    next(error);
  }
}

const cancelInvitation = async (req, res, next) => {
  try {
    
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