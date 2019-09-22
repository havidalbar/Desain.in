const { Storage } = require('@google-cloud/storage');
const { GOOGLE } = require('../config');

const storage = new Storage({
  projectId: GOOGLE.PROJECT_ID,
  keyFilename: GOOGLE.KEY_FILE_NAME
})

const bucketName = GOOGLE.BUCKET;

const getPublicUrl = (type, filename) => `https://storage.googleapis.com/${bucketName}/${type}/${filename}`;

module.exports = { storage, bucketName, getPublicUrl }