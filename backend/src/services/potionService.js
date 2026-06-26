// regras de negocio aqui
const Potion = require("../models/Potion");

// CRUD SIMPLES
class PotionService {
    async create(data) {
        return await Potion.create(data);
    }

    async findAll() {
        return await Potion.findAll();
    }

    async delete(id) {
        return await Potion.destroy({ where: {id} });
    }
}

module.exports = new PotionService();
