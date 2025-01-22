const express = require("express");
const router = express.Router();
const { index } = require("../controllers/carsController");

router.get("/cars", index);

module.exports = router;
