import express  from "express";
import {homeController} from '../controllers/homeController.js'
import { aboutController } from "../controllers/aboutController.js";
const route = express.Router()

route.get('/home',homeController)
route.get('/about',aboutController)


export default route