const validator = require('validator');
const _ = require('lodash');
const knex = require('../database');

const insertUploadTrx = (tag, upload) => {
  return new Promise((resolve, reject) => {
    knex.transaction(async trx => {
      try {

        let getUploadId = await trx.insert(upload).into('upload');
        let getTagId = await trx.batchInsert('tag', tag);

        let storedNewTagId = [];
        for (const i in tag) {
          storedNewTagId.push({
            id_upload: getUploadId[0],
            id_tag: getTagId++
          });
        }

        await trx.batchInsert('tag_upload', storedNewTagId);
        
        resolve(true);
      } catch (error) {
        reject(false);
      } finally {
        console.log('Upload portfolio executed');
      }
    })
  });
}

const uploadImage = async (req, res, next) => {
  try {
    let { originalname, mimetype, size, gcsObject, gcsObjectUrl } = req.file;
    let { userId, status } = req.state;

    if (status == 0){
      const error = new Error('User not authorized');
      res.status(403);
      return next(error);
    }

    if(!gcsObject && !gcsObjectUrl){
      const error = new Error('Failed to upload files');
      res.status(406);
      return next(error);
    }

    return res.status(201).json({
      userId,
      originalname,
      mimetype,
      size,
      gcsObject,
      gcsObjectUrl
    });

  } catch (error) {
    next(error);
  }
}

const uploadData = async (req, res, next) => {
  try {
    let { "userId": id_user, status } = req.state;
    let { image, judul, desc, tag } = req.body;

    if (status == 0){
      const error = new Error('User isn\'t authorized');
      res.status(403);
      return next(error);
    }

    const validDeskripsi = validator.isLength(desc, { min: 0, max: 400});
    if (!validDeskripsi) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }

    let upload = { 
      id_user,
      image,
      desc,
      judul
    }
    
    let refractorTag = []
    for (const t in tag) {
      refractorTag.push({ title: tag[t] });
    }
    
    let uploadPortfolio = await insertUploadTrx(refractorTag, upload);
    if(!uploadPortfolio) {
      const error = new Error('Failed to upload, please check your input');
      res.status(409);
      return next(error);
    }

    _.merge(upload, { tag });
    return res.status(201).json({ upload });
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
    const { userId } = req.params;
    if (!userId) {
      res.status(403).json({
        message: "UserID missing"
      });

    }
    else {
      let checkUser = await knex('user').where('id', userId).first();
      if (!checkUser) {
        res.status(404).json({
          message: "User not found"
        });
      }
      else {
        let data = await knex('upload').where('id_user', userId);
        res.json(data);
      }
    }
  } catch (error) {
    next(error);
  }
}

const getDetailById = async (req, res, next) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      res.status(403).json({
        message: "postId missing"
      });
    }
    else {
      let data = await knex('upload').where('id', postId);
      if (data.length === 0) {
        res.status(404).json({
          message: "Post Not Found"
        })
      }
      else { res.json(data); }

    }
  } catch (error) {
    next(error);
  }
}

const deleteById = async (req, res, next) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      res.status(403).json({
        message: "postId missing"
      });
    }
    else {
      let data = await knex('upload').where('id', postId);
      await knex('upload').where('id',postId).del();
      res.json("Done");

    }
  } catch (error) {
    next(error);
  }
}

const PORTOF = {
  uploadImage,
  uploadData,
  updateData,
  getByUserId,
  getDetailById,
  deleteById
}

module.exports = { ...PORTOF }