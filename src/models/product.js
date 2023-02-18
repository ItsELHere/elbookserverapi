const { Schema } = require("mongoose");
const db = require("../config/db");

let ProductSchema = new Schema({
  item_id: {
    type: "Number",
    isRequire: true,
  },
  judul: {
    type: "String",
    isRequire: true,
  },
  penulis: {
    type: "String",
    isRequire: true,
  },
  penerbit: {
    type: "String",
    isRequire: true,
  },
  kategori: {
    type: "String",
    isRequire: true,
  },
  tanggal_terbit: {
    type: "String",
    isRequire: true,
  },
  deskripsi: {
    type: "String",
    isRequire: true,
  },
  image_url: {
    type: "String",
    isRequire: true,
  },
});

const ProductModel = db.model("product", ProductSchema, "product");

module.exports = ProductModel;
