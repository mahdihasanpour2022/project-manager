//step 37 : create validation folder in app > http > validation and create authValidation in it
//step 38 : install yarn add express-validation
//step 39 :import express-validator and start validation for req data k ye array return mikone
// const { body } = require('express-validator');
// or ...
const { body } = require("express-validator");
const { userModel } = require("../../models/user");

function registerValidator() {
  //step 40 : validate with express-validator =>injori body('userName').notEmpty().isLength({min : 2 , max : 25}).custom((value , ctx)=>{})
  // body('userName').custom((value , ctx)=>{}) , body('email').custom((value,ctx)=>{}) , other ...

  //notEmpty : ceck mikone khali nabashe =>injori estefade kon body('userName').notEmpty()
  //isLength : check mikone tolesh to bazie min va max bashe iani {min : 2 , max : 25}
  //isAlpha : iani gaghat addad va horofe latin bashe

  // or write validate cusom validate...
  //custom : customizesh mikonim onjori k mikhaim =>ye callback functione ke 2 ta vorodi dare value va context
  return [
    body("userName").custom(async (value, ctx) => {
      if (value) {
        // dar regex \_\. iani noghte ya _ ham mitone dashte bashe => ^ iani ba harfe latin shoro beshe  => + iani hadaghal baiad ye harfe latin avalesh bash
        const userNameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
        if (userNameRegex.test(value)) {
          const user = await userModel.findOne({ userName: value });
          if (user) throw "userName tekrarie";
          return true;
        }
        throw "userName not correct";
      } else {
        throw "name is empty";
      }
    }),
    //not().isEmail() iani agar isEmail false shod in withMessage ro bede ...
    body("email")
    .custom(async email => {
      const user = await userModel.findOne({ email });
      if (user) throw "email tekrarie";
      return true;
    })
      .isEmail()
      .withMessage("email is not valid ..."),
    // fa-IR iani male iran bashe agar nabod ba withMessage bge behesh khata ro
    body("mobile")
    .custom(async mobile => {
      const user = await userModel.findOne({ mobile });
      if (user) throw "mobile tekrarie";
      return true;
    })
    .isMobilePhone("fa-IR")
    .withMessage("number is not irani")
      ,
    body("password")
    .isLength({ min: 6, max: 16 })
    .withMessage("hadaghal 6 va hadaksar 16 nist")
      // chon error ha ro az akhar mikhone hamishe mohemtarinasho khate akhar benvis
      .custom((value, ctx) => {
        if (value) {
          // if(!value) throw 'confirm password is empty';
          if (value !== ctx?.req?.body?.confirm_password)
            throw "password not match with confirm pass";
          return true;
        }
        throw "password ye moshkeli dare";
      })
  ];
}
// step 51 : create loginValidator
function loginValidator() {
  return [
    body("userName")
      .notEmpty()
      .withMessage("userName khalie")
      .custom((userName) => {
        const userNameRegex = /^[a-z]+[a-z0-9\_\.]{2,25}/gi;
        if (userNameRegex.test(userName)) {
          return true;
          // or ...
          // const useruserName = await userModel.findOne({ userName });
          // if (!useruserName) throw "نام کاربری یا رمز عبور اشتباه است.";
          // return true;
        }
        throw "نام کاربری صحیح نیست.";
      }),
    body("password")
      .isLength({ min: 6, max: 16 })
      .withMessage("tolesh moshkel dare"),
    // or ...
    // .custom(password=>{
    //   const userPassword= await userModel.findOne({ password });
    //   if(!userPassword) throw "نام کاربری یا رمز عبور اشتباه است";
    // })
  ];
}

module.exports = { registerValidator, loginValidator };
