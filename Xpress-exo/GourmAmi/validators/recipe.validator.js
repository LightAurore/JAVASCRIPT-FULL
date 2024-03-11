const yup = require('yup');

const recipeValidator = yup.object().shape({
    recipename: yup.string().min(5, 'Nom de minimum 5 caractères 😓').required('Le nom est obligatoire'),

    slug: yup.string().optional(),

    tag: yup.array().of(yup.string()).compact((t) => t === ''),

    recipeimg: yup.string().optional(),

    recipeshortdesc: yup.string().max(50, '50 caractères maximum🥺'),
    
    recipedesc: yup.string().max(500, '500 caractères maximum🥺'),
    
    ingredient: yup.string().max(500, '500 caractères maximum🥺'),

    step: yup.string().max(500, '500 caractères maximum🥺'),
});

const recipeCommentValidator = yup.object().shape({
    comment: yup.string()
                .max(1_000)
                .required(),
    slug: yup.string()
             .required()
});

module.exports = {
    recipeValidator,
    recipeCommentValidator
};