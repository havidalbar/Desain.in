const validator = require('validator');
const knex = require('../database');
const multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
});

const maxSize = 10 * 1000 * 1000 // 10MB
let upload = multer({ storage: storage, limits: { fileSize: maxSize } });

const portfolio = async (req, res, next) => {
  return res.status(200).json({
    message: "Portfolio Route"
  })
}

const uploadImage = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const uploadData = async (req, res, next) => {
  try {


  } catch (error) {
    next(error);
  }
}

const updateData = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const getByUserId = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const getDetailById = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const deleteById = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const PORTOF = {
  portfolio,
  uploadImage,
  uploadData,
  updateData,
  getByUserId,
  getDetailById,
  deleteById
}

module.exports = { ...PORTOF }