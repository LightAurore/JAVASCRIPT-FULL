const yup = require("yup");

const articleValidator = yup.object().shape({
    title: yup.string()
        .min(5, 'Minimum 5 caracteres')
        .required('Le titre est requis'),
    slug: yup.string()
        .optional(),

    tag: yup.array()
        .of(yup.string().min(2, 'Minimum 2 caracteres').required()).compact((t)=> !t),

    description: yup.string()
        .max(200, 'La description ne peut pas faire plus de 200 caracteres 🙆‍♀️'),

    content: yup.string()
        .min(10, 'Le contenu ne peut pas faire moins de 10 caracteres ��‍��️')
        .required('Le contenu est obligatoire'),
});

module.exports = {
    articleValidator
};