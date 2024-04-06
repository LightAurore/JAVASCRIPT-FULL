const loggerMiddleware = (req, res, next) => {
    // Code avant le "next"
    const timeStart = new Date();

    // On passe au prochain middleware
    next();

    // Code après le "next"
    const {url, method} = req;  // Equivalent : const url = req.url;
                                //              const method = req.method;
                                
    const timeEnd = new Date();

    console.log(`[${method}] (${timeEnd - timeStart}ms) ${url}`);
}

module.exports = loggerMiddleware;