const express = require('express');
const app = express();
const env = require('dotenv');
const { registerRoute } = require('./src/route/register');
const { loginRoute } = require('./src/route/login');
const { teacherRoute } = require('./src/route/teacher/teacher');
const { studentRoute } = require('./src/route/student/studentRoute');
env.config();

// register Route
app.use(express.json())
app.use('/api',registerRoute)
app.use('/api',loginRoute)
app.use('/api',teacherRoute)
app.use('/api/student',studentRoute)

let port = process.env.PORT;
app.listen(port,()=>{
    console.log('the server is running on port no',port);
})