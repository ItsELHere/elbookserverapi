const jwt = require("jsonwebtoken");

function generateToken(data, isAdmin, isUser) {
  return jwt.sign(
    {
      data: data,
      isAdmin: isAdmin,
      isUser: isUser,
    },
    process.env.SECRET_KEY,
    {
      algorithm: "HS256",
      expiresIn: "3d",
    }
  );
}

module.exports = generateToken;
