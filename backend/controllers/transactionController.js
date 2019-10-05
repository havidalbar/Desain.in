const validator = require('validator');
const knex = require('../database');
const moment = require('moment-timezone');
const _ = require('lodash');

// const chunkSize = 5;

const stepInsertTrx = (step, transactionId) => {
  return new Promise((resolve, reject) => {
    knex.transaction(async trx => {
      try {

        let getStepId = await trx.insert({ ...step }).into('step');

        await trx.insert({
          'id_transaction': transactionId,
          'id_step': getStepId
        }).into('transaction_step');

        resolve(getStepId);
      } catch (error) {
        console.log(error);
        reject(false);
      } finally {
        console.log('Insert Step Executed');
      }
    })
  })
}

const stepDeleteTrx = (stepId) => {
  return new Promise((resolve, reject) => {
    knex.transaction(async trx => {
      try {

        await trx.from('transaction_step')
          .where('id_step', stepId)
          .del();

        await trx.from('step')
          .where('id', stepId)
          .del();

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(false);
      } finally {
        console.log('Delete Step Executed');
      }
    })
  })
}

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
      const error = new Error('User isn\'t authorized or there is no transaction');
      res.status(403);
      return next(error);
    }

    let { id_desainer, harga, "deposit": deposit_detail ,timeout } = checkUserTransaction;
    let currentTime = moment.tz('Asia/Jakarta');

    let transaction = {
      id: transactionId,
      id_user,
      id_desainer
    }

    if(deposit_detail) {
      _.assign(transaction, { deposit: deposit_detail });
      return res.status(200).json({ transaction });
    }

    if (currentTime > timeout) {
      let deleteTransaction = await knex('transaction').where('id', transactionId).delete();
      if (!deleteTransaction) {
        const error = new Error('Failed to delete transaction please check any input');
        res.status(409);
        return next(error);
      }

      const error = new Error('Failed to pay deposit after 1 hour from your last transaction');
      res.status(406);
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
      res.status(409);
      return next(error);
    }

    _.assign(transaction, { deposit });
    return res.status(200).json({ transaction });
  } catch (error) {
    next(error);
  }
}

