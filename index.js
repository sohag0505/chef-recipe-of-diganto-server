const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
const chefArray = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/chefs", (req, res) => {
  res.send(chefArray);
});
app.get("/chef/:id", (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  const chef = chefArray.find((chef) => chef.id === numberId) || {};
  res.send(chef);
});

app.listen(PORT, () => {
  console.log(`Server start on port : ${PORT}`);
});
