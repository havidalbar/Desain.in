const validator = require('validator');
const knex = require('../database');
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
    const { invoiceId, deposit } = req.body;
    if (invoiceId && deposit == null) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }




  } catch (error) {
    next(error);
  }
}
const beliJasa = async (req, res, next) => {
  try {
    const { userId, desainerId, paketId, subject, deskripsi } = req.body;
    const validDeskripsi = validator.isLength(deskripsi, { max: 4000 });
    if (!validDeskripsi) {
      const error = new Error('Validation failed please check your input');
      res.status(422);
      return next(error);
    }



  } catch (error) {
    next(error);
  }
}

const jualJasa = async (req, res, next) => {
  try {
    const { kategoriId, deskripsi, tag } = req.body;
    const paket = req.body.paket;
    const { userId } = req.state;

    const checkUserIsDesigner = await knex('user').select('status').where('id', userId).first();
    if (!checkUserIsDesigner) {
      const error = new Error('You don\'t have permission to jual jasa');
      res.status(403);
      return next(error);
    }

    const validDeskripsi = validator.isLength(deskripsi, { max: 400 });
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

const TRANSACTION = {
  beliJasa,
  jualJasa,
  depositJasa,
  editJasaDesainer,
  editJasaPaket,
  doStep,
  getKategori,
  getTag,
  getAllTag
}

module.exports = { ...TRANSACTION }