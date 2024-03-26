const yup = require('yup');

const motValidator = yup.object().shape({
    mot: yup.string()
        .min(1, 'un mot a minimum un caractère')
        .required('Le mot est obligatoire'),
    
    classe: yup.string()
        .required('La classe du mot doit être donnée 🤦‍♂️'),
    
    forme: yup.string().required('Forme du mot'),

    genre: yup.string().required('Genre du mot'),

    nombre: yup.string().required('Nombre'),

    phonetique: yup.string()
            .require('La phonétique est obligatoire 🥺'),

    prononciation: yup.string()
        .required('La prononciation est obligatoire 😛'),
    
    etymologie: yup.array().of(
        yup.object().shape({
            source: yup.string(),

            explication: yup.string()
        })
    ),

    
    synonyme: yup.array().of(
        yup.string()
    ),

    contraire: yup.array().of(
        yup.string()
    ),

    sens: yup.array().of(yup.object().shape({
        origine: yup.string(),
        definition: yup.string(),
        synonyme: yup.string(),
        exemple: yup.string().max(1_000)
        .required()
    })),

    exemple: yup.array().of(yup.string())

})

const motTraductionValidator = yup.object().shape({
    mot: yup.string(),
    fr: yup.string(),
    en: yup.string(),
    swa: yup.string(),
    lub: yup.string(),
    kik: yup.string(),
    ngb: yup.string(),
})

const motCitationValidator = yup.object().shape({
    auteur: yup.string(),

    contenu: yup.string()
        .min(10, 'Le contenu doit faire au moins 10 caracteres !')
        .required('Le contenu est obligatoire') ,

    evenement: yup.string().optional(),
    
    dateEvenement: yup.string().optional()
})

const motExpressionValidator = yup.object().shape({
    source: yup.string(),

    contenu: yup.string()
        .min(10, 'Le contenu doit faire au moins 10 caracteres !')
        .required('Le contenu est obligatoire')
})

const motProverbeValidator = yup.object().shape({
    source: yup.string(),

    contenu: yup.string()
        .min(10, 'Le contenu doit faire au moins 10 caracteres !')
        .required('Le contenu est obligatoire')
})


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