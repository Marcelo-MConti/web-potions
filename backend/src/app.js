const express = require("express");
const cors = require("cors");

const potionRoutes = require("./routes/potionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", potionRoutes);

module.exports = app;
