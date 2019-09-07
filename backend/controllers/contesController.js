const validator = require('validator');
const multer = require('multer');
const knex = require('../database');

const buatKontes = async (req, res, next) => {
    try {
      const { title, deskripsi, deadline, kategoriId, note, payment, npwp } = req.body;
      const validDeskripsi = validator.isLength(deskripsi, { max: 400 });
      
  
    } catch (error) {
      next(error);
    }
  }
  
const gabungKontes = async (req, res, next) => {
  try {

    const { kategoriId, kontesId } = req.body;


  } catch (error) {
    next(error);
  }
}

const submitKontes = async (req, res, next) => {
  try {
    const { subject } = req.body;


  } catch (error) {
    next(error);
  }
}

const CONTEST = { 
  buatKontes,
  gabungKontes,
  submitKontes
}

module.exports = { ...CONTEST }