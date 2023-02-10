//step 37 : create validation folder in app > http > validation and create authValidation in it
//step 38 : install yarn add express-validation
//step 39 :import express-validator and start validation for req data k ye array return mikone
// const { body } = require('express-validator');
// or ... 
const expressValidator = require('express-validator');
const { body } = expressValidator;

function registerValidator() {
  //step 40 : validate with express-validator =>injori body('userName').notEmpty().isLength({min : 2 , max : 25}).custom((value , ctx)=>{})
  // body('userName').custom((value , ctx)=>{}) , body('email').custom((value,ctx)=>{}) , other ...

  //notEmpty : ceck mikone khali nabashe =>injori estefade kon body('username').notEmpty()
  //isLength : check mikone tolesh to bazie min va max bashe iani {min : 2 , max : 25}
  //isAlpha : iani gaghat addad va horofe latin bashe
  
  // or write validate cusom validate... 
  //custom : customizesh mikonim onjori k mikhaim =>ye callback functione ke 2 ta vorodi dare value va context
  return [
    body('userName').custom((value, ctx) => {
      if (value) {
        // dar regex \_\. iani noghte ya _ ham mitone dashte bashe => ^ iani ba harfe latin shoro beshe  => + iani hadaghal baiad ye harfe latin avalesh bash
        const userNameRegex = /^[a-z]+[a-z0-9\_\.]{2,25}/gi;
        if (userNameRegex.test(value)) {
          return true;
        }
        throw 'username not correct'
      }
      throw 'name is empty';
    }),
    // iani agar isEmail false shod in withMessage ro bede ...
    body('email').isEmail().withMessage('email is not valid ...'),
    // fa-IR iani male iran bashe agar nabod ba withMessage bge behesh khata ro
    body('mobile').isMobilePhone('fa-IR').withMessage('number is not irani'),
    body('password').isEmpty().isLength({ min: 6, max: 16 }).withMessage('hadaghal 6 va hadaksar 16 nist').custom((value, ctx) => {
      if (value) {
        if (value !== ctx?.req?.body?.confirm_password) throw 'password not match with'
        return true;
      }
      throw 'password is empty';
    })
  ]
}

module.exports = {registerValidator}
