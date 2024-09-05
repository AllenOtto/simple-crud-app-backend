const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/Product");
const dotenv = require("dotenv");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();

const port = process.env.PORT;
const url = process.env.Database_URL;

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node Server");
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Database connected successfully");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(() => console.error("Database connection failed"));