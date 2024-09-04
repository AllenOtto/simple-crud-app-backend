const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/Product");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node Server");
});

mongoose
  .connect(
    "mongodb+srv://kephamoturi:nelalanes@cluster0.jov96of.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected successfully");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => console.error("Database connection failed"));