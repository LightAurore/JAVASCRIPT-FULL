const yup = require('yup');

const testValidator = yup.object().shape({
    id: yup.number().required('l\'Id doit être mis 🤦‍♂️'),
    name: yup.string().min(3, 'Le nom du chat doit avoir minimum trois caractères 😒 !')
})

module.exports = testValidator;