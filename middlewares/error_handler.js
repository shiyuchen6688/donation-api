const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log("errorHandlerMiddleware")
    next()
}

module.exports = errorHandlerMiddleware