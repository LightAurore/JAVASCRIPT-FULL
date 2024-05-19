import customerService from '../src/services/customer.service.js';
import { generateJwt } from '../src/utils/jwt.utils.js';

const customerController = {

    login: async (req: Request, res: Response) => {
        const { username, password } = req.body;

        const customer = await customerService.getByCredential({ username, password });

        if(!customer) {
            res.status(400).json({
                message: 'Crédential invalide'
            });
            return;
        }

        const token = await generateJwt(customer);

        res.status(200).json({ token });
    },

    register: async (req: Request, res: Response) => {
        res.sendStatus(501);
    }

};

export default customerController;