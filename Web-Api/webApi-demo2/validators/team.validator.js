import yup from 'yup';


/**
 * Modèle équipe pour l'ajout
 * @typedef {Object} Team
 * @property {string} id.required
 * @property {string} teamname
 * @property {string} sport
 * @property {string} periods
 * @property {playerValidator} players
 */
const teamValidator = yup.object().shape({
    id: yup.string().required(),
    teamname: yup.string(),
    sport: yup.string(),
    periods: yup.string(),
    players: yup.array().of(yup.object().shape(
        {
            id: yup.string().id().required(),
            firstname: yup.string(),
            lastname: yup.string()
        }
    ))
})

/**
 * Modèle équipe pour la mise à jour
 * @typedef {Object} TeamData
 * @property {string} teamname
 * @property {string} sport
 */
const teamDataValidator = yup.object().shape({
    teamname: yup.string(),
    sport: yup.string(),
    periods: yup.string()
})