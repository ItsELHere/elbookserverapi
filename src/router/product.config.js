const { Router } = require("express");
const ProductConfig = require("../controllers/product.config");

const Route = new Router();
const Product = new ProductConfig();

Route.get("/", Product.getAllProduct);
Route.post("/", Product.addProduct);
Route.put("/", Product.editProduct);
Route.delete("/", Product.deleteProduct);

module.exports = Route;
