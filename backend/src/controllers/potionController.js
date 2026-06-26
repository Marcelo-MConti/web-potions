const Potion = require("../models/Potion");

class PotionController {
  async create(req, res) {
    try {
      const potion = await Potion.create(req.body);
      return res.status(201).json(potion);
    } catch (error) {
      console.error("CREATE ERROR:", error);
      return res.status(500).json({ error: "Error creating potion" });
    }
  }

  async findAll(req, res) {
    try {
      const potions = await Potion.findAll();

      console.log("📦 POTIONS FROM DB:", potions);

      return res.json(potions);
    } catch (error) {
      console.error("FINDALL ERROR:", error);
      return res.status(500).json({ error: "Error fetching potions" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const deleted = await Potion.destroy({
        where: { id },
      });

      return res.json({
        message: "Potion deleted",
        deleted,
      });
    } catch (error) {
      console.error("DELETE ERROR:", error);
      return res.status(500).json({ error: "Error deleting potion" });
    }
  }
}

module.exports = new PotionController();
