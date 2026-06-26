const Potion = require("./models/Potion");

async function test() {
  const all = await Potion.findAll();
  console.log(all);
}

test();
