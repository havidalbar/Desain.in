const validator = require('validator');
const knex = require('../database');
const moment = require('moment-timezone');
const _ = require('lodash');

// const chunkSize = 5;

const paketInsertTrx = paket => {
  // console.log(paket);
  return new Promise((resolve, reject) => {
    knex.transaction(async trx => {
      try {

        await trx.batchInsert('paket', paket)

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(false);
      } finally {
        console.log('Insert Paket Executed');
      }
    });
  });
}

const desainerUpdateTrx = (kategoriId, deskripsi, oldTag, newTag, userId) => {
  return new Promise((resolve, reject) => {
    knex.transaction(async trx => {
      try {
        // insert kategori_user (kelar)
        // insert tag_user (kelar)
        // insert tag (kelar)
        // update user's deskripsi (kelar)

        await trx.update('deskripsi', deskripsi)
          .into('user')
          .where('id', userId);

        await trx.insert({
          'id_user': userId,
          'id_kategori': kategoriId
        }).into('kategori_user');

        let getTagId = await trx.batchInsert('tag', newTag);

        let storedNewTagId = [];
        for (const i in newTag) {
          storedNewTagId.push({
            id_user: userId,
            id_tag: getTagId++
          });
        }

        oldTag.push(...storedNewTagId);
        // console.log(oldTag);
        await trx.batchInsert('tag_user', oldTag);

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      } finally {
        console.log('Update to desainer Executed');
      }
    });
  });
}

const depositJasa = async (req, res, next) => {
  try {
    let { transactionId, deposit } = req.body;
    let { "userId": id_user } = req.state;

    const validateTransaction = validator.isInt(transactionId, { min: 1 });
    const validateDeposit = validator.isInt(deposit, { min: 1 });

    if (!validateDeposit || !validateTransaction) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkUserTransaction = await knex('transaction').where({ 'id': transactionId, id_user }).first();
    if (!checkUserTransaction) {
      const error = new Error('User isn\'t authorized');
      res.status(403);
      return next(error);
    }

    let { id_desainer, harga, timeout } = checkUserTransaction;
    let currentTime = moment.tz('Asia/Jakarta');

    if (currentTime > timeout) {
      let deleteTransaction = await knex('transaction').where('id', transactionId).delete();
      if (!deleteTransaction) {
        const error = new Error('Failed to delete transaction please check any input');
        res.status(406);
        return next(error);
      }

      const error = new Error('Failed to pay deposit after 1 hour from your last transaction');
      res.status(408);
      return next(error);
    }

    if (deposit != harga) {
      const error = new Error('Failed to deposit please pay as your transaction\'s price');
      res.status(406)
      return next(error);
    }

    let updateDeposit = await knex('transaction').update({ deposit }).where({ 'id': transactionId, id_user });
    if (!updateDeposit) {
      const error = new Error('Failed to update deposit please check any input');
      res.status(406);
      return next(error);
    }

    return res.status(200).json({
      transaction: {
        id: transactionId,
        id_user,
        id_desainer,
        deposit
      }
    });
  } catch (error) {
    next(error);
  }
}

const beliJasa = async (req, res, next) => {
  try {
    let { "desainerId": id_desainer, "paketId": id_paket, subject, deskripsi } = req.body;
    let { "userId": id_user } = req.state;
    // const { lampiran } = req.file;
    // validate this lampiran soon !

    const validDeskripsi = validator.isLength(deskripsi, { max: 4000 });
    if (!validDeskripsi) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkTransaction = await knex('transaction')
      .where({
        id_user,
        id_desainer,
        id_paket
      }).first();
    if (checkTransaction) {
      const error = new Error('User already has transaction with same packet and designer');
      res.status(403);
      return next(error);
    }

    let { harga } = await knex('paket').select('harga').where('id', id_paket).first();
    console.log(harga);

    let currentTime = moment.tz('Asia/Jakarta');
    let timeout = moment(currentTime).add(1, 'hours');
    timeout = timeout.format('YYYY-MM-DD HH:mm:ss');

    let transaction = {
      id_user,
      id_desainer,
      id_paket,
      subject,
      deskripsi,
      timeout,
      harga
    };

    let insertTransaction = await knex('transaction').insert(transaction);
    console.log(insertTransaction);
    if (!insertTransaction) {
      const error = new Error('Failed to create transaction please check your input');
      res.status(409);
      return next(error);
    }

    return res.status(201).json({
      transaction,
      message: "Please pay your deposit first to continue the transaction"
    })

  } catch (error) {
    next(error);
  }
}

