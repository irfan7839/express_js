import express from 'express';
import {join} from 'path';
import web from './routes/web.js';
const app = express()
const port = process.env.PORT || 3000
//  Static Files
app.use(express.static(join(process.cwd(),'public')))
app.use('/',web)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})