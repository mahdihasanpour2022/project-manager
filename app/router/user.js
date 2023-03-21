// step 23 : import express router and create user router
const express = require("express");
const { UserController } = require("../http/controllers/user.controller");
const router = express.Router();
const { autoLogin } = require("../http/middlewares/autoLogin");
// step 63 :
router.get("/profile", autoLogin, UserController.getProfile);
// step 65 :
router.post("/profile", autoLogin, UserController.editProfile);
module.exports = { userRoutes: router };
