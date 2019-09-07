const validator = require('validator');
const multer = require('multer');
const knex = require('../database');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
});

const maxSize = 10 * 1000 * 1000 // 10MB
let upload = multer({ storage : storage, limits: { fileSize: maxSize} });

const rekomendasi = async (req, res, next) => {}
const uploadPortofolio = async (req, res, next) => {

  try {
    const { judul, deskripsi, tag } = req.body;
    const validJudul = validator.isLength(judul, { max: 255});
    const validDeskripsi = validator.isLength( deskripsi, { max: 1500 });

    if(!validJudul || !validDeskripsi) {
      throw new Error('Unable to process, please check your input is valid');
    }


  } catch (error) {
    next(error);
  }
}

const menerimaInvitasi = async (req, res, next) => {
  try {
    const { invitationId, status } = req.body;

  } catch (error) {
    next(error);
  }
}

const memberiInvitasi = async (req, res, next) => {
  try {
    const { userId } = req.body;

  } catch (error) {
    next(error);
  }
}

const USER = {
  rekomendasi,
  uploadPortofolio,
  menerimaInvitasi,
  memberiInvitasi
}

module.exports = { ...USER }