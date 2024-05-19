import argon2 from 'argon2';
import { CustomerDTO } from '../../dto/customer.dto.js';
// import customerData from './../data/customer.json' assert { type: 'json' };

const customerService = {

    getById : (id) => {
        const data = customerData.data.find(customer => customer.id === id);
        return !!data ? new CustomerDTO(data) : null;
    },

    getByCredential: async ({ username, password }:{ username:string, password:string }) => {
        const data = customerData.data.find(customer => customer.username === username);

        if(!data || !(await argon2.verify(data.password, password))) {
            return null
        }

        return new CustomerDTO(data);
    }
}

export default customerService;