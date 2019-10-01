const { storage, bucketName } = require('../helpers/google-cloud-storage');
const Multer = require('multer');

const maxSize = 10 * 1000 * 1000 // 10MB

let upload = Multer({ storage: Multer.MulterStorage, limits: { fileSize: maxSize } });

const bucket = storage.bucket(bucketName);
const getPublicUrl = filename => `https://storage.googleapis.com/${bucketName}/${filename}`;

const uploadFileToGCS = (req, res, next) => {
  if(!req.file){
    return next();
  }

  let { originalname, mimetype } = req.file;
  const fileName = `${Date.now()}-${originalname}`;
  const file = bucket.file(fileName);

  const stream = file.createWriteStream({
    contentType: mimetype,
    predefinedAcl: "publicRead",    
  });

  stream.on('error', err => {
    req.file.cloudStorageError = err,
    next(err);
  });

  stream.on('finish', () => {
    req.file.gcsObject = fileName;

    return file.makePublic()
      .then(() => {
        req.file.gcsObjectUrl = getPublicUrl(fileName);
        next();
      });
  });  

  stream.end(req.file.buffer);
}

module.exports = { uploadFileToGCS, upload }