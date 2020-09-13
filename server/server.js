require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

// Get all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// Get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    satsus: "succes",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// Create a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    satsus: "succes",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// Update Restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    satsus: "succes",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "sucess",
  });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server is 🚀 and listening on port ${port}`);
});
