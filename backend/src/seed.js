const Potion = require("./models/Potion");

async function seed() {
  await Potion.bulkCreate([
    {
      name: "Poção Blue Sky",
      description: "Inspiração por 24h",
      image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
      price: 300,
    },
  ]);

  console.log("Seed done");
}

module.exports = seed;
