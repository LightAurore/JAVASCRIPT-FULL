import * as yup from "yup";

export const actorValidator = yup.object().shape({
    firstname: yup.string().trim().required().min(2, '2 lettres minimum').max(50, '50 lettres maximum'),
    lastname: yup.string().trim().required().min(2, '2 lettres minimum').max(50, '50 lettres maximum'),
    birthdate: yup.date().typeError('la date est invalide')
    // birthdate: yup.string().matches(/[]/)
});