const validator = require('validator');
const multer = require('multer');
const knex = require('../database');

const depositJasa = async (req, res, next) => {
  try {
    const { invoiceId, deposit } = req.body;

    /*
     * 1. cek invoice dengan id = invoiceId
     * 2. cek batas waktu invoice 
     * 3.
     * 4. 
     * 
     * 2.a jika batas waktu melewati 1 jam 
     * 2.a.1 hapus data invoice pada tabel dengan id = invoiceId
     * 
     * set pesan { link: ... } jika validasi berhasil
     * mengembalikan pesan ke frontend untuk mengarahkan ke kolom chat dengan desainer
     */

  } catch (error) {
    next(error);
  }
}
const beliJasa = async (req, res, next) => {
  try {
    const { userId, desainerId, paketId, subject, deskripsi } = req.body;
    const validDeskripsi = validator.isLength(deskripsi, { max: 4000 });

    /*
     * Lampiran adalah attachment yang menyimpan link gambar, dengan max file 10MB
     * Butuh tabel paket 
     * 
     * 1. validasi input
     * 2. cek invoice  
     * 3. insert invoice 
     * 4. 
     * 5.
     * 6.
     * 
     * 2.a jika ada invoice dengan userId + desainerId + paketId 
     * 2.a.1 arahkan link ke chat user dengan desainer berdasarkan paket yang telah dipesan 
     * 2.a.2 set pesan { link: ..., message: ...} 
     * 2.a.3 mengembalikan pesan ke frontend
     * 
     * set pesan { message: ... }
     * mengembalikan pesan ke frontend untuk validasi
     */

  } catch (error) {
    next(error);
  }
}

const jualJasa = async (req, res, next) => {
  try {
    const { kategoriId, deskripsi, tag, paket } = req.body;
    const validDeskripsi = validator.isLength(deskripsi, { max: 400 });

    /*
     * portofolio 
     * tag bertipe array
     * paket bertipe objek
     * 
     * 1. 
     * 2. 
     * 3.
     * 4. 
     */


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
  doStep
}

module.exports = { ...TRANSACTION }