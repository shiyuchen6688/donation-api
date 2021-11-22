const express = require("express");
const router = express.Router();

const { getAllItemTest, getAllItems, getFilteredItems } = require("../controllers/items")

router.use("/", getFilteredItems);

module.exports = router
