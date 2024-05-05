const argon2 = require("argon2");
const Customer = require("../models/customer.model");
const { CustomerListDTO, CustomerDTO } = require("../dto/customer.dto");


const customerService = {

    usernameExists: async (username) => {
        
        const customerTarget = await Customer.findOne({ username });

        return customerTarget !== null;
        // return !!customerTarget;
    },

    assign: async (id) => {
        const customer = await Customer.findByIdAndUpdate(id, {role: "Admin" 
        });
        console.log(customer);

        if(!customer) {
            res.sendStatus(404);
            return;
        }

        return new CustomerDTO(customer)
    },
    ban: async (id) => {
        const customer = await Customer.findByIdAndUpdate(id, {banned:      {isBanned: true}
        });
        console.log(customer);

        if(!customer) {
            res.sendStatus(404);
            return;
        }

        return new CustomerDTO(customer)
    },
    hide: async (id) => {

        
        const customer = await Customer.findByIdAndUpdate(id, {isHidden: true});
        console.log(customer);

        if(!customer) {
            res.sendStatus(404);
            return;
        }

        return new CustomerDTO(customer)
    },

    getOne: async (id) => {

        console.log(id);

        // const customerName = await Customer.findOne({ usertname: name });

        const customer = await Customer.findById(id);

        if(!customer) {
            res.sendStatus(404);
            return;
        }

        return new CustomerDTO(customer)
    },

    getAll: async () => {
        // const {offset, limit} = req.pagination;
        // const data = await customerService.getAll(offset, limit);

        const data = await Customer.find();

        const customers = data.map(d => new CustomerListDTO(d))

        return customers;
    },

    register: async ({username, firstname, lastname, email, password}) => {

        const pwdHash = await argon2.hash(password);

        const customerCreated = new Customer({
            username, 
            firstname, 
            lastname, 
            email,
            password: pwdHash
        });
        await customerCreated.save();
        console.log(customerCreated);
        return customerCreated;
    },

    login: async ({username, password}) => {
        
        const customer = await Customer.findOne({ username });
        if(!customer) {
            return null;
        }

        const pwdIsValid = await argon2.verify(customer.password, password);
        if(!pwdIsValid) {
            return null;
        }

        return customer;
    }
};

module.exports = customerService;