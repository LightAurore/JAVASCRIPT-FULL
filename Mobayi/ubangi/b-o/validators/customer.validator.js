const yup = require('yup');

const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\d\s]).{8,}$/;

const customerRegisterValidator = yup.object().shape({

    username: yup.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    firstname: yup.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    lastname: yup.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    email: yup.string()
        .trim()
        .email('must be a valid email')
        .max(50)
        .required(),

    password: yup.string()
        .trim()
        .matches(pwdRegex)
        .required(),

    confirm: yup.string()
        .oneOf([yup.ref('password')])
        .required()

});

const customerLoginValidator = yup.object().shape({

    username: yup.string()
        .trim()
        .required(),

    password: yup.string()
        .trim()
        .required()

});

module.exports = {
    customerRegisterValidator,
    customerLoginValidator
};