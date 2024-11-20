import express from 'express';
// const stu = require('./routes/student')
// const teach = require('./routes/teacher')

import stu from './routes/student.js'
import teach from './routes/teacher.js'

const app = express()
const port = process.env.PORT || '3000'

// Load Router Modules
app.use('/student',stu)
app.use('/teacher',teach)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})