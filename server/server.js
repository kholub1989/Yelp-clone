require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server is 🚀 and listening on port ${port}`);
});
