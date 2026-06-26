const express = require("express");
const controller = require("../controllers/potionController");

const router = express.Router();

router.post("/potions", (req, res) => controller.create(req, res));
router.get("/potions", (req, res) => controller.findAll(req, res));
router.delete("/potions/:id", (req, res) => controller.delete(req, res));

module.exports = router;
