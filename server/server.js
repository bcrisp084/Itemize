const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// const { typeDefs, resolvers } = require("./schemas");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
