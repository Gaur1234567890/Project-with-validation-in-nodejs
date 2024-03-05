const express = require('express');
const { registerController } = require('../controller/registerController');
const { myValidator } = require('../validators/myValidatore');
const registerRoute = express.Router();

registerRoute.post('/register',myValidator,registerController)

module.exports = {registerRoute};