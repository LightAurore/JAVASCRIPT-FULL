import yup from 'yup';

/**
 * Modèle joueur pour l'ajout
 * @typedef {Object} Player
 * @property {string} email.required
 * @property {string} firstname 
 * @property {string} lastname
 */
const playerValidator= yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string(),
    lastname: yup.string(),
})

/**
 * Modèle joueur pour l'update
 * @typedef {Object} PlayerData
 * @property {string} firstname 
 * @property {string} lastname
 */
const playerDataValidator= yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
})
