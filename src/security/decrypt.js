const bcrypt = require("bcrypt");

const decryptPass = (pass, hashPass) => {
  let decrypt = bcrypt.compare(pass, hashPass);
  return decrypt;
};

module.exports = decryptPass;
