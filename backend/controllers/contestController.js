const validator = require('validator');
const multer = require('multer');
const knex = require('../database');

const checkItemIsNullOrUndefined = value => {
  return value === null || value === undefined ? true : false;
}

const contest = async (req, res, next) => {
  return res.status(200).json({
      message: "Contest Route"
  })
}

const createContest = async (req, res, next) => {
  const maxBill = 10000000;

  try {
    const { title, startDate, deadline, criteria, "kategori": id_kategori, description, attachmentOne, attachmentTwo, note, payment, total, status, npwp } = req.body,
      { "userId": id_user } = req.state,
      validDescription = validator.isLength(description, { max: 400 });
    // validate file metadata
    // validate checking and return message

    if (payment > maxBill && !npwp) {
      return res.status(402).json({
        message: "NPWP required"
      })
    }

    const contest = {
      id_user,
      title,
      note,
      startDate,
      deadline,
      // attachmentOne,
      status,
      payment,
      npwp
    }

    const { "id": id_kontes } = await knex('kontes').insert(contest)

    const contestCategori = { id_kontes, id_kategori }
    await knex('kategori_kontes').insert(contestCategori)

    return res.status(200).json({
      ...contest,
      ...contestCategori
    })
  } catch (error) {
    next(error);
  }
}

const joinContest = async (req, res, next) => {
  try {
    const { contestId } = req.body;
    

  } catch (error) {
    next(error);
  }
}

const getContestById = async (req, res, next) => {
  try {
    const { contestId } = req.params,
      checkContestNullOrUndefined = checkItemIsNullOrUndefined(contestId);

    if (checkContestNullOrUndefined) {
      return res.status(422).json({
        message: "Your input is invalid"
      })
    }

    const contestData = await knex('kontes').where({ id: contestId }).first();
    if (!contestData) {
      return res.status(404).json({
        message: "Contest isn\'t exist"
      })
    }

    return res.status(200).json(contestData);
  } catch (error) {
    next(error);
  }
}

const getContestByUser = async (req, res, next) => {
  try {
    const { userId } = req.params,
      checkUserIdNullOrUndefined = checkItemIsNullOrUndefined(userId);

    if (checkUserIdNullOrUndefined) {
      return res.status(422).json({
        message: "Your input is invalid"
      })
    }

    const contestData = await knex('kontes').where({ id_user: userId })
    if (contestData) {
      return res.status(404).json({
        message: "Contest isn\'t exist"
      })
    }

    return res.status(200).json(contestData);
  } catch (error) {
    next(error);
  }
}

const getHotContest = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const CONTEST = {
  contest,
  createContest,
  joinContest,
  getContestById,
  getContestByUser,
  getHotContest
}

module.exports = { ...CONTEST }