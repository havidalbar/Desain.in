const validator = require('validator')
const upload = require('multer')

const knex = require('../database')

/*
 * User's behaviour as main function,
 * give another function for supporting each main function
 */

const buatKontes = async (req, res, next) => {}
const beliJasa = async (req, res, next) => {}
const rekomendasi = async (req, res, next) => {}
const uploadPortofolio = async (req, res, next) => {}
const gabungKontes = async (req, res, next) => {}
const menerimaInvitasi = async (req, res, next) => {}

/*
 * Desainer's behaviour as main function,
 * give another function for supporting each main function
 */

const jualJasa = async (req, res, next) => {}
const memberiInvitasi = async (req, res, next) => {}
const doStep = async (req, res, next) => {}

/*
 * Store USER main function
 */

const USER = {
  buatKontes,
  beliJasa,
  rekomendasi,
  uploadPortofolio,
  gabungKontes,
  menerimaInvitasi
}

/*
 * Store DESAINER main function
 */

const DESAINER = {
  jualJasa,
  memberiInvitasi,
  doStep
}

module.exports = {
  ...USER,
  ...DESAINER
}