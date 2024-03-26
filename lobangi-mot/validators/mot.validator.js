const yup = require('yup');

const motValidator = yup.object().shape({
    mot: yup.string()
        .min(1, 'un mot a minimum un caractère')
        .required('Le mot est obligatoire'),

    phonetique: yup.string(),
/* 
    prononciation: yup.string()
        .required('La prononciation est obligatoire 😛'),

    
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
 */
})

const motPrononciationValidator = yup.object().shape({
    origine: yup.string().max(100)
                        .required(),
    prononciation: yup.string().max(100).required(),
    mot: yup.string().required()
});

const motSynonymeValidator = yup.object().shape({
    synonyme: yup.string().max(100).required(),
    mot: yup.string().required()
});

const motAntonymeValidator = yup.object().shape({
    antonyme: yup.string().max(100).required(),
    mot: yup.string().required()
});

const motTraductionValidator = yup.object().shape({
    langueEtrangere: yup.string().max(100).required(),
    motEtranger: yup.string().max(100).required(),
    abbreviation: yup.string().max(100).required(),
    mot: yup.string().required()
});

const motSensValidator = yup.object().shape({
    classe: yup.string()
        .required('La classe du mot doit être donnée 🤦‍♂️'),
    
    forme: yup.string().required('Forme du mot'),

    genre: yup.string().required('Genre du mot'),

    pluriel: yup.string().optional(),

    origine: yup.string().max(100).required(),

    sensContent: yup.string().max(100).required(),

    etymologie: yup.string().max(100).optional(),

    sensExemple: yup.string().max(100).required(),

    mot: yup.string().required()
});



module.exports = { 
    motValidator,
    motPrononciationValidator,
    motSynonymeValidator,
    motAntonymeValidator,
    motSensValidator,
    motTraductionValidator
}