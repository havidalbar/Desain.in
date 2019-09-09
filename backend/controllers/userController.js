const validator = require('validator');
const knex = require('../database');
const bcrypt = require('bcrypt');
const {validation } = require('../middlewares/index');

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
   let {userId} = req.params;
   if (userId){
    let userExists = await knex('user').where({ id:userId }).first();
    if (userExists){
      let {oldPassword,newPassword}=req.body;
      if (oldPassword||newPassword !== undefined){
    
       
        const isEqual = await bcrypt.compare(oldPassword, userExists.password);
        if (isEqual){

          validPassword = validator.isLength(newPassword, { min: 8 });
          if (validPassword){
           
           try{
            hashedPassword = await bcrypt.hash(newPassword, 12);
           }
           catch(err){
             const error = new Error (err);
             res.status(500);
             next(error);
           }
           try{
             console.log(hashedPassword);
           let update = await knex('user')
            .where({id:userExists.id})
            .update({
              password:hashedPassword
            });
             res.json({
               message:"update"
             })
           
          }
          catch(err){
            const error = new Error (err);
            res.status(500);
            next(error);
          }
         
          }
          else
          validation(res,validPassword);
        }
        else{
          const error = new Error("Password not match");
          res.status(406);
          next(error);       
         }


      }
      else{
        const error = new Error("Password not provided");
        res.status(412);
        next(error);
      }
  }
  else{
    res.status(404).json({
      message:'not found'
    });
  }
   }
   else{
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