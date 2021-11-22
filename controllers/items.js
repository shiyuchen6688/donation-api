const Item = require("../models/item.js")



const getAllItemTest = async (req, res) => {
    const products = await Item.find({})
    res.statis(200).json(products)
}
const getAllItems = async (req, res) => {
    const products = await Item.find({})
    res.status(200).send(products)
}

const getFilteredItems = async (req, res) => {
    const filteredItems = Item.find(req.query)
    res.status(200).json({
        items: filteredItems,
        nbHits: filteredItems.length
    })
}

module.exports = { getAllItems, getAllItemTest, getFilteredItems }