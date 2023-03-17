// step 20 : import express router and create auth router
const express = require('express');
const router = express.Router();

const { AuthController } = require('../http/controllers/auth.controller');
const { expressValidatorMapper } = require('../http/middlewares/checkErrors');
const {  loginValidator, registerValidator} = require('../http/validations/authValidation');

// step 41 : estefade az function 
// step 48 : add expressValidatorMapper
router.post("/register",registerValidator(),expressValidatorMapper , AuthController.register)
// step 50 : 
router.post("/login", loginValidator(),expressValidatorMapper , AuthController.login)

module.exports = { authRoutes: router }

