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

/*
 * User's behaviour as main function,
 * give another function for supporting each main function
 */


const rekomendasi = async (req, res, next) => {}
const uploadPortofolio = async (req, res, next) => {

  try {
    const { judul, deskripsi, tag } = req.body;
    const validJudul = validator.isLength(judul, { max: 255});
    const validDeskripsi = validator.isLength( deskripsi, { max: 1500 });

    if(!validJudul || !validDeskripsi) {
      throw new Error('Unable to process, please check your input is valid');
    }

    /*
     * 1.
     * 2.
     * 3.
     * 4.
     * 5.
     */ 

  } catch (error) {
    next(error);
  }
}

const menerimaInvitasi = async (req, res, next) => {
  try {
    const { invitationId, status } = req.body;

    /* 
     * 1. cek invitationId di tabel invitation 
     * 2. cek status
     * 3. mengembalikan pesan / notifikasi ke frontend 
     * 
     * 1.a. invitationId tidak ada
     * 1.a.1 throw error message 'invitation failed, please ask to sender for re-invite you as designer'
     * 
     * 2.a jika status 0 (menolak invitasi)
     * 2.a.1 hapus data invitation pada db sesuai invitationId
     * 2.a.2 set pesan { status : 0, message : ... }
     * 
     * 2.b jika status 1 (menerima invitasi)
     * 2.b.1 ubah status pada tabel user menjadi 1 (desainer)
     * 2.b.2 set pesan { status : 1, message : ... }
     */

  } catch (error) {
    next(error);
  }
}

/*
 * Desainer's behaviour as main function,
 * give another function for supporting each main function
 */


const memberiInvitasi = async (req, res, next) => {
  try {
    const { userId } = req.body;

    /*
     * invitationId (dalam bentuk random / encoded)
     * desainer telah menekan tombol untuk memberi invitasi
     *  
     * 1. cek user pada tabel user dengan id = userId
     * 2. cek status user 
     * 3. invitationId didapat dengan hash / encode dari userId + nama user   
     * 4. set pesan { userId, invitationId } 
     * 5. mengembalikan pesan ke frontend
     * 
     * 1.a jika tidak ada 
     * 1.a.1 throw error message 'user isn't exist'
     * 
     * 2.a jika user adalah desainer
     * 2.a.1 throw error message 'this user already a designer'  
     */

  } catch (error) {
    next(error);
  }
}

/*
 * Store USER main function
 */

const USER = {
  rekomendasi,
  uploadPortofolio,
  menerimaInvitasi
}

/*
 * Store DESAINER main function
 */

const DESAINER = { memberiInvitasi }

module.exports = { ...USER, ...DESAINER }