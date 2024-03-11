const yup = require('yup');

const articleValidator = yup.object().shape({
    title: yup.string()
              .min(5, 'Titre de minimum 5 caracteres')
              .required('Le titre est obligatoire'),
    slug: yup.string()
             .optional(),
    tag: yup.array().of(yup.string()).compact((t) => t === ''),
    description: yup.string()
                    .max(200, 'La description ne peut pas faire plus de 200 caracteres 😲'),
    content: yup.string()
                .min(10, 'Le contenu doit faire au moins 10 caracteres !')
                .required('Le contenu est obligatoire')                    
<<<<<<< HEAD
});

const articleCommentValidator = yup.object().shape({
    comment: yup.string()
                .max(1000)
                .required(),
    slug: yup.string()
                .required()
=======
>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e
});


module.exports = {
    articleValidator,
    articleCommentValidator
};