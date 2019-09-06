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
      next(error)
    }
  }
  
const gabungKontes = async (req, res, next) => {
  
}

module.exports = { buatKontes,gabungKontes}