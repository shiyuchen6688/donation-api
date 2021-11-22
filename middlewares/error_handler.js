const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log("errorHandlerMiddleware")
    console.log(err);
    next()
}

module.exports = errorHandlerMiddleware