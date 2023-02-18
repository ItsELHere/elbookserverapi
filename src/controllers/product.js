const ProductsContent = require("../models/product");

class Product {
  get(req, res) {
    ProductsContent.find({}, (err, result) => {
      if (err) {
        res.json({
          msg: "Cant get the Data",
        });
      } else {
        res.json(result);
      }
    });
  }

  categorySort(req, res) {
    let { category } = req.params;
    ProductsContent.find({ kategori: category }, (err, result) => {
      if (err || !result) {
        res.json({
          msg: "product was not found",
        });
      } else {
        res.json(result);
      }
    });
  }

  detailProduct(req, res) {
    let { id } = req.params;

    ProductsContent.findOne({ _id: id }, (err, result) => {
      if (err || !result) {
        res.json({
          msg: "product was not found",
        });
      } else {
        res.json(result);
      }
    });
  }
}

module.exports = Product;
