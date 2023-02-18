const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  let validToken = req.cookies.token;
  if (!validToken) {
    res.sendStatus(406).end();
  } else {
    jwt.verify(validToken, process.env.SECRET_KEY, (err, response) => {
      if (err) throw err;
      if (response.isAdmin !== true) {
        res.sendStatus(406).end();
      } else {
        next();
      }
    });
  }
};

module.exports = adminAuth;
