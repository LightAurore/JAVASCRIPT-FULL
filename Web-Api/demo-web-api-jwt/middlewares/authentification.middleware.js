import { decodeJwt } from "../utils/jwt.utils.js";



export const authTokenMiddleware = () => {

    /**
     * Middleware traitement de token de la requête
     */

    return async (req, res, next) => {

        // - Récuperation de l'authentification : Bearer eyFvrjnkgvgrGFBVgrbvjgrbngrbngrbjgnbg ....
        const authHeader = req.headers['authorization'];

        // Récuperation du JWT (string)
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            next();
            return;
        }
        

        // si JWT → Décoder et il est ajouté à "req.token"
        decodeJwt(token)
            .then((data) =>{
                req.token = data;
            })
            .catch((err) =>{
                res.status(401)
                  .json({errorMessage: 'Invalid JWT'});
            });
    }
}

export const authorizeMiddleware = (...roles) =>{
    return (req, res, next) => {

        // 
        const token = req.token;

        if(!token){
            res.status(401)
            .json({errorMessage: 'Unauthorized'});
            return;
        }

        if(roles.length > 0){
            
        }

        // 
        next();
    }
}