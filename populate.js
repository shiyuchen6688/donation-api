require("dotenv").config()

const connectDB = require("./db/connect");
const Item = require("./models/item");
const itemList = require("./items.json");


const start = async () => {
    try {
        connection = await connectDB(process.env.MONGO_URI);
        await Item.deleteMany({})
        await Item.create(itemList)
        console.log("Populating Process Done")
        // connection.disconnect()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()