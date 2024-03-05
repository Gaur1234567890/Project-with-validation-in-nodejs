const express = require('express');
const { teacherController } = require('../../controller/teacherController');
const { authMiddleware , adminAuth } = require('../../middleware/authMiddleware');
const teacherRoute = express.Router();


teacherRoute.post('/teacher/create',authMiddleware,adminAuth,teacherController)

module.exports = { teacherRoute};