const beliJasa = async (req, res, next) => {
  try {
    let { "desainerId": id_desainer, "paketId": id_paket, subject, deskripsi } = req.body;
    let { "userId": id_user } = req.state;
    let { gcsObject, gcsObjectUrl } = req.file;

    if(!gcsObject && !gcsObjectUrl){
      const error = new Error('Failed to upload files');
      res.status(406);
      return next(error);
    }

    const validDeskripsi = validator.isLength(deskripsi, { max: 4000 });
    if (!validDeskripsi) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkTransaction = await knex('transaction')
      .where({ id_user, id_desainer, id_paket })
      .orWhere({ id_user, id_desainer })
      .first();
    if (checkTransaction) {
      const error = new Error('User already has transaction with same packet and or designer');
      res.status(403);
      return next(error);
    }

    let { harga } = await knex('paket').select('harga').where('id', id_paket).first();
    console.log(harga);

    let currentTime = moment.tz('Asia/Jakarta');
    let timeout = moment(currentTime).add(1, 'hours');
    timeout = timeout.format('YYYY-MM-DD HH:mm:ss');

    let lampiran = gcsObjectUrl;
    let transaction = {
      id_user,
      id_desainer,
      id_paket,
      subject,
      deskripsi,
      lampiran,
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
    let { userId } = req.state;
    const checkUserIsDesigner = await knex('user').select('status').where('id', userId).first();
    if(!checkUserIsDesigner) {
      const error = new Error('You dont have permission to edit jasa');
      res.status(403);
      return next(error)
    }

    // menang


  } catch (error) {
    next(error);
  }
}

const editJasaPaket = async (req, res, next) => {
  try {

    // menang

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
      res.status(422);
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

const createStep = async (req, res, next) => {
  try {
    let { userId } = req.state;
    let { transactionId } = req.params;
    let { nama, persen } = req.body;

    const validateNama = validator.isLength(nama, { max: 100 });
    const validatePersen = validator.isFloat(persen, { min: 0., max: 100. });
    const validateTransactionId = validator.isLength(transactionId, { min: 1 });

    if (!validateNama || !validatePersen || !validateTransactionId) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkUserIsDesigner = await knex('transaction').where({ 'id': transactionId, 'id_desainer': userId }).first();
    if (!checkUserIsDesigner) {
      const error = new Error('You don\'t have permission to create step on those transaction');
      res.status(403);
      return next(error);
    }

    let { total_persen, harga } = await knex({ s: 'step' })
      .select(knex.raw('coalesce(sum(s.persen), 0) as total_persen, t.harga as harga'))
      .join({ ts: 'transaction_step' }, 'ts.id_step', 's.id')
      .join({ t: 'transaction' }, 't.id', 'ts.id_transaction')
      .where('ts.id_transaction', transactionId)
      .first();

    let max_persen = 100 - total_persen;
    if (persen > max_persen) {
      const error = new Error('Failed to make a percent change, please check your percent limit again');
      res.status(409);
      return next(error);
    }

    harga *= (persen / 100);
    harga = Math.ceil(harga);

    let step = {
      nama,
      harga,
      persen
    }

    let insertStep = await stepInsertTrx(step, transactionId);
    if (!insertStep) {
      const error = new Error('Failed to insert step, please check your input');
      res.status(409);
      return next(error);
    }

    return res.status(201).json({ "id": insertStep[0], ...step });
  } catch (error) {
    next(error);
  }
}

const updateStep = async (req, res, next) => {
  try {
    let { userId } = req.state;
    let { nama, persen } = req.body;
    let { transactionId, stepId } = req.params;

    const validateNama = validator.isLength(nama, { max: 100 });
    const validatePersen = validator.isFloat(persen, { min: 0., max: 100. });

    if (!validateNama || !validatePersen){
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkUserIsDesigner = await knex('user').select('status').where('id', userId).first();
    if (!checkUserIsDesigner) {
      const error = new Error('User isn\'t authorized');
      res.status(403);
      return next(error);
    }

    let checkUserHasTransaction = await knex({ s: 'step' })
      .join({ ts: 'transaction_step' }, 'ts.id_step', 's.id')
      .join({ t: 'transaction' }, 't.id', 'ts.id_transaction')
      .where({
        't.id_desainer': userId,
        'ts.id_step': stepId
      })
      .first();
    if (!checkUserHasTransaction) {
      const error = new Error('Failed to find your step, please check your authorization or input');
      res.status(406);
      return next(error);
    }
    
    let { status } = checkUserHasTransaction;
    if (status) {
      const error = new Error('Can\'t change step that has already finished');
      res.status(409);
      return next(error);
    }

    let { "persen": step_persen } = await knex({ s: 'step' })
      .join({ ts : 'transaction_step' }, 'ts.id_step', 's.id')
      .where({ 'ts.id_transaction' : transactionId, 's.id': stepId })
      .first(); 

    let { total_persen, harga } = await knex({ s: 'step' })
    .select(knex.raw('coalesce(sum(s.persen), 0) as total_persen, t.harga as harga'))
    .join({ ts: 'transaction_step' }, 'ts.id_step', 's.id')
    .join({ t: 'transaction' }, 't.id', 'ts.id_transaction')
    .where('ts.id_transaction', transactionId)
    .first();

    let max_persen = 100 - total_persen;
    if (persen > step_persen + max_persen){  
      const error = new Error('Failed to make a percent change, please check your percent limit again');
      res.status(409);
      return next(error);
    }
    
    harga *= (persen / 100);
    harga = Math.ceil(harga);

    let step = {
      nama,
      harga,
      persen
    }

    let insertStep = await knex('step').update(step).where('id', stepId);
    if (!insertStep) {
      const error = new Error('Failed to update step, please check your input');
      res.status(409);
      return next(error);
    }

    return res.status(200).json({ step });
  } catch (error) {
    next(error);
  }
}

const deleteStep = async (req, res, next) => {
  try {
    let { stepId, transactionId } = req.params;
    let { userId } = req.state;

    const validateStepId = validator.isInt(stepId, { allow_leading_zeroes: false });
    if (!validateStepId) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkUserIsDesigner = await knex('user').select('status').where('id', userId).first();
    if (!checkUserIsDesigner) {
      const error = new Error('User isn\'t authorized');
      res.status(403);
      return next(error);
    }

    let checkUserHasTransaction = await knex({ s: 'step' })
      .join({ ts: 'transaction_step' }, 'ts.id_step', 's.id')
      .join({ t: 'transaction' }, 't.id', 'ts.id_transaction')
      .where({
        't.id_desainer': userId,
        'ts.id_step': stepId,
        'ts.id_transaction': transactionId
      })
      .first();
    if (!checkUserHasTransaction) {
      const error = new Error('Failed to find your step, please check your authorization or input');
      res.status(404);
      return next(error);
    }

    let { status } = checkUserHasTransaction;
    if(status){
      const error = new Error('Can\'t delete your step that has already finished');
      res.status(409);
      return next(error);
    }

    let deleteStep = await stepDeleteTrx(stepId);
    if (!deleteStep) {
      const error = new Error('Failed to delete step, please check your input');
      res.status(409);
      return next(error);
    }

    return res.status(200).json({
      userId,
      stepId,
      message: "Step deleted"
    });
  } catch (error) {
    next(error);
  }
}

const submitStep = async (req, res, next) => {
  try {
    let { gcsObject, gcsObjectUrl } = req.file;
    let { transactionId, stepId } = req.params;
    
    if(!gcsObject && !gcsObjectUrl){
      const error = new Error('Failed to upload files');
      res.status(406);
      return next(error);
    }

    let submitStep = await knex('step').update({ status: 1, image: gcsObjectUrl }).where('id', stepId);
    if(!submitStep){
      const error = new Error('Failed to submit files data');
      res.status(406);
      return next(error);
    }

    let getUpdatedStep = await knex('step').where('id', stepId).first();
    if(!getUpdatedStep){
      const error = new Error('Failed to get step data');
      res.status(406);
      return next(error);
    }

    return res.status(200).json({ 
      "transaction": transactionId,
      "step": getUpdatedStep 
    });
  } catch (error) {
    next(error);
  }
}

const acceptStep = async (req, res, next) => {
  try {
    let { confirmation } = req.body;
    let { transactionId, stepId } = req.params;
    let { userId } = req.state;

    if(!confirmation.match(/[01]{1}/)){
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let checkUserHasTransaction = await knex({ s: 'step' })
      .select('s.*')
      .join({ ts: 'transaction_step' }, 'ts.id_step', 's.id')
      .join({ t: 'transaction' }, 't.id', 'ts.id_transaction')
      .where({
        't.id_user': userId,
        'ts.id_transaction': transactionId,
        'ts.id_step': stepId
      })
      .first();
    if (!checkUserHasTransaction) {
      const error = new Error('User isn\'t authorized or there is no transaction');
      res.status(403);
      return next(error);
    }

    let { status } = checkUserHasTransaction;
    if(!status){
      const error = new Error('Failed to accept, please ask designer to finish his design');
      res.status(409);
      return next(error);
    }

    if(confirmation == 0){
      let updateStepConfirmation = await knex('step')
        .update({ status : 1 })
        .where({ id : stepId })
      if(!updateStepConfirmation){
        const error = new Error('Failed to update status');
        res.status(409);
        return next(error);
      }

      return res.status(200).json({
        confirmation: 0,
        "step": checkUserHasTransaction
      });
    }

    let updateStepConfirmation = await knex('step')
      .update({ status : 2 })
      .where({ id : stepId })
    if(!updateStepConfirmation){
      const error = new Error('Failed to update status');
      res.status(409);
      return next(error);
    }

    checkUserHasTransaction.status = 2;
    return res.status(200).json({
      confirmation: 1,
      "step": checkUserHasTransaction
    });

  } catch (error) {
    next(error);
  }
}

const transactionDetail = async (req, res, next)=>{
  try {
    let { transactionId } = req.params;

    let loadTransaction = await knex('transaction').where('id', transactionId).first();
    if(!loadTransaction){
      const error = new Error('Transaction not found');
      res.status(404);
      return next(error);
    }

    let loadTransactionStep = await knex({ s: 'step' })
      .join({ ts: 'transaction_step' }, 'ts.id_step', 's.id')
      .where('ts.id_transaction', transactionId);

    let transactionDetail = {
      ...loadTransaction,
      "step": []
    }

    loadTransactionStep.map(res => { transactionDetail["step"].push(res); });
    res.status(200).json({ transactionDetail });
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
  getKategori,
  getTag,
  getAllTag,
  createStep,
  updateStep,
  deleteStep,
  submitStep,
  acceptStep,
  transactionDetail
}

module.exports = { ...TRANSACTION }