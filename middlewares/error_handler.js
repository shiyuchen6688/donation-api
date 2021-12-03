const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log(err);
    next()
}

module.exports = errorHandlerMiddleware