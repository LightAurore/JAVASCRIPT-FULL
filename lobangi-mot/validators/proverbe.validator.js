const yup = require('yup');

const motProverbeValidator = yup.object().shape({
    source: yup.string(),

    contenu: yup.string()
        .min(10, 'Le contenu doit faire au moins 10 caracteres !')
        .required('Le contenu est obligatoire')
})


module.exports = { 
    motValidator, 
    motTraductionValidator, 
    motCitationValidator,
    motExpressionValidator,
    motProverbeValidator,
    motPoemeValidator
}