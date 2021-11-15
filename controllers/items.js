const Item = require("../models/item.js")
const asyncWrapper = require("../middlewares/async")

console.log(asyncWrapper)

const getAllItemTest = asyncWrapper(async (req, res) => {
    const products = await Item.find({})
    res.send("look like it's working haha");
})
const getAllItems = asyncWrapper(async (req, res) => {
    const products = await Item.find({})
    res.status(200).send(products)
})

module.exports = { getAllItems, getAllItemTest }