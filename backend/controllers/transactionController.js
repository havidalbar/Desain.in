const validator = require('validator');
const multer = require('multer');
const knex = require('../database');

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
    const { kategoriId, deskripsi, tag, paket } = req.body;
    const validDeskripsi = validator.isLength(deskripsi, { max: 400 });
    if (kategoriId && deskripsi && tag && paket === null){
      const err = new Error("Body Not Valid");
      res.status(422);
      return next(err);
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