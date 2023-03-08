// step 24 : import express router and create routere asli
const express = require('express');
const { authRoutes } = require('./auth');
const router = express.Router();
// step 25 : import routes 
const { projectRoutes } = require('./project');
const { teamRoutes } = require('./team');
const { userRoutes } = require('./user');

// step 25 : 
router.use('/auth' , authRoutes);
router.use('/user' , userRoutes);
router.use('/team' , teamRoutes);
router.use('/project' , projectRoutes);

module.exports = {allRoutes : router}
