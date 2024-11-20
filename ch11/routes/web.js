import  express  from 'express';
import { homeController } from '../controllers/homeControllers.js';

const route = express.Router()

route.get('/home',homeController)

export default route