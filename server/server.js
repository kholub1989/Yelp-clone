require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getRestaurants", (req, res) => {
  res.json({
    status: "success",
    restaurant: "mcdonalds",
  });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server is 🚀 and listening on port ${port}`);
});
