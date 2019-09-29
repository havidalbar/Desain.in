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

const checkConfirmation = (req, res, next) => {
  try {
    let { confirmation } = req.body;

    const validateConfirmation = confirmation == 1 ? 1 : 0;
    if(!validateConfirmation){
      const error = new Error('Validation failed please check your input');
      res.status(406);
      return next(error);
    }

    if(confirmation == 0){
      return res.status(200).json({
        confirmation: 0,
        message: "Your work is not accepted by user"
      });
    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { validation, checkConfirmation }