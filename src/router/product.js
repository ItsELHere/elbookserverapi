const { Router } = require("express");
const ProductController = require("../controllers/product");

const Route = new Router();
const Product = new ProductController();

Route.get("/", Product.get);
Route.get("/category/:category", Product.categorySort);
Route.get("/detail/:id", Product.detailProduct);

module.exports = Route;
