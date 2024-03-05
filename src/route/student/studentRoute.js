const express = require('express');
const { studentController, studentFind, studentUpdate, studentDelete } = require('../../controller/studentController');
const { authMiddleware, adminTeacher, adminAuth, allAccess } = require('../../middleware/authMiddleware');
const studentRoute = express.Router();

studentRoute.post('/create',authMiddleware,adminTeacher,studentController)
studentRoute.post('/read/:id',authMiddleware,allAccess,studentFind)
studentRoute.post('/update/:id',authMiddleware,adminTeacher,studentUpdate)
studentRoute.post('/delete/:id',authMiddleware,adminAuth,studentDelete)

module.exports = {studentRoute};