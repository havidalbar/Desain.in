function validation(res, ...validation) {
  return new Promise(resolve => {
    validation.map(value => {
      if (!value) {
        const error = new Error('Validation failed please check your input');
        return res.status(406).json({
          message: error.message
        });
      }
    });
  });
}

const imageValidation = (req, res, next) => {
  let { mimetype } = req.file;
  const allowedMime = ['png', 'jpg', 'jpeg'];
  
  mimetype = mimetype.split("/");
  if (!allowedMime.includes(mimetype[1])){
    const error = new Error('Unsupported media type');
    res.status(415);
    return next(error);
  }

  next();
}

const fileValidation = (req, res, next) => {
  let { mimetype } = req.file;
  const allowedMime = ["pdf"]; // dynamic

  mimetype = mimetype.split("/");
  if(!allowedMime.includes(mimetype[1])){
    const error = new Error('Unsupported media type');
    res.status(415);
    return next(error);
  }

  next();
}

module.exports = { validation, imageValidation, fileValidation }