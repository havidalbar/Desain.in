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
  const { userId } = req.state;
  const id_user=userId;
  const { image, judul, desc } = req.body;
  try {
    const user = await knex('user').where('id', userId).first();  
    if (user.status != 1) {
      res.status(402).json({
        message: "Not allowed"
      })
    }
    else {
      if (image && judul && desc == undefined) {
        res.status(403).json({
          message: "Please check your body json!"
        })
      }
      else {
        const checkDesc = await validator.isLength(desc, { max: 1500 });
        if (!checkDesc) {
          res.status(403).json({
            message: "Desc Max Char is 1500!"
          });
        }
        else {
            const data = {
              id_user,
              image,
              desc,
              judul
            }
           await knex('upload').insert(data);
           res.json("Done");
        }
      }
    }

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
    if (req.body) {

    }
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