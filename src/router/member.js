const { Router } = require("express");

const Member = require("../controllers/member");

const Route = new Router();
const Members = new Member();

Route.get("/", Members.getAllMembers);
Route.post("/", Members.findOneMember);
Route.put("/role", Members.changeAdminRole);
Route.delete("/", Members.terminateMember);

module.exports = Route;
