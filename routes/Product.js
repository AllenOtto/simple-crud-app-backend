const express = require("express");
const router = express.Router();

const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js");


// Get all products(documents) in the database collection
router.get("/", getProducts);

// Get a product by its ID
router.get("/:id", getProduct);

// Add a product into the database collection
router.post("/", addProduct);

// Update a product's details by ID
router.put("/:id", updateProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);

module.exports = router;