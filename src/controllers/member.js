const accountModel = require("../models/account");
class Member {
  getAllMembers = (req, res) => {
    accountModel.find({}, (err, response) => {
      if (err) throw err;
      res.status(200).json(response);
    });
  };

  findOneMember = (req, res) => {
    let name = req.query.name;
    accountModel.findOne({ username: name }, (err, response) => {
      if (err) throw err;
      res.status(200).json(response);
    });
  };

  changeAdminRole = (req, res) => {
    let { name, isAdmin } = req.query;
    accountModel.updateOne(
      { username: name },
      {
        role: {
          admin: isAdmin,
          user: true,
        },
      },
      (err, response) => {
        if (err) throw err;
        res.json({
          msg: `${name}'s role has been updated`,
          detail: response,
        });
      }
    );
  };

  terminateMember = (req, res) => {
    let { name } = req.query;
    accountModel.deleteOne({ username: name }, (err, response) => {
      if (err && !response) {
        res.sendStatus(404).end();
      } else {
        res.json({
          msg: "Member was deleted",
          detail: response,
        });
      }
    });
  };
}

module.exports = Member;
