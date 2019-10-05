const { Storage } = require('@google-cloud/storage');
const { GOOGLE } = require('../config');

const storage = new Storage({
  projectId: GOOGLE.PROJECT_ID,
  keyFilename: GOOGLE.KEY_FILE_NAME
})

const bucketName = GOOGLE.BUCKET;

module.exports = { storage, bucketName }