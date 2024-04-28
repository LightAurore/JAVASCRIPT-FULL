const yup = require('yup');

const regex = /(?!<script)/

const articleValidator = yup.object().shape({
    title: yup.string()
              .min(5, 'Titre de minimum 5 caracteres')
              .required('Le titre est obligatoire'),
    slug: yup.string()
             .optional(),
    tag: yup.array().of(yup.string()).compact((t) => t === ''),
    description: yup.string()
                    .test('is-script', "Le mot à éviter", (value)=> Promise.resolve(value.includes(["<script>","</>"])))
                    .max(200, 'La description ne peut pas faire plus de 200 caracteres 😲'),
    content: yup.string()
                .matches(regex,{excludeEmptyString: true})
                .min(10, 'Le contenu doit faire au moins 10 caracteres !')
                .required('Le contenu est obligatoire')                    
});

//.matches(b/(?!<script>|</script>)([a-z0-9]+)$, 'La balise html <script> n est pas autorisée')

const articleCommentValidator = yup.object().shape({
    comment: yup.string() //
                .test('is-script', "Le mot à éviter", (value)=> Promise.resolve(value.includes(["<script>","</script>"])))
                .max(1_000)
                .required(),
    slug: yup.string()
             .required()
});

module.exports = {
    articleValidator,
    articleCommentValidator
};