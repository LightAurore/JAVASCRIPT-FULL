import * as yup from "yup";

export const movieValidator = yup.object().shape({
    title: yup.string().typeError('Le titre est invalide').trim().required("Title is required").max(100, 'Le titre ne peut pas faire plus de 100 caractères'),
    releaseYear: yup.number().typeError('l\'année de sortie invalide'),
    duration: yup.number().typeError('La durée est invalide').positive('La durée doit être un nombre positif'),
    hesSubtitle: yup.boolean(),
    genre: yup.string().required("Genre is required").typeError('La valeur "hasSubtitle" est invalide'),
    genre: yup.string().typeError('Le genre est invalide').trim().max(50, 'Le genre ne peut pas faire plus de 50 caractères').required('Le genre est obligatoire')
});