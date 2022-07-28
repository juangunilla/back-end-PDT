const express = require("express");
const router = express.Router();
const{getItems, getItem, createItem, updateItem} = require("../controllers/contacto");

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;