const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//  Controller
const ProductRouter = require("./src/router/product");
const ProductConfigRouter = require("./src/router/product.config");
const AccountRouter = require("./src/router/account");
const MemberRouter = require("./src/router/member");

//  Middleware
const adminAuth = require("./src/middleware/auth");

const Server = Express();
const Port = 5050;

//  Configuration
Server.use(cookieParser());
Server.use(cors());
Server.use(bodyParser.urlencoded({ extended: true }));

//  Homepage
Server.get("/", (req, res) => {
  res.send("This is ElBook API");
});

//  Router Module
Server.use("/product", ProductRouter);
Server.use("/account", AccountRouter);
Server.use("/member", adminAuth, MemberRouter);
Server.use("/product/config", adminAuth, ProductConfigRouter);

//  Setup Port
Server.listen(Port, (err) => {
  if (err) throw err;
  console.log(`The Server was running on ${Port}`);
});