const jualJasa = async (req, res, next) => {
  try {
    let { kategoriId, deskripsi, tag } = req.body;
    let paket = req.body.paket;
    let { userId } = req.state;

    let checkUserIsDesigner = await knex('user').select('status').where('id', userId).first();
    if (!checkUserIsDesigner) {
      const error = new Error('You don\'t have permission to jual jasa');
      res.status(403);
      return next(error);
    }

    let validDeskripsi = validator.isLength(deskripsi, { max: 400 });
    if (!validDeskripsi) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    if (kategoriId && deskripsi && tag && paket === null) {
      const error = new Error('Body Not Valid');
      res.status(422);
      return next(error);
    }

    let newTag = [];
    let oldTag = [];

    // [ 1, 3, 5, 'Designer', 2, 'Illustration' ]
    tag.filter(val => {
      switch (typeof val) {
        case 'number':
          oldTag.push({
            id_user: userId,
            id_tag: val
          });
          break;
        case 'string':
          newTag.push({ title: val });
          break;
        default:
          // this nothing happen 
          break;
      }
    })

    console.log(oldTag);
    console.log(newTag);

    let isDesainerUpdateSuccess = await desainerUpdateTrx(kategoriId, deskripsi, oldTag, newTag, userId);
    if (!isDesainerUpdateSuccess) {
      const error = new Error('Failed to update desainer data');
      res.status(409);
      return next(error);
    }

    if (paket.length > 3) {
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
        if (!v.match(/[01]{1}/) || v.length > 1 || v < 0) {
          isPaketValid[index] = false;
        }
      });
    }

    console.log(isPaketValid);
    if (isPaketValid.includes(false)) {
      const error = new Error('Paket Features contains wrong value');
      res.status(406);
      return next(error);
    }

    let isPaketInsertedProperly = await paketInsertTrx(paket);
    if (!isPaketInsertedProperly) {
      const error = new Error('Failed to insert paket');
      res.status(409);
      return next(error);
    }

    return res.status(200).json({
      userId,
      kategori: kategoriId,
      tag: tag,
      deskripsi: deskripsi,
      paket
    })

  } catch (error) {
    next(error);
  }
}

const editJasaDesainer = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const editJasaPaket = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const getKategori = async (req, res, next) => {
  try {
    let kategoriResult = await knex('kategori').whereIn('id', [1, 2, 3]);
    if (!kategoriResult) {
      const error = new Error('Something wrong to load kategori');
      res.status(409);
      return next(error);
    }

    return res.status(200).json({
      kategori: kategoriResult
    })

  } catch (error) {
    next(error);
  }
}

const getTag = async (req, res, next) => {
  try {
    let { tag } = req.params;
    const allowedTag = validator.matches(tag, /^[a-zA-Z ]{0,50}$/);
    if (!allowedTag) {
      const error = new Error('Only alphabet allowed with maximum 50 char length');
      res.status(406);
      return next(error);
    }

    let tagResult = await knex('tag').where('title', 'like', `%${tag}%`).limit(20);

    const tagResultSummary = {
      statusCode: tagResult.length > 0 ? 200 : 404,
      tags: tagResult.length > 0 ? tagResult : []
    };

    return res.status(tagResultSummary.statusCode)
      .json({ tags: tagResultSummary.tags });

  } catch (error) {
    next(error);
  }
}

const getAllTag = async (req, res, next) => {
  try {
    let tagResult = await knex('tag').limit(30);

    return res.status(200).json({
      tags: tagResult
    });

  } catch (error) {
    next(error);
  }
}

const doStep = async (req, res, next) => {

}

const createStep = async (req, res, next) => {
  try {
    let { userId } = req.state; // DESAINER
    let { nama, persen } = req.body;

    const validateNama = validator.isLength(nama, { max: 100 });
    const validatePersen = validator.isInt(persen, { min: 0, max: 100 });

    if (!validateNama || !validatePersen) {
      const error = new Error('Failed to validate nama or persen');
      res.status(406);
      return next(error);
    }

    let checkUserIsDesigner = await knex('user').select('status').where('id', userId).first();
    if (!checkUserIsDesigner) {
      const error = new Error('You don\'t have permission to create step');
      res.status(403);
      return next(error);
    }



    // PENDING

  } catch (error) {
    next(error);
  }
}

const TRANSACTION = {
  beliJasa,
  jualJasa,
  depositJasa,
  editJasaDesainer,
  editJasaPaket,
  doStep,
  getKategori,
  getTag,
  getAllTag,
  createStep
}

module.exports = { ...TRANSACTION }