// step 20 : import express router and create auth router
const express = require('express');
const router = express.Router();

const { AuthController } = require('../http/controllers/auth.controller');
const { registerValidator } = require('../http/validations/authValidation');

// step 41 : estefade az function 
router.post("./register", registerValidator(), AuthController.register)

module.exports = { authRoutes: router }

