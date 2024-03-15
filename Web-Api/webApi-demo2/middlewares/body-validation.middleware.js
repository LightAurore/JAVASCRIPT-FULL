import {} from './../validators/player.validator.js'

/**
 * Builder du "BodyValidator" middleware
 * cette méthode permet d'envoyer des paramètres au middleware
 * @param {*} yupValidator 
 * @param {Number} errorcode 
 * @returns
 */

// une fonction qui permet de customize les middlewares
export const bodyValidatorMiddleware = (yupValidator,errorcode = 422) =>{
    const middleware = (req, res, next) => {
        const data = req.body;

        if (!data) {
            res.status(400).json({
                errorMessage: 'Body not found'
            });
            return;
        }

        yupValidator.noUnknown().validate(data, {abortEarly: true})
            .then((validateData) => {
                // créer une variable pour les données validées
                req.validateData = validateData;
                next();
            }) 
            .catch((yupError) =>{
                console.log(yupError);

                res.status(errorcode)
                    .json({
                        errorMessage: 'Invalids data'
                    });
            });

    }

    return middleware;
}





