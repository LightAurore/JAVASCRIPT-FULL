import { Router } from 'express';
import customerController from '../controllers/customer.controller.ts';
const custRouter = Router();

custRouter.route('api/customer').post(customerController.login)
custRouter.route('api/customer').post(customerController.register)


export default custRouter;