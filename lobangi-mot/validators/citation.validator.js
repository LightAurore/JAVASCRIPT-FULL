const yup = require('yup');

const motCitationValidator = yup.object().shape({
    auteur: yup.string(),

    contenu: yup.string()
        .min(10, 'Le contenu doit faire au moins 10 caracteres !')
        .required('Le contenu est obligatoire') ,

    evenement: yup.string().optional(),
    
    dateEvenement: yup.string().optional()
})


module.exports = { 
    motValidator, 
    motTraductionValidator, 
    motCitationValidator,
    motExpressionValidator,
    motProverbeValidator,
    motPoemeValidator
}