const yup = require('yup');

const motPoemeValidator = yup.object().shape({
    titre: yup.string(),

    auteur: yup.string(),

    contenu: yup.string()
        .min(10, 'Le contenu doit faire au moins 10 caracteres !')
        .required('Le contenu est obligatoire'),
    
    dateCreation: yup.string(),

    ouvrage: yup.string()
})

module.exports = { 
    motValidator, 
    motTraductionValidator, 
    motCitationValidator,
    motExpressionValidator,
    motProverbeValidator,
    motPoemeValidator
}