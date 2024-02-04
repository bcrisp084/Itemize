const db = require("../config/connection");
const { User } = require("../models");
const userData = require("./users.json");

db.once("open", async () => {
  await User.create(userData);
  console.log("User data has been added. ");
  process.exit(0);
});
