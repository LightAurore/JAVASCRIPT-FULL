const argon2 = require("argon2");
const Customer = require("../models/customer.model");

const customerService = {

    usernameExists: async (username) => {
        
        const customerTarget = await Customer.findOne({ username });

        return customerTarget !== null;
        // return !!customerTarget;
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