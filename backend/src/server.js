const app = require("./app");
const sequelize = require("./config/database");

const Potion = require("./models/Potion");
const seed = require("./seed");

async function start() {
  try {
    await sequelize.sync();
    console.log("Database synced");

    const count = await Potion.count();
    if (count === 0) {
      console.log("Database empty — running seed");
      await seed();
    }
    
    app.get("/health", (req, res) => {
        res.json({ status: "ok" });
    });

    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  } catch (err) {
    console.error(err);
  }
}

start();
