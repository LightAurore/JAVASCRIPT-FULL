
const loggerMiddleware = (req,res,next) => {
    // code avant le 'next'
    const timeStarts = new Date();

    // on passr au prochain middleware
    next();

    // code après le 'next'
    const { url, method}  = req;
    // const { statusCode } = res;
    const timeEnd = new Date();



    console.log(`[${method}] ${url} (${timeEnd - timeStarts})`);
}

module.exports = loggerMiddleware 