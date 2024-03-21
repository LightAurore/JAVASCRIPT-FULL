const defaultOptions = {
    defaultLimit: 10,
    maxLimit: 100
}

/**
 *  Pagination middleware
 * @param {{defaultLimit: number?, maxLimit: number?}?} options
 */
export const paginationMiddleware = (options) =>{

    const {defaultLimit, maxLimit} = { ...defaultOptions, ...options };

    if(defaultLimit <= 0 || maxLimit <= 0){
        throw new Error('defaultLimit and maxLimit must be greater than 0');
    }
 /**
  * Middleware
  * @param { Request } req
  * @param { Response } res
  * @param { NextFunction } next
  */
 return async(req, res, next) =>{
    //  /?offset=0&limit=50
    // query sont des paramètres de l URL
    const userOffset = parseInt(req.query.offset);
    const userLimit = parseInt(req.query.limit);

    // 
    const offset = (!isNaN(userOffset) && userOffset > 0) ? userOffset : 0;

    const limit = (!isNaN(userLimit) &&  userLimit > 0) ? Math.min(userLimit, maxLimit) : defaultLimit;
 
    // 
    req.pagination = {
        offset,
        limit
    };

    next();
};



}