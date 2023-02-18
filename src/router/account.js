const { Router } = require("express");
const AccountController = require("../controllers/account");

const Route = new Router();
const Accout = new AccountController();

Route.post("/login", Accout.Login);
Route.post("/register", Accout.Register);
Route.get("/logout", Accout.Logout);

module.exports = Route;
