const express = require("express");
const router = express.Router();
const{getItems, getItem, createItem, updateItem} = require("../controllers/info");

router.get("/", getItems);
router.post("/", createItem)

module.exports = router;