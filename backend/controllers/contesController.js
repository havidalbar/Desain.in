const validator = require('validator');
const multer = require('multer');
const knex = require('../database');



const buatKontes = async (req, res, next) => {
    try {
      const { title, deskripsi, deadline, kategoriId, note, payment, npwp } = req.body;
      const validDeskripsi = validator.isLength(deskripsi, { max: 400 });
      
      /*
       * Lampiran adalah attachment yang menyimpan link gambar 
       * 
       * 1. validasi input
       * 2. cek 
       * 3. 
       * 4.
       * 
       * set pesan { message: ... }
       * mengembalikan pesan ke frontend untuk validasi
       */
  
    } catch (error) {
      next(error);
    }
  }
  
const gabungKontes = async (req, res, next) => {
  try {

    const { kategoriId, kontesId } = req.body;

    /*
     * 1. cek kategori dan kontes di database 
     * 2. simpan kontes + kategori ke dalam db 
     * 3. 
     * 4. 
     */

  } catch (error) {
    next(error);
  }
}

const submitKontes = async (req, res, next) => {
  try {
    const { subject } = req.body;

    /*
     * 1. validasi subject
     * 2. generate nama file 
     * 3. upload file
     * 4.  
     * 
     */

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