function validation(res, ...validation) {
  return new Promise(resolve => {
    validation.map(value => {
      if (!value) {
        const error = new Error('Validation failed please check your input');
        return res.status(422).json({
          message: error.message
        });
      }
    });
  });
}

module.exports = { validation }