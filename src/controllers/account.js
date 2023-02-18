const accountModel = require("../models/account");
const jwt = require("jsonwebtoken");
const generateToken = require("../security/token");
const encryptPass = require("../security/encrypt");
const decryptPass = require("../security/decrypt");

class Account {
  Login = (req, res) => {
    let { username, password } = req.body;
    if (!res.cookies) {
      accountModel.findOne({ username: username }, (err, result) => {
        if (err || !result) {
          res.sendStatus(404).end();
        } else {
          decryptPass(password, result.password)
            .then((isValid) => {
              if (isValid === true) {
                let { admin, user } = result.role;
                let token = generateToken(result.email, admin, user);

                res
                  .status(202)
                  .cookie("token", token, { httpOnly: true, maxAge: 259200000 })
                  .json({
                    msg: `Login : ${result.detail.fullname}`,
                    token: token,
                  });
              } else {
                res.sendStatus(401).end();
              }
            })
            .catch((err) => {
              console.log(err);
              res.sendStatus(401).end();
            });
        }
      });
    } else {
      res.sendStatus(403).end();
    }
  };

  Register = (req, res) => {
    let { username, password, email, fullname, address, city, id_card } =
      req.body;

    encryptPass(password).then((hash) => {
      let NewAccount = new accountModel({
        username: username,
        password: hash,
        email: email,
        detail: {
          fullname: fullname,
          address: address,
          city: city,
          id_card: id_card,
        },
        role: {
          admin: false,
          user: true,
        },
      });

      NewAccount.save((err, result) => {
        if (err) {
          res.sendStatus(400).end();
        } else {
          res.json({
            msg: "New account has been added",
            username: result.username,
          });
        }
      });
    });
  };

  Logout(req, res) {
    res.locals.authorization = null;
    res
      .clearCookie("token")
      .json({
        msg: "Logout was successful",
      })
      .end();
  }
}

module.exports = Account;
