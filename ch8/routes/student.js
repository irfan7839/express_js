import express from 'express';
import {allStudent,deleteStudent} from '../controllers/studentControllers.js'
// const app = express()
const router = express.Router()

router.get('/all',allStudent)

router.get('/delete/:id([0-9]{2})',deleteStudent)

export default router
