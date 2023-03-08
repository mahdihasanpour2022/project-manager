// step 42 : ye function baraie inke ye khone az har obj to array b name errors ro var darim berizim to ye obj koli b name messages
const { validationResult } = require("express-validator");

function expressValidatorMapper(req,res,next) {
  
  let messages = {};
  // step 43 : estefade az expressValidatorMapper baraie tabdil error array b obj b name messages
  //result havie error haie validatin ast

  const result = validationResult(req);
  if (result?.errors?.length > 0) {
    messages = {}
    result?.errors.forEach((error) => {
      messages[error.param] = error.msg;
    });
    return res.status(400).json({
      status : 400,
      success : false ,
      message : messages ,
    });
  }
  next();
}

module.exports = { expressValidatorMapper };
