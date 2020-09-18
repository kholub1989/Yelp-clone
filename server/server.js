require("dotenv").config();
const express = require("express");
const db = require("./db");

// const morgan = require("morgan");

const app = express();

app.use(express.json());

// Get all Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Get a Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query("select * from restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      satsus: "succes",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Create a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      satsus: "succes",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Update Restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    console.log(results);
    res.status(200).json({
      satsus: "succes",
      data: {
        restaurant: "mcdonalds",
      },
    });
  } catch (error) {
    console.log(error);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const result = await db.query("DELETE FROM restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server is 🚀 and listening on port ${port}`);
});
