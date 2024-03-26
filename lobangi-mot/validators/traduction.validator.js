const yup = require('yup');

const motTraductionValidator = yup.object().shape({
    mot: yup.string(),
    fr: yup.string(),
    en: yup.string(),
    swa: yup.string(),
    lub: yup.string(),
    kik: yup.string(),
    ngb: yup.string(),
})

module.exports = { 
    motValidator, 
    motTraductionValidator, 
    motCitationValidator,
    motExpressionValidator,
    motProverbeValidator,
    motPoemeValidator
}