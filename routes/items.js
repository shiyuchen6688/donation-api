const express = require("express");
const router = express.Router();

const { getAllItemTest, getAllItems } = require("../controllers/items")

router.use("/", getAllItemTest);

module.exports = router
