const ProductsContent = require("../models/product");

class ProductConfig {
  getAllProduct(req, res) {
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

  addProduct(req, res) {
    let {
      item_id,
      judul,
      penulis,
      penerbit,
      kategori,
      tanggal_terbit,
      deskripsi,
      img_url,
    } = req.body;

    let newProduct = new ProductsContent({
      item_id: item_id,
      judul: judul,
      penulis: penulis,
      penerbit: penerbit,
      kategori: kategori,
      tanggal_terbit: tanggal_terbit,
      deskripsi: deskripsi,
      image_url: img_url,
    });

    newProduct.save((err, response) => {
      if (err) {
        res
          .json({
            msg: "can't add the new product",
            detail: err,
          })
          .end();
      } else {
        res.json({
          msg: "new product successful added",
          detail: response,
        });
      }
    });
  }

  editProduct(req, res) {
    let { item_id, target, value } = req.body;

    ProductsContent.updateOne(
      { item_id: item_id },
      { target: value },
      (err, response) => {
        if (err) {
          res.json({
            msg: "can't update product",
            detail: err,
          });
        } else {
          res.json({
            msg: "product successful update",
            detail: response,
          });
        }
      }
    );
  }

  deleteProduct(req, res) {
    let { item_id } = req.body;
    ProductsContent.deleteOne({ item_id: item_id }, (err, response) => {
      if (err) {
        res.json({
          msg: "cannot delete product",
          detail: err,
        });
      } else {
        res.json({
          msg: "product was deleted",
          detail: response,
        });
      }
    });
  }
}

module.exports = ProductConfig;
