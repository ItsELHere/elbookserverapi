const { Schema } = require("mongoose");
const db = require("../config/db");

const AccountSchema = new Schema({
  username: {
    type: String,
    isRequired: true,
  },
  password: {
    type: String,
    isRequired: true,
  },
  email: {
    type: String,
    isRequired: true,
  },
  detail: {
    fullname: {
      type: String,
      isRequired: true,
    },
    address: {
      type: String,
      isRequired: true,
    },
    city: {
      type: String,
      isRequired: true,
    },
    id_card: {
      type: String,
      isRequired: true,
    },
  },
  role: {
    admin: {
      type: Boolean,
      isRequired: true,
    },
    user: {
      type: Boolean,
      isRequired: true,
    },
  },
});

const AccountModel = db.model("account", AccountSchema, "account");

module.exports = AccountModel;
