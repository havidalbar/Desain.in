const validator = require('validator');
const knex = require('../database');
const _ = require('lodash');

const chunkSize = 5;

const paketInsertTrx = paket => {
  // console.log(paket);
  return new Promise((resolve, reject) => {
    knex.transaction(async trx => {
      try {
        
        await trx.batchInsert('paket', paket, chunkSize)

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(false);
      } finally {
        console.log('Insert Paket Executed');
      }
    })
  });
}

const depositJasa = async (req, res, next) => {
  try {
    const { invoiceId, deposit } = req.body;

  } catch (error) {
    next(error);
  }
}
const beliJasa = async (req, res, next) => {
  try {
    const { userId, desainerId, paketId, subject, deskripsi } = req.body;
    const validDeskripsi = validator.isLength(deskripsi, { max: 4000 });
  } catch (error) {
    next(error);
  }
}

const jualJasa = async (req, res, next) => {
  try {
    const { kategoriId, deskripsi, tag} = req.body;
    const paket = req.body.paket;
    const { userId } = req.state;
    
    const checkUserIsDesigner = await knex('user').select('status').where('id', userId).first();
    if(!checkUserIsDesigner){
      const error = new Error('You don\'t have permission to jual jasa');
      res.status(403);
      return next(error);
    }

    const validDeskripsi = validator.isLength(deskripsi, { max: 400 });
    if(!validDeskripsi) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    if(kategoriId && deskripsi && tag && paket === null) {
      const error = new Error('Body Not Valid');
      res.status(422);
      return next(error);
    }

    if(paket.length > 3){
      const error = new Error('Paket length exceeds the specified limit');
      res.status(406);
      return next(error);
    }

    let isPaketValid = [true, true, true];
    for (let index = 0; index < paket.length; index++) {
      let checkValueBool = [
        paket[index].logo_transparan,
        paket[index].kualitas,
        paket[index].file_desain,
        paket[index].desain_atk,
        paket[index].sosmed_kit
      ];

      await _.assign(paket[index], { id_user: userId });

      console.log(checkValueBool);
      await _.forEach(checkValueBool, v => {
        if(!v.match(/[01]{1}/) || v.length > 1 || v < 0){
          isPaketValid[index] = false;
        }
      });
    }
    
    console.log(isPaketValid);
    if(isPaketValid.includes(false)){
      const error = new Error('Paket Features contains wrong value');
      res.status(406);
      return next(error);
    }
    
    let isPaketInsertedProperly = await paketInsertTrx(paket);
    if(!isPaketInsertedProperly){
      const error = new Error('Failed to insert paket');
      res.status(409);
      return next(error);
    }

  } catch (error) {
    next(error);
  }
}

const doStep = async (req, res, next) => {

}

const TRANSACTION = {
  beliJasa,
  jualJasa,
  depositJasa,
  doStep
}

module.exports = { ...TRANSACTION }