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
    // a better way to do this is to first
    // find the valid part of res.query
    // instead of using req.query directly
    let { name, distance, condition, sort, selects, limit, page, numericFilters } = req.query
    queryObj = {}
    if (name) {
        queryObj.name = { $regex: name, $options: 'i' }
    }
    if (distance) {
        queryObj.distance = distance
    }
    if (condition) {
        queryObj.condition = condition
    }
    console.log(queryObj)
    const queryDB = Item.find(queryObj)
    if (sort) {
        queryDB.sort(sort.replace(/,/g, " "))
    }
    if (selects) {
        console.log(selects.replace(/,/g, " "))
        queryDB.select(selects.replace(/,/g, " "))
        // queryDB.select("name age distance")
    }
    numericComparisonDict = {
        ">": "$gt",
        ">=": "$gte",
        "=": "$eq",
        "<": "$lt",
        "<=": "$lte"
    }
    if (numericFilters) {
        numericFilterList = numericFilters.split(",")
        numericFilterList.foreach(filter => {
            filter.replace(/\b(>|>=|=|<|<=)\b/, (match) => `${-numericComparisonDict[match]}`)
        })

    }
    page = page || 1
    limit = limit || 3
    skip = (page - 1) * limit
    queryDB.limit(limit).skip(skip)
    const filteredItems = await queryDB
    res.status(200).json({
        items: filteredItems,
        nbHits: filteredItems.length
    })
}

module.exports = { getAllItems, getAllItemTest, getFilteredItems }