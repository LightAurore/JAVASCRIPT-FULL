import { ObjectSchema } from 'yup';
import pkg from 'express';
const { Request, Response, NextFunction } = pkg;


/**
 *  Body validator middleware
 * @param { ObjectSchema } yupValidator 
 * @param { Number } error 
 */
export const bodyValidatorMiddleware = (yupValidator, errorCode = 422) =>{
 /**
  * Middleware
  * @param { Request } req
  * @param { Response } res
  * @param { NextFunction } next
  */
    return async (req, res, next) => {

        if(Object.keys(req.params).length === 0){
            res.status(400).json({
                errorMessage : 'No request body'
            });
            return;
        }

        try {
            const validateData = await yupValidator.noUnknown().validate(req.body, {abortEarly: false});

            req.validateData = validateData;

            // 
            next();

        } catch (yupError) {
            console.error(yupError);

            console.log('Custom error');
            const requestErrors = {}
            for(const {path, errors} of yupError.inner){
                requestErrors[path] = errors.join(', ');
                // console.log(error.path);
                // console.log( error.errors);
            }

            res.status(errorCode).json({
                errorMessage : 'Invalide request body',
                errors : requestErrors
            });

        }

    }
}