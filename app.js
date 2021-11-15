require("dotenv").config();
const { errorHandlerMiddleware } = require("./middlewares/error_handler");
const { notFound } = require("./middlewares/not-found");
const itemRouter = require("./routes/items")

const express = require("express");
const app = express();
const connectDB = require("./db/connect")

app.use(express.json());


// home page route
app.get('/', (req, res) => {
    res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>")
})


// item route
app.use("/api/v1/items", itemRouter);






// handling errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

port = process.env.PORT || 5000

const start = async () => {
    try {
        // db connection
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()