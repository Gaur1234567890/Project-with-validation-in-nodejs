const express = require('express');
const { loginController } = require('../controller/loginController');
const loginRoute = express.Router();

loginRoute.post('/login',loginController)

module.exports = {loginRoute}