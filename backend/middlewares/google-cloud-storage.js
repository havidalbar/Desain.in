const { storage, bucketName, getPublicUrl } = require('../helpers/google-cloud-storage');

const uploadFileToGCS = (req, res, next) => {
  if(!req.file){
    return next();
  }

  const bucket = storage.bucket(bucketName);
  const fileName = `${Date.now()}-${req.file.originalname}`;
  const file = bucket.file(fileName);

  const stream = file.createWriteStream({
    contentType: req.file.mimetype,
    predefinedAcl: "publicRead"    
  });

  stream.on('error', err => {
    req.file.cloudStorageError = err,
    next(err);
  });

  stream.on('finish', () => {
    req.file.gcsObject = fileName;
    let { fileType } = req.body;

    return file.makePublic()
      .then(() => {
        req.file.gcsObjectUrl = getPublicUrl(fileType, fileName);
        next();
      });
  });  

  stream.end(req.file.buffer);
}

module.exports = { uploadFileToGCS